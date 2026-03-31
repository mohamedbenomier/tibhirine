import { GlassCard } from "@/components/shared/glass-card";
import type { Dictionary } from "@/types";

export function RaceInfoSection({ dict }: { dict: Dictionary }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <GlassCard>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2DFF9B]">
            {dict.raceInfo.distance}
          </p>
          <h2 className="mt-3 text-3xl font-black text-[#0B2A4A]">
            {dict.raceInfo.title}
          </h2>
          <p className="mt-4 max-w-2xl text-slate-600">
            {dict.raceInfo.description}
          </p>

          <div className="mt-6 overflow-hidden rounded-[24px]">
            <iframe
              title="Race map"
              src="https://www.google.com/maps?q=Draa%20Essamar%20M%C3%A9d%C3%A9a%20Alg%C3%A9rie&output=embed"
              className="h-[320px] w-full border-0"
              loading="lazy"
            />
          </div>
        </GlassCard>

        <GlassCard>
          <h3 className="text-xl font-bold text-[#0B2A4A]">
            {dict.raceInfo.rulesTitle}
          </h3>
          <div className="mt-4 space-y-3">
            {dict.raceInfo.rules.map((rule) => (
              <div
                key={rule}
                className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700"
              >
                {rule}
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}