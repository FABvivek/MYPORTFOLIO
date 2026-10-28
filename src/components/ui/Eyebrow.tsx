"use client";
import { useMotion } from "@/hooks/useMotion";
import { motion } from "framer-motion";

interface EyebrowProps {
  text: string;
}

export function Eyebrow({ text }: EyebrowProps) {
  const { motionEnabled } = useMotion();
  const Comp = motionEnabled ? motion.p : "p";
  const props = motionEnabled
    ? {
        initial: { opacity: 0, y: 10 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-50px" },
        transition: { duration: 0.6 },
      }
    : {};

  return (
    <Comp
      className="font-mono text-xs uppercase tracking-[0.2em] text-muted mb-6"
      {...props}
    >
      {text}
    </Comp>
  );
}
