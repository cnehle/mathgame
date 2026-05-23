import type { GameState, Difficulty } from '../types';
import { DIFFICULTY_CONFIG, QuestionGenerator, buildAnswerOptions } from '../game/logic';
import { MouseTracker, ParallaxBackground, CursorTrail } from '../effects/mouse';
import { ScrollTransition, TimerBar, spawnCelebration } from '../effects/transitions';
import { SVGMorpher } from '../effects/morpher';
import { DrawingPad } from './DrawingPad';

const BTN_FILLS = ['#FFD93D', '#FF6B9D', '#FF8C69', '#C3B1E1'];
const BTN_STROKES = ['#8a5c00', '#8a1040', '#a03010', '#5a3e8a'];
const CORRECT_MSGS = ['⭐ Правильно!', '🎉 Да!', '🌟 Отлично!', '✅ Супер!', '🥳 Молодец!'];
const WRONG_MSGS = ['😊 Почти!', '💛 Близко!', '🔄 Попробуй ещё!', '💪 Хорошая попытка!'];
const TOTAL = 10;

export class GameUI {
  private menuScreen = q<HTMLElement>('#menu-screen');
  private gameScreen = q<HTMLElement>('#game-screen');
  private completeScreen = q<HTMLElement>('#complete-screen');
  private bgSvg = q<SVGSVGElement>('#bg-svg');
  private objSvg = q<SVGSVGElement>('#obj-svg');
  private morphSvg = q<SVGSVGElement>('#morph-svg');
  private questionCard = q<HTMLElement>('.card');
  private qText = q<HTMLElement>('#q-text');
  private scoreEl = q<HTMLElement>('#score-val');
  private qNumEl = q<HTMLElement>('#q-num');
  private feedback = q<HTMLElement>('#feedback');
  private nextBtn = q<HTMLButtonElement>('#next-btn');
  private answersWrap = q<HTMLElement>('#answers');
  private drawWrap = q<HTMLElement>('#draw-wrap');
  private drawCheckBtn = q<HTMLButtonElement>('#draw-check-btn');
  private drawClearBtn = q<HTMLButtonElement>('#draw-clear-btn');
  private finalTxt = q<HTMLElement>('#final-txt');
  private timerTrack = q<HTMLElement>('#timer-track');
  private timerBar = q<HTMLElement>('#timer-bar');

  private mouseTracker = new MouseTracker();
  private scrollTransition: ScrollTransition;
  private timer: TimerBar;
  private questionGen: QuestionGenerator;
  private morpher: SVGMorpher;
  private drawingPad: DrawingPad | null = null;

  private state: GameState = {
    phase: 'menu',
    score: 0,
    questionIndex: 0,
    totalQuestions: TOTAL,
    answered: false,
    difficulty: 'easy',
    responseTimes: [],
    questionStartTime: 0,
  };
  private currentAnswer = 0;
  private morphLoopActive = false;

  constructor() {
    new ParallaxBackground(this.bgSvg, this.mouseTracker);
    new CursorTrail();
    this.scrollTransition = new ScrollTransition(this.questionCard);
    this.timer = new TimerBar(this.timerBar);
    this.questionGen = new QuestionGenerator(this.objSvg);
    this.morpher = new SVGMorpher(this.morphSvg);

    this.buildStars();
    this.bindMenuEvents();
    this.bindGameEvents();
    this.startMenuMorphLoop();
  }

  // ── Menu morph loop ───────────────────────────────────────
  private async startMenuMorphLoop(): Promise<void> {
    this.morphLoopActive = true;
    while (this.morphLoopActive) {
      await this.morpher.morphToRandom();
      await delay(1200);
    }
  }

  private stopMenuMorphLoop(): void {
    this.morphLoopActive = false;
  }

  // ── Menu ──────────────────────────────────────────────────
  private bindMenuEvents(): void {
    document.querySelectorAll<HTMLButtonElement>('.diff-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const diff = btn.dataset.diff as Difficulty;
        this.startGame(diff);
      });
      btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'scale(1.08) rotate(-2deg)';
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }

  private async startGame(difficulty: Difficulty): Promise<void> {
  this.stopMenuMorphLoop();

  // For drawing mode, ensure neural network is ready first
  if (difficulty === 'drawing') {
    await this.ensureRecognizerReady();
  }

  this.state = {
    phase: 'playing',
    score: 0,
    questionIndex: 0,
    totalQuestions: TOTAL,
    answered: false,
    difficulty,
    responseTimes: [],
    questionStartTime: performance.now(),
  };
  this.scrollTransition.enabled = true;
  this.menuScreen.classList.add('hidden');
  this.gameScreen.classList.remove('hidden');
  this.completeScreen.classList.add('hidden');
  this.loadQuestion();
}

