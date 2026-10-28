"use client";
import { useEffect, ReactNode } from "react";
import Lenis from "lenis";
import { useMotion } from "@/hooks/useMotion";

interface LenisProviderProps {
  children: ReactNode;
}

export function LenisProvider({ children }: LenisProviderProps) {
  const { motionEnabled } = useMotion();

  useEffect(() => {
    if (!motionEnabled) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [motionEnabled]);

  return <>{children}</>;
}
