"use client";

import Link from "next/link";

type BrandMarkProps = {
  locale: string;
  label: string;
  className?: string;
  textClassName?: string;
};

export default function BrandMark({
  locale,
  label,
  className = "",
  textClassName = "font-sans text-[11px] font-light uppercase tracking-[0.35em] text-neutral-900 sm:text-xs xl:text-sm"
}: BrandMarkProps) {
  return (
    <Link
      href={`/${locale}`}
      className={`group inline-flex min-w-0 items-center transition-all duration-300 hover:opacity-80 ${className}`}
    >
      <span className={`font-display ${textClassName}`}>{label}</span>
    </Link>
  );
}
