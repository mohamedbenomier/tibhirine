import Link from "next/link";
import { MapPin, Timer } from "lucide-react";
import { CountdownTimer } from "./countdown-timer";
import type { Dictionary, Locale } from "@/types";

export function HeroSection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(11,42,74,0.92),rgba(11,42,74,0.7)),url('https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-xl">
            <Timer className="h-4 w-4" />
            {dict.hero.badge}
          </div>

          <h1 className="text-4xl font-black tracking-tight text-white md:text-7xl">
            {dict.hero.title}
          </h1>

          <div className="mt-4 flex items-center gap-2 text-lg text-white/85">
            <MapPin className="h-5 w-5 text-[#2DFF9B]" />
            <span>{dict.hero.location}</span>
          </div>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
            {dict.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={`/${locale}/register`}
              className="rounded-full bg-[linear-gradient(135deg,#0B2A4A_0%,#2DFF9B_100%)] px-6 py-3 font-semibold text-white shadow-[0_12px_30px_rgba(45,255,155,0.28)] transition hover:scale-[1.03]"
            >
              {dict.hero.cta}
            </Link>
            <Link
              href={`/${locale}/about`}
              className="rounded-full border border-white/25 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-xl transition hover:bg-white/20"
            >
              {dict.hero.secondary}
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <CountdownTimer targetDate="2026-06-20T08:00:00" dict={dict} />
        </div>
      </div>
    </section>
  );
}