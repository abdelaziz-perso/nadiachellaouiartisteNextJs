import Image from "next/image";

type ArtworkCardProps = {
  imageSrc: string;
  imageAlt: string;
  label: string;
};

export default function ArtworkCard({ imageSrc, imageAlt, label }: ArtworkCardProps) {
  return (
    <article className="group cursor-pointer">
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-200">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 20vw"
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.04]"
        />
      </div>
      <p className="pt-4 text-xs uppercase tracking-[0.26em] text-neutral-800 sm:text-sm">{label}</p>
    </article>
  );
}
