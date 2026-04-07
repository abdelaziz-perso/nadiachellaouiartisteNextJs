import { notFound } from "next/navigation";
import ArtworkGrid from "@/components/artworks/ArtworkGrid";
import { isValidLocale } from "@/lib/i18n";

const seriesCategories = [
  {
    label: "Serie 1",
    imageSrc: "/serie1/FullSizeRender.jpeg",
    imageAlt: "Serie 1 artwork",
    href: "/artworks/serie1"
  },
  {
    label: "Serie 2",
    imageSrc: "/serie2/IMG_1945.jpeg",
    imageAlt: "Serie 2 artwork",
    href: "/artworks/serie2"
  },
  {
    label: "Serie 3",
    imageSrc: "/serie3/IMG_1018.jpeg",
    imageAlt: "Serie 3 artwork",
    href: "/artworks/serie3"
  },
  {
    label: "Serie 4",
    imageSrc: "/serie4/IMG_1942.jpeg",
    imageAlt: "Serie 4 artwork",
    href: "/artworks/serie4"
  },
  {
    label: "Serie 5",
    imageSrc: "/serie5/IMG_2364.jpeg",
    imageAlt: "Serie 5 artwork",
    href: "/artworks/serie5"
  }
];

type ArtworksPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ArtworksPage({ params }: ArtworksPageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) {
    notFound();
  }
  const helperText =
    locale === "fr"
      ? "Cliquez sur une série pour ouvrir sa galerie complète."
      : locale === "ar"
        ? "انقر على أي سلسلة لفتح المعرض الكامل."
        : "Click any series to open the full gallery.";

  return (
    <div className="min-h-screen bg-[#f5f5f5] px-5 pb-12 pt-6 text-neutral-900 sm:px-8 lg:px-12 xl:px-16">
      <section className="space-y-3 pt-4 sm:pt-6">
        <h1 className="pl-1 text-xl uppercase tracking-[0.45em] text-neutral-900 sm:text-2xl">SERIES</h1>
        <p className={`pl-1 text-sm text-neutral-700 ${locale === "ar" ? "text-right" : ""}`}>{helperText}</p>
      </section>

      <section className="pt-10">
        <ArtworkGrid items={seriesCategories.map((item) => ({ ...item, href: `/${locale}${item.href}` }))} />
      </section>
    </div>
  );
}
