import type { Locale } from "@/types";

export const locales: Locale[] = ["fr", "en", "ar"];
export const defaultLocale: Locale = "fr";

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDirection(locale: Locale) {
  return locale === "ar" ? "rtl" : "ltr";
}