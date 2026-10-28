"use client";

import { useState, useRef, useEffect } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Terminal as TerminalIcon, Play, RefreshCw, Check, Copy } from "lucide-react";

interface CommandHistory {
  command: string;
  output: string | JSX.Element;
}

export function Terminal() {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);
  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  const initialHistory: CommandHistory[] = [
    {
      command: "whoami",
      output: (
        <div className="space-y-1 text-fg/80">
          <p className="text-accent font-semibold">Vivek Singh — Backend & Distributed Systems Engineer</p>
          <p>B.E. Electronics & Telecommunication (2023–2027) @ Army Institute of Technology, Pune (CGPA: 8.17)</p>
          <p>650+ DSA Solved · LeetCode 1550+ · CodeChef Starters 225 Rank #320 globally</p>
        </div>
      ),
    },
    {
      command: "systemctl status microservices",
      output: (
        <div className="space-y-1 text-fg/75 font-mono text-xs">
          <p className="text-green-400">● order-service.service - active (running) on :8081 [O(log n) Match Engine]</p>
          <p className="text-green-400">● wallet-service.service - active (running) on :8082 [Pessimistic Balance Locks]</p>
          <p className="text-green-400">● trade-service.service - active (running) on :8083 [Audit Log & Execution]</p>
          <p className="text-green-400">● kafka-broker.service - active (streaming) topics: [trade.settlement, driver.geo]</p>
          <p className="text-green-400">● redis-cluster.service - active (in-memory) lookup-latency: &lt; 50ms</p>
        </div>
      ),
    },
  ];

  const [history, setHistory] = useState<CommandHistory[]>(initialHistory);

  const quickCommands = ["help", "projects", "skills", "benchmark", "contact", "clear"];

  const handleCommand = (cmdStr: string) => {
    const cmd = cmdStr.trim().toLowerCase();
    if (!cmd) return;

    let output: string | JSX.Element = "";

    switch (cmd) {
      case "help":
        output = (
          <div className="space-y-1 text-xs font-mono text-fg/80">
            <p className="text-accent">Available System Commands:</p>
            <p><span className="text-accent">whoami</span> — Identity and background</p>
            <p><span className="text-accent">projects</span> — Key distributed systems & architecture</p>
            <p><span className="text-accent">skills</span> — Technical languages, frameworks & databases</p>
            <p><span className="text-accent">benchmark</span> — Execute live simulated system load test</p>
            <p><span className="text-accent">education</span> — Academic degrees & scores</p>
            <p><span className="text-accent">contact</span> — Get direct contact links</p>
            <p><span className="text-accent">clear</span> — Reset terminal window</p>
          </div>
        );
        break;

      case "whoami":
        output = (
          <div className="space-y-1 text-fg/80">
            <p className="text-accent font-semibold">Vivek Singh — Backend & Distributed Systems Engineer</p>
            <p>B.E. Electronics & Telecommunication (2023–2027) @ Army Institute of Technology, Pune (CGPA: 8.17)</p>
            <p>650+ DSA Solved · LeetCode 1550+ · CodeChef Starters 225 Rank #320 globally</p>
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-2 text-xs font-mono text-fg/80">
            <div>
              <p className="text-accent font-semibold">[01] TradeX — Distributed Crypto Trading Engine</p>
              <p className="text-muted">Java, Spring Boot, Kafka, MySQL, Eureka, API Gateway</p>
              <p className="text-fg/70">3 Microservices · O(log n) matching · 2-balance wallet locking</p>
            </div>
            <div>
              <p className="text-accent font-semibold">[02] Ride-Sharing System — Uber-like Backend</p>
              <p className="text-muted">Java, Spring Boot, Kafka, Redis GEO, MySQL, WebSockets</p>
              <p className="text-fg/70">Sub-50ms driver lookups · Transactional driver state · Real-time socket stream</p>
            </div>
            <div>
              <p className="text-accent font-semibold">[03] AI Video Assistant (RAG Pipeline)</p>
              <p className="text-muted">Python, Streamlit, LangChain, Whisper, ChromaDB, Mistral AI</p>
              <p className="text-fg/70">6-Stage RAG pipeline · Whisper English/Hindi ASR · 5 structured outputs</p>
            </div>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="space-y-1 text-xs font-mono text-fg/80">
            <p><span className="text-accent">Languages:</span> Java, Python, SQL, JavaScript, HTML, CSS</p>
            <p><span className="text-accent">Frameworks:</span> Spring Boot, Spring Security, Spring Cloud, Hibernate/JPA</p>
            <p><span className="text-accent">Architecture:</span> Microservices, Eureka, API Gateway, Event-Driven, Concurrency</p>
            <p><span className="text-accent">Data & Streams:</span> Apache Kafka, Redis, MySQL, MongoDB, ChromaDB</p>
            <p><span className="text-accent">AI & RAG:</span> LangChain, OpenAI Whisper, Sentence Transformers</p>
            <p><span className="text-accent">Tools:</span> Docker, Docker Compose, Git, Postman</p>
          </div>
        );
        break;

      case "benchmark":
        output = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-yellow-400">--- Running System Concurrency Benchmark ---</p>
            <p className="text-fg/80">[1] Dispatching 10,000 concurrent trade orders across 2 Priority Queues...</p>
            <p className="text-green-400">✔ Matching Complexity: O(log n) verified. 0 order collisions.</p>
            <p className="text-fg/80">[2] Pinging Redis GEO spatial index radius (5km)...</p>
            <p className="text-green-400">✔ Nearest driver query latency: 38.4ms (Target: &lt;50ms) PASS.</p>
            <p className="text-fg/80">[3] Kafka event stream throughput...</p>
            <p className="text-green-400">✔ Asynchronous settlement events decoupled. Zero double-spend exceptions.</p>
            <p className="text-accent font-semibold">ALL BENCHMARKS SATISFIED.</p>
          </div>
        );
        break;

      case "education":
        output = (
          <div className="space-y-2 text-xs font-mono text-fg/80">
            <div>
              <p className="text-accent">Army Institute of Technology, Pune (2023 - 2027)</p>
              <p className="text-muted">B.E. Electronics & Telecommunication · CGPA: 8.17</p>
            </div>
            <div>
              <p className="text-accent">Army Public School, Gorakhpur (2021 - 2022)</p>
              <p className="text-muted">Higher Secondary (CBSE) · 88.2%</p>
            </div>
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="space-y-1 text-xs font-mono text-fg/80">
            <p className="text-accent">Email: <a href="mailto:viveksinghait2027@gmail.com" className="underline hover:text-white">viveksinghait2027@gmail.com</a></p>
            <p>Phone: +91-6394127185</p>
            <p>GitHub: <a href="https://github.com/FABvivek" target="_blank" rel="noreferrer" className="underline text-accent">github.com/FABvivek</a></p>
            <p>LinkedIn: <a href="https://linkedin.com/in/vivek-singh-072242309" target="_blank" rel="noreferrer" className="underline text-accent">linkedin.com/in/vivek-singh-072242309</a></p>
            <p>LeetCode: <a href="https://leetcode.com/u/fabvivek" target="_blank" rel="noreferrer" className="underline text-accent">leetcode.com/u/fabvivek</a></p>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        output = (
          <p className="text-xs font-mono text-red-400">
            command not found: {cmd}. Type &apos;help&apos; for available commands.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: cmdStr, output }]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
    }
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const copyLog = () => {
    navigator.clipboard.writeText(
      "Vivek Singh - Backend Engineer | Spring Boot, Kafka, Redis | viveksinghait2027@gmail.com"
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="console" className="relative py-24 md:py-36 border-b border-border bg-black/40">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="flex items-center justify-between pb-6 border-b border-border/80 text-xs font-mono uppercase tracking-[0.2em] text-muted mb-12">
          <span>INTERACTIVE BACKEND CONSOLE</span>
          <span className="hidden sm:inline text-accent/80">LIVE SYSTEM RUNTIME</span>
        </div>

        <div className="max-w-3xl mb-10">
          <FadeIn>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-fg leading-[1.08] tracking-tight mb-4">
              Query the system.
              <br />
              <span className="font-serif italic text-fg/95 font-normal">
                Inspect the architecture.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted font-sans">
              Interact with simulated microservices, verify benchmark metrics, and query my engineering background in real-time.
            </p>
          </FadeIn>
        </div>

        {/* Terminal Window Box */}
        <FadeIn delay={0.15}>
          <div className="rounded-2xl border border-border bg-[#080808] shadow-2xl overflow-hidden font-mono text-xs">
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-border text-muted select-none">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
                <span className="ml-3 text-fg/60 font-mono text-[11px] hidden sm:inline">
                  vivek@backend-cluster-01: ~ (zsh)
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setHistory([])}
                  className="hover:text-fg transition-colors flex items-center gap-1 text-[11px]"
                  title="Clear console"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span className="hidden md:inline">Reset</span>
                </button>
                <button
                  onClick={copyLog}
                  className="hover:text-accent transition-colors flex items-center gap-1 text-[11px]"
                  title="Copy contact"
                >
                  {copied ? <Check className="w-3 h-3 text-accent" /> : <Copy className="w-3 h-3" />}
                  <span className="hidden md:inline">{copied ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            <div ref={terminalBodyRef} className="p-5 sm:p-6 min-h-[300px] max-h-[440px] overflow-y-auto space-y-4">
              {history.map((item, idx) => (
                <div key={idx} className="space-y-1.5 leading-relaxed">
                  <div className="flex items-center gap-2 text-muted">
                    <span className="text-accent font-semibold">vivek@core:~$</span>
                    <span className="text-fg">{item.command}</span>
                  </div>
                  <div className="pl-4 border-l border-border/80">{item.output}</div>
                </div>
              ))}
            </div>

            {/* Terminal Input Row */}
            <div className="p-3 sm:p-4 bg-white/[0.015] border-t border-border flex items-center gap-3">
              <span className="text-accent font-bold pl-2">vivek@core:~$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type 'help', 'benchmark', 'projects', or 'skills'..."
                className="w-full bg-transparent text-fg placeholder:text-muted/40 focus:outline-none font-mono text-xs"
              />
              <button
                onClick={() => handleCommand(input)}
                className="px-3.5 py-1.5 rounded border border-accent/60 bg-accent/10 text-accent font-mono text-[11px] font-medium hover:bg-accent hover:text-bg transition-colors shrink-0"
              >
                Run
              </button>
            </div>

            {/* Quick Command Suggestion Chips */}
            <div className="px-4 py-2.5 bg-black/60 border-t border-border/40 flex flex-wrap items-center gap-2 text-[11px]">
              <span className="text-muted/70 uppercase tracking-widest text-[10px]">Quick:</span>
              {quickCommands.map((q) => (
                <button
                  key={q}
                  onClick={() => handleCommand(q)}
                  className="px-2.5 py-0.5 rounded border border-border/70 hover:border-accent hover:text-accent text-muted transition-colors font-mono"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
