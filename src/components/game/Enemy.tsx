"use client";

import { useCallback } from "react";
import { useDamageStore } from "@/store/damageStore";
import { EnemyHealthBar } from "./EnemyHealthBar";
import { DamageNumber } from "./DamageNumber";
import Image from "next/image";

export function Enemy() {
  const { events, removeEvent } = useDamageStore();

  const handleDone = useCallback(
    (id: number) => {
      removeEvent(id);
    },
    [removeEvent],
  );

  return (
    <div className="relative flex flex-col items-center gap-2">
      <EnemyHealthBar />
      <div className="relative w-24 h-24 flex items-center justify-center">
        {events.map((event) => (
          <DamageNumber
            key={event.id}
            id={event.id}
            damage={event.damage}
            onDone={handleDone}
          />
        ))}
        <Image
          src="/images/enemy.png"
          alt="Inimigo"
          width={96}
          height={96}
          className="object-contain drop-shadow-lg"
          priority
        />
      </div>
    </div>
  );
}
