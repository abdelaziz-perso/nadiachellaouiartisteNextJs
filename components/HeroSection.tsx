"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
  const slides = [
    "https://content.jdmagicbox.com/comp/chandigarh/k2/0172px172.x172.180806135241.g6k2/catalogue/kreative-bunker-chandigarh-chandigarh-wall-paintings-artists-brhdqw3kwc.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb7KTaSSrqHn2UjHfXIEkyehD-iZweartKng&s",
    "https://static-assets.artlogic.net/w_1200,c_limit,f_auto,fl_lossy,q_auto/ws-hesseflatow/usr/exhibitions/images/events/93/hesse-flatow-1-1.jpg",
    "https://nadiachellaoui.com/wp-content/uploads/2025/08/Photo-7-copie-scaled-1.webp"
  ];

  const heroRef = useRef<HTMLElement | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [slides.length]);

  return (
    <section ref={heroRef} className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[86svh] min-h-[620px] w-screen overflow-hidden bg-black"
      >
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[activeSlide]}
              style={{ y: imageY }}
              initial={{ opacity: 0.2, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1.03 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={slides[activeSlide]}
                alt="Nadia Chellaoui artwork"
                fill
                sizes="100vw"
                className="object-cover"
                priority
                quality={75}
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/35" />
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10">
          <div className="mx-auto w-full max-w-6xl px-5 pb-10 sm:px-8 sm:pb-14 lg:px-14">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs uppercase tracking-[0.4em] text-white/75"
            >
              {eyebrow} / CURRENT
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 max-w-5xl text-balance font-display text-3xl leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-3xl text-base leading-[1.9] text-white/80 sm:text-lg"
            >
              {subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.42 }}
              className="mt-4 text-[11px] uppercase tracking-[0.25em] text-white/70"
            >
              Casablanca, Morocco
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
            >
              <Link
                href={`/${locale}#works`}
                className="btn-premium w-full rounded-full border border-white/35 bg-white/10 px-6 py-3 text-center text-sm uppercase tracking-[0.2em] text-white backdrop-blur-sm sm:w-auto"
              >
                {ctaWorks}
              </Link>
              <Link
                href={`/${locale}#contact`}
                className="btn-premium w-full rounded-full border border-white/25 px-6 py-3 text-center text-sm uppercase tracking-[0.2em] text-white/90 sm:w-auto"
              >
                {ctaContact}
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.45 }}
              className="pt-6"
            >
              <a
                href={`/${locale}#works`}
                className="hero-scroll-indicator inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/70"
                aria-label={scrollLabel}
              >
                <span>{scrollLabel}</span>
                <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4">
                  <path d="M5 8l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.4" />
                </svg>
              </a>
            </motion.div>

            <div className="mt-6 flex items-center gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-1.5 w-7 rounded-full transition-all duration-300 ${
                    index === activeSlide ? "bg-white" : "bg-white/35 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
