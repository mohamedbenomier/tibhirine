"use client";

import { useCountdown } from "@/hooks/use-countdown";
import type { Dictionary } from "@/types";

export function CountdownTimer({
  targetDate,
  dict,
}: {
  targetDate: string;
  dict: Dictionary;
}) {
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  const items = [
    { label: dict.common.days, value: days },
    { label: dict.common.hours, value: hours },
    { label: dict.common.minutes, value: minutes },
    { label: dict.common.seconds, value: seconds },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-[24px] border border-white/20 bg-white/15 p-5 text-center text-white backdrop-blur-xl transition hover:-translate-y-1"
        >
          <div className="animate-pulse text-3xl font-black md:text-5xl">
            {String(item.value).padStart(2, "0")}
          </div>
          <div className="mt-2 text-xs uppercase tracking-[0.3em] text-white/75">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}