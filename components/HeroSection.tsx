"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type HeroSectionProps = {
  locale: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaWorks: string;
  ctaContact: string;
  scrollLabel: string;
};

export default function HeroSection({
  locale,
  eyebrow,
  title,
  subtitle,
  ctaWorks,
  ctaContact,
  scrollLabel
}: HeroSectionProps) {
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section ref={heroRef} className="space-y-6 sm:space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden rounded-2xl ring-1 ring-black/10"
      >
        <div className="relative aspect-[16/10] w-full bg-ink sm:aspect-[21/8]">
          <motion.div
            style={{ y: imageY }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 14, ease: "linear" }}
            className="absolute inset-0"
          >
            <Image
              src="https://nadiachellaoui.com/wp-content/uploads/2025/08/Photo-7-copie-scaled-1.webp"
              alt="Nadia Chellaoui artwork"
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
              priority
              quality={88}
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="text-xs uppercase tracking-[0.35em] text-ink/60"
      >
        {eyebrow}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl text-balance font-display text-3xl leading-tight sm:text-5xl lg:text-6xl"
      >
        {title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl text-base leading-[1.9] text-ink/75 sm:text-lg"
      >
        {subtitle}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
      >
        <Link
          href={`/${locale}#works`}
          className="btn-premium w-full rounded-full bg-ink px-6 py-3 text-center text-sm uppercase tracking-[0.2em] text-ivory sm:w-auto"
        >
          {ctaWorks}
        </Link>
        <Link
          href={`/${locale}#contact`}
          className="btn-premium w-full rounded-full border border-ink/20 px-6 py-3 text-center text-sm uppercase tracking-[0.2em] sm:w-auto"
        >
          {ctaContact}
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.45 }}
        className="pt-2"
      >
        <a
          href={`/${locale}#works`}
          className="hero-scroll-indicator inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-ink/55"
          aria-label={scrollLabel}
        >
          <span>{scrollLabel}</span>
          <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4">
            <path d="M5 8l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
