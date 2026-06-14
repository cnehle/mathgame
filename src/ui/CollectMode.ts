import { DrawingPad } from './DrawingPad';
import { DrawingPreprocessor } from '../recognizer/preprocessor';

// ─────────────────────────────────────────────────────────────
//  Hidden dataset-collection mode.
//
//  Activated by adding ?collect to the URL. Shows a drawing pad
//  with digit buttons; each saved sample goes to localStorage
//  (survives page reloads), and can be downloaded as JSON.
//
//  Pixels are stored as 0–255 integers to save space; the
//  training loader normalizes them back to 0–1.
// ─────────────────────────────────────────────────────────────

const STORAGE_KEY = 'mathgame-collected-digits';

interface StoredSample {
  label: number;
  pixels: number[]; // 0–255 ints
}

export class CollectMode {
  private pad: DrawingPad;
  private preprocessor = new DrawingPreprocessor();
  private counterEl: HTMLElement;

  static isRequested(): boolean {
    return new URLSearchParams(window.location.search).has('collect');
  }

  constructor() {
    // Hide all regular screens
    // Remove everything from the page — collect mode takes over completely
    document.body.innerHTML = '';

    // Build UI
    const root = document.createElement('div');
    root.id = 'collect-screen';
    root.innerHTML = `
      <h2 class="collect-title">Сбор примеров</h2>
      <p class="collect-hint">Нарисуй цифру и нажми её кнопку</p>
      <div id="collect-pad"></div>
      <div class="collect-digits"></div>
      <div class="collect-row">
        <span id="collect-counter" class="collect-counter"></span>
      </div>
      <div class="collect-row">
        <button id="collect-clear" class="collect-btn">Стереть</button>
        <button id="collect-download" class="collect-btn collect-btn-main">Скачать</button>
        <button id="collect-reset" class="collect-btn collect-btn-danger">Сбросить всё</button>
      </div>
    `;
    document.body.appendChild(root);

    // Digit buttons 0–9
    const digitsWrap = root.querySelector('.collect-digits')!;
    for (let d = 0; d <= 9; d++) {
      const b = document.createElement('button');
      b.className = 'collect-digit-btn';
      b.textContent = String(d);
      b.addEventListener('click', () => this.save(d));
      digitsWrap.appendChild(b);
    }

    this.counterEl = root.querySelector('#collect-counter')!;
    this.pad = new DrawingPad(root.querySelector('#collect-pad')!);

    root
      .querySelector('#collect-clear')!
      .addEventListener('click', () => this.pad.clear());
    root
      .querySelector('#collect-download')!
      .addEventListener('click', () => this.download());
    root.querySelector('#collect-reset')!.addEventListener('click', () => {
      if (confirm('Удалить все собранные примеры с этого устройства?')) {
        localStorage.removeItem(STORAGE_KEY);
        this.updateCounter();
      }
    });

    this.updateCounter();
  }

  private load(): StoredSample[] {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]');
    } catch {
      return [];
    }
  }

  private save(label: number): void {
    if (!this.pad.hasDrawing()) {
      alert('Сначала нарисуй цифру!');
      return;
    }
    const float = this.preprocessor.process(this.pad.getSvg());
    // Store as 0–255 ints: ~3× smaller JSON than floats
    const pixels = Array.from(float, (v) => Math.round(v * 255));

    const all = this.load();
    all.push({ label, pixels });
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
    } catch {
      alert('Хранилище переполнено — скачай файл и нажми «Сбросить всё»');
      return;
    }
    this.pad.clear();
    this.updateCounter();
  }

  private updateCounter(): void {
    const all = this.load();
    const perDigit = new Array(10).fill(0);
    all.forEach((s) => perDigit[s.label]++);
    this.counterEl.textContent =
      `Всего: ${all.length}  [` +
      perDigit.map((n, i) => `${i}:${n}`).join(' ') +
      `]`;
  }

  private download(): void {
    const all = this.load();
    if (all.length === 0) {
      alert('Пока нет примеров');
      return;
    }
    const blob = new Blob([JSON.stringify(all)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `user-digits-${all.length}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(a.href);
  }
}
