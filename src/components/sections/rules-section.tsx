import { Shield, HeartPulse, CreditCard } from "lucide-react";
import { GlassCard } from "@/components/shared/glass-card";

const items = [
  {
    title: "Inscription sécurisée",
    text: "Validation, preuve de paiement et contrôle anti-duplication.",
    icon: Shield,
  },
  {
    title: "Suivi médical",
    text: "Champ santé dédié avec affichage conditionnel des informations médicales.",
    icon: HeartPulse,
  },
  {
    title: "Paiement encadré",
    text: "CCP, BaridiMob et RIP avec dépôt de justificatif.",
    icon: CreditCard,
  },
];

export function RulesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6">
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <GlassCard key={item.title} className="transition hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#0B2A4A_0%,#2DFF9B_100%)] text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-[#0B2A4A]">{item.title}</h3>
              <p className="mt-3 text-slate-600">{item.text}</p>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}