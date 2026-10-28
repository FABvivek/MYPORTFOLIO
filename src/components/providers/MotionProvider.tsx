"use client";
import { useState, useEffect, ReactNode } from "react";
import { MotionContext } from "@/hooks/useMotion";

interface MotionProviderProps {
  children: ReactNode;
}

export function MotionProvider({ children }: MotionProviderProps) {
  const [motionEnabled, setMotionEnabled] = useState(true);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setMotionEnabled(false);
    }

    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) setMotionEnabled(false);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const toggleMotion = () => setMotionEnabled((prev) => !prev);

  return (
    <MotionContext.Provider value={{ motionEnabled, toggleMotion }}>
      {children}
    </MotionContext.Provider>
  );
}
