import { notFound } from "next/navigation";
import ArtworkGrid from "@/components/artworks/ArtworkGrid";
import { isValidLocale } from "@/lib/i18n";

const artworkCategories = [
  {
    label: "Painting",
    imageSrc: "https://images.unsplash.com/photo-1578301978018-3005759f48f7?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Colorful abstract painting details"
  },
  {
    label: "Sculpture",
    imageSrc: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Modern sculpture in neutral gallery"
  },
  {
    label: "Photography",
    imageSrc: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Photography print displayed in art space"
  },
  {
    label: "Video",
    imageSrc: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Video art projection setup in dark room"
  },
  {
    label: "Digital",
    imageSrc: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Digital artwork shown on modern display"
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

  return (
    <div className="min-h-screen bg-[#f5f5f5] px-5 pb-12 pt-6 text-neutral-900 sm:px-8 lg:px-12 xl:px-16">
      <section className="pt-4 sm:pt-6">
        <h1 className="pl-1 text-xl uppercase tracking-[0.45em] text-neutral-900 sm:text-2xl">ARTWORKS</h1>
      </section>

      <section className="pt-10">
        <ArtworkGrid items={artworkCategories} />
      </section>
    </div>
  );
}
