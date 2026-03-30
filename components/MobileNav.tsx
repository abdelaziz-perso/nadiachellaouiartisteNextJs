"use client";

import { useState } from "react";
import Link from "next/link";

type MobileNavProps = {
  locale: string;
  homeLabel: string;
  worksLabel: string;
  aboutLabel: string;
  contactLabel: string;
};

export default function MobileNav({
  locale,
  homeLabel,
  worksLabel,
  aboutLabel,
  contactLabel
}: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="btn-premium flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 backdrop-blur"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path
              d="M6 6l12 12M18 6L6 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path
              d="M4 7h16M4 12h16M4 17h16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-30 mt-2 min-w-44 rounded-2xl border border-black/10 bg-white p-2 shadow-lg">
          <Link
            href={`/${locale}`}
            className="block rounded-xl px-3 py-2 text-sm hover:bg-black/5 active:bg-black/10"
            onClick={() => setIsOpen(false)}
          >
            {homeLabel}
          </Link>
          <Link
            href={`/${locale}#works`}
            className="block rounded-xl px-3 py-2 text-sm hover:bg-black/5 active:bg-black/10"
            onClick={() => setIsOpen(false)}
          >
            {worksLabel}
          </Link>
          <Link
            href={`/${locale}#about`}
            className="block rounded-xl px-3 py-2 text-sm hover:bg-black/5 active:bg-black/10"
            onClick={() => setIsOpen(false)}
          >
            {aboutLabel}
          </Link>
          <Link
            href={`/${locale}#contact`}
            className="block rounded-xl px-3 py-2 text-sm hover:bg-black/5 active:bg-black/10"
            onClick={() => setIsOpen(false)}
          >
            {contactLabel}
          </Link>
        </div>
      )}
    </div>
  );
}
