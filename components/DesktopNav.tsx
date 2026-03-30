"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type DesktopNavProps = {
  locale: string;
  homeLabel: string;
  worksLabel: string;
  aboutLabel: string;
  contactLabel: string;
};

export default function DesktopNav({
  locale,
  homeLabel,
  worksLabel,
  aboutLabel,
  contactLabel
}: DesktopNavProps) {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");
  const isHomePath = pathname === `/${locale}`;

  useEffect(() => {
    if (!isHomePath) {
      return;
    }

    const fromHash = () => {
      const id = window.location.hash.replace("#", "");
      if (id === "works" || id === "about" || id === "contact") {
        setActiveSection(id);
      } else {
        setActiveSection("home");
      }
    };

    fromHash();
    window.addEventListener("hashchange", fromHash);

    const sections = ["works", "about", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) {
      return () => window.removeEventListener("hashchange", fromHash);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.2, 0.4, 0.7] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", fromHash);
    };
  }, [isHomePath, locale, pathname]);

  const items = [
    { id: "home", label: homeLabel, href: `/${locale}` },
    { id: "works", label: worksLabel, href: `/${locale}#works` },
    { id: "about", label: aboutLabel, href: `/${locale}#about` },
    { id: "contact", label: contactLabel, href: `/${locale}#contact` }
  ];
  const resolvedActiveSection = isHomePath ? activeSection : "home";

  return (
    <nav className="hidden items-center gap-8 text-[15px] lg:flex xl:gap-10 xl:text-base">
      {items.map((item) => {
        const isActive = resolvedActiveSection === item.id;

        return (
          <Link
            key={item.id}
            href={item.href}
            className={`link-underline whitespace-nowrap transition-colors duration-300 ${
              isActive ? "border-b border-black/35 pb-0.5 text-ink" : "text-ink/70 hover:text-ink"
            }`}
            aria-current={isActive ? "page" : undefined}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
