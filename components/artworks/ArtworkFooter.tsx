import Link from "next/link";

export default function ArtworkFooter() {
  return (
    <footer className="mt-16 border-t border-neutral-300/70 pt-6">
      <div className="flex flex-col gap-4 text-[11px] uppercase tracking-[0.2em] text-neutral-700 sm:flex-row sm:items-center sm:justify-between">
        <Link href="#" className="transition-colors hover:text-neutral-900">
          Accessibility Policy
        </Link>
        <p className="text-neutral-700">© Nadiachellaouiartiste 2026</p>
        <div className="flex items-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-neutral-500 text-[10px]">IG</span>
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-neutral-500 text-[10px]">@</span>
        </div>
      </div>
    </footer>
  );
}
