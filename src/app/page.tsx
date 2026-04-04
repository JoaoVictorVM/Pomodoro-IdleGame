"use client";

import { useState } from "react";
import { useGame } from "@/hooks/useGame";
import { PomodoroTimer } from "@/components/pomodoro/PomodoroTimer";
import { PomodoroControls } from "@/components/pomodoro/PomodoroControls";
import { PomodoroConfig } from "@/components/pomodoro/PomodoroConfig";
import { GameArena } from "@/components/game/GameArena";
import { HeroStats } from "@/components/stats/HeroStats";
import { Shop } from "@/components/shop/Shop";
import { Navbar } from "@/components/ui/Navbar";
import { Settings } from "lucide-react";

export default function HomePage() {
  useGame();
  const [showConfig, setShowConfig] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#2E3440]">
      <Navbar />

      <div className="flex-1 flex justify-center">
        <main className="w-full max-w-2xl px-4 py-6 flex flex-col gap-4">
          {/* Timer */}
          <div className="border border-[#3B4252] rounded-lg p-6 flex flex-col items-center gap-4">
            <div className="w-full flex justify-between items-center">
              <span className="text-xs text-[#4C566A] uppercase tracking-wider">
                Pomodoro
              </span>
              <button
                onClick={() => setShowConfig(true)}
                className="flex items-center gap-1.5 text-xs hover:cursor-pointer text-[#4C566A] hover:text-[#D8DEE9] border border-[#3B4252] hover:border-[#434C5E] rounded-lg px-3 py-1.5 transition-colors"
              >
                <Settings size={12} />
                Configurar
              </button>
            </div>
            <PomodoroTimer />
            <PomodoroControls />
          </div>

          {/* Arena */}
          <GameArena />

          {/* Stats + Loja */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <HeroStats />
            <Shop />
          </div>
        </main>
      </div>

      {showConfig && <PomodoroConfig onClose={() => setShowConfig(false)} />}
    </div>
  );
}
