import type { Dictionary, Locale } from "@/types";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  fr: () => import("@/messages/fr.json").then((m) => m.default),
  en: () => import("@/messages/en.json").then((m) => m.default),
  ar: () => import("@/messages/ar.json").then((m) => m.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}