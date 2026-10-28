"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMotion } from "@/hooks/useMotion";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const { motionEnabled } = useMotion();

  useEffect(() => {
    if (!motionEnabled) return;
    // Only on desktop (pointer: fine)
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;

    setVisible(true);
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [motionEnabled]);

  if (!visible || !motionEnabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] w-[500px] h-[500px] rounded-full"
      style={{
        background:
          "radial-gradient(circle, rgba(198,255,61,0.04) 0%, transparent 70%)",
      }}
      animate={{
        x: pos.x - 250,
        y: pos.y - 250,
      }}
      transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
    />
  );
}
