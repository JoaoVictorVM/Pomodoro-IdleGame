"use client";

import { useGameStore } from "@/store/gameStore";

export function CoinDisplay() {
  const { coins } = useGameStore();

  return (
    <div className="flex items-center gap-2 bg-[#1a1a24] border border-[#2a2a3a] rounded-full px-4 py-1.5">
      <span className="text-lg">🪙</span>
      <span className="text-[#ffd60a] font-bold text-sm">{coins}</span>
      <span className="text-[#9090a8] text-xs">moedas</span>
    </div>
  );
}
