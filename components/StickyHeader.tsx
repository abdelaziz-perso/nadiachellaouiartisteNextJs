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
          ? "border-neutral-200/80 bg-[#f5f5f5]/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)] backdrop-blur-xl"
          : "border-neutral-200/50 bg-[#f5f5f5]/75 backdrop-blur-md"
      }`}
    >
      {children}
    </header>
  );
}
