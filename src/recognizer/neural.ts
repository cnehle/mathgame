import * as tf from '@tensorflow/tfjs';
import { MnistData } from './training-loader';

const MODEL_STORAGE_KEY = 'indexeddb://mathgame-mnist-model';
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

    // First conv layer
    model.add(
      tf.layers.conv2d({
        inputShape: [IMAGE_SIZE, IMAGE_SIZE, 1],
        kernelSize: 5,
        filters: 8,
        strides: 1,
        activation: 'relu',
        kernelInitializer: 'varianceScaling',
      })
    );
    model.add(tf.layers.maxPooling2d({ poolSize: [2, 2], strides: [2, 2] }));

    // Second conv layer
    model.add(
      tf.layers.conv2d({
        kernelSize: 5,
        filters: 16,
        strides: 1,
        activation: 'relu',
        kernelInitializer: 'varianceScaling',
      })
    );
    model.add(tf.layers.maxPooling2d({ poolSize: [2, 2], strides: [2, 2] }));

    // Flatten + dense output layer
    model.add(tf.layers.flatten());
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

    const BATCH_SIZE = 64;
    const TRAIN_BATCHES = 100;
    const TEST_BATCH_SIZE = 200;

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

  ready(): boolean {
    return this.isReady;
  }
}