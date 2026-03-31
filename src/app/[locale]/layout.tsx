import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { redirect } from "next/navigation";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { defaultLocale, getDirection, isValidLocale } from "@/lib/i18n/config";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    redirect(`/${defaultLocale}`);
  }

  const messages = await getDictionary(locale);
  const dir = getDirection(locale);

  return (
    <div
      lang={locale}
      dir={dir}
      className={`${inter.variable} min-h-screen bg-[#F5F7FA] font-sans text-[#0B2A4A] antialiased`}
    >
      <NextIntlClientProvider locale={locale} messages={messages}>
        <div className="relative min-h-screen overflow-x-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(45,255,155,0.18),_transparent_30%),linear-gradient(180deg,_#f8fbff_0%,_#f5f7fa_100%)]" />
          <Navbar locale={locale} dict={messages} />
          <main>{children}</main>
          <Footer dict={messages} />
        </div>
      </NextIntlClientProvider>
    </div>
  );
}