"use client";

import { useGameStore } from "@/store/gameStore";

export function Hero() {
  const { heroSkin } = useGameStore();

  // Placeholder SVG
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-24 h-24 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Corpo */}
          <circle cx="50" cy="25" r="12" fill="#2dc653" />
          <line
            x1="50"
            y1="37"
            x2="50"
            y2="65"
            stroke="#2dc653"
            strokeWidth="5"
            strokeLinecap="round"
          />
          {/* Braços */}
          <line
            x1="50"
            y1="45"
            x2="28"
            y2="55"
            stroke="#2dc653"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <line
            x1="50"
            y1="45"
            x2="72"
            y2="42"
            stroke="#2dc653"
            strokeWidth="4"
            strokeLinecap="round"
          />
          {/* Espada */}
          <line
            x1="72"
            y1="42"
            x2="88"
            y2="28"
            stroke="#9090a8"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="80"
            y1="37"
            x2="86"
            y2="43"
            stroke="#9090a8"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Pernas */}
          <line
            x1="50"
            y1="65"
            x2="38"
            y2="85"
            stroke="#2dc653"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <line
            x1="50"
            y1="65"
            x2="62"
            y2="85"
            stroke="#2dc653"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <span className="text-xs text-[#9090a8]">Herói</span>
    </div>
  );
}
