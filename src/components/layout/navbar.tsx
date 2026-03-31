import Link from "next/link";
import { Trophy } from "lucide-react";
import { LanguageSwitcher } from "./language-switcher";
import { navLinkKeys } from "@/lib/constants/nav-links";
import type { Dictionary, Locale } from "@/types";

export function Navbar({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/50 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#0B2A4A_0%,#2DFF9B_100%)] text-white shadow-lg">
            <Trophy className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold leading-none">Tibhirine 10KM</p>
            <p className="text-xs text-slate-500">Draa Essamar • Médéa</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinkKeys.map((item) => (
            <Link
              key={item.key}
              href={`/${locale}${item.href}`}
              className="text-sm font-medium text-slate-700 transition hover:text-[#0B2A4A]"
            >
              {dict.nav[item.key]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} />
          <Link
            href={`/${locale}/register`}
            className="rounded-full bg-[linear-gradient(135deg,#0B2A4A_0%,#2DFF9B_100%)] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(45,255,155,0.25)] transition hover:scale-[1.02]"
          >
            {dict.nav.registerNow}
          </Link>
        </div>
      </div>
    </header>
  );
}