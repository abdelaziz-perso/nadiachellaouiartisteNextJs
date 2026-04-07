"use client";

import { useState } from "react";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, WebsiteIcon } from "@/components/SocialIcons";

type MobileNavProps = {
  locale: string;
  menuLabel: string;
  closeLabel: string;
  socialPrimaryLabel: string;
  socialPrimaryHref: string;
  socialSecondaryLabel: string;
  socialSecondaryHref: string;
  socialTertiaryLabel: string;
  socialTertiaryHref: string;
};

export default function MobileNav({
  locale,
  menuLabel,
  closeLabel,
  socialPrimaryLabel,
  socialPrimaryHref,
  socialSecondaryLabel,
  socialSecondaryHref,
  socialTertiaryLabel,
  socialTertiaryHref
}: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { id: "li_top_0", className: "first top", label: "HOME", href: `/${locale}`, iconOnly: true },
    { id: "li_top_1", className: "top", label: "SERIES", href: `/${locale}/artworks` },
    { id: "li_top_2", className: "top", label: "EXHIBITIONS", href: `/${locale}/exhibitions` },
    { id: "li_top_3", className: "top", label: "ART FAIRS", href: `/${locale}/art-fairs` },
    { id: "li_top_4", className: "top", label: "CV", href: `/${locale}/cv` },
    { id: "li_top_5", className: "top", label: "ABOUT", href: `/${locale}/nadia-chellaoui` },
    { id: "li_top_6", className: "top", label: "BIBLIOGRAPHY", href: `/${locale}/bibliography` },
    { id: "li_top_7", className: "top", label: "PRESS", href: `/${locale}/press` },
    { id: "li_top_8", className: "last top", label: "CONTACT", href: `/${locale}/contact` }
  ];

  return (
    <div
      id="responsive_slide_nav_wrapper"
      className="mobile_menu_align_center relative lg:hidden"
      data-nav-items-animation-delay=""
      data-popup-layer="1"
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="btn-premium inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white/75 text-neutral-900 backdrop-blur transition-all duration-200 ease-in-out hover:bg-white"
        aria-expanded={isOpen}
        aria-label={isOpen ? closeLabel : menuLabel}
      >
        {isOpen ? (
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div
          id="responsive_slide_nav_wrapper_inner"
          data-responsive-top-size="1023"
          role="dialog"
          aria-label="Main navigation"
          aria-modal="true"
          className="absolute right-0 top-full z-30 mt-2 min-w-72 rounded-2xl border border-neutral-200 bg-[#f5f5f5]/95 p-3 text-neutral-900 shadow-[0_14px_40px_rgba(0,0,0,0.08)] backdrop-blur"
        >
          <nav id="top_nav" aria-label="Main site" className="navigation noprint clearwithin">
            <div id="top_nav_reveal" className="hidden">
              <ul>
                <li>
                  <button type="button" onClick={() => setIsOpen(false)} aria-label={closeLabel}>
                    {menuLabel}
                  </button>
                </li>
              </ul>
            </div>

            <div id="full_nav" className="nav navigation" role="navigation">
              <ul className="ul_top flex flex-col gap-1" data-level="1">
                {navItems.map((item) => (
                  <li key={item.id} id={item.id} className={`${item.className} item-visible`}>
                    <Link
                      href={item.href}
                      className={`focustrap-focusable focustrap-item block rounded-xl px-3 py-2 text-[11px] tracking-[0.12em] transition-all duration-200 ease-in-out hover:bg-black/5 ${
                        item.iconOnly ? "inline-flex w-full items-center gap-2" : ""
                      }`}
                      aria-label={item.iconOnly ? "Home" : undefined}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.iconOnly ? (
                        <>
                          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                            <path d="M4 11.5 12 5l8 6.5" />
                            <path d="M6.5 10.8V19h11V10.8" />
                          </svg>
                          <span>{item.label}</span>
                        </>
                      ) : (
                        item.label
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="header_social_links_mobile clearwithin mt-2 border-t border-neutral-200 pt-2">
            <div className="social_links_item">
              <Link
                href={socialPrimaryHref}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition-all duration-200 ease-in-out hover:bg-black/5"
                onClick={() => setIsOpen(false)}
              >
                <InstagramIcon className="h-4 w-4" />
                {socialPrimaryLabel}
              </Link>
            </div>
            <div className="social_links_item">
              <Link
                href={socialSecondaryHref}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition-all duration-200 ease-in-out hover:bg-black/5"
                onClick={() => setIsOpen(false)}
              >
                <FacebookIcon className="h-4 w-4" />
                {socialSecondaryLabel}
              </Link>
            </div>
            <div className="social_links_item">
              <Link
                href={socialTertiaryHref}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition-all duration-200 ease-in-out hover:bg-black/5"
                onClick={() => setIsOpen(false)}
              >
                <WebsiteIcon className="h-4 w-4" />
                {socialTertiaryLabel}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
