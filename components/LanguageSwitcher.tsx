"use client";

import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { i18n, type Locale } from "@/lib/i18n";

type LanguageSwitcherProps = {
  locale: Locale;
};

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

  function handleLocaleChange(nextLocale: Locale) {
    if (!pathname) {
      return;
    }

    const segments = pathname.split("/").filter(Boolean);
    if (segments.length > 0) {
      segments[0] = nextLocale;
    }

    const nextPath = `/${segments.join("/")}`;
    localStorage.setItem("locale", nextLocale);
    router.push(nextPath);
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-neutral-300 bg-white/70 p-1 backdrop-blur sm:gap-1.5">
      {i18n.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => handleLocaleChange(loc)}
          className={`btn-premium relative overflow-hidden rounded-full px-2 py-1 text-[10px] uppercase tracking-[0.16em] transition-all duration-200 ease-in-out sm:px-2.5 sm:text-[11px] ${
            loc === locale ? "text-white" : "text-neutral-700 hover:bg-black/5 hover:text-neutral-900"
          }`}
          aria-pressed={loc === locale}
        >
          {loc === locale ? (
            <motion.span
              layoutId="locale-pill"
              className="absolute inset-0 rounded-full bg-neutral-900"
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            />
          ) : null}
          <motion.span
            key={`${loc}-${locale}`}
            initial={{ opacity: 0.55 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="relative z-10"
          >
          {loc}
          </motion.span>
        </button>
      ))}
    </div>
  );
}
