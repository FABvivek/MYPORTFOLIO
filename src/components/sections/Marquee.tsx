"use client";

import { marqueeKeywords } from "@/data/content";

export function Marquee() {
  const repeated = [...marqueeKeywords, ...marqueeKeywords];

  return (
    <div className="relative w-full overflow-hidden py-4 border-b border-border bg-bg/50 select-none">
      <div className="flex w-max animate-marquee space-x-8 text-xs font-mono uppercase tracking-[0.25em] text-muted/60">
        {repeated.map((word, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span className="hover:text-accent transition-colors duration-200">
              {word}
            </span>
            <span className="text-accent/30 text-[10px]">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
