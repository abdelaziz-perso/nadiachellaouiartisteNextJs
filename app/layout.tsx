import type { Metadata } from "next";
import { Inter, Noto_Naskh_Arabic, Playfair_Display } from "next/font/google";
import "./globals.css";

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

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" dir="ltr">
      <body className={`${inter.variable} ${playfair.variable} ${notoArabic.variable}`}>{children}</body>
    </html>
  );
}
