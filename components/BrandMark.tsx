"use client";

import Image from "next/image";
import Link from "next/link";
import symbolImage from "@/logos/Symbole NC /symbol.png";

type BrandMarkProps = {
  locale: string;
  label: string;
  className?: string;
  textClassName?: string;
  iconSizeClassName?: string;
};

export default function BrandMark({
  locale,
  label,
  className = "",
  textClassName = "text-xl xl:text-2xl",
  iconSizeClassName = "h-7 w-7"
}: BrandMarkProps) {
  return (
    <Link
      href={`/${locale}`}
      className={`group inline-flex min-w-0 items-center gap-3 transition-all duration-300 hover:scale-[1.01] hover:opacity-85 ${className}`}
    >
      <span className={`relative overflow-hidden ${iconSizeClassName}`}>
        <Image src={symbolImage} alt={`${label} symbol`} fill sizes="28px" className="object-contain invert" priority />
      </span>
      <span className={`font-display tracking-[0.08em] text-ink ${textClassName}`}>{label}</span>
    </Link>
  );
}
