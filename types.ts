
export type GameState = 'READY' | 'COUNTDOWN' | 'PLAYING' | 'FINISHED' | 'PAUSED';
export type GameMode = '10s' | '30s' | 'FULL';

export interface FallingNa {
  id: number;
  left: string;
  size: string;
  duration: string;
  animationClass: string;
}

export interface ScoreEntry {
  score: number;
  hitCount?: number;
  date: number; // timestamp
}