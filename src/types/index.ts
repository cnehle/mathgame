export interface Shape {
  name: string;
  question: string;
  draw(cx: number, cy: number, delay: number): string;
}

export interface Question {
  text: string;
  answer: number;
}

export type GamePhase = 'menu' | 'playing' | 'complete';

export interface GameState {
  phase: GamePhase;
  score: number;
  questionIndex: number;
  totalQuestions: number;
  answered: boolean;
  difficulty: Difficulty;
}

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface DifficultyConfig {
  label: string;
  labelRu: string;
  maxCount: number;
  useAddition: boolean;
  useSubtraction: boolean;
  timeLimit: number | null; // seconds, null = no limit
}

export interface MouseState {
  x: number;
  y: number;
  normX: number; // -1 to 1
  normY: number; // -1 to 1
}
