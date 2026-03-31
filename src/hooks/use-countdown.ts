"use client";

import { useEffect, useMemo, useState } from "react";

export function useCountdown(targetDate: string) {
  const target = useMemo(() => new Date(targetDate).getTime(), [targetDate]);

  const [timeLeft, setTimeLeft] = useState(target - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(target - Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, [target]);

  const safe = Math.max(0, timeLeft);

  const days = Math.floor(safe / (1000 * 60 * 60 * 24));
  const hours = Math.floor((safe / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((safe / (1000 * 60)) % 60);
  const seconds = Math.floor((safe / 1000) % 60);

  return { days, hours, minutes, seconds, isFinished: safe <= 0 };
}