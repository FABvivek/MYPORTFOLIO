"use client";

import { useState } from "react";
import { skills } from "@/data/content";
import { FadeIn } from "@/components/ui/FadeIn";
import { Code, Cpu, Network, Zap, Database, Bot, Terminal, Wrench, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "code":
        return <Code className="w-4 h-4" />;
      case "cpu":
        return <Cpu className="w-4 h-4" />;
      case "network":
        return <Network className="w-4 h-4" />;
      case "zap":
        return <Zap className="w-4 h-4" />;
      case "database":
        return <Database className="w-4 h-4" />;
      case "bot":
        return <Bot className="w-4 h-4" />;
      case "terminal":
        return <Terminal className="w-4 h-4" />;
      case "wrench":
        return <Wrench className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  const categories = ["All", ...skills.groups.map((g) => g.category)];

  const filteredGroups =
    selectedCategory === "All"
      ? skills.groups
      : skills.groups.filter((g) => g.category === selectedCategory);

  return (
    <section id="skills" className="relative py-24 md:py-36 border-b border-border">
      <div className="section-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 border-b border-border/80 text-xs font-mono uppercase tracking-[0.2em] text-muted mb-12">
          <span>{skills.eyebrow}</span>
          <span className="hidden sm:inline text-accent/80">{skills.subEyebrow}</span>
        </div>

        {/* Heading */}
        <div className="max-w-3xl mb-12">
          <FadeIn>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-fg leading-[1.08] tracking-tight mb-6">
              {skills.heading.plain}
              <br />
              <span className="font-serif italic text-fg/95 font-normal">
                {skills.heading.italic}
              </span>
            </h2>
            <p className="text-lg text-muted font-sans leading-relaxed">
              {skills.description}
            </p>
          </FadeIn>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300",
                selectedCategory === cat
                  ? "border border-accent/80 bg-white/[0.08] text-accent font-medium shadow-sm"
                  : "border border-border text-muted hover:text-fg hover:border-white/20 bg-white/[0.01]"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGroups.map((group, idx) => (
            <FadeIn key={group.category} delay={idx * 0.05}>
              <div className="h-full p-6 rounded-2xl border border-border bg-white/[0.015] hover:border-accent/40 hover:bg-white/[0.025] transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/60">
                    <span className="font-mono text-xs uppercase tracking-wider text-fg font-medium flex items-center gap-2">
                      <span className="text-accent group-hover:scale-110 transition-transform">
                        {getIcon(group.iconName)}
                      </span>
                      <span>{group.category}</span>
                    </span>
                    <span className="text-[10px] font-mono text-muted/60">
                      0{skills.groups.findIndex((g) => g.category === group.category) + 1}
                    </span>
                  </div>

                  <ul className="space-y-2.5">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="text-xs sm:text-sm text-fg/80 font-sans flex items-center justify-between group/item"
                      >
                        <span className="group-hover/item:text-accent transition-colors">
                          {skill}
                        </span>
                        <span className="text-[10px] text-muted opacity-0 group-hover/item:opacity-100 transition-opacity font-mono">
                          ✦
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-3 border-t border-border/40 text-[10px] font-mono uppercase tracking-widest text-muted/60 flex items-center justify-between">
                  <span>Stack Group</span>
                  <span className="text-accent/60">Ready</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
