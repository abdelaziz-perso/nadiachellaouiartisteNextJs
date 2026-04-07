import Image from "next/image";
import Link from "next/link";

type ArtworkCardProps = {
  imageSrc: string;
  imageAlt: string;
  label: string;
  href: string;
};

export default function ArtworkCard({ imageSrc, imageAlt, label, href }: ArtworkCardProps) {
  return (
    <article className="group">
      <Link href={href} prefetch={false} className="block cursor-pointer" aria-label={`${label} - open gallery`}>
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-200">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            quality={70}
            loading="lazy"
            decoding="async"
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 20vw"
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-95 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4">
            <p className="text-xs uppercase tracking-[0.26em] text-white">{label}</p>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-black/20 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-white backdrop-blur-sm">
              View gallery
              <svg aria-hidden="true" viewBox="0 0 20 20" className="h-3.5 w-3.5">
                <path d="M7 5l6 5-6 5" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
