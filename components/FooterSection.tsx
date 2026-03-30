"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import BrandMark from "@/components/BrandMark";

type FooterSectionProps = {
  locale: string;
  isRtl: boolean;
  artistName: string;
  tagline: string;
  navTitle: string;
  socialTitle: string;
  emailLabel: string;
  emailValue: string;
  instagramLabel: string;
  behanceLabel: string;
  facebookLabel: string;
  instagramHandle: string;
  behanceHandle: string;
  facebookHandle: string;
  rights: string;
  navLabels: {
    home: string;
    works: string;
    about: string;
    contact: string;
  };
};

export default function FooterSection({
  locale,
  isRtl,
  artistName,
  tagline,
  navTitle,
  socialTitle,
  emailLabel,
  emailValue,
  instagramLabel,
  behanceLabel,
  facebookLabel,
  instagramHandle,
  behanceHandle,
  facebookHandle,
  rights,
  navLabels
}: FooterSectionProps) {
  const align = isRtl ? "md:text-right md:items-end" : "md:text-left md:items-start";

  return (
    <footer className="border-t border-black/10 bg-neutral-50/70 px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto w-full max-w-[1400px]"
      >
        <div className="grid gap-10 text-center md:grid-cols-3 md:items-start md:text-left">
          <div className={`flex flex-col items-center gap-4 ${align}`}>
            <BrandMark locale={locale} label={artistName} textClassName="text-2xl" />
            <p className="max-w-sm text-sm leading-relaxed text-ink/65">{tagline}</p>
            <p className="text-xs uppercase tracking-[0.22em] text-ink/45">{emailLabel}</p>
            <a href={`mailto:${emailValue}`} className="link-underline text-sm text-ink/80">
              {emailValue}
            </a>
          </div>

          <div className={`flex flex-col items-center gap-4 ${align}`}>
            <p className="text-xs uppercase tracking-[0.25em] text-ink/45">{navTitle}</p>
            <div className="flex flex-col gap-3 text-sm text-ink/80">
              <Link className="link-underline" href={`/${locale}`}>
                {navLabels.home}
              </Link>
              <Link className="link-underline" href={`/${locale}#works`}>
                {navLabels.works}
              </Link>
              <Link className="link-underline" href={`/${locale}#about`}>
                {navLabels.about}
              </Link>
              <Link className="link-underline" href={`/${locale}#contact`}>
                {navLabels.contact}
              </Link>
            </div>
          </div>

          <div className={`flex flex-col items-center gap-4 ${align}`}>
            <p className="text-xs uppercase tracking-[0.25em] text-ink/45">{socialTitle}</p>
            <div className="flex flex-col gap-3 text-sm text-ink/80">
              <Link
                href="https://instagram.com/nadiachellaoui.art"
                target="_blank"
                rel="noreferrer"
                className="link-underline transition-all duration-300 hover:-translate-y-0.5 hover:opacity-75"
              >
                {instagramLabel} {instagramHandle}
              </Link>
              <Link
                href="https://www.behance.net/nadiachellaoui"
                target="_blank"
                rel="noreferrer"
                className="link-underline transition-all duration-300 hover:-translate-y-0.5 hover:opacity-75"
              >
                {behanceLabel} {behanceHandle}
              </Link>
              <Link
                href="https://facebook.com/nadiachellaoui"
                target="_blank"
                rel="noreferrer"
                className="link-underline transition-all duration-300 hover:-translate-y-0.5 hover:opacity-75"
              >
                {facebookLabel} {facebookHandle}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-black/10 pt-6 text-center text-xs text-ink/55">{rights}</div>
      </motion.div>
    </footer>
  );
}
