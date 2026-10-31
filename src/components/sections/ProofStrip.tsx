"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export function ProofStrip() {
  return (
    <section className="relative border-y border-border bg-white/[0.015]" aria-label="Key engineering metrics">
      <div className="section-padding max-w-7xl mx-auto py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-6 items-center">
          {/* Metric 1 */}
          <FadeIn delay={0.05}>
            <div className="border-l border-border pl-5">
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl text-fg font-normal tracking-tight">
                650<span className="text-accent">+</span>
              </div>
              <p className="mt-1 font-sans text-xs sm:text-sm text-muted">
                DSA problems solved across LeetCode & CodeChef
              </p>
            </div>
          </FadeIn>

          {/* Metric 2 */}
          <FadeIn delay={0.1}>
            <div className="border-l border-border pl-5">
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl text-accent font-normal tracking-tight">
                Top 320
              </div>
              <p className="mt-1 font-sans text-xs sm:text-sm text-muted">
                globally out of 35,000+ in CodeChef Starters 225
              </p>
            </div>
          </FadeIn>

          {/* Metric 3 */}
          <FadeIn delay={0.15}>
            <div className="border-l border-border pl-5">
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl text-fg font-normal tracking-tight">
                1683<span className="text-accent">+</span>
              </div>
              <p className="mt-1 font-sans text-xs sm:text-sm text-muted">
                DSA rating on CodeChef (Division 2)
              </p>
            </div>
          </FadeIn>

          {/* Metric 4 */}
          <FadeIn delay={0.2}>
            <div className="border-l border-border pl-5">
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl text-fg font-normal tracking-tight">
                8.17
              </div>
              <p className="mt-1 font-sans text-xs sm:text-sm text-muted">
                CGPA at Army Institute of Technology, Pune
              </p>
            </div>
          </FadeIn>

          {/* Banner link */}
          <FadeIn delay={0.25} className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link
              href="#work"
              className="group flex lg:flex-col items-center lg:items-start justify-between gap-3 p-4 rounded-xl border border-border bg-white/[0.02] hover:border-accent hover:bg-accent/[0.04] transition-all duration-300"
            >
              <div className="font-mono text-xs uppercase tracking-wider text-fg group-hover:text-accent transition-colors leading-snug">
                THE CODE.
                <br />
                THE ARCHITECTURE.
              </div>
              <ArrowUpRight className="w-5 h-5 text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
