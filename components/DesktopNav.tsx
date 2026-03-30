"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

type DesktopNavProps = {
  locale: string;
};

export default function DesktopNav({ locale }: DesktopNavProps) {
  const pathname = usePathname();
  const router = useRouter();
  const items = [
    { id: "li_top_0", label: "HOME", href: `/${locale}`, className: "first top", iconOnly: true },
    { id: "li_top_1", label: "ARTWORKS", href: `/${locale}/artworks`, className: "top" },
    { id: "li_top_2", label: "EXHIBITIONS", href: `/${locale}/exhibitions`, className: "top" },
    { id: "li_top_3", label: "ART FAIRS", href: `/${locale}/art-fairs`, className: "top" },
    { id: "li_top_4", label: "CV", href: `/${locale}/cv`, className: "top" },
    { id: "li_top_5", label: "ABOUT", href: `/${locale}/nadia-chellaoui`, className: "top" },
    { id: "li_top_6", label: "BIBLIOGRAPHY", href: `/${locale}/bibliography`, className: "top" },
    { id: "li_top_7", label: "PRESS", href: `/${locale}/press`, className: "top" },
    { id: "li_top_8", label: "CONTACT", href: `/${locale}/contact`, className: "last top" }
  ];
  useEffect(() => {
    [
      `/${locale}/artworks`,
      `/${locale}/exhibitions`,
      `/${locale}/art-fairs`,
      `/${locale}`,
      `/${locale}/cv`,
      `/${locale}/nadia-chellaoui`,
      `/${locale}/bibliography`,
      `/${locale}/press`,
      `/${locale}/contact`
    ].forEach((route) => router.prefetch(route));
  }, [locale, router]);

  return (
    <nav id="top_nav" aria-label="Main site" className="navigation noprint clearwithin hidden lg:block">
      <div id="full_nav" className="nav navigation" role="navigation">
        <ul className="ul_top flex items-center gap-5 xl:gap-7" data-level="1">
          {items.map((item) => (
            <li key={item.id} id={item.id} className={`${item.className} item-visible`}>
              <Link
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`focustrap-focusable focustrap-item relative whitespace-nowrap text-[11px] tracking-[0.16em] transition-all duration-200 ease-in-out after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-neutral-900 after:transition-all after:duration-200 after:ease-in-out hover:text-neutral-900 hover:after:w-full ${
                  pathname === item.href ? "text-neutral-900 after:w-full" : "text-neutral-700/85"
                } ${item.iconOnly ? "inline-flex h-7 w-7 items-center justify-center rounded-full border border-neutral-300 p-0 after:hidden hover:bg-black/5" : ""}`}
                aria-label={item.iconOnly ? "Home" : undefined}
              >
                {item.iconOnly ? (
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M4 11.5 12 5l8 6.5" />
                    <path d="M6.5 10.8V19h11V10.8" />
                  </svg>
                ) : (
                  item.label
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
