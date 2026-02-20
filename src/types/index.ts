export interface User {
  id: string;
  name?: string | null;
  email: string;
}

export interface UserStats {
  id: string;
  userId: string;
  coins: number;
  damage: number;
  luck: number;
  speed: number;
  dmgLevel: number;
  luckLevel: number;
  speedLevel: number;
}


export type PomodoroPhase = "IDLE" | "FOCUS" | "BREAK";

export interface PomodoroConfig {
  focusDuration: number;
  breakDuration: number;
}

export interface PomodoroState extends PomodoroConfig {
  phase: PomodoroPhase;
  timeLeft: number;
  isRunning: boolean;
}


export interface GameState {
  coins: number;
  currentWave: number;
  enemy: EnemyState;
  hero: HeroState;
}

export interface HeroState {
  damage: number;
  speed: number;
  luck: number;
  dmgLevel: number;
  luckLevel: number;
  speedLevel: number;
  skinPath: string;
}

export interface EnemyState {
  currentHp: number;
  maxHp: number;
  skinPath: string;
}


export type UpgradeType = "damage" | "luck" | "speed";

export interface Upgrade {
  type: UpgradeType;
  label: string;
  description: string;
  icon: string;
  currentLevel: number;
  cost: number;
  effect: string;
}


export interface ApiResponse<T = void> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface UpdateStatsPayload {
  coins: number;
  damage: number;
  luck: number;
  speed: number;
  dmgLevel: number;
  luckLevel: number;
  speedLevel: number;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}
