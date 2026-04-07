"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

type SeriesGalleryProps = {
  series: string;
  imageFiles: string[];
  locale: string;
};

const INITIAL_BATCH = 8;
const LOAD_MORE_BATCH = 8;

export default function SeriesGallery({ series, imageFiles, locale }: SeriesGalleryProps) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_BATCH);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const visibleImages = useMemo(() => imageFiles.slice(0, visibleCount), [imageFiles, visibleCount]);
  const hasMore = visibleCount < imageFiles.length;
  const loadMoreTriggerRef = useRef<HTMLDivElement | null>(null);
  const labels =
    locale === "fr"
      ? { more: "Voir plus", close: "Fermer", previous: "Précédent", next: "Suivant", open: "Ouvrir" }
      : locale === "ar"
        ? { more: "عرض المزيد", close: "إغلاق", previous: "السابق", next: "التالي", open: "فتح" }
        : { more: "Load more", close: "Close", previous: "Previous", next: "Next", open: "Open" };

  useEffect(() => {
    if (activeIndex === null) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      } else if (event.key === "ArrowRight") {
        setActiveIndex((prev) => (prev === null ? null : (prev + 1) % imageFiles.length));
      } else if (event.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev === null ? null : (prev - 1 + imageFiles.length) % imageFiles.length));
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, imageFiles.length]);

  useEffect(() => {
    if (!hasMore || !loadMoreTriggerRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + LOAD_MORE_BATCH, imageFiles.length));
        }
      },
      { rootMargin: "300px 0px" }
    );

    observer.observe(loadMoreTriggerRef.current);
    return () => observer.disconnect();
  }, [hasMore, imageFiles.length]);

  return (
    <section className="pt-10">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visibleImages.map((file, index) => (
          <article key={file} className="overflow-hidden bg-neutral-200 [content-visibility:auto] [contain-intrinsic-size:420px]">
            <button type="button" onClick={() => setActiveIndex(index)} className="relative block aspect-[3/4] w-full text-left">
              <Image
                src={`/${series}/${file}`}
                alt={`${series} - ${file}`}
                fill
                quality={70}
                priority={index < 2}
                loading={index < 2 ? "eager" : "lazy"}
                decoding="async"
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                className="object-cover"
              />
              <span className="absolute bottom-3 right-3 rounded-full bg-black/55 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white">
                {labels.open}
              </span>
            </button>
          </article>
        ))}
      </div>

      {hasMore ? (
        <div ref={loadMoreTriggerRef} className="flex justify-center pt-8">
          <button
            type="button"
            onClick={() => setVisibleCount((prev) => Math.min(prev + LOAD_MORE_BATCH, imageFiles.length))}
            className="rounded-full border border-neutral-300 px-6 py-3 text-xs uppercase tracking-[0.18em] text-neutral-800 transition-colors hover:bg-neutral-100"
          >
            {labels.more}
          </button>
        </div>
      ) : null}

      {activeIndex !== null ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" role="dialog" aria-modal="true">
          <button type="button" onClick={() => setActiveIndex(null)} className="absolute right-4 top-4 text-xs uppercase tracking-[0.2em] text-white/90">
            {labels.close}
          </button>
          <button
            type="button"
            onClick={() => setActiveIndex((prev) => (prev === null ? null : (prev - 1 + imageFiles.length) % imageFiles.length))}
            className="absolute left-3 text-white/90"
            aria-label={labels.previous}
          >
            ‹
          </button>
          <div className="relative h-[85vh] w-full max-w-5xl">
            <Image
              src={`/${series}/${imageFiles[activeIndex]}`}
              alt={`${series} - ${imageFiles[activeIndex]}`}
              fill
              quality={75}
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
          <button
            type="button"
            onClick={() => setActiveIndex((prev) => (prev === null ? null : (prev + 1) % imageFiles.length))}
            className="absolute right-3 text-white/90"
            aria-label={labels.next}
          >
            ›
          </button>
        </div>
      ) : null}
    </section>
  );
}
