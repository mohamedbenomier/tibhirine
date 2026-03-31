import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isValidLocale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";
import { HeroSection } from "@/components/sections/hero-section";
import { RaceInfoSection } from "@/components/sections/race-info-section";
import { RulesSection } from "@/components/sections/rules-section";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dict = await getDictionary(locale);

  return (
    <>
      <HeroSection locale={locale} dict={dict} />
      <RaceInfoSection dict={dict} />
      <RulesSection />
    </>
  );
}