"use client";

import { useGameStore } from "@/store/gameStore";
import { EnemyHealthBar } from "./EnemyHealthBar";

export function Enemy() {
  const { enemySkin } = useGameStore();

  return (
    <div className="flex flex-col items-center gap-2">
      <EnemyHealthBar />
      <div className="w-24 h-24 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Corpo blob */}
          <ellipse cx="50" cy="60" rx="30" ry="25" fill="#8b1a1a" />
          <ellipse cx="50" cy="55" rx="28" ry="28" fill="#a52020" />
          {/* Olhos */}
          <circle cx="38" cy="48" r="7" fill="white" />
          <circle cx="62" cy="48" r="7" fill="white" />
          <circle cx="40" cy="49" r="4" fill="#1a0000" />
          <circle cx="64" cy="49" r="4" fill="#1a0000" />
          {/* Boca */}
          <path
            d="M 35 65 Q 50 75 65 65"
            stroke="#1a0000"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          {/* Dentes */}
          <line
            x1="42"
            y1="65"
            x2="42"
            y2="71"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="50"
            y1="67"
            x2="50"
            y2="73"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="58"
            y1="65"
            x2="58"
            y2="71"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
