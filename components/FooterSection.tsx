"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import BrandMark from "@/components/BrandMark";
import { FacebookIcon, InstagramIcon, WebsiteIcon } from "@/components/SocialIcons";

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
  facebookLabel: string;
  instagramHandle: string;
  facebookHandle: string;
  rights: string;
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
  facebookLabel,
  instagramHandle,
  facebookHandle,
  rights
}: FooterSectionProps) {
  const align = isRtl ? "md:text-right md:items-end" : "md:text-left md:items-start";
  const footerNavItems = [
    { label: "Series", href: `/${locale}/artworks` },
    { label: "Exhibitions", href: `/${locale}/exhibitions` },
    { label: "Art fairs", href: `/${locale}/art-fairs` },
    { label: "CV", href: `/${locale}/cv` },
    { label: "ABOUT", href: `/${locale}/nadia-chellaoui` },
    { label: "Bibliography", href: `/${locale}/bibliography` },
    { label: "Press", href: `/${locale}/press` },
    { label: "CONTACT", href: `/${locale}/contact` }
  ];

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
            <BrandMark locale={locale} label={artistName} textClassName="text-2xl text-ink" />
            <p className="max-w-sm text-sm leading-relaxed text-ink/65">{tagline}</p>
            <p className="text-xs uppercase tracking-[0.22em] text-ink/45">{emailLabel}</p>
            <a href={`mailto:${emailValue}`} className="link-underline text-sm text-ink/80">
              {emailValue}
            </a>
          </div>

          <div className={`flex flex-col items-center gap-4 ${align}`}>
            <p className="text-xs uppercase tracking-[0.25em] text-ink/45">{navTitle}</p>
            <div className="grid grid-cols-1 gap-x-8 gap-y-3 text-sm text-ink/80 sm:grid-cols-2">
              {footerNavItems.map((item) => (
                <Link key={item.href} className="link-underline" href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className={`flex flex-col items-center gap-4 ${align}`}>
            <p className="text-xs uppercase tracking-[0.25em] text-ink/45">{socialTitle}</p>
            <div className="flex items-center gap-3 text-sm text-ink/80">
              <Link
                href="https://instagram.com/nadiachellaoui_artiste"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-black/20 p-2 transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/5 hover:opacity-90"
                aria-label={`${instagramLabel} ${instagramHandle}`}
              >
                <InstagramIcon className="h-4 w-4" />
              </Link>
              <Link
                href="https://web.facebook.com/nadia.chellaoui.artiste/?_rdc=1&_rdr#"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-black/20 p-2 transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/5 hover:opacity-90"
                aria-label={`${facebookLabel} ${facebookHandle}`}
              >
                <FacebookIcon className="h-4 w-4" />
              </Link>
              <Link
                href="https://nadiachellaoui.com/en/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-black/20 p-2 transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/5 hover:opacity-90"
                aria-label="Website nadiachellaoui.com"
              >
                <WebsiteIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-black/10 pt-6 text-center text-xs text-ink/55">{rights}</div>
      </motion.div>
    </footer>
  );
}
