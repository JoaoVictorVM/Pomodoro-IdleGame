import { create } from "zustand";
import {
  BASE_DAMAGE,
  BASE_SPEED,
  BASE_LUCK,
  ENEMY_BASE_HP,
  DEFAULT_HERO_SKIN,
  DEFAULT_ENEMY_SKIN,
} from "@/lib/constants";
import { calcEnemyHp } from "@/lib/utils";

interface GameStore {
  // Moedas
  coins: number;

  // Onda
  currentWave: number;

  // Herói
  damage: number;
  speed: number;
  luck: number;
  dmgLevel: number;
  luckLevel: number;
  speedLevel: number;
  heroSkin: string;

  // Inimigo
  enemyHp: number;
  enemyMaxHp: number;
  enemySkin: string;

  // Actions
  setCoins: (coins: number) => void;
  takeDamage: (amount: number) => void;
  killEnemy: () => void;
  loadStats: (stats: {
    coins: number;
    damage: number;
    speed: number;
    luck: number;
    dmgLevel: number;
    luckLevel: number;
    speedLevel: number;
    currentWave: number;
  }) => void;
  resetGame: () => void;
}

export const useGameStore = create<GameStore>((set, get) => ({
  coins: 0,
  currentWave: 1,
  damage: BASE_DAMAGE,
  speed: BASE_SPEED,
  luck: BASE_LUCK,
  dmgLevel: 0,
  luckLevel: 0,
  speedLevel: 0,
  heroSkin: DEFAULT_HERO_SKIN,
  enemyHp: ENEMY_BASE_HP,
  enemyMaxHp: ENEMY_BASE_HP,
  enemySkin: DEFAULT_ENEMY_SKIN,

  setCoins: (coins) => set({ coins }),

  takeDamage: (amount) => {
    const { enemyHp } = get();
    const newHp = Math.max(0, enemyHp - amount);
    set({ enemyHp: newHp });
  },

  killEnemy: () => {
    const { currentWave, luck, coins } = get();
    const nextWave = currentWave + 1;
    const newEnemyHp = calcEnemyHp(nextWave);
    set({
      currentWave: nextWave,
      coins: coins + luck,
      enemyHp: newEnemyHp,
      enemyMaxHp: newEnemyHp,
    });
  },

  loadStats: (stats) => {
    const enemyHp = calcEnemyHp(stats.currentWave);
    set({
      coins: stats.coins,
      damage: stats.damage,
      speed: stats.speed,
      luck: stats.luck,
      dmgLevel: stats.dmgLevel,
      luckLevel: stats.luckLevel,
      speedLevel: stats.speedLevel,
      currentWave: stats.currentWave,
      enemyHp,
      enemyMaxHp: enemyHp,
    });
  },

  resetGame: () => {
    set({
      coins: 0,
      currentWave: 1,
      damage: BASE_DAMAGE,
      speed: BASE_SPEED,
      luck: BASE_LUCK,
      dmgLevel: 0,
      luckLevel: 0,
      speedLevel: 0,
      enemyHp: ENEMY_BASE_HP,
      enemyMaxHp: ENEMY_BASE_HP,
    });
  },
}));
