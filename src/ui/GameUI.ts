import type { GameState, Difficulty } from '../types';
import { DIFFICULTY_CONFIG, QuestionGenerator, buildAnswerOptions } from '../game/logic';
import { MouseTracker, ParallaxBackground, CursorTrail } from '../effects/mouse';
import { ScrollTransition, TimerBar, spawnCelebration } from '../effects/transitions';

const BTN_FILLS = ['#FFD93D', '#FF6B9D', '#FF8C69', '#C3B1E1'];
const BTN_STROKES = ['#8a5c00', '#8a1040', '#a03010', '#5a3e8a'];
const CORRECT_MSGS = ['⭐ Правильно!', '🎉 Да!', '🌟 Отлично!', '✅ Супер!', '🥳 Молодец!'];
const WRONG_MSGS = ['😊 Почти!', '💛 Близко!', '🔄 Попробуй ещё!', '💪 Хорошая попытка!'];
const TOTAL = 10;

export class GameUI {
  // DOM refs
  private menuScreen = q<HTMLElement>('#menu-screen');
  private gameScreen = q<HTMLElement>('#game-screen');
  private completeScreen = q<HTMLElement>('#complete-screen');
  private bgSvg = q<SVGSVGElement>('#bg-svg');
  private objSvg = q<SVGSVGElement>('#obj-svg');
  private questionCard = q<HTMLElement>('.card');
  private qText = q<HTMLElement>('#q-text');
  private scoreEl = q<HTMLElement>('#score-val');
  private qNumEl = q<HTMLElement>('#q-num');
  private feedback = q<HTMLElement>('#feedback');
  private nextBtn = q<HTMLButtonElement>('#next-btn');
  private answersWrap = q<HTMLElement>('#answers');
  private finalTxt = q<HTMLElement>('#final-txt');
  private timerTrack = q<HTMLElement>('#timer-track');
  private timerBar = q<HTMLElement>('#timer-bar');

  // Services
  private mouseTracker = new MouseTracker();
  private scrollTransition: ScrollTransition;
  private timer: TimerBar;
  private questionGen: QuestionGenerator;

  // State
  private state: GameState = {
    phase: 'menu',
    score: 0,
    questionIndex: 0,
    totalQuestions: TOTAL,
    answered: false,
    difficulty: 'easy',
  };

  private currentAnswer = 0;

  constructor() {
    // Effects — keep references alive (not assigned to fields to avoid TS unused warnings,
    // but they register their own event listeners internally)
    new ParallaxBackground(this.bgSvg, this.mouseTracker);
    new CursorTrail();
    this.scrollTransition = new ScrollTransition(this.questionCard);
    this.timer = new TimerBar(this.timerBar);
    this.questionGen = new QuestionGenerator(this.objSvg);

    this.bindMenuEvents();
    this.bindGameEvents();
    this.buildStars();
  }

  // ── Menu ──────────────────────────────────────────────────
  private bindMenuEvents(): void {
    document.querySelectorAll<HTMLButtonElement>('.diff-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const diff = btn.dataset.diff as Difficulty;
        this.startGame(diff);
      });

      // Hover wiggle via mouse proximity
      btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'scale(1.08) rotate(-2deg)';
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }

  private startGame(difficulty: Difficulty): void {
    this.state = {
      phase: 'playing',
      score: 0,
      questionIndex: 0,
      totalQuestions: TOTAL,
      answered: false,
      difficulty,
    };
    this.menuScreen.classList.add('hidden');
    this.gameScreen.classList.remove('hidden');
    this.completeScreen.classList.add('hidden');
    this.scrollTransition.enabled = true;
    this.loadQuestion();
  }

  // ── Game ──────────────────────────────────────────────────
  private bindGameEvents(): void {
    this.nextBtn.addEventListener('click', () => this.advanceQuestion());

    // Scroll/swipe to advance after answering
    this.scrollTransition.onNext(() => {
      if (this.state.answered) this.advanceQuestion();
    });
  }

  private loadQuestion(): void {
    this.state.answered = false;
    this.feedback.textContent = '';
    this.feedback.className = 'feedback';
    this.nextBtn.style.display = 'none';
    this.answersWrap.innerHTML = '';

    const q = this.questionGen.generate(this.state.questionIndex, this.state.difficulty);
    this.currentAnswer = q.answer;
    this.qText.textContent = q.text;
    this.qNumEl.textContent = String(this.state.questionIndex + 1);
    this.scoreEl.textContent = String(this.state.score);

    this.buildAnswerButtons(q.answer);

    // Start timer if difficulty requires it
    const cfg = DIFFICULTY_CONFIG[this.state.difficulty];
    if (cfg.timeLimit) {
      this.timerTrack.style.display = 'block';
      this.timer.start(cfg.timeLimit, () => this.onTimeUp());
    } else {
      this.timerTrack.style.display = 'none';
    }
  }

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

      // Hover: lift on mouse proximity (tracked globally)
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
        const svgEl = b.querySelector('svg')!;
        rect.setAttribute('fill', '#00e676');
        rect.setAttribute('stroke', '#ffffff');
        rect.setAttribute('stroke-width', '5');
        text.setAttribute('fill', '#004d20');
        (svgEl as unknown as HTMLElement).style.filter =
          'drop-shadow(0 0 10px #00e676) drop-shadow(0 0 20px #00e676)';
        (svgEl as unknown as HTMLElement).style.animation =
          'correctPulse 0.5s ease-in-out infinite alternate';
      }
    });
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
    this.gameScreen.classList.add('hidden');
    this.completeScreen.classList.remove('hidden');

    const pct = Math.round((this.state.score / TOTAL) * 100);
    let emoji = pct >= 90 ? '🏆' : pct >= 70 ? '🌟' : pct >= 50 ? '😊' : '💪';
    this.finalTxt.textContent =
      `${emoji} Ты ответил правильно ${this.state.score} из ${TOTAL}!`;

    // Wire up restart button
    const restartBtn = q<HTMLButtonElement>('#restart-btn');
    const newGameBtn = q<HTMLButtonElement>('#newgame-btn');
    restartBtn.onclick = () => this.startGame(this.state.difficulty);
    newGameBtn.onclick = () => {
      this.completeScreen.classList.add('hidden');
      this.menuScreen.classList.remove('hidden');
    };
  }

  // ── Background stars ──────────────────────────────────────
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

// ── Helpers ───────────────────────────────────────────────────
function q<T extends Element>(selector: string): T {
  const el = document.querySelector<T>(selector);
  if (!el) throw new Error(`Element not found: ${selector}`);
  return el;
}

function rand(a: number, b: number): number {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}
