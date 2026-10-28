"use client";

import Link from "next/link";
import { footer } from "@/data/content";
import { ArrowUp, ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon, CodeChefIcon } from "@/components/ui/Icons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getIcon = (name: string) => {
    switch (name) {
      case "github":
        return <GithubIcon className="w-4 h-4" />;
      case "linkedin":
        return <LinkedinIcon className="w-4 h-4" />;
      case "email":
        return <Mail className="w-4 h-4" />;
      case "leetcode":
        return <LeetCodeIcon className="w-4 h-4" />;
      case "codechef":
        return <CodeChefIcon className="w-4 h-4" />;
      default:
        return <ArrowUpRight className="w-4 h-4" />;
    }
  };

  return (
    <footer className="relative bg-bg border-t border-border pt-20 pb-12 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/[0.03] blur-[140px] pointer-events-none rounded-full" />

      <div className="section-padding max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 pb-16 border-b border-border">
          {/* Brand Name */}
          <div>
            <Link
              href="#top"
              className="inline-block font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-fg hover:opacity-85 transition-opacity duration-300 tracking-tight"
            >
              Vivek <em className="font-serif italic text-fg font-normal">Singh</em>
              <span className="text-accent">.</span>
            </Link>
            <p className="mt-4 text-muted text-sm sm:text-base max-w-md font-sans">
              Backend Software Engineer · Distributed Systems & Event-Driven Architectures · Army Institute of Technology, Pune.
            </p>
          </div>

          {/* Back to top button */}
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-3 px-5 py-3 rounded-full border border-border bg-white/[0.02] text-xs font-mono uppercase tracking-widest text-muted hover:text-fg hover:border-accent/60 transition-all duration-300"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <div className="w-7 h-7 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent group-hover:-translate-y-1 group-hover:bg-accent group-hover:text-bg transition-all duration-300">
                <ArrowUp className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>
        </div>

        {/* Links & Socials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-b border-border/60">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent block mb-4">
              Navigation
            </span>
            <ul className="space-y-2">
              {footer.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-fg/70 hover:text-accent transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent block mb-4">
              Profiles & Coding
            </span>
            <ul className="space-y-2.5">
              {footer.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-fg/70 hover:text-accent transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="text-muted group-hover:text-accent transition-colors">
                      {getIcon(social.icon)}
                    </span>
                    <span>{social.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent block mb-4">
              Direct Contact
            </span>
            <p className="text-sm text-fg/70 leading-relaxed mb-4">
              Open to conversations about backend engineering, microservices, and Summer/Fall 2026/2027 opportunities.
            </p>
            <a
              href="mailto:viveksinghait2027@gmail.com"
              className="inline-block font-mono text-xs text-accent underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              viveksinghait2027@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted uppercase tracking-wider">
          <span>{footer.copyright}</span>
          <span className="text-accent/80">{footer.location}</span>
        </div>
      </div>
    </footer>
  );
}
