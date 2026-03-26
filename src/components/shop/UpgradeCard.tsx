"use client";

import { useGameStore } from "@/store/gameStore";
import { calcUpgradeCost } from "@/lib/utils";
import { UPGRADE_BASE_COST } from "@/lib/constants";
import { UpgradeType } from "@/types";

interface Props {
  type: UpgradeType;
  label: string;
  description: string;
  icon: string;
  isLocked: boolean;
  onBuy: (type: UpgradeType) => void;
  isLoading: boolean;
}

export function UpgradeCard({
  type,
  label,
  description,
  icon,
  isLocked,
  onBuy,
  isLoading,
}: Props) {
  const { coins, dmgLevel, luckLevel, speedLevel } = useGameStore();

  const levelMap = {
    damage: dmgLevel,
    luck: luckLevel,
    speed: speedLevel,
  };

  const currentLevel = levelMap[type];
  const cost = calcUpgradeCost(UPGRADE_BASE_COST, currentLevel);
  const canAfford = coins >= cost;

  return (
    <div
      className={`game-card p-4 flex flex-col gap-3 transition-opacity ${isLocked ? "opacity-50" : ""}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{icon}</span>
          <div>
            <p className="text-[#f0f0f5] text-sm font-semibold">{label}</p>
            <p className="text-[#9090a8] text-xs">{description}</p>
          </div>
        </div>
        {currentLevel > 0 && (
          <span className="text-xs bg-[#0f0f13] border border-[#2a2a3a] rounded px-2 py-0.5 text-[#5a5a72]">
            Nv.{currentLevel}
          </span>
        )}
      </div>

      <button
        onClick={() => onBuy(type)}
        disabled={isLocked || !canAfford || isLoading}
        className={`
          w-full py-2 rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-2
          ${
            isLocked
              ? "bg-[#0f0f13] text-[#5a5a72] cursor-not-allowed border border-[#2a2a3a]"
              : canAfford
                ? "bg-[#e63946] hover:bg-[#c1121f] text-white cursor-pointer"
                : "bg-[#0f0f13] text-[#5a5a72] cursor-not-allowed border border-[#2a2a3a]"
          }
        `}
      >
        {isLocked ? (
          <>🔒 Disponível no descanso</>
        ) : isLoading ? (
          <>Comprando...</>
        ) : (
          <>
            <span>🪙</span> {cost} moedas
          </>
        )}
      </button>
    </div>
  );
}
