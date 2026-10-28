"use client";

import { useState } from "react";
import { about } from "@/data/content";
import { ArrowUpRight, GraduationCap, Server, Layers, Cpu } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

export function About() {
  const [activeTab, setActiveTab] = useState(0);
  const current = about.perspectives[activeTab];

  return (
    <section id="about" className="relative py-24 md:py-36 border-b border-border">
      <div className="section-padding max-w-7xl mx-auto">
        {/* Section Label Header */}
        <div className="flex items-center justify-between pb-6 border-b border-border/80 text-xs font-mono uppercase tracking-[0.2em] text-muted mb-12">
          <span>{about.eyebrow}</span>
          <span className="hidden sm:inline text-accent/80">{about.subEyebrow}</span>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <FadeIn>
              <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-fg leading-[1.08] tracking-tight mb-8">
                {about.heading.plain}
                <br />
                <span className="font-serif italic text-fg/95 font-normal">
                  {about.heading.italic}
                </span>
              </h2>

              <p className="text-lg sm:text-xl text-fg/90 font-medium leading-relaxed mb-6">
                {about.lead}
              </p>

              <div className="space-y-4 text-base text-muted font-sans leading-relaxed mb-10">
                {about.bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Education Cards */}
              <div className="space-y-4 pt-4 border-t border-border/70 mb-10">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent block mb-2">
                  Education & Background
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {about.education.map((edu, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-xl border border-border bg-white/[0.02] hover:border-accent/40 transition-colors"
                    >
                      <div className="flex items-center gap-2 text-accent mb-2">
                        <GraduationCap className="w-4 h-4" />
                        <span className="font-mono text-xs uppercase tracking-wider">{edu.cgpa}</span>
                      </div>
                      <h4 className="font-serif text-base text-fg font-medium mb-1">{edu.institution}</h4>
                      <p className="text-xs text-muted leading-relaxed mb-2">{edu.degree}</p>
                      <span className="font-mono text-[11px] text-muted/70 block">{edu.period}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Identity Notes */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-[0.15em] text-muted/80">
                <span className="px-3 py-1.5 rounded-full border border-border bg-white/[0.02]">
                  SYSTEMS MIND.
                </span>
                <span className="px-3 py-1.5 rounded-full border border-border bg-white/[0.02]">
                  CONCURRENCY INSTINCT.
                </span>
                <span className="px-3 py-1.5 rounded-full border border-border bg-white/[0.02]">
                  BUILDER&apos;S RIGOR.
                </span>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Interactive Signal Explorer */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.2}>
              <div className="rounded-2xl border border-border bg-white/[0.02] p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden">
                {/* Accent Topline */}
                <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-muted pb-4 border-b border-border/60 mb-6">
                  <span className="text-accent/90">THREE DISCIPLINES. ONE PERSPECTIVE.</span>
                  <span>0{activeTab + 1} / 03</span>
                </div>

                {/* Visual Signal Display Area */}
                <div className="relative aspect-[16/10] w-full rounded-xl border border-border bg-bg/80 flex items-center justify-center p-6 mb-6 overflow-hidden">
                  {/* Abstract animated architectural graphics depending on active tab */}
                  {activeTab === 0 && (
                    <div className="relative w-full h-full flex flex-col items-center justify-center">
                      <div className="grid grid-cols-3 gap-3 w-full max-w-[280px]">
                        <div className="p-3 rounded border border-accent/40 bg-accent/5 text-center">
                          <Server className="w-4 h-4 text-accent mx-auto mb-1" />
                          <span className="font-mono text-[9px] text-fg block">Order Svc</span>
                        </div>
                        <div className="p-3 rounded border border-accent/40 bg-accent/5 text-center">
                          <Server className="w-4 h-4 text-accent mx-auto mb-1" />
                          <span className="font-mono text-[9px] text-fg block">Wallet Svc</span>
                        </div>
                        <div className="p-3 rounded border border-accent/40 bg-accent/5 text-center">
                          <Server className="w-4 h-4 text-accent mx-auto mb-1" />
                          <span className="font-mono text-[9px] text-fg block">Trade Svc</span>
                        </div>
                      </div>
                      <div className="mt-4 px-4 py-1.5 rounded-full border border-dashed border-accent/50 text-[10px] font-mono text-accent">
                        Eureka Service Registry · API Gateway
                      </div>
                    </div>
                  )}

                  {activeTab === 1 && (
                    <div className="relative w-full h-full flex flex-col items-center justify-center">
                      <div className="w-full max-w-[280px] p-4 rounded-lg border border-accent/40 bg-accent/[0.03]">
                        <div className="flex items-center justify-between text-[10px] font-mono text-accent mb-2">
                          <span>Kafka Event Stream</span>
                          <span className="animate-pulse">● Active</span>
                        </div>
                        <div className="space-y-1.5 font-mono text-[9px] text-muted">
                          <div className="bg-bg p-1.5 rounded border border-border flex justify-between">
                            <span>topic.driver-location</span>
                            <span className="text-accent">&lt; 50ms</span>
                          </div>
                          <div className="bg-bg p-1.5 rounded border border-border flex justify-between">
                            <span>topic.order-matching</span>
                            <span className="text-fg">O(log n)</span>
                          </div>
                        </div>
                      </div>
                      <span className="mt-3 font-mono text-[10px] text-muted tracking-wider">
                        Redis GEO Indexing + Concurrency Locks
                      </span>
                    </div>
                  )}

                  {activeTab === 2 && (
                    <div className="relative w-full h-full flex flex-col items-center justify-center">
                      <div className="flex items-center gap-2 font-mono text-[10px]">
                        <span className="px-2 py-1 rounded bg-accent/10 border border-accent/30 text-accent">
                          Whisper ASR
                        </span>
                        <span className="text-muted">→</span>
                        <span className="px-2 py-1 rounded bg-white/5 border border-border text-fg">
                          Chunking
                        </span>
                        <span className="text-muted">→</span>
                        <span className="px-2 py-1 rounded bg-accent/10 border border-accent/30 text-accent">
                          ChromaDB
                        </span>
                      </div>
                      <div className="mt-4 text-center font-mono text-[10px] text-muted">
                        LangChain 6-Stage Multimodal RAG
                      </div>
                    </div>
                  )}

                  {/* Corner Accent */}
                  <span className="absolute bottom-2 right-3 font-mono text-[10px] text-accent/40 uppercase">
                    {current.id}
                  </span>
                </div>

                {/* Perspective Selection Buttons */}
                <div className="grid grid-cols-3 gap-2 mb-6" role="group" aria-label="Explore disciplines">
                  {about.perspectives.map((p, idx) => (
                    <button
                      key={p.id}
                      onClick={() => setActiveTab(idx)}
                      className={cn(
                        "py-2.5 px-3 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1",
                        activeTab === idx
                          ? "bg-white/[0.08] border border-accent/80 text-accent font-medium shadow-sm"
                          : "border border-border text-muted hover:text-fg hover:border-white/20"
                      )}
                    >
                      <span>{p.label}</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  ))}
                </div>

                {/* Story & Description for chosen perspective */}
                <div className="space-y-3">
                  <h3 className="font-serif text-xl text-fg font-medium">
                    {current.tagline}
                  </h3>
                  <p className="text-sm text-fg/70 leading-relaxed font-sans">
                    {current.description}
                  </p>

                  {/* Keyword Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {current.keywords.map((kw) => (
                      <span
                        key={kw}
                        className="px-2.5 py-1 text-[11px] font-mono text-muted/90 rounded-full border border-border bg-white/[0.01]"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs font-mono">
                  <span className="text-muted">Perspective 0{activeTab + 1} of 03</span>
                  <a href="#work" className="text-accent hover:underline flex items-center gap-1">
                    Explore the work <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