private async ensureRecognizerReady(): Promise<void> {
  const overlay = q<HTMLElement>('#loading-overlay');
  const stageEl = q<HTMLElement>('#loading-stage');
  const pctEl = q<HTMLElement>('#loading-pct');
  const barEl = q<HTMLElement>('#loading-bar');

  overlay.classList.remove('hidden');

  await DrawingPad.initRecognizer((stage, pct) => {
    stageEl.textContent = stage;
    pctEl.textContent = `${Math.round(pct)}%`;
    barEl.style.width = `${pct}%`;
  });

  // Small delay so the user sees "Готово!"
  await new Promise((r) => setTimeout(r, 400));
  overlay.classList.add('hidden');
}

  // ── Game ──────────────────────────────────────────────────
  private bindGameEvents(): void {
    this.nextBtn.addEventListener('click', () => this.advanceQuestion());
    this.scrollTransition.onNext(() => {
      if (this.state.answered) this.advanceQuestion();
    });
    this.drawCheckBtn.addEventListener('click', () => {
      this.drawingPad?.recognize();
    });
    this.drawClearBtn.addEventListener('click', () => {
      this.drawingPad?.clear();
    });
  }

  private loadQuestion(): void {
    this.state.answered = false;
    this.state.questionStartTime = performance.now();
    this.feedback.textContent = '';
    this.feedback.className = 'feedback';
    this.nextBtn.style.display = 'none';
    this.answersWrap.innerHTML = '';

    const cfg = DIFFICULTY_CONFIG[this.state.difficulty];
    const question = this.questionGen.generate(
      this.state.questionIndex,
      this.state.difficulty
    );
    this.currentAnswer = question.answer;
    this.qText.textContent = question.text;
    this.qNumEl.textContent = String(this.state.questionIndex + 1);
    this.scoreEl.textContent = String(this.state.score);

    if (cfg.drawingMode) {
      this.showDrawingMode();
    } else {
      this.showButtonMode();
      this.buildAnswerButtons(question.answer);
    }

    if (cfg.timeLimit) {
      this.timerTrack.style.display = 'block';
      this.timer.start(cfg.timeLimit, () => this.onTimeUp());
    } else {
      this.timerTrack.style.display = 'none';
    }

    this.morpher.morphToRandom();
  }

  // ── Drawing mode ──────────────────────────────────────────
  private showDrawingMode(): void {
    this.answersWrap.style.display = 'none';
    this.drawWrap.style.display = 'flex';

    if (this.drawingPad) {
      this.drawingPad.destroy();
    }
    const padContainer = q<HTMLElement>('#drawing-pad-container');
    padContainer.innerHTML = '';
    this.drawingPad = new DrawingPad(padContainer);
    this.drawingPad.setCorrectAnswer(this.currentAnswer);

    this.drawingPad.onRecognized(({ digit, score, correct }) => {
      if (this.state.answered) return;

      if (correct) {
        this.state.answered = true;
        this.recordTime();
        this.state.score++;
        this.scoreEl.textContent = String(this.state.score);
        this.feedback.textContent =
          CORRECT_MSGS[rand(0, CORRECT_MSGS.length - 1)];
        this.feedback.className = 'feedback correct';
        spawnCelebration();
        this.nextBtn.style.display = 'inline-block';
      } else {
        const scorePercent = Math.round(score * 100);
        this.feedback.textContent =
          digit >= 0
            ? `Похоже на ${digit} (${scorePercent}%) — попробуй ещё!`
            : '🤔 Не разобрать — нарисуй чище!';
        this.feedback.className = 'feedback wrong';
      }
    });
  }

  private showButtonMode(): void {
    this.answersWrap.style.display = 'flex';
    this.drawWrap.style.display = 'none';
    if (this.drawingPad) {
      this.drawingPad.destroy();
      this.drawingPad = null;
    }
  }

  // ── Answer buttons ────────────────────────────────────────
  private buildAnswerButtons(correct: number): void {
    const options = buildAnswerOptions(correct);
    options.forEach((num, i) => {
      const btn = document.createElement('button');
      btn.className = 'ans-btn';
      btn.dataset.v = String(num);
      const f = BTN_FILLS[i];
      const s = BTN_STROKES[i];
      btn.innerHTML = `<svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="82" height="82" rx="20" fill="${f}" stroke="${s}" stroke-width="3"/>
        <rect x="10" y="9" width="30" height="14" rx="7" fill="rgba(255,255,255,.32)"/>
        <text x="45" y="56" text-anchor="middle" dominant-baseline="middle"
          font-family="Fredoka One,cursive" font-size="44" fill="${s}">${num}</text>
      </svg>`;
      btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'scale(1.12) translateY(-4px)';
        btn.style.filter = `drop-shadow(0 8px 16px ${f}88)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
        btn.style.filter = '';
      });
      btn.addEventListener('click', () => this.onAnswer(num, correct, btn));
      this.answersWrap.appendChild(btn);
    });
  }

  private onAnswer(chosen: number, correct: number, _btn: HTMLButtonElement): void {
    if (this.state.answered) return;
    this.state.answered = true;
    this.timer.stop();
    this.recordTime();

    if (chosen === correct) {
      this.state.score++;
      this.scoreEl.textContent = String(this.state.score);
      this.feedback.textContent = CORRECT_MSGS[rand(0, CORRECT_MSGS.length - 1)];
      this.feedback.className = 'feedback correct';
      spawnCelebration();
    } else {
      this.feedback.textContent = WRONG_MSGS[rand(0, WRONG_MSGS.length - 1)];
      this.feedback.className = 'feedback wrong';
      this.highlightCorrect(correct);
    }
    this.nextBtn.style.display = 'inline-block';
  }

  private onTimeUp(): void {
    if (this.state.answered) return;
    this.state.answered = true;
    this.recordTime();
    this.feedback.textContent = '⏰ Время вышло!';
    this.feedback.className = 'feedback wrong';
    this.highlightCorrect(this.currentAnswer);
    this.nextBtn.style.display = 'inline-block';
  }

  private highlightCorrect(correct: number): void {
    document.querySelectorAll<HTMLButtonElement>('.ans-btn').forEach((b) => {
      if (Number(b.dataset.v) === correct) {
        const rect = b.querySelector('rect')!;
        const text = b.querySelector('text')!;
        const svgEl = b.querySelector('svg')! as unknown as HTMLElement;
        rect.setAttribute('fill', '#00e676');
        rect.setAttribute('stroke', '#ffffff');
        rect.setAttribute('stroke-width', '5');
        text.setAttribute('fill', '#004d20');
        svgEl.style.filter =
          'drop-shadow(0 0 10px #00e676) drop-shadow(0 0 20px #00e676)';
        svgEl.style.animation =
          'correctPulse 0.5s ease-in-out infinite alternate';
      }
    });
  }

  private recordTime(): void {
    const elapsed = (performance.now() - this.state.questionStartTime) / 1000;
    this.state.responseTimes.push(Math.round(elapsed * 10) / 10);
  }

  private async advanceQuestion(): Promise<void> {
    this.state.questionIndex++;
    if (this.state.questionIndex >= TOTAL) {
      this.showComplete();
      return;
    }
    await this.scrollTransition.transition(() => this.loadQuestion());
  }

  // ── Complete ──────────────────────────────────────────────
  private showComplete(): void {
    this.state.phase = 'complete';
    this.scrollTransition.enabled = false;
    this.timer.hide();
    this.showButtonMode();
    this.gameScreen.classList.add('hidden');
    this.completeScreen.classList.remove('hidden');

    const pct = Math.round((this.state.score / TOTAL) * 100);
    const emoji = pct >= 90 ? '🏆' : pct >= 70 ? '🌟' : pct >= 50 ? '😊' : '💪';
    this.finalTxt.textContent =
      `${emoji} Правильно: ${this.state.score} из ${TOTAL}!`;

    this.buildResultsChart();

    q<HTMLButtonElement>('#restart-btn').onclick = () =>
      this.startGame(this.state.difficulty);
    q<HTMLButtonElement>('#newgame-btn').onclick = () => {
      this.completeScreen.classList.add('hidden');
      this.menuScreen.classList.remove('hidden');
      this.startMenuMorphLoop();
    };
  }

  // ── Results chart ─────────────────────────────────────────
  private buildResultsChart(): void {
    const chartEl = q<HTMLElement>('#results-chart');
    chartEl.innerHTML = '';

    const times = this.state.responseTimes;
    if (times.length === 0) return;

    const ns = 'http://www.w3.org/2000/svg';
    const W = 320;
    const H = 120;
    const PAD = 24;
    const BAR_W = (W - PAD * 2) / times.length - 4;
    const maxT = Math.max(...times, 5);

    const svg = document.createElementNS(ns, 'svg') as SVGSVGElement;
    svg.setAttribute('viewBox', `0 0 ${W} ${H + 20}`);
    svg.style.cssText = 'width:100%;max-width:340px;';

    const title = document.createElementNS(ns, 'text');
    title.setAttribute('x', String(W / 2));
    title.setAttribute('y', '14');
    title.setAttribute('text-anchor', 'middle');
    title.setAttribute('font-family', 'Fredoka One,cursive');
    title.setAttribute('font-size', '11');
    title.setAttribute('fill', 'rgba(255,255,255,0.6)');
    title.textContent = 'Время ответа (сек)';
    svg.appendChild(title);

    times.forEach((t, i) => {
      const barH = Math.max(4, ((maxT - t) / maxT) * H * 0.85);
      const x = PAD + i * ((W - PAD * 2) / times.length);
      const y = PAD + H - barH;

      const bg = document.createElementNS(ns, 'rect');
      bg.setAttribute('x', String(x));
      bg.setAttribute('y', String(PAD));
      bg.setAttribute('width', String(BAR_W));
      bg.setAttribute('height', String(H));
      bg.setAttribute('rx', '4');
      bg.setAttribute('fill', 'rgba(255,255,255,0.07)');
      svg.appendChild(bg);

      const bar = document.createElementNS(ns, 'rect');
      bar.setAttribute('x', String(x));
      bar.setAttribute('y', String(PAD + H));
      bar.setAttribute('width', String(BAR_W));
      bar.setAttribute('height', '0');
      bar.setAttribute('rx', '4');
      bar.setAttribute('fill', t < 3 ? '#6BFFB8' : t < 7 ? '#FFD93D' : '#FF6B9D');
      svg.appendChild(bar);

      const animY = document.createElementNS(ns, 'animate');
      animY.setAttribute('attributeName', 'y');
      animY.setAttribute('from', String(PAD + H));
      animY.setAttribute('to', String(y));
      animY.setAttribute('dur', '0.6s');
      animY.setAttribute('begin', `${i * 0.07}s`);
      animY.setAttribute('fill', 'freeze');
      animY.setAttribute('calcMode', 'spline');
      animY.setAttribute('keySplines', '0.34 1.56 0.64 1');
      animY.setAttribute('keyTimes', '0;1');
      bar.appendChild(animY);

      const animH = document.createElementNS(ns, 'animate');
      animH.setAttribute('attributeName', 'height');
      animH.setAttribute('from', '0');
      animH.setAttribute('to', String(barH));
      animH.setAttribute('dur', '0.6s');
      animH.setAttribute('begin', `${i * 0.07}s`);
      animH.setAttribute('fill', 'freeze');
      animH.setAttribute('calcMode', 'spline');
      animH.setAttribute('keySplines', '0.34 1.56 0.64 1');
      animH.setAttribute('keyTimes', '0;1');
      bar.appendChild(animH);

      const label = document.createElementNS(ns, 'text');
      label.setAttribute('x', String(x + BAR_W / 2));
      label.setAttribute('y', String(PAD + H + 14));
      label.setAttribute('text-anchor', 'middle');
      label.setAttribute('font-family', 'Fredoka One,cursive');
      label.setAttribute('font-size', '9');
      label.setAttribute('fill', 'rgba(255,255,255,0.5)');
      label.textContent = String(i + 1);
      svg.appendChild(label);
    });

    chartEl.appendChild(svg);
  }

  // ── Stars ─────────────────────────────────────────────────
  private buildStars(): void {
    const ns = 'http://www.w3.org/2000/svg';
    const g = this.bgSvg.querySelector('#star-g')!;
    for (let i = 0; i < 90; i++) {
      const c = document.createElementNS(ns, 'circle');
      c.setAttribute('cx', String(Math.random() * 1000));
      c.setAttribute('cy', String(Math.random() * 700));
      c.setAttribute('r', String(Math.random() * 2 + 0.4));
      c.setAttribute('fill', 'white');
      const a = document.createElementNS(ns, 'animate');
      a.setAttribute('attributeName', 'opacity');
      a.setAttribute('values', '1;0.05;1');
      a.setAttribute('dur', `${(Math.random() * 3 + 1.5).toFixed(1)}s`);
      a.setAttribute('begin', `${(Math.random() * 4).toFixed(1)}s`);
      a.setAttribute('repeatCount', 'indefinite');
      c.appendChild(a);
      g.appendChild(c);
    }
  }
}

function q<T extends Element>(selector: string): T {
  const el = document.querySelector<T>(selector);
  if (!el) throw new Error(`Not found: ${selector}`);
  return el;
}

function rand(a: number, b: number): number {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

function delay(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}