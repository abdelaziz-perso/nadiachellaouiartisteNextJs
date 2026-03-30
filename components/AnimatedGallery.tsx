"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

type GalleryItem = {
  src: string;
  alt: string;
  title: string;
};

type AnimatedGalleryProps = {
  items: GalleryItem[];
  openLabel: string;
  closeLabel: string;
  previousLabel: string;
  nextLabel: string;
};

export default function AnimatedGallery({
  items,
  openLabel,
  closeLabel,
  previousLabel,
  nextLabel
}: AnimatedGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrevious = useCallback(() => {
    if (activeIndex === null) {
      return;
    }
    setActiveIndex((activeIndex - 1 + items.length) % items.length);
  }, [activeIndex, items.length]);
  const showNext = useCallback(() => {
    if (activeIndex === null) {
      return;
    }
    setActiveIndex((activeIndex + 1) % items.length);
  }, [activeIndex, items.length]);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      } else if (event.key === "ArrowLeft") {
        showPrevious();
      } else if (event.key === "ArrowRight") {
        showNext();
      }
    };

    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [activeIndex, close, showNext, showPrevious]);

  return (
    <>
      <div className="columns-1 gap-4 space-y-4 sm:columns-2 sm:gap-5 sm:space-y-5 lg:columns-3 lg:gap-6 lg:space-y-6">
      {items.map((item, index) => (
        <motion.article
          key={`${item.src}-${index}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, delay: index * 0.08 }}
            className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 sm:mb-5 lg:mb-6"
        >
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className="relative block w-full touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
              aria-label={`${openLabel}: ${item.title}`}
            >
          <div className={`relative ${index % 3 === 0 ? "aspect-[4/5]" : index % 3 === 1 ? "aspect-[4/6]" : "aspect-[5/4]"}`}>
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
            />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="font-display text-lg text-white">{item.title}</p>
                </div>
          </div>
            </button>
        </motion.article>
      ))}
    </div>

      <AnimatePresence>
        {activeIndex !== null ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-6xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={close}
                className="btn-premium absolute right-3 top-3 z-10 rounded-full bg-white/20 px-3 py-2 text-xs uppercase tracking-[0.2em] text-white backdrop-blur"
              >
                {closeLabel}
              </button>

              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl sm:aspect-[16/10]">
                <Image
                  src={items[activeIndex].src}
                  alt={items[activeIndex].alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 sm:p-8">
                  <p className="font-display text-2xl text-white sm:text-3xl">{items[activeIndex].title}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={showPrevious}
                className="btn-premium absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/20 px-3 py-2 text-xs uppercase tracking-[0.2em] text-white backdrop-blur sm:left-4"
                aria-label={previousLabel}
              >
                {previousLabel}
              </button>
              <button
                type="button"
                onClick={showNext}
                className="btn-premium absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/20 px-3 py-2 text-xs uppercase tracking-[0.2em] text-white backdrop-blur sm:right-4"
                aria-label={nextLabel}
              >
                {nextLabel}
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
