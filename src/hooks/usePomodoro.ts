import { useEffect, useRef } from "react";
import { usePomodoroStore } from "@/store/pomodoroStore";

export function usePomodoro() {
  const { isRunning, phase } = usePomodoroStore();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    if (!isRunning) return;

    intervalRef.current = setInterval(() => {
      const currentTimeLeft = usePomodoroStore.getState().timeLeft;

      if (currentTimeLeft <= 1) {
        clearInterval(intervalRef.current!);
        usePomodoroStore.getState().nextPhase();
      } else {
        usePomodoroStore.getState().tick();
      }
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, phase]);
}
