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
      className={`relative w-full h-48 rounded-xl border border-[#2a2a3a] ${bgColor[phase]} flex items-center justify-between px-12 overflow-hidden transition-colors duration-700`}
    >
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#2a2a3a]" />

      <Hero />

      {phase === "IDLE" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[#5a5a72] text-sm">
            Inicie o Pomodoro para começar
          </span>
        </div>
      )}

      {phase === "BREAK" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[#2dc653] text-sm">
            Descansando... Visite a loja! 🛍️
          </span>
        </div>
      )}

      <Enemy />
    </div>
  );
}
