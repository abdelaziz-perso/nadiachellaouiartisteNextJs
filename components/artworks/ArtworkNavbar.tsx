import Link from "next/link";

type ArtworkNavbarProps = {
  locale: string;
};

const navItems = [
  { label: "Series", href: "artworks" },
  { label: "Exhibitions", href: "exhibitions" },
  { label: "Art Fairs", href: "art-fairs" },
  { label: "CV", href: "cv" },
  { label: "About", href: "about" },
  { label: "Bibliography", href: "bibliography" },
  { label: "Press", href: "press" },
  { label: "Contact", href: "contact" }
];

export default function ArtworkNavbar({ locale }: ArtworkNavbarProps) {
  return (
    <header className="flex flex-col gap-5 border-b border-neutral-300/70 pb-6 pt-2 lg:flex-row lg:items-center lg:justify-between">
      <Link href={`/${locale}/artworks`} className="text-xs font-medium uppercase tracking-[0.32em] text-neutral-900 sm:text-sm">
        NADIACHELLAOUIARTISTE
      </Link>

      <div className="flex min-w-0 flex-wrap items-center justify-end gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.2em] text-neutral-700 sm:text-xs">
        {navItems.map((item) => (
          <Link key={item.href} href={`/${locale}/${item.href}`} className="whitespace-nowrap transition-colors hover:text-neutral-900">
            {item.label}
          </Link>
        ))}
        <span
          aria-hidden="true"
          className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-neutral-500 text-[10px]"
        >
          IG
        </span>
        <span
          aria-hidden="true"
          className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-neutral-500 text-[10px]"
        >
          EN
        </span>
      </div>
    </header>
  );
}
