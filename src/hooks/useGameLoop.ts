import { useEffect, useRef } from "react";
import { useGameStore } from "@/store/gameStore";
import { usePomodoroStore } from "@/store/pomodoroStore";
import { calcAttackInterval } from "@/lib/utils";

export function useGameLoop() {
  const { phase, isRunning } = usePomodoroStore();
  const { damage, speed, speedLevel, takeDamage, killEnemy } = useGameStore();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (phase !== "FOCUS" || !isRunning) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    const attackInterval = calcAttackInterval(speed, speedLevel);

    intervalRef.current = setInterval(() => {
      const currentHp = useGameStore.getState().enemyHp;
      const currentDamage = useGameStore.getState().damage;

      if (currentHp <= 0) {
        killEnemy();
        return;
      }

      takeDamage(currentDamage);

      if (useGameStore.getState().enemyHp <= 0) {
        killEnemy();
      }
    }, attackInterval);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [phase, isRunning, speed, speedLevel, damage]);
}
