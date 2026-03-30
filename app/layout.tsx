import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Inter, Noto_Naskh_Arabic, Playfair_Display } from "next/font/google";
import "./globals.css";
import { i18n, isValidLocale } from "@/lib/i18n";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  display: "swap"
});

const notoArabic = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Nadia Chellaoui Artiste",
  description: "Portfolio d'artiste contemporain",
  icons: {
    icon: "/icon",
    apple: "/icon"
  }
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("locale")?.value;
  const locale = isValidLocale(localeCookie ?? "") ? localeCookie : i18n.defaultLocale;
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir}>
      <body className={`${inter.variable} ${playfair.variable} ${notoArabic.variable}`}>{children}</body>
    </html>
  );
}
