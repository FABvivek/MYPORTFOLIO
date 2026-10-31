"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import type { Project } from "@/data/content";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0;

  const isSmartDoc = project.title.toLowerCase().includes("smartdoc");
  const isVideoAssistant = project.title.toLowerCase().includes("video");
  const isTradeX = project.title.toLowerCase().includes("tradex");
  const isRideSharing = project.title.toLowerCase().includes("ride");

  return (
    <FadeIn delay={index * 0.15}>
      <article
        className="group relative rounded-2xl border border-border/80 bg-white/[0.015] hover:border-accent/50 hover:bg-white/[0.025] transition-all duration-500 overflow-hidden p-6 sm:p-10 mb-12 shadow-xl"
      >
        {/* Subtle accent corner glow */}
        <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 bg-accent/[0.04] blur-[100px] rounded-full group-hover:bg-accent/[0.08] transition-all duration-700" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Architectural Diagram / Visual Side */}
          <div className={`lg:col-span-6 ${!isEven ? "lg:order-2" : "lg:order-1"}`}>
            <div className="relative rounded-xl border border-border bg-bg/95 overflow-hidden shadow-inner">
              {/* Window Topbar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-white/[0.02] text-xs font-mono text-muted">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  <span className="ml-2 text-fg/60 font-mono text-[11px] truncate max-w-[160px] sm:max-w-none">
                    architecture://{project.title.toLowerCase().split(" ")[0]}.internal
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-accent">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
                  </span>
                  <span>Active</span>
                </div>
              </div>

              {/* Diagram Canvas */}
              <div className="relative aspect-[16/11] p-6 flex flex-col justify-between overflow-hidden">
                {/* Background Grid */}
                <div
                  className="absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage: "radial-gradient(var(--accent-hex, #38BDF8) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />

                {/* SVG: TradeX Architecture */}
                {isTradeX && (
                  <svg viewBox="0 0 440 280" className="w-full h-full relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Eureka Registry */}
                    <rect x="300" y="15" width="115" height="34" rx="6" stroke="var(--accent-hex, #38BDF8)" strokeWidth="1" strokeDasharray="3 3" fill="#030303" fillOpacity="0.8" />
                    <text x="357" y="36" textAnchor="middle" fill="var(--accent-hex, #38BDF8)" fontSize="10" fontFamily="monospace" fontWeight="600">Eureka Registry</text>

                    {/* API Gateway */}
                    <rect x="25" y="15" width="150" height="36" rx="6" stroke="#F2EFE9" strokeWidth="1" fill="#141414" />
                    <text x="100" y="38" textAnchor="middle" fill="#F2EFE9" fontSize="11" fontFamily="monospace" fontWeight="600">API Gateway :8080</text>

                    {/* Microservices Cluster */}
                    <rect x="25" y="95" width="115" height="48" rx="6" stroke="var(--accent-hex, #38BDF8)" strokeWidth="1.2" fill="#0c1205" />
                    <text x="82" y="117" textAnchor="middle" fill="var(--accent-hex, #38BDF8)" fontSize="10" fontFamily="monospace" fontWeight="700">Order Service</text>
                    <text x="82" y="132" textAnchor="middle" fill="#8A8A8A" fontSize="8" fontFamily="monospace">O(log n) Match Engine</text>

                    <rect x="162" y="95" width="115" height="48" rx="6" stroke="var(--accent-hex, #38BDF8)" strokeWidth="1.2" fill="#0c1205" />
                    <text x="219" y="117" textAnchor="middle" fill="var(--accent-hex, #38BDF8)" fontSize="10" fontFamily="monospace" fontWeight="700">Wallet Service</text>
                    <text x="219" y="132" textAnchor="middle" fill="#8A8A8A" fontSize="8" fontFamily="monospace">Pessimistic Locking</text>

                    <rect x="300" y="95" width="115" height="48" rx="6" stroke="var(--accent-hex, #38BDF8)" strokeWidth="1.2" fill="#0c1205" />
                    <text x="357" y="117" textAnchor="middle" fill="var(--accent-hex, #38BDF8)" fontSize="10" fontFamily="monospace" fontWeight="700">Trade Service</text>
                    <text x="357" y="132" textAnchor="middle" fill="#8A8A8A" fontSize="8" fontFamily="monospace">Audit & Execution</text>

                    {/* Apache Kafka Event Bus */}
                    <rect x="25" y="185" width="390" height="40" rx="8" stroke="var(--accent-hex, #38BDF8)" strokeWidth="1.5" strokeDasharray="5 5" fill="#101807" />
                    <text x="220" y="210" textAnchor="middle" fill="var(--accent-hex, #38BDF8)" fontSize="12" fontFamily="monospace" fontWeight="700">
                      Apache Kafka Broker · Async Settlement Topics
                    </text>

                    {/* MySQL Database Node */}
                    <rect x="140" y="245" width="160" height="25" rx="4" stroke="#8A8A8A" strokeWidth="0.8" fill="#141414" />
                    <text x="220" y="262" textAnchor="middle" fill="#F2EFE9" fontSize="9" fontFamily="monospace">MySQL Persistence Layer</text>

                    {/* Interconnection Lines */}
                    <path d="M100 51 L82 95" stroke="#8A8A8A" strokeWidth="1" strokeDasharray="2 2" />
                    <path d="M100 51 L219 95" stroke="#8A8A8A" strokeWidth="1" strokeDasharray="2 2" />
                    <path d="M100 51 L357 95" stroke="#8A8A8A" strokeWidth="1" strokeDasharray="2 2" />

                    <path d="M82 143 L82 185" stroke="var(--accent-hex, #38BDF8)" strokeWidth="1.5" />
                    <path d="M219 143 L219 185" stroke="var(--accent-hex, #38BDF8)" strokeWidth="1.5" />
                    <path d="M357 143 L357 185" stroke="var(--accent-hex, #38BDF8)" strokeWidth="1.5" />
                    <path d="M220 225 L220 245" stroke="#8A8A8A" strokeWidth="1" />
                  </svg>
                )}

                {/* SVG: Ride-Sharing Architecture */}
                {isRideSharing && (
                  <svg viewBox="0 0 440 280" className="w-full h-full relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Mobile Client & Driver Apps */}
                    <rect x="30" y="20" width="160" height="36" rx="6" stroke="#F2EFE9" strokeWidth="1" fill="#141414" />
                    <text x="110" y="42" textAnchor="middle" fill="#F2EFE9" fontSize="10" fontFamily="monospace" fontWeight="600">Rider & Driver Clients</text>

                    {/* WebSocket Stream */}
                    <rect x="250" y="20" width="160" height="36" rx="6" stroke="var(--accent-hex, #38BDF8)" strokeWidth="1.2" fill="#0c1205" />
                    <text x="330" y="42" textAnchor="middle" fill="var(--accent-hex, #38BDF8)" fontSize="10" fontFamily="monospace" fontWeight="700">WebSocket Dispatch Gateway</text>

                    {/* Core Dispatch Engine */}
                    <rect x="30" y="105" width="160" height="50" rx="6" stroke="var(--accent-hex, #38BDF8)" strokeWidth="1.2" fill="#0c1205" />
                    <text x="110" y="128" textAnchor="middle" fill="var(--accent-hex, #38BDF8)" fontSize="10" fontFamily="monospace" fontWeight="700">Trip State Machine</text>
                    <text x="110" y="143" textAnchor="middle" fill="#8A8A8A" fontSize="8" fontFamily="monospace">Transactional State Locking</text>

                    {/* Redis GEO Spatial Index */}
                    <rect x="250" y="105" width="160" height="50" rx="6" stroke="var(--accent-hex, #38BDF8)" strokeWidth="1.2" fill="#0c1205" />
                    <text x="330" y="128" textAnchor="middle" fill="var(--accent-hex, #38BDF8)" fontSize="10" fontFamily="monospace" fontWeight="700">Redis GEO Radius Index</text>
                    <text x="330" y="143" textAnchor="middle" fill="#8A8A8A" fontSize="8" fontFamily="monospace">Latency &lt; 50ms Benchmark</text>

                    {/* Kafka Streams */}
                    <rect x="30" y="195" width="380" height="38" rx="8" stroke="var(--accent-hex, #38BDF8)" strokeWidth="1.5" strokeDasharray="5 5" fill="#101807" />
                    <text x="220" y="219" textAnchor="middle" fill="var(--accent-hex, #38BDF8)" fontSize="11" fontFamily="monospace" fontWeight="700">
                      Kafka: location.events & trip.lifecycle
                    </text>

                    {/* MySQL Trip Storage */}
                    <rect x="140" y="248" width="160" height="24" rx="4" stroke="#8A8A8A" strokeWidth="0.8" fill="#141414" />
                    <text x="220" y="264" textAnchor="middle" fill="#8A8A8A" fontSize="9" fontFamily="monospace">MySQL: 3-Stage Persistence</text>

                    {/* Connectors */}
                    <path d="M110 56 L110 105" stroke="#8A8A8A" strokeWidth="1" />
                    <path d="M190 38 L250 38" stroke="var(--accent-hex, #38BDF8)" strokeWidth="1" strokeDasharray="2 2" />
                    <path d="M330 56 L330 105" stroke="var(--accent-hex, #38BDF8)" strokeWidth="1" />
                    <path d="M190 130 L250 130" stroke="var(--accent-hex, #38BDF8)" strokeWidth="1" />
                    <path d="M110 155 L110 195" stroke="var(--accent-hex, #38BDF8)" strokeWidth="1.5" />
                    <path d="M330 155 L330 195" stroke="var(--accent-hex, #38BDF8)" strokeWidth="1.5" />
                    <path d="M220 233 L220 248" stroke="#8A8A8A" strokeWidth="1" />
                  </svg>
                )}

                {/* SVG: AI Video Assistant RAG Pipeline */}
                {isVideoAssistant && (
                  <svg viewBox="0 0 440 280" className="w-full h-full relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Stage 1: Video Ingest */}
                    <rect x="20" y="25" width="115" height="42" rx="6" stroke="#8A8A8A" strokeWidth="1" fill="#141414" />
                    <text x="77" y="45" textAnchor="middle" fill="#F2EFE9" fontSize="10" fontFamily="monospace" fontWeight="600">YouTube / Local</text>
                    <text x="77" y="58" textAnchor="middle" fill="#8A8A8A" fontSize="8" fontFamily="monospace">yt-dlp Ingestion</text>

                    {/* Stage 2: Audio Chunking */}
                    <rect x="162" y="25" width="115" height="42" rx="6" stroke="#8A8A8A" strokeWidth="1" fill="#141414" />
                    <text x="219" y="45" textAnchor="middle" fill="#F2EFE9" fontSize="10" fontFamily="monospace" fontWeight="600">ffmpeg Audio</text>
                    <text x="219" y="58" textAnchor="middle" fill="#8A8A8A" fontSize="8" fontFamily="monospace">Chunk Segmenter</text>

                    {/* Stage 3: Whisper ASR */}
                    <rect x="305" y="25" width="115" height="42" rx="6" stroke="var(--accent-hex, #38BDF8)" strokeWidth="1.2" fill="#0c1205" />
                    <text x="362" y="45" textAnchor="middle" fill="var(--accent-hex, #38BDF8)" fontSize="10" fontFamily="monospace" fontWeight="700">OpenAI Whisper</text>
                    <text x="362" y="58" textAnchor="middle" fill="#8A8A8A" fontSize="8" fontFamily="monospace">English & Hindi ASR</text>

                    {/* Stage 4: Sentence Embeddings */}
                    <rect x="305" y="115" width="115" height="45" rx="6" stroke="var(--accent-hex, #38BDF8)" strokeWidth="1.2" fill="#0c1205" />
                    <text x="362" y="136" textAnchor="middle" fill="var(--accent-hex, #38BDF8)" fontSize="10" fontFamily="monospace" fontWeight="700">Embeddings</text>
                    <text x="362" y="150" textAnchor="middle" fill="#8A8A8A" fontSize="8" fontFamily="monospace">Sentence Transformers</text>

                    {/* Stage 5: ChromaDB */}
                    <rect x="162" y="115" width="115" height="45" rx="6" stroke="var(--accent-hex, #38BDF8)" strokeWidth="1.5" strokeDasharray="3 3" fill="#101807" />
                    <text x="219" y="136" textAnchor="middle" fill="var(--accent-hex, #38BDF8)" fontSize="10" fontFamily="monospace" fontWeight="700">ChromaDB Vector</text>
                    <text x="219" y="150" textAnchor="middle" fill="#8A8A8A" fontSize="8" fontFamily="monospace">Cosine Similarity</text>

                    {/* Stage 6: LLM Generation */}
                    <rect x="20" y="115" width="115" height="45" rx="6" stroke="var(--accent-hex, #38BDF8)" strokeWidth="1.2" fill="#0c1205" />
                    <text x="77" y="136" textAnchor="middle" fill="var(--accent-hex, #38BDF8)" fontSize="10" fontFamily="monospace" fontWeight="700">Mistral AI RAG</text>
                    <text x="77" y="150" textAnchor="middle" fill="#8A8A8A" fontSize="8" fontFamily="monospace">5 Structured Outputs</text>

                    {/* LangChain Orchestration Bar */}
                    <rect x="20" y="195" width="400" height="38" rx="8" stroke="var(--accent-hex, #38BDF8)" strokeWidth="1" strokeDasharray="4 4" fill="#141414" />
                    <text x="220" y="219" textAnchor="middle" fill="var(--accent-hex, #38BDF8)" fontSize="11" fontFamily="monospace" fontWeight="700">
                      LangChain Pipeline Orchestration & Memory
                    </text>

                    {/* Output banner */}
                    <rect x="120" y="248" width="200" height="24" rx="4" stroke="#8A8A8A" strokeWidth="0.8" fill="#141414" />
                    <text x="220" y="264" textAnchor="middle" fill="#F2EFE9" fontSize="9" fontFamily="monospace">Streamlit Interactive Web UI</text>

                    {/* Flow Paths */}
                    <path d="M135 46 L162 46" stroke="var(--accent-hex, #38BDF8)" strokeWidth="1" />
                    <path d="M277 46 L305 46" stroke="var(--accent-hex, #38BDF8)" strokeWidth="1" />
                    <path d="M362 67 L362 115" stroke="var(--accent-hex, #38BDF8)" strokeWidth="1" />
                    <path d="M305 137 L277 137" stroke="var(--accent-hex, #38BDF8)" strokeWidth="1" />
                    <path d="M162 137 L135 137" stroke="var(--accent-hex, #38BDF8)" strokeWidth="1" />
                    <path d="M77 160 L77 195" stroke="var(--accent-hex, #38BDF8)" strokeWidth="1" />
                    <path d="M220 233 L220 248" stroke="#8A8A8A" strokeWidth="1" />
                  </svg>
                )}

                {/* SVG: SmartDoc AI Semantic Caching Architecture */}
                {isSmartDoc && (
                  <svg viewBox="0 0 440 280" className="w-full h-full relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Client UI */}
                    <rect x="20" y="20" width="125" height="42" rx="6" stroke="#F2EFE9" strokeWidth="1" fill="#141414" />
                    <text x="82" y="40" textAnchor="middle" fill="#F2EFE9" fontSize="10" fontFamily="monospace" fontWeight="600">React + Vite UI</text>
                    <text x="82" y="53" textAnchor="middle" fill="#8A8A8A" fontSize="8" fontFamily="monospace">SSE Stream :5173</text>

                    {/* FastAPI Gateway & Router */}
                    <rect x="165" y="20" width="145" height="42" rx="6" stroke="var(--accent-hex, #38BDF8)" strokeWidth="1.2" fill="#0c1205" />
                    <text x="237" y="40" textAnchor="middle" fill="var(--accent-hex, #38BDF8)" fontSize="10" fontFamily="monospace" fontWeight="700">FastAPI Router :8000</text>
                    <text x="237" y="53" textAnchor="middle" fill="#8A8A8A" fontSize="8" fontFamily="monospace">Async Rewriter &amp; Intent Guard</text>

                    {/* Nomic Embedding Model */}
                    <rect x="330" y="20" width="90" height="42" rx="6" stroke="#8A8A8A" strokeWidth="1" fill="#141414" />
                    <text x="375" y="40" textAnchor="middle" fill="#F2EFE9" fontSize="9" fontFamily="monospace" fontWeight="600">Nomic Embed</text>
                    <text x="375" y="53" textAnchor="middle" fill="#8A8A8A" fontSize="8" fontFamily="monospace">768-Dim Vector</text>

                    {/* RediSearch KNN Semantic Cache */}
                    <rect x="20" y="100" width="190" height="52" rx="6" stroke="var(--accent-hex, #38BDF8)" strokeWidth="1.4" fill="#0c1205" />
                    <text x="115" y="121" textAnchor="middle" fill="var(--accent-hex, #38BDF8)" fontSize="10" fontFamily="monospace" fontWeight="700">RediSearch KNN Cache</text>
                    <text x="115" y="135" textAnchor="middle" fill="#8A8A8A" fontSize="8" fontFamily="monospace">HIT Latency: 28ms (~147x)</text>
                    <text x="115" y="146" textAnchor="middle" fill="var(--accent-hex, #38BDF8)" fontSize="8" fontFamily="monospace">Tag Isolation Filters (SHA-256)</text>

                    {/* pgvector Retriever */}
                    <rect x="230" y="100" width="190" height="52" rx="6" stroke="var(--accent-hex, #38BDF8)" strokeWidth="1.2" fill="#0c1205" />
                    <text x="325" y="121" textAnchor="middle" fill="var(--accent-hex, #38BDF8)" fontSize="10" fontFamily="monospace" fontWeight="700">pgvector Cosine Store</text>
                    <text x="325" y="135" textAnchor="middle" fill="#8A8A8A" fontSize="8" fontFamily="monospace">PostgreSQL 16 · HNSW Index</text>
                    <text x="325" y="146" textAnchor="middle" fill="#8A8A8A" fontSize="8" fontFamily="monospace">PyMuPDF Page-Aware Chunks</text>

                    {/* Local Host Ollama LLM */}
                    <rect x="20" y="190" width="400" height="38" rx="8" stroke="var(--accent-hex, #38BDF8)" strokeWidth="1.5" strokeDasharray="5 5" fill="#101807" />
                    <text x="220" y="214" textAnchor="middle" fill="var(--accent-hex, #38BDF8)" fontSize="11" fontFamily="monospace" fontWeight="700">
                      Local Ollama · Llama 3.2 (3B) / 3.1 (8B) Inference (8192 ctx)
                    </text>

                    {/* Telemetry & Reverse Invalidation */}
                    <rect x="105" y="248" width="230" height="24" rx="4" stroke="#8A8A8A" strokeWidth="0.8" fill="#141414" />
                    <text x="220" y="264" textAnchor="middle" fill="#8A8A8A" fontSize="9" fontFamily="monospace">Telemetry &amp; Reverse Invalidation (0 Leak)</text>

                    {/* Connectors */}
                    <path d="M145 41 L165 41" stroke="var(--accent-hex, #38BDF8)" strokeWidth="1" />
                    <path d="M310 41 L330 41" stroke="#8A8A8A" strokeWidth="1" strokeDasharray="2 2" />
                    <path d="M200 62 L115 100" stroke="var(--accent-hex, #38BDF8)" strokeWidth="1.2" />
                    <path d="M260 62 L325 100" stroke="#8A8A8A" strokeWidth="1" strokeDasharray="2 2" />
                    <path d="M210 126 L230 126" stroke="#8A8A8A" strokeWidth="1" strokeDasharray="3 3" />
                    <path d="M325 152 L325 190" stroke="var(--accent-hex, #38BDF8)" strokeWidth="1.5" />
                    <path d="M75 100 L75 62" stroke="var(--accent-hex, #38BDF8)" strokeWidth="1.2" />
                    <path d="M220 228 L220 248" stroke="#8A8A8A" strokeWidth="1" />
                  </svg>
                )}

                {/* Generic Fallback Architecture Diagram */}
                {!isTradeX && !isRideSharing && !isVideoAssistant && !isSmartDoc && (
                  <svg viewBox="0 0 440 280" className="w-full h-full relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="40" y="30" width="360" height="60" rx="8" stroke="var(--accent-hex, #38BDF8)" strokeWidth="1.2" fill="#0c1205" />
                    <text x="220" y="65" textAnchor="middle" fill="var(--accent-hex, #38BDF8)" fontSize="12" fontFamily="monospace" fontWeight="700">{project.title}</text>
                    <rect x="40" y="120" width="165" height="70" rx="6" stroke="#8A8A8A" strokeWidth="1" fill="#141414" />
                    <text x="122" y="155" textAnchor="middle" fill="#F2EFE9" fontSize="10" fontFamily="monospace">System Core</text>
                    <text x="122" y="170" textAnchor="middle" fill="#8A8A8A" fontSize="8" fontFamily="monospace">{project.category}</text>
                    <rect x="235" y="120" width="165" height="70" rx="6" stroke="var(--accent-hex, #38BDF8)" strokeWidth="1.2" fill="#101807" />
                    <text x="317" y="155" textAnchor="middle" fill="var(--accent-hex, #38BDF8)" fontSize="10" fontFamily="monospace">Verified Architecture</text>
                    <text x="317" y="170" textAnchor="middle" fill="#8A8A8A" fontSize="8" fontFamily="monospace">High-Performance Runtime</text>
                    <path d="M220 90 L220 120" stroke="var(--accent-hex, #38BDF8)" strokeWidth="1" />
                    <path d="M122 90 L122 120" stroke="#8A8A8A" strokeWidth="1" strokeDasharray="2 2" />
                    <path d="M317 90 L317 120" stroke="var(--accent-hex, #38BDF8)" strokeWidth="1" />
                    <rect x="120" y="225" width="200" height="30" rx="6" stroke="#8A8A8A" strokeWidth="0.8" fill="#141414" />
                    <text x="220" y="244" textAnchor="middle" fill="#8A8A8A" fontSize="9" fontFamily="monospace">Active Engineering Environment</text>
                  </svg>
                )}

                {/* Bottom Tag */}
                <div className="flex items-center justify-between pt-3 border-t border-border/60 text-[10px] font-mono text-muted">
                  <span>SYSTEM METRICS: VERIFIED</span>
                  <span className="text-accent">ARCHITECTURE LEVEL 0{index + 1}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project Details Content Side */}
          <div className={`lg:col-span-6 flex flex-col justify-center ${!isEven ? "lg:order-1" : "lg:order-2"}`}>
            {/* Category & Project Number */}
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-accent font-semibold px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
                PROJ-{project.number}
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                {project.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-fg mb-4 leading-tight font-medium">
              {project.title}
            </h3>

            {/* Summary */}
            <p className="text-base text-fg/80 leading-relaxed font-sans mb-6">
              {project.summary}
            </p>

            {/* Key Metrics Badges */}
            {project.metrics && (
              <div className="grid grid-cols-3 gap-3 mb-6 p-3.5 rounded-xl border border-border/80 bg-white/[0.015]">
                {project.metrics.map((m, i) => (
                  <div key={i} className="text-center font-mono">
                    <div className="text-xs sm:text-sm text-accent font-semibold">{m.value}</div>
                    <div className="text-[10px] text-muted uppercase tracking-wider">{m.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-xs font-mono uppercase tracking-wider rounded-md border border-border bg-white/[0.02] text-muted hover:border-accent/50 hover:text-accent transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Detailed Engineering Highlights */}
            <ul className="space-y-2.5 mb-8">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-fg/70 leading-relaxed font-sans">
                  <span className="text-accent mt-0.5 shrink-0 text-xs">▹</span>
                  <span>{h.text}</span>
                </li>
              ))}
            </ul>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.03] text-fg font-mono text-xs uppercase tracking-wider font-medium hover:border-accent hover:text-accent hover:bg-accent/[0.04] transition-all duration-300"
              >
                <GithubIcon className="w-4 h-4 text-accent group-hover:scale-105 transition-transform" />
                <span>View on GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-accent opacity-70 group-hover:opacity-100 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </article>
    </FadeIn>
  );
}
