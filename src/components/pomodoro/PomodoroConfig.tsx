"use client";

import { useState } from "react";
import { usePomodoroStore } from "@/store/pomodoroStore";
import { X } from "lucide-react";
import {
  MIN_FOCUS_DURATION,
  MAX_FOCUS_DURATION,
  MIN_BREAK_DURATION,
  MAX_BREAK_DURATION,
} from "@/lib/constants";

interface Props {
  onClose: () => void;
}

export function PomodoroConfig({ onClose }: Props) {
  const { focusDuration, breakDuration, setConfig } = usePomodoroStore();
  const [focusMin, setFocusMin] = useState(focusDuration / 60);
  const [breakMin, setBreakMin] = useState(breakDuration / 60);

  function handleSave() {
    const focus = Math.min(
      Math.max(focusMin, MIN_FOCUS_DURATION / 60),
      MAX_FOCUS_DURATION / 60,
    );
    const breakTime = Math.min(
      Math.max(breakMin, MIN_BREAK_DURATION / 60),
      MAX_BREAK_DURATION / 60,
    );
    setConfig(focus * 60, breakTime * 60);
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-[#2E3440] border border-[#3B4252] rounded-lg p-6 w-full max-w-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-sm font-semibold text-[#ECEFF4]">
            Configurar Pomodoro
          </h3>
          <button
            onClick={onClose}
            className="text-[#4C566A] hover:text-[#ECEFF4] transition-colors hover:cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {[
            {
              label: "Tempo de foco (minutos)",
              value: focusMin,
              set: setFocusMin,
              min: MIN_FOCUS_DURATION / 60,
              max: MAX_FOCUS_DURATION / 60,
            },
            {
              label: "Tempo de descanso (minutos)",
              value: breakMin,
              set: setBreakMin,
              min: MIN_BREAK_DURATION / 60,
              max: MAX_BREAK_DURATION / 60,
            },
          ].map((field) => (
            <div key={field.label} className="flex flex-col gap-1.5">
              <label className="text-[#4C566A] text-xs">{field.label}</label>
              <input
                type="number"
                value={field.value}
                onChange={(e) => field.set(Number(e.target.value))}
                min={field.min}
                max={field.max}
                className="bg-[#2E3440] border border-[#3B4252] rounded-lg px-4 py-2.5 text-[#ECEFF4] text-sm focus:outline-none focus:border-[#5E81AC] transition-colors"
              />
            </div>
          ))}
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 rounded-lg text-sm text-[#434C5E] hover:text-[#4C566A] border border-[#3B4252] hover:border-[#434C5E] hover:cursor-pointer transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="flex-1 px-4 py-2 rounded-lg text-sm font-medium bg-[#5E81AC] hover:bg-[#81A1C1] text-[#ECEFF4] hover:cursor-pointer transition-colors"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}
