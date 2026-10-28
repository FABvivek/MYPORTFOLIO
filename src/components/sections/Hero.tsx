"use client";

import { useEffect } from "react";
import Link from "next/link";
import { hero } from "@/data/content";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { HeroBackdrop } from "@/components/ui/HeroBackdrop";
import { motion, useScroll, useTransform } from "framer-motion";

export function Hero() {
  const { scrollY } = useScroll();
  const contentOpacity = useTransform(scrollY, [0, 320], [1, 0.05]);
  const contentY = useTransform(scrollY, [0, 320], [0, -35]);

  useEffect(() => {
    if (typeof window !== "undefined" && !window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-[850px] lg:h-[100svh] lg:max-h-[1150px] pt-28 pb-8 flex flex-col justify-between overflow-hidden"
    >
      {/* 1. Sarthak Architectural Subtle Background Grid */}
      <div className="hero-grid" aria-hidden="true" />

      {/* 2. Interactive Studio B&W Portrait Backdrop & Signal Particles */}
      <HeroBackdrop
        imageSrc="/images/vivek-bw-studio.webp"
        alt="Vivek Singh - Backend & Distributed Systems Engineer"
      />

      {/* 3. Hero Topline Status Bar */}
      <div className="relative z-10 section-padding max-w-7xl mx-auto w-full flex items-center justify-between text-[9px] font-mono uppercase tracking-[2px] text-[#b0aaa2] pt-2">
        <span className="flex items-center gap-2.5">
          <i className="live-dot" />
          <span>ENGINEER · BUILDER · DISTRIBUTED SYSTEMS</span>
        </span>
        <span className="hidden sm:inline text-muted/80 tracking-wider">
          {hero.status}
        </span>
      </div>

      {/* 4. Hero Side Note (Left Margin on Desktop, Sarthak signature) */}
      <div className="hidden xl:flex hero-side-note">
        <span className="text-accent font-medium tracking-widest">{hero.sideNote.number}</span>
        <span className="text-accent text-2xl font-light leading-none -mt-3">+</span>
        <span className="text-[#a39b93] leading-relaxed">
          {hero.sideNote.lines.map((line, idx) => (
            <span key={idx} className="block">
              {line}
            </span>
          ))}
        </span>
      </div>

      {/* 5. Main Hero Editorial Content (Positioned BELOW the face, fading on scroll to reveal growing portrait) */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 section-padding max-w-5xl mx-auto w-full text-center mt-auto mb-4 md:mb-6 pt-10 pb-2"
      >
        {/* Eyebrow Kicker */}
        <div className="hero-kicker">
          <span>{hero.eyebrow}</span>
        </div>

        {/* Editorial Title (Bone white, italic 'Singh', minimal & authoritative) */}
        <h1 className="font-serif text-[clamp(64px,11vw,160px)] font-normal tracking-[-0.045em] leading-[0.96] text-[#F1EEE8] drop-shadow-2xl select-none">
          Vivek <em className="font-serif italic font-normal text-[#F1EEE8]">Singh</em>
        </h1>

        {/* Description & Action Links */}
        <div className="hero-description mt-6 flex flex-col items-center gap-6">
          <p className="text-[#dedad4] text-base sm:text-[17px] font-sans leading-relaxed max-w-xl mx-auto text-center font-normal">
            I build high-throughput distributed backends,
            real-time architectures, and intelligent systems.
          </p>

          <div className="hero-actions flex flex-wrap items-center justify-center gap-6 pt-2">
            <a href="#work" className="pill-link group">
              <span>{hero.cta1.label}</span>
              <ArrowDown className="w-3.5 h-3.5 text-accent group-hover:text-bg transition-colors" />
            </a>

            <Link href="#contact" className="text-link group">
              <span>{hero.ctaContact.label}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* 6. Hero Bottom Bar with Scroll Indicator */}
      <div className="relative z-10 section-padding max-w-7xl mx-auto w-full flex items-center justify-between text-[9px] font-mono uppercase tracking-[1.4px] text-[#b0aaa2] pb-2 border-t border-white/[0.06] pt-6">
        <a
          href="#about"
          className="flex items-center gap-3 text-muted hover:text-accent transition-colors group"
        >
          <span className="scroll-line" />
          <span>{hero.scrollLabel}</span>
          <ArrowDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
        </a>

        <span className="hidden md:inline text-muted/70">
          BUILDING AT SCALE SINCE 2023
        </span>

        <a
          href="https://www.aitpune.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          ARMY INSTITUTE OF TECHNOLOGY, PUNE ↗
        </a>
      </div>
    </section>
  );
}
