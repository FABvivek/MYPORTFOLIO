"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navLinks } from "@/data/content";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      const current = sections.find((s) => {
        const el = document.getElementById(s);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 180 && rect.bottom >= 180;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <a href="#main" className="skip-to-content">
        Skip to content
      </a>

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-[88px] md:h-[90px] flex items-center justify-between border-b transition-all duration-300 section-padding",
          scrolled
            ? "border-white/[0.08] bg-[#030303]/90 backdrop-blur-[20px] shadow-2xl shadow-black/60"
            : "border-white/[0.06] bg-[#030303]/75 backdrop-blur-[16px]"
        )}
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          {/* Brand Wordmark (Sarthak style: Bone white serif with minimal live dot) */}
          <Link
            href="#top"
            className="flex items-center gap-3.5 group select-none text-fg"
            aria-label="Vivek Singh"
          >
            <span className="live-dot" />
            <span className="font-serif text-[17px] tracking-[-0.02em] font-normal text-fg group-hover:opacity-80 transition-opacity">
              Vivek Singh
            </span>
          </Link>

          {/* Desktop Navigation (About before Work, minimal text links) */}
          <nav
            className="hidden md:flex items-center gap-9 text-[11px] font-mono uppercase tracking-[1.5px]"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative py-1 transition-colors duration-200",
                    isActive
                      ? "text-accent font-medium"
                      : "text-muted hover:text-accent"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-accent" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA (Sarthak style: Frosted outline pill with thin border, minimal amber hover) */}
          <div className="hidden md:flex items-center">
            <Link
              href="#contact"
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#5a514b]/80 bg-[#080706]/70 backdrop-blur-md text-[11px] font-mono uppercase tracking-[1.2px] text-fg hover:border-accent hover:text-accent transition-all duration-300 group"
            >
              <span>Let&apos;s talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-accent" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full border border-white/10 text-fg hover:text-accent transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-[#030303]/98 backdrop-blur-2xl flex flex-col justify-between pt-28 pb-10 section-padding animate-in fade-in duration-200">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[2px] text-muted">
              <span className="live-dot" />
              <span>NAVIGATION</span>
            </div>
            <nav className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-3xl text-fg hover:text-accent transition-colors flex items-center justify-between py-2 border-b border-white/[0.06]"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-5 h-5 text-accent opacity-60" />
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4 pt-6 border-t border-white/[0.08]">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-full border border-accent/40 bg-accent/10 text-fg font-mono text-xs uppercase tracking-wider font-medium hover:bg-accent hover:text-bg transition-all duration-300"
            >
              <span>Start a conversation</span>
              <ArrowUpRight className="w-4 h-4 text-accent" />
            </Link>
            <p className="text-center font-mono text-[10px] text-muted/70 tracking-widest uppercase">
              Pune, India · Army Institute of Technology
            </p>
          </div>
        </div>
      )}
    </>
  );
}
