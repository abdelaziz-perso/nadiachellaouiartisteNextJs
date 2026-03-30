"use client";

import { useEffect, useState } from "react";

type StickyHeaderProps = {
  children: React.ReactNode;
};

export default function StickyHeader({ children }: StickyHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 border-b transition-all duration-500 ${
        isScrolled
          ? "border-black/10 bg-ivory/75 shadow-sm backdrop-blur-xl"
          : "border-transparent bg-ivory/45 backdrop-blur-md"
      }`}
    >
      {children}
    </header>
  );
}
