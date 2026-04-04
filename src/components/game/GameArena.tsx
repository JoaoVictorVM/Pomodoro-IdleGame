"use client";

import { usePomodoroStore } from "@/store/pomodoroStore";
import { Hero } from "./Hero";
import { Enemy } from "./Enemy";

export function GameArena() {
  const { phase } = usePomodoroStore();

  const bgColor = {
    IDLE: "bg-[#2E3440]",
    FOCUS: "bg-[#2E3440]",
    BREAK: "bg-[#2E3440]",
  };

  const borderColor = {
    IDLE: "border-[#3B4252]",
    FOCUS: "border-[#BF616A]/30",
    BREAK: "border-[#A3BE8C]/30",
  };

  return (
    <div
      className={`relative w-full h-52 rounded-xl border ${bgColor[phase]} ${borderColor[phase]} flex items-end justify-between px-10 pb-5 overflow-hidden transition-colors duration-700`}
    >
      <Hero />

      {phase === "IDLE" && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-[#4C566A] text-sm">
            Inicie o Pomodoro para começar
          </span>
        </div>
      )}
      {phase === "BREAK" && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-[#A3BE8C] text-sm">
            Descansando... Visite a loja!
          </span>
        </div>
      )}

      <Enemy />
    </div>
  );
}
