"use client";

import { work } from "@/data/content";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export function Work() {
  return (
    <section id="work" className="relative py-24 md:py-36 border-b border-border">
      <div className="section-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 border-b border-border/80 text-xs font-mono uppercase tracking-[0.2em] text-muted mb-12">
          <span>{work.eyebrow}</span>
          <span className="hidden sm:inline text-accent/80">{work.subEyebrow}</span>
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <FadeIn>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-fg leading-[1.08] tracking-tight mb-6">
              {work.heading.plain}
              <br />
              <span className="font-serif italic text-fg/95 font-normal">
                {work.heading.italic}
              </span>
            </h2>
            <p className="text-lg text-muted font-sans leading-relaxed">
              {work.description}
            </p>
          </FadeIn>
        </div>

        {/* Projects Gallery */}
        <div className="space-y-6">
          {work.projects.map((project, index) => (
            <ProjectCard key={project.number} project={project} index={index} />
          ))}
        </div>

        {/* GitHub Callout Footer */}
        <FadeIn delay={0.2}>
          <div className="mt-12 p-8 rounded-2xl border border-border bg-white/[0.015] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-accent block mb-1">
                More Code & Experiments
              </span>
              <h4 className="font-serif text-xl sm:text-2xl text-fg">
                Explore all open-source repositories & algorithm benchmarks
              </h4>
            </div>
            <a
              href="https://github.com/FABvivek"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-white/[0.02] text-fg font-mono text-xs uppercase tracking-wider rounded-full hover:border-accent hover:text-accent transition-all duration-300 shrink-0"
            >
              <GithubIcon className="w-4 h-4" />
              <span>github.com/FABvivek</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
