"use client";

import { useEffect, useState } from "react";
import { useDamageStore } from "@/store/damageStore";
import Image from "next/image";

export function Hero() {
  const { events } = useDamageStore();
  const [attacking, setAttacking] = useState(false);

  useEffect(() => {
    if (events.length === 0) return;
    setAttacking(true);
    const timer = setTimeout(() => setAttacking(false), 150);
    return () => clearTimeout(timer);
  }, [events.length]);

  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-24 h-24 flex items-center justify-center transition-transform duration-150 ${
          attacking ? "translate-x-3" : "translate-x-0"
        }`}
      >
        <Image
          src="/images/hero.png"
          alt="Herói"
          width={96}
          height={96}
          className="object-contain drop-shadow-lg"
          priority
        />
      </div>
    </div>
  );
}
