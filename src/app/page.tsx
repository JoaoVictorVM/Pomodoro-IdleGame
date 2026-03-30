"use client";

import { useState } from "react";
import { useGame } from "@/hooks/useGame";
import { usePomodoroStore } from "@/store/pomodoroStore";
import { PomodoroTimer } from "@/components/pomodoro/PomodoroTimer";
import { PomodoroControls } from "@/components/pomodoro/PomodoroControls";
import { PomodoroConfig } from "@/components/pomodoro/PomodoroConfig";
import { GameArena } from "@/components/game/GameArena";
import { CoinDisplay } from "@/components/game/CoinDisplay";
import { HeroStats } from "@/components/stats/HeroStats";
import { Shop } from "@/components/shop/Shop";
import { Navbar } from "@/components/ui/Navbar";

export default function HomePage() {
  useGame();
  const { phase } = usePomodoroStore();
  const [showConfig, setShowConfig] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-6 flex flex-col gap-4">
        {/* Timer */}
        <div className="game-card p-6 flex flex-col items-center gap-4">
          <div className="w-full flex justify-between items-center">
            <span className="text-xs text-[#5a5a72] uppercase tracking-wider">
              Pomodoro
            </span>
            <button
              onClick={() => setShowConfig(true)}
              className="text-xs text-[#9090a8] hover:text-[#f0f0f5] border border-[#2a2a3a] hover:border-[#9090a8] rounded-lg px-3 py-1.5 transition-colors"
            >
              ⚙️ Configurar
            </button>
          </div>
          <PomodoroTimer />
          <PomodoroControls />
        </div>

        {/* Arena */}
        <GameArena />

        {/* Moedas */}
        <div className="flex justify-center">
          <CoinDisplay />
        </div>

        {/* Stats + Loja */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <HeroStats />
          <Shop />
        </div>
      </main>

      {showConfig && <PomodoroConfig onClose={() => setShowConfig(false)} />}
    </div>
  );
}
