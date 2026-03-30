// src/components/game/GameArena.tsx
"use client";

import { useGameLoop } from "@/hooks/useGameLoop";
import { usePomodoroStore } from "@/store/pomodoroStore";
import { Hero } from "./Hero";
import { Enemy } from "./Enemy";

export function GameArena() {
  useGameLoop();

  const { phase } = usePomodoroStore();

  const bgColor = {
    IDLE: "bg-[#1a1a24]",
    FOCUS: "bg-[#1a1a1f]",
    BREAK: "bg-[#1a1f1a]",
  };

  return (
    <div
      className={`relative w-full h-48 sm:h-56 rounded-xl border border-[#2a2a3a] ${bgColor[phase]} flex items-end justify-between px-8 sm:px-16 pb-4 overflow-hidden transition-colors duration-700`}
    >
      {/* Herói */}
      <Hero />

      {/* Mensagem de fase */}
      {phase === "IDLE" && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-[#5a5a72] text-sm">
            Inicie o Pomodoro para começar
          </span>
        </div>
      )}
      {phase === "BREAK" && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-[#2dc653] text-sm">
            Descansando... Visite a loja! 🛍️
          </span>
        </div>
      )}

      {/* Inimigo */}
      <Enemy />
    </div>
  );
}
