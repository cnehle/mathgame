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

    // Detect "seven with crossbar" — common in European/Russian writing.
// Pattern: long horizontal stroke at top + diagonal/vertical descending stroke
// + sometimes a small horizontal stroke in the middle. MNIST never saw this.
const features = this.analyzeStrokeGeometry(imageData);
if (features.hasTopBar && features.descendsLeftward) {
  // Likely a 7 — boost its score significantly
  const boost = features.hasMiddleBar ? 0.6 : 0.4;
  scores[7] = Math.max(scores[7], boost);
  // Suppress 1 and 2 if their score was based on misreading the 7
  if (scores[1] > 0.3) scores[1] *= 0.3;
  if (scores[2] > 0.3) scores[2] *= 0.3;
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

private analyzeStrokeGeometry(imageData: Float32Array): {
  hasTopBar: boolean;
  hasMiddleBar: boolean;
  descendsLeftward: boolean;
} {
  // Find leftmost & rightmost ink positions per row
  const rowExtents: Array<{ left: number; right: number; ink: number }> = [];
  for (let y = 0; y < 28; y++) {
    let left = -1, right = -1, ink = 0;
    for (let x = 0; x < 28; x++) {
      if (imageData[y * 28 + x] > 0.3) {
        if (left === -1) left = x;
        right = x;
        ink++;
      }
    }
    rowExtents.push({ left, right, ink });
  }

  // Top bar: rows 0-7 with wide horizontal ink (>40% of width)
  let topBarRows = 0;
  for (let y = 0; y < 8; y++) {
    if (rowExtents[y].ink > 11) topBarRows++;
  }
  const hasTopBar = topBarRows >= 2;

  // Middle bar: rows 11-17 with horizontal stroke wider than just the diagonal
  let middleBarRows = 0;
  for (let y = 11; y < 18; y++) {
    if (rowExtents[y].ink > 8) middleBarRows++;
  }
  const hasMiddleBar = middleBarRows >= 2;

  // Diagonal descending leftward: compare ink centroid in top rows vs bottom rows
  let topCenterX = 0, topCount = 0;
  let bottomCenterX = 0, bottomCount = 0;
  for (let y = 0; y < 28; y++) {
    if (rowExtents[y].left === -1) continue;
    const center = (rowExtents[y].left + rowExtents[y].right) / 2;
    if (y < 10) { topCenterX += center; topCount++; }
    if (y > 18) { bottomCenterX += center; bottomCount++; }
  }
  const topAvg = topCount > 0 ? topCenterX / topCount : 14;
  const bottomAvg = bottomCount > 0 ? bottomCenterX / bottomCount : 14;
  const descendsLeftward = topAvg > bottomAvg + 2;

  return { hasTopBar, hasMiddleBar, descendsLeftward };
}

  ready(): boolean {
    return this.isReady;
  }
}