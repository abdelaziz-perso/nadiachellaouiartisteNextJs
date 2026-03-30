import ArtworkCard from "@/components/artworks/ArtworkCard";

type ArtworkItem = {
  label: string;
  imageSrc: string;
  imageAlt: string;
};

type ArtworkGridProps = {
  items: ArtworkItem[];
};

export default function ArtworkGrid({ items }: ArtworkGridProps) {
  return (
    <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {items.map((item) => (
        <ArtworkCard key={item.label} imageSrc={item.imageSrc} imageAlt={item.imageAlt} label={item.label} />
      ))}
    </section>
  );
}
