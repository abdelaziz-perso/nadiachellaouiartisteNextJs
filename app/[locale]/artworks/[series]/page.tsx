import { readdir } from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { i18n, isValidLocale } from "@/lib/i18n";
import SeriesGallery from "@/components/artworks/SeriesGallery";

type SeriesPageProps = {
  params: Promise<{ locale: string; series: string }>;
};

const allowedSeries = new Set(["serie1", "serie2", "serie3", "serie4", "serie5"]);
const seriesSlugs = ["serie1", "serie2", "serie3", "serie4", "serie5"] as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return i18n.locales.flatMap((locale) => seriesSlugs.map((series) => ({ locale, series })));
}

export default async function SeriesPage({ params }: SeriesPageProps) {
  const { locale, series } = await params;

  if (!isValidLocale(locale) || !allowedSeries.has(series)) {
    notFound();
  }

  const directoryPath = path.join(process.cwd(), "public", series);
  const files = await readdir(directoryPath);
  const imageFiles = files
    .filter((file) => /\.(jpe?g|png|webp)$/i.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));

  return (
    <div className="min-h-screen bg-[#f5f5f5] px-5 pb-12 pt-6 text-neutral-900 sm:px-8 lg:px-12 xl:px-16">
      <section className="flex items-center justify-between pt-4 sm:pt-6">
        <h1 className="pl-1 text-xl uppercase tracking-[0.35em] text-neutral-900 sm:text-2xl">{series}</h1>
        <Link href={`/${locale}/artworks`} className="text-xs uppercase tracking-[0.2em] text-neutral-700 hover:text-neutral-900">
          Back to series
        </Link>
      </section>

      <SeriesGallery series={series} imageFiles={imageFiles} locale={locale} />
    </div>
  );
}
