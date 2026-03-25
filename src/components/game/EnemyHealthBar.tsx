"use client";

import { useGameStore } from "@/store/gameStore";

export function EnemyHealthBar() {
  const { enemyHp, enemyMaxHp, currentWave } = useGameStore();
  const percent = Math.max(0, (enemyHp / enemyMaxHp) * 100);

  const barColor =
    percent > 50
      ? "bg-[#2dc653]"
      : percent > 25
        ? "bg-[#ffd60a]"
        : "bg-[#e63946]";

  return (
    <div className="flex flex-col gap-1 w-48">
      <div className="flex justify-between items-center">
        <span className="text-xs text-[#9090a8]">Onda {currentWave}</span>
        <span className="text-xs text-[#9090a8]">
          {enemyHp}/{enemyMaxHp}
        </span>
      </div>
      <div className="w-full h-3 bg-[#0f0f13] rounded-full overflow-hidden border border-[#2a2a3a]">
        <div
          className={`h-full rounded-full transition-all duration-150 ${barColor}`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
