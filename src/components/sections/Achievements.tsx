"use client";

import { achievements } from "@/data/content";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowUpRight, Trophy, Code2, Award, Zap } from "lucide-react";

export function Achievements() {
  return (
    <section id="achievements" className="relative py-24 md:py-36 border-b border-border">
      <div className="section-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 border-b border-border/80 text-xs font-mono uppercase tracking-[0.2em] text-muted mb-12">
          <span>{achievements.eyebrow}</span>
          <span className="hidden sm:inline text-accent/80">{achievements.subEyebrow}</span>
        </div>

        {/* Heading */}
        <div className="max-w-3xl mb-16">
          <FadeIn>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-fg leading-[1.08] tracking-tight mb-6">
              {achievements.heading.plain}
              <br />
              <span className="font-serif italic text-fg/95 font-normal">
                {achievements.heading.italic}
              </span>
            </h2>
            <p className="text-lg text-muted font-sans leading-relaxed">
              Competitive programming and academic benchmarks that prove deep algorithmic foundations and consistency.
            </p>
          </FadeIn>
        </div>

        {/* Big Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.stats.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="h-full p-8 rounded-2xl border border-border bg-white/[0.015] hover:border-accent/50 hover:bg-white/[0.025] transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between text-muted mb-6">
                    <span className="font-mono text-xs text-accent">0{idx + 1} // BENCHMARK</span>
                    {idx === 0 ? <Trophy className="w-5 h-5 text-accent" /> : <Code2 className="w-5 h-5 text-accent" />}
                  </div>

                  <div className="font-serif text-5xl sm:text-6xl text-fg group-hover:text-accent transition-colors duration-300 mb-3 tracking-tight">
                    {item.value}
                    <span className="text-accent">{item.suffix}</span>
                  </div>

                  <h3 className="font-serif text-lg text-fg font-medium mb-2">{item.label}</h3>
                  <p className="text-xs sm:text-sm text-muted font-sans leading-relaxed">{item.subtitle}</p>
                </div>

                {item.link ? (
                  <div className="mt-8 pt-4 border-t border-border/60">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-accent hover:underline"
                    >
                      <span>Verify Profile</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ) : (
                  <div className="mt-8 pt-4 border-t border-border/60 font-mono text-[11px] text-muted/60 uppercase tracking-widest">
                    Verified Benchmark
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Philosophy Strip */}
        <FadeIn delay={0.25}>
          <div className="p-8 sm:p-10 rounded-2xl border border-border/90 bg-gradient-to-r from-accent/[0.03] via-white/[0.02] to-transparent flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent block mb-2">
                THE CORE PRINCIPLE
              </span>
              <p className="font-serif text-2xl sm:text-3xl text-fg leading-snug">
                Master the foundations. Architect for resilience.{" "}
                <em className="italic text-fg font-normal">Ship systems that last.</em>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted">
              <span className="px-3 py-1.5 rounded-full border border-border bg-bg">
                LeetCode Weekly Contests
              </span>
              <span className="px-3 py-1.5 rounded-full border border-border bg-bg">
                CodeChef Starters
              </span>
              <span className="px-3 py-1.5 rounded-full border border-border bg-bg">
                AIT Coding Club
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
