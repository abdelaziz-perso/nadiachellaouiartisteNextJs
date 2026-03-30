"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useSyncExternalStore } from "react";

function subscribeToFinePointer(onStoreChange: () => void) {
  const mediaQuery = window.matchMedia("(pointer: fine)");
  const handler = () => onStoreChange();
  mediaQuery.addEventListener("change", handler);
  return () => mediaQuery.removeEventListener("change", handler);
}

function getFinePointerSnapshot() {
  return window.matchMedia("(pointer: fine)").matches;
}

function getFinePointerServerSnapshot() {
  return false;
}

export default function CustomCursor() {
  const enabled = useSyncExternalStore(
    subscribeToFinePointer,
    getFinePointerSnapshot,
    getFinePointerServerSnapshot
  );
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 320, damping: 30, mass: 0.4 });
  const springY = useSpring(cursorY, { stiffness: 320, damping: 30, mass: 0.4 });

  useEffect(() => {
    if (!enabled) {
      return;
    }
    const handleMove = (event: MouseEvent) => {
      cursorX.set(event.clientX - 8);
      cursorY.set(event.clientY - 8);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [cursorX, cursorY, enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[70] h-4 w-4 rounded-full border border-black/30 bg-black/10 backdrop-blur-[2px]"
      style={{ x: springX, y: springY }}
    />
  );
}
