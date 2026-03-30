"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "@/lib/i18n";

type LocaleSyncProps = {
  locale: Locale;
  locales: readonly Locale[];
};

export default function LocaleSync({ locale, locales }: LocaleSyncProps) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  useEffect(() => {
    if (!pathname) {
      return;
    }

    const storedLocale = localStorage.getItem("locale");
    if (!storedLocale || !locales.includes(storedLocale as Locale)) {
      localStorage.setItem("locale", locale);
      return;
    }

    if (storedLocale === locale) {
      return;
    }

    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) {
      return;
    }

    segments[0] = storedLocale;
    router.replace(`/${segments.join("/")}`);
  }, [locale, locales, pathname, router]);

  return null;
}
