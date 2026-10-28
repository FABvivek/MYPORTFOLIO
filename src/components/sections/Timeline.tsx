"use client";

import { timeline } from "@/data/content";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowUpRight } from "lucide-react";

export function Timeline() {
  return (
    <section id="journey" className="relative py-24 md:py-36 border-b border-border">
      <div className="section-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 border-b border-border/80 text-xs font-mono uppercase tracking-[0.2em] text-muted mb-12">
          <span>{timeline.eyebrow}</span>
          <span className="hidden sm:inline text-accent/80">{timeline.subEyebrow}</span>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <FadeIn>
              <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-fg leading-[1.08] tracking-tight mb-6">
                {timeline.heading.plain}
                <br />
                <span className="font-serif italic text-fg/95 font-normal">
                  {timeline.heading.italic}
                </span>
              </h2>
              <p className="text-base sm:text-lg text-muted font-sans leading-relaxed mb-8">
                From solving foundational algorithmic puzzles in Gorakhpur to engineering distributed microservices and mentoring over 150 student developers in Pune.
              </p>
              <div className="p-4 rounded-xl border border-border bg-white/[0.015] inline-block font-mono text-xs text-muted">
                <span className="text-accent">● STATUS:</span> AVAILABLE FOR 2026/2027 SDE ROLES
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Timeline Events */}
          <div className="lg:col-span-7 space-y-8 relative before:absolute before:left-3 before:top-4 before:bottom-4 before:w-px before:bg-border">
            {timeline.events.map((event, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="relative pl-10 group">
                  {/* Timeline Dot */}
                  <div className="absolute left-[9px] top-1.5 w-2 h-2 rounded-full bg-border group-hover:bg-accent group-hover:scale-150 transition-all duration-300" />

                  <div className="p-6 sm:p-7 rounded-2xl border border-border bg-white/[0.015] group-hover:border-accent/40 group-hover:bg-white/[0.025] transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs text-accent font-semibold uppercase tracking-wider">
                        {event.year}
                      </span>
                      {event.highlight && (
                        <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full border border-border bg-white/[0.02] text-muted">
                          {event.highlight}
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl text-fg font-medium mb-1">
                      {event.title}
                    </h3>

                    {event.organization && (
                      <p className="font-mono text-xs text-muted/70 mb-3">
                        {event.organization}
                      </p>
                    )}

                    <p className="text-sm sm:text-base text-fg/75 font-sans leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
