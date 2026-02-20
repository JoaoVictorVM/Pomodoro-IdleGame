import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

export function calcUpgradeCost(baseCost: number, level: number): number {
  return Math.round(baseCost * Math.pow(1.5, level));
}

export function calcEnemyHp(wave: number): number {
  return 50 * wave;
}

export function calcHeroDamage(baseDamage: number, dmgLevel: number): number {
  return baseDamage + dmgLevel * 5;
}

export function calcAttackInterval(baseSpeed: number, speedLevel: number): number {
  const attacksPerSecond = baseSpeed + speedLevel * 0.5;
  return Math.round(1000 / attacksPerSecond);
}

export function calcCoinsPerKill(luckLevel: number): number {
  return 1 + luckLevel;
}
