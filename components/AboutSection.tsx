"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type AboutSectionProps = {
  title: string;
  eyebrow: string;
  quote: string;
  bio: string;
  portraitAlt: string;
  isRtl: boolean;
};

export default function AboutSection({
  title,
  eyebrow,
  quote,
  bio,
  portraitAlt,
  isRtl
}: AboutSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  // Slow vertical drift to create gallery-style depth without distracting from text.
  const imageY = useTransform(scrollYProgress, [0, 1], ["-4%", "6%"]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="scroll-mt-28 rounded-3xl border border-black/10 bg-gradient-to-b from-white/70 to-white/40 px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-14"
    >
      <div className="mb-7 flex items-center gap-3 sm:mb-10">
        <span className="h-px flex-1 bg-black/15" />
        <p className="text-[10px] uppercase tracking-[0.35em] text-ink/55 sm:text-xs">{eyebrow}</p>
        <span className="h-px flex-1 bg-black/15" />
      </div>

      <div className="grid items-center gap-7 lg:grid-cols-2 lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className={`relative order-2 overflow-hidden rounded-2xl ring-1 ring-black/10 lg:order-1 ${
            isRtl ? "lg:col-start-2" : ""
          }`}
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <motion.div style={{ y: imageY }} className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80"
                alt={portraitAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className={`order-1 space-y-5 lg:order-2 ${isRtl ? "text-right lg:col-start-1 lg:row-start-1" : "text-left"}`}
        >
          <h2 className="font-display text-3xl leading-tight sm:text-5xl">{title}</h2>
          <p className="max-w-xl text-pretty font-display text-2xl leading-[1.45] text-ink/85 sm:text-3xl">
            {quote}
          </p>
          <p className="max-w-xl text-pretty text-sm leading-[1.95] text-ink/70 sm:text-base">{bio}</p>
        </motion.div>
      </div>
    </section>
  );
}
