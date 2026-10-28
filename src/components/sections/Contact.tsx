"use client";

import { useState } from "react";
import { contact } from "@/data/content";
import { FadeIn } from "@/components/ui/FadeIn";
import { Mail, Phone, MapPin, Copy, Check, Download, ArrowUpRight } from "lucide-react";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-28 md:py-40 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-accent/[0.035] blur-[160px] rounded-full" />

      <div className="section-padding max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 border-b border-border/80 text-xs font-mono uppercase tracking-[0.2em] text-muted mb-16">
          <span>{contact.eyebrow}</span>
          <span className="hidden sm:inline text-accent/80">{contact.subEyebrow}</span>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <FadeIn>
            {/* Live Availability Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent font-mono text-xs uppercase tracking-widest mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span>{contact.status}</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-fg leading-[0.96] tracking-tight mb-8">
              {contact.heading.plain}
              <br />
              <span className="font-serif italic text-fg/95 font-normal">
                {contact.heading.italic}
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-muted font-sans leading-relaxed max-w-2xl mx-auto mb-12">
              {contact.lead}
            </p>

            {/* Main Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${contact.email}`}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-accent/70 bg-accent/10 text-fg hover:bg-accent hover:text-bg font-mono text-xs uppercase tracking-widest font-medium transition-all duration-300 shadow-lg shadow-black/40"
              >
                <Mail className="w-4 h-4 text-accent group-hover:text-bg transition-colors" />
                <span>Send an Email</span>
                <ArrowUpRight className="w-4 h-4 text-accent group-hover:text-bg transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-border bg-white/[0.02] text-fg font-mono text-xs uppercase tracking-widest hover:border-accent hover:text-accent transition-all duration-300"
              >
                {copied ? <Check className="w-4 h-4 text-accent" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? "Email Copied!" : "Copy Email"}</span>
              </button>

              <a
                href={contact.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-border bg-white/[0.02] text-fg font-mono text-xs uppercase tracking-widest hover:border-accent hover:text-accent transition-all duration-300"
              >
                <Download className="w-4 h-4 text-accent" />
                <span>Resume PDF</span>
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Contact Info Cards Grid */}
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-8 border-t border-border/80">
            {/* Email Card */}
            <div className="p-6 rounded-2xl border border-border bg-white/[0.015] text-center flex flex-col items-center">
              <Mail className="w-5 h-5 text-accent mb-3" />
              <span className="font-mono text-xs uppercase tracking-widest text-muted mb-1">Email</span>
              <a
                href={`mailto:${contact.email}`}
                className="font-mono text-xs sm:text-sm text-fg hover:text-accent transition-colors"
              >
                {contact.email}
              </a>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl border border-border bg-white/[0.015] text-center flex flex-col items-center">
              <Phone className="w-5 h-5 text-accent mb-3" />
              <span className="font-mono text-xs uppercase tracking-widest text-muted mb-1">Phone / WhatsApp</span>
              <a
                href={`tel:${contact.phone}`}
                className="font-mono text-xs sm:text-sm text-fg hover:text-accent transition-colors"
              >
                {contact.phone}
              </a>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-2xl border border-border bg-white/[0.015] text-center flex flex-col items-center">
              <MapPin className="w-5 h-5 text-accent mb-3" />
              <span className="font-mono text-xs uppercase tracking-widest text-muted mb-1">Location</span>
              <span className="font-mono text-xs sm:text-sm text-fg">
                {contact.location}
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
