"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useGameStore } from "@/store/gameStore";
import { usePomodoroStore } from "@/store/pomodoroStore";
import { purchaseUpgrade } from "@/services/userService";
import { UpgradeCard } from "./UpgradeCard";
import { UpgradeType } from "@/types";

const UPGRADES = [
  {
    type: "damage" as UpgradeType,
    label: "Aumentar Dano",
    description: "+5 de dano por nível",
    icon: "⚔️",
  },
  {
    type: "luck" as UpgradeType,
    label: "Aumentar Sorte",
    description: "+1 moeda extra por kill",
    icon: "🍀",
  },
  {
    type: "speed" as UpgradeType,
    label: "Aumentar Velocidade",
    description: "+0.5 ataque/s por nível",
    icon: "⚡",
  },
];

export function Shop() {
  const { data: session } = useSession();
  const { phase } = usePomodoroStore();
  const { dmgLevel, luckLevel, speedLevel, applyUpgrade, coins } =
    useGameStore();
  const [loadingType, setLoadingType] = useState<UpgradeType | null>(null);
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);

  const isLocked = phase === "FOCUS";

  const levelMap = {
    damage: dmgLevel,
    luck: luckLevel,
    speed: speedLevel,
  };

  async function handleBuy(type: UpgradeType) {
    if (isLocked || loadingType) return;
    setMessage(null);

    if (!session?.user) {
      applyUpgrade(type, {
        coins: coins - 10,
        damage:
          type === "damage"
            ? useGameStore.getState().damage + 5
            : useGameStore.getState().damage,
        luck:
          type === "luck"
            ? useGameStore.getState().luck + 1
            : useGameStore.getState().luck,
        speed:
          type === "speed"
            ? useGameStore.getState().speed + 0.5
            : useGameStore.getState().speed,
        dmgLevel: type === "damage" ? dmgLevel + 1 : dmgLevel,
        luckLevel: type === "luck" ? luckLevel + 1 : luckLevel,
        speedLevel: type === "speed" ? speedLevel + 1 : speedLevel,
      });
      setMessage({
        text: "Upgrade aplicado! (não salvo — faça login)",
        type: "success",
      });
      return;
    }

    setLoadingType(type);
    try {
      const updatedStats = await purchaseUpgrade(type);
      if (updatedStats) {
        applyUpgrade(type, updatedStats);
        setMessage({ text: "Upgrade comprado com sucesso!", type: "success" });
      }
    } catch (error: unknown) {
      // Handle unknown error safely: prefer string, then Error, otherwise fallback message
      const errorMessage =
        typeof error === "string"
          ? error
          : error instanceof Error
            ? error.message
            : "Erro ao comprar upgrade";
      setMessage({
        text: errorMessage,
        type: "error",
      });
    } finally {
      setLoadingType(null);
    }
  }

  return (
    <div className="game-card p-4">
      <div className="flex items-center justify-between mb-41">
        <h3 className="text-sm font-semibold text-[#9090a8] uppercase tracking-wider">
          Loja
        </h3>
        {isLocked && (
          <span className="text-xs text-[#5a5a72]">
            🔒 Disponível no descanso
          </span>
        )}
        {!isLocked && (
          <span className="text-xs text-[#2dc653]">✅ Loja aberta!</span>
        )}
      </div>

      {message && (
        <div
          className={`mb-3 px-3 py-2 rounded-lg text-xs ${
            message.type === "success"
              ? "bg-[#2dc653]/10 border border-[#2dc653]/30 text-[#2dc653]"
              : "bg-[#e63946]/10 border border-[#e63946]/30 text-[#ff6b6b]"
          }`}
        >
          {message.text}
        </div>
      )}

      <div className="flex flex-col gap-3">
        {UPGRADES.map((upgrade) => (
          <UpgradeCard
            key={upgrade.type}
            {...upgrade}
            isLocked={isLocked}
            onBuy={handleBuy}
            isLoading={loadingType === upgrade.type}
          />
        ))}
      </div>
    </div>
  );
}
