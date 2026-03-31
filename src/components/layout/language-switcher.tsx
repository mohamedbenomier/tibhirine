"use client";

import { Globe } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { locales } from "@/lib/i18n/config";
import type { Locale } from "@/types";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (nextLocale: Locale) => {
    const segments = pathname.split("/").filter(Boolean);

    if (segments.length === 0) {
      router.push(`/${nextLocale}`);
      return;
    }

    segments[0] = nextLocale;
    router.push(`/${segments.join("/")}`);
  };

  return (
    <div className="flex items-center gap-2 rounded-full border border-white/30 bg-white/60 px-3 py-2 shadow-[0_10px_30px_rgba(11,42,74,0.08)] backdrop-blur-xl">
      <Globe className="h-4 w-4 text-[#0B2A4A]" />
      <select
        value={locale}
        onChange={(e) => switchLocale(e.target.value as Locale)}
        className="bg-transparent text-sm font-medium outline-none"
      >
        {locales.map((item) => (
          <option key={item} value={item}>
            {item.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}