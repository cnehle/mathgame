import type { MouseState } from '../types';
// ── Tuning constants ─────────────────────────────────────────
/** Lerp smoothing factor: lower = heavier inertia. */
const LERP_EASE = 0.06;
/** Moon base position in background SVG coordinates. */
const MOON_BASE_X = 880;
const MOON_BASE_Y = 72;
/** Parallax shift amplitudes per layer. */
const STARS_SHIFT_X = 12;
const STARS_SHIFT_Y = 8;
const MOON_SHIFT_X = 30;
const MOON_SHIFT_Y = 20;
const CLOUD_SHIFT_EVEN = -18;
const CLOUD_SHIFT_ODD = -12;
const CLOUD_SHIFT_Y = 5;

export class MouseTracker {
  private state: MouseState = { x: 0, y: 0, normX: 0, normY: 0 };
  private listeners: Array<(s: MouseState) => void> = [];
  private rafId = 0;
  private targetNormX = 0;
  private targetNormY = 0;
  private currentNormX = 0;
  private currentNormY = 0;

  constructor() {
    window.addEventListener('mousemove', this.onMouseMove);
    this.tick();
  }

  private onMouseMove = (e: MouseEvent): void => {
    this.state.x = e.clientX;
    this.state.y = e.clientY;
    this.targetNormX = (e.clientX / window.innerWidth) * 2 - 1;
    this.targetNormY = (e.clientY / window.innerHeight) * 2 - 1;
  };

  private tick = (): void => {
    this.currentNormX += (this.targetNormX - this.currentNormX) * LERP_EASE;
    this.currentNormY += (this.targetNormY - this.currentNormY) * LERP_EASE;
    this.state.normX = this.currentNormX;
    this.state.normY = this.currentNormY;
    this.listeners.forEach((fn) => fn(this.state));
    this.rafId = requestAnimationFrame(this.tick);
  };

  subscribe(fn: (s: MouseState) => void): () => void {
    this.listeners.push(fn);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== fn);
    };
  }

  destroy(): void {
    window.removeEventListener('mousemove', this.onMouseMove);
    cancelAnimationFrame(this.rafId);
  }
}

// Parallax layers: moves background stars/moon based on mouse
export class ParallaxBackground {
  private starGroup: SVGGElement;
  private moon: SVGCircleElement;
  private clouds: SVGElement[];
  private unsub: (() => void) | null = null;

  constructor(bgSvg: SVGSVGElement, tracker: MouseTracker) {
    this.starGroup = bgSvg.querySelector('#star-g') as SVGGElement;
    this.moon = bgSvg.querySelector('#moon') as SVGCircleElement;
    this.clouds = Array.from(bgSvg.querySelectorAll('.cloud')) as SVGElement[];

    this.unsub = tracker.subscribe(({ normX, normY }) => {
      if (this.starGroup) {
        this.starGroup.setAttribute(
          'transform',
          `translate(${normX * STARS_SHIFT_X},${normY * STARS_SHIFT_Y})`,
        );
      }
      if (this.moon) {
        this.moon.setAttribute(
          'cx',
          String(MOON_BASE_X + normX * MOON_SHIFT_X),
        );
        this.moon.setAttribute(
          'cy',
          String(MOON_BASE_Y + normY * MOON_SHIFT_Y),
        );
      }
      this.clouds.forEach((c, i) => {
        const factor = i % 2 === 0 ? CLOUD_SHIFT_EVEN : CLOUD_SHIFT_ODD;
        c.setAttribute(
          'transform',
          `translate(${normX * factor},${normY * CLOUD_SHIFT_Y})`,
        );
      });
    });
  }

  destroy(): void {
    this.unsub?.();
  }
}

// Cursor trail — SVG sparkle particles that follow mouse
export class CursorTrail {
  private svg: SVGSVGElement;
  private particles: SVGCircleElement[] = [];
  private positions: Array<{ x: number; y: number }> = [];
  private maxParticles = 12;
  private rafId = 0;
  private colors = ['#FFD93D', '#FF6B9D', '#6BFFB8', '#C3B1E1', '#FF8C69'];

  constructor() {
    const ns = 'http://www.w3.org/2000/svg';
    this.svg = document.createElementNS(ns, 'svg') as SVGSVGElement;
    this.svg.style.cssText =
      'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:999;overflow:visible;';
    document.body.appendChild(this.svg);

    for (let i = 0; i < this.maxParticles; i++) {
      const c = document.createElementNS(ns, 'circle') as SVGCircleElement;
      c.setAttribute('r', String(6 - i * 0.4));
      c.setAttribute('fill', this.colors[i % this.colors.length]);
      c.style.opacity = '0';
      this.svg.appendChild(c);
      this.particles.push(c);
      this.positions.push({ x: 0, y: 0 });
    }

    window.addEventListener('mousemove', this.onMove);
    this.animate();
  }

  private onMove = (e: MouseEvent): void => {
    this.positions.unshift({ x: e.clientX, y: e.clientY });
    if (this.positions.length > this.maxParticles) this.positions.pop();
  };

  private animate = (): void => {
    this.particles.forEach((p, i) => {
      const pos = this.positions[i];
      if (!pos) return;
      p.setAttribute('cx', String(pos.x));
      p.setAttribute('cy', String(pos.y));
      p.style.opacity = String(1 - i / this.maxParticles);
    });
    this.rafId = requestAnimationFrame(this.animate);
  };

  destroy(): void {
    window.removeEventListener('mousemove', this.onMove);
    cancelAnimationFrame(this.rafId);
    this.svg.remove();
  }
}
