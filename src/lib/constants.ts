// ─── Pomodoro ─────────────────────────────────────────────────────────────────
export const DEFAULT_FOCUS_DURATION = 25 * 60;   // 25 minutos em segundos
export const DEFAULT_BREAK_DURATION = 5 * 60;    // 5 minutos em segundos
export const MIN_FOCUS_DURATION = 5 * 60;        // mínimo 5 minutos
export const MAX_FOCUS_DURATION = 60 * 60;       // máximo 60 minutos
export const MIN_BREAK_DURATION = 1 * 60;        // mínimo 1 minuto
export const MAX_BREAK_DURATION = 30 * 60;       // máximo 30 minutos

// ─── Herói (valores base) ─────────────────────────────────────────────────────
export const BASE_DAMAGE = 5;
export const BASE_SPEED = 1;
export const BASE_LUCK = 1;

// ─── Upgrades ─────────────────────────────────────────────────────────────────
export const UPGRADE_BASE_COST = 10;
export const UPGRADE_COST_MULTIPLIER = 1.5;
export const DAMAGE_PER_LEVEL = 5;
export const SPEED_PER_LEVEL = 0.5;
export const LUCK_PER_LEVEL = 1;

// ─── Inimigo ──────────────────────────────────────────────────────────────────
export const ENEMY_BASE_HP = 50;

// ─── Assets ───────────────────────────────────────────────────────────────────
export const DEFAULT_HERO_SKIN = "/images/hero-default.png";
export const DEFAULT_ENEMY_SKIN = "/images/enemy-default.png";

// ─── API ──────────────────────────────────────────────────────────────────────
export const SAVE_INTERVAL_MS = 60 * 1000;