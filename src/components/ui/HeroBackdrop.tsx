"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";

interface HeroBackdropProps {
  imageSrc?: string;
  alt?: string;
}

export function HeroBackdrop({
  imageSrc = "/images/vivek-bw-studio.webp",
  alt = "Vivek Singh - Backend & Distributed Systems Engineer",
}: HeroBackdropProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Mouse tracking with smooth spring physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const mouseSpringConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothX = useSpring(mouseX, mouseSpringConfig);
  const smoothY = useSpring(mouseY, mouseSpringConfig);

  // Parallax translation & 3D tilt transforms
  const moveX = useTransform(smoothX, [-0.5, 0.5], [-16, 16]);
  const moveY = useTransform(smoothY, [-0.5, 0.5], [-12, 12]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [2.5, -2.5]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-3, 3]);

  // GROWING ON SCROLL: Image smoothly grows (zooms in) as the user scrolls
  const { scrollY } = useScroll();
  const scrollSpring = useSpring(scrollY, { damping: 26, stiffness: 90, mass: 0.6 });

  // Scale grows from 1.0 up to 1.32 as user scrolls through the hero
  const scrollScale = useTransform(scrollSpring, [0, 550], [1.0, 1.32]);
  // Smoothly fade out as user transitions to the next chapter
  const scrollOpacity = useTransform(scrollSpring, [0, 480, 750], [0.92, 0.7, 0]);
  // Subtle vertical drift
  const scrollYOffset = useTransform(scrollSpring, [0, 600], [0, 80]);

  // Pointer event listener
  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [mouseX, mouseY]);

  // Interactive Signal Wave Particles Canvas (growing & undulating on scroll)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Generate signal points around the central portrait
    const particleCount = 42;
    const particles: Array<{
      angle: number;
      radiusX: number;
      radiusY: number;
      speed: number;
      size: number;
      isAmber: boolean;
      opacity: number;
      offsetY: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        angle: Math.random() * Math.PI * 2,
        radiusX: 180 + Math.random() * 260,
        radiusY: 220 + Math.random() * 280,
        speed: (0.0015 + Math.random() * 0.003) * (Math.random() > 0.5 ? 1 : -1),
        size: Math.random() * 2.2 + 0.8,
        isAmber: Math.random() > 0.65, // 35% sunset amber, 65% bone titanium
        opacity: Math.random() * 0.5 + 0.2,
        offsetY: (Math.random() - 0.5) * 80,
      });
    }

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = Math.min(height * 0.3, 260);

      time += 0.015;

      // Particles also expand outward (grow) as user scrolls!
      const currentScroll = window.scrollY || 0;
      const scrollExpansion = Math.min(currentScroll * 0.35, 240);

      particles.forEach((p) => {
        p.angle += p.speed;

        // Wave breathing modulation
        const wave = Math.sin(time + p.angle * 2) * 12;
        const curRx = p.radiusX + wave + scrollExpansion;
        const curRy = p.radiusY + wave + scrollExpansion;

        const x = centerX + Math.cos(p.angle) * curRx;
        const y = centerY + Math.sin(p.angle) * curRy + p.offsetY;

        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);

        if (p.isAmber) {
          ctx.fillStyle = `rgba(255, 140, 89, ${p.opacity * 0.65})`;
          ctx.shadowColor = "rgba(255, 140, 89, 0.6)";
          ctx.shadowBlur = 8;
        } else {
          ctx.fillStyle = `rgba(241, 238, 232, ${p.opacity * 0.45})`;
          ctx.shadowColor = "rgba(241, 238, 232, 0.4)";
          ctx.shadowBlur = 4;
        }

        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <motion.div
      className="scene-backdrop"
      aria-hidden="true"
      style={{
        opacity: scrollOpacity,
        y: scrollYOffset,
      }}
    >
      {/* 1. Interactive Ambient Signal Wave Particles Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0 opacity-80"
      />

      {/* 2. Centered Masked Backdrop Frame */}
      <div className="artifact-fallback pointer-events-none">
        {/* Interactive Parallax, 3D Tilt, and GROWING ON SCROLL */}
        <motion.div
          className="relative w-full h-full"
          style={{
            x: moveX,
            y: moveY,
            rotateX,
            rotateY,
            scale: scrollScale,
            transformStyle: "preserve-3d",
            transformOrigin: "center 35%", // Anchors the scale growth right around the face!
          }}
        >
          <Image
            src={imageSrc}
            alt={alt}
            fill
            priority
            sizes="(max-width: 768px) 92vw, 580px"
            className="object-cover object-top select-none filter contrast-[1.08] brightness-[0.98]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
