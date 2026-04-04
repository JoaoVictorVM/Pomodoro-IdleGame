"use client";

import { useGameStore } from "@/store/gameStore";
import { calcUpgradeCost } from "@/lib/utils";
import { UPGRADE_BASE_COST } from "@/lib/constants";
import { UpgradeType } from "@/types";
import { Coins, Lock, LucideIcon } from "lucide-react";

interface Props {
  type: UpgradeType;
  label: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  isLocked: boolean;
  onBuy: (type: UpgradeType) => void;
  isLoading: boolean;
}

export function UpgradeCard({
  type,
  label,
  description,
  icon: Icon,
  iconColor,
  iconBg,
  isLocked,
  onBuy,
  isLoading,
}: Props) {
  const { coins, dmgLevel, luckLevel, speedLevel } = useGameStore();

  const levelMap = { damage: dmgLevel, luck: luckLevel, speed: speedLevel };
  const currentLevel = levelMap[type];
  const cost = calcUpgradeCost(UPGRADE_BASE_COST, currentLevel);
  const canAfford = coins >= cost;

  return (
    <div className="flex items-center justify-between gap-3 py-2.5 border-b border-[#434C5E] last:border-0">
      <div className="flex items-center gap-3">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: iconBg }}
        >
          <Icon size={15} style={{ color: iconColor }} />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#ECEFF4] font-medium">{label}</span>
            {currentLevel > 0 && (
              <span className="text-xs bg-[#2E3440] border border-[#3B4252] rounded px-1.5 py-0.5 text-[#4C566A]">
                Nv.{currentLevel}
              </span>
            )}
          </div>
          <span className="text-xs text-[#4C566A]">{description}</span>
        </div>
      </div>

      <button
        onClick={() => onBuy(type)}
        disabled={isLocked || !canAfford || isLoading}
        className={`
          flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:cursor-pointer text-xs font-medium transition-all flex-shrink-0
          ${
            isLocked
              ? "bg-[#2E3440] text-[#4C566A] cursor-not-allowed"
              : canAfford
                ? "bg-[#5E81AC] hover:bg-[#81A1C1] text-[#ECEFF4]"
                : "bg-[#2E3440] text-[#4C566A] cursor-not-allowed"
          }
        `}
      >
        {isLoading ? (
          <>...</>
        ) : (
          <>
            <Coins size={11} /> {cost}
          </>
        )}
      </button>
    </div>
  );
}
