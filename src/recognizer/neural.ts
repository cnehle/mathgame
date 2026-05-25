import * as tf from '@tensorflow/tfjs';
import { MnistData } from './training-loader';

const MODEL_STORAGE_KEY = 'indexeddb://mathgame-mnist-model-v2';
const IMAGE_SIZE = 28;
const NUM_CLASSES = 10;

export interface NeuralRecognitionResult {
  digit: number;
  score: number;
  allScores: number[];
}

export class NeuralRecognizer {
  private model: tf.LayersModel | null = null;
  private isReady = false;

  // Try to load a saved model from IndexedDB; if none, train a fresh one
  async init(onProgress?: (stage: string, pct: number) => void): Promise<void> {
    // 1. Try loading from browser storage
    try {
      this.model = await tf.loadLayersModel(MODEL_STORAGE_KEY);
      this.isReady = true;
      onProgress?.('Модель загружена', 100);
      return;
    } catch {
      // No saved model — train a new one
    }

    onProgress?.('Загружаем датасет MNIST', 0);
    const data = new MnistData();
    await data.load((pct) => onProgress?.('Загружаем датасет MNIST', pct * 0.3));

    onProgress?.('Создаём нейросеть', 30);
    this.model = this.buildModel();

    onProgress?.('Обучение нейросети', 35);
    await this.train(data, (pct) =>
      onProgress?.('Обучение нейросети', 35 + pct * 0.6)
    );

    onProgress?.('Сохраняем модель', 95);
    await this.model.save(MODEL_STORAGE_KEY);

    onProgress?.('Готово!', 100);
    this.isReady = true;
  }

  private buildModel(): tf.LayersModel {
  const model = tf.sequential();

  // First conv block — 16 filters
  model.add(
    tf.layers.conv2d({
      inputShape: [IMAGE_SIZE, IMAGE_SIZE, 1],
      kernelSize: 3,
      filters: 16,
      strides: 1,
      activation: 'relu',
      kernelInitializer: 'varianceScaling',
    })
  );
  model.add(tf.layers.maxPooling2d({ poolSize: [2, 2], strides: [2, 2] }));

  // Second conv block — 32 filters
  model.add(
    tf.layers.conv2d({
      kernelSize: 3,
      filters: 32,
      strides: 1,
      activation: 'relu',
      kernelInitializer: 'varianceScaling',
    })
  );
  model.add(tf.layers.maxPooling2d({ poolSize: [2, 2], strides: [2, 2] }));

  // Dropout for better generalization
  model.add(tf.layers.dropout({ rate: 0.25 }));

  model.add(tf.layers.flatten());

  // Dense hidden layer
  model.add(
    tf.layers.dense({
      units: 128,
      activation: 'relu',
      kernelInitializer: 'varianceScaling',
    })
  );
  model.add(tf.layers.dropout({ rate: 0.5 }));

  // Output layer
  model.add(
    tf.layers.dense({
      units: NUM_CLASSES,
      kernelInitializer: 'varianceScaling',
      activation: 'softmax',
    })
  );

    model.compile({
      optimizer: tf.train.adam(),
      loss: 'categoricalCrossentropy',
      metrics: ['accuracy'],
    });

    return model;
  }

  private async train(
    data: MnistData,
    onProgress?: (pct: number) => void
  ): Promise<void> {
    if (!this.model) throw new Error('Model not built');

    const BATCH_SIZE = 128;
    const TRAIN_BATCHES = 400;
    const TEST_BATCH_SIZE = 1000;

    for (let i = 0; i < TRAIN_BATCHES; i++) {
      const batch = data.nextTrainBatch(BATCH_SIZE);
      const xs = batch.xs.reshape([BATCH_SIZE, IMAGE_SIZE, IMAGE_SIZE, 1]);

      await this.model.fit(xs, batch.labels, {
        batchSize: BATCH_SIZE,
        epochs: 1,
      });

      xs.dispose();
      batch.xs.dispose();
      batch.labels.dispose();

      onProgress?.((i + 1) / TRAIN_BATCHES * 100);

      // Yield to UI thread so progress bar updates
      await new Promise((r) => setTimeout(r, 0));
    }

    // Quick test
    const testBatch = data.nextTestBatch(TEST_BATCH_SIZE);
    const testXs = testBatch.xs.reshape([TEST_BATCH_SIZE, IMAGE_SIZE, IMAGE_SIZE, 1]);
    const evalResult = this.model.evaluate(testXs, testBatch.labels) as tf.Scalar[];
    const accuracy = (await evalResult[1].data())[0];
    console.log(`Точность на тестовом наборе: ${(accuracy * 100).toFixed(1)}%`);

    testXs.dispose();
    testBatch.xs.dispose();
    testBatch.labels.dispose();
  }

  predict(imageData: Float32Array): NeuralRecognitionResult {
  if (!this.model || !this.isReady) {
    throw new Error('Recognizer not initialized');
  }

  return tf.tidy(() => {
    const input = tf.tensor4d(imageData, [1, IMAGE_SIZE, IMAGE_SIZE, 1]);
    const output = this.model!.predict(input) as tf.Tensor;
    const scores = Array.from(output.dataSync());

    // Heuristic: if model can't decide between 1 and 7,
    // check the top-row activity — sevens have a horizontal stroke on top
    const topRowActivity = this.computeTopRowActivity(imageData);
    if (scores[1] > 0.3 && topRowActivity > 0.15 && scores[7] > 0.05) {
      // Boost the 7 score since drawing has a clear top stroke
      scores[7] = Math.max(scores[7], scores[1] * 1.2);
    }

    let bestDigit = 0;
    let bestScore = scores[0];
    for (let i = 1; i < scores.length; i++) {
      if (scores[i] > bestScore) {
        bestScore = scores[i];
        bestDigit = i;
      }
    }

    return { digit: bestDigit, score: bestScore, allScores: scores };
  });
}

/**
 * Measures how much "ink" is present in the top 4 rows of the 28×28 image.
 * Sevens typically have a long horizontal stroke at the top; ones don't.
 */
private computeTopRowActivity(imageData: Float32Array): number {
  let topActivity = 0;
  let totalActivity = 0;
  for (let y = 0; y < 28; y++) {
    for (let x = 0; x < 28; x++) {
      const pixel = imageData[y * 28 + x];
      totalActivity += pixel;
      if (y < 6) topActivity += pixel;
    }
  }
  if (totalActivity < 1) return 0;
  // What fraction of the digit is in the top 6 rows?
  const fraction = topActivity / totalActivity;
  // Also check horizontal spread in top rows
  let topWidth = 0;
  for (let x = 0; x < 28; x++) {
    let hasInk = false;
    for (let y = 0; y < 6; y++) {
      if (imageData[y * 28 + x] > 0.3) {
        hasInk = true;
        break;
      }
    }
    if (hasInk) topWidth++;
  }
  // Return a combined "topness" score
  return fraction * (topWidth / 28);
}

  ready(): boolean {
    return this.isReady;
  }
}