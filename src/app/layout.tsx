import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tibhirine 10KM Race",
  description: "Tibhirine 10KM Race – Draa Essamar, Médéa, Algeria",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}