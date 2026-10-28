"use client";

import { leadership } from "@/data/content";
import { FadeIn } from "@/components/ui/FadeIn";
import { Users, Award, Code, CheckCircle, ArrowUpRight } from "lucide-react";

export function Leadership() {
  return (
    <section id="leadership" className="relative py-24 md:py-36 border-b border-border">
      <div className="section-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 border-b border-border/80 text-xs font-mono uppercase tracking-[0.2em] text-muted mb-12">
          <span>{leadership.eyebrow}</span>
          <span className="hidden sm:inline text-accent/80">{leadership.subEyebrow}</span>
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <FadeIn>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-fg leading-[1.08] tracking-tight mb-6">
              {leadership.heading.plain}
              <br />
              <span className="font-serif italic text-fg/95 font-normal">
                {leadership.heading.italic}
              </span>
            </h2>
            <p className="text-lg text-muted font-sans leading-relaxed">
              Leading developer initiatives, nurturing algorithmic excellence, and scaling competitive programming culture among 150+ student engineers.
            </p>
          </FadeIn>
        </div>

        {/* Main Leadership Feature Card */}
        <FadeIn delay={0.15}>
          <div className="rounded-2xl border border-border bg-white/[0.015] p-8 sm:p-12 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Organization & Role */}
              <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-border pb-8 lg:pb-0 lg:pr-10">
                <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest mb-3">
                  <Users className="w-4 h-4" />
                  <span>{leadership.period}</span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl text-fg mb-2">
                  {leadership.role}
                </h3>
                <h4 className="font-sans text-lg text-accent/90 mb-4 font-medium">
                  {leadership.organization}
                </h4>
                <p className="text-sm text-muted font-sans leading-relaxed mb-6">
                  {leadership.description}
                </p>

                <div className="flex flex-wrap gap-2 text-xs font-mono text-muted">
                  <span className="px-3 py-1 rounded-full border border-border bg-white/[0.02]">
                    10-Member Core Team
                  </span>
                  <span className="px-3 py-1 rounded-full border border-border bg-white/[0.02]">
                    150+ Students
                  </span>
                  <span className="px-3 py-1 rounded-full border border-border bg-white/[0.02]">
                    5+ Contests
                  </span>
                </div>
              </div>

              {/* Right Column: Highlights & Impact Bullets */}
              <div className="lg:col-span-7 space-y-6">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent block">
                  Core Responsibilities & Impact
                </span>

                <div className="space-y-4">
                  {leadership.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl border border-border/80 bg-white/[0.01] hover:border-accent/40 transition-colors flex items-start gap-4"
                    >
                      <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 text-accent font-mono text-xs font-semibold">
                        0{index + 1}
                      </div>
                      <p className="text-sm sm:text-base text-fg/80 leading-relaxed font-sans pt-0.5">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
