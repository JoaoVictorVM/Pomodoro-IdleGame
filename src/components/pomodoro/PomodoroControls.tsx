"use client";

import { usePomodoroStore } from "@/store/pomodoroStore";
import { Play, Pause, RotateCcw } from "lucide-react";

export function PomodoroControls() {
  const { isRunning, phase, start, pause, reset } = usePomodoroStore();

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={reset}
        className="flex items-center gap-1.5 px-4 py-2 rounded-lg hover:cursor-pointer text-sm text-[#4C566A] hover:text-[#D8DEE9] border border-[#3B4252] hover:border-[#434C5E] transition-colors"
      >
        <RotateCcw size={13} />
        Reiniciar
      </button>
      <button
        onClick={isRunning ? pause : start}
        className="flex items-center gap-2 px-6 py-2 rounded-lg hover:cursor-pointer text-sm font-medium bg-[#BF616A] hover:bg-[#D08770] text-[#ECEFF4] transition-colors"
      >
        {isRunning ? <Pause size={14} /> : <Play size={14} />}
        {isRunning ? "Pausar" : phase === "IDLE" ? "Iniciar" : "Continuar"}
      </button>
    </div>
  );
}
