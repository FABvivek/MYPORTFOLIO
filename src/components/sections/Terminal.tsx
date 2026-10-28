"use client";

import { useState, useRef, useEffect } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Play, RefreshCw, Check, Copy, Loader2 } from "lucide-react";

interface CommandEntry {
  id: string;
  command: string;
  lines: React.ReactNode[];
  isStreaming?: boolean;
}

interface TerminalLineItem {
  node: React.ReactNode;
  delay?: number; // Delay in milliseconds before this line prints
}

export function Terminal() {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);
  const [commandHistoryList, setCommandHistoryList] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const executionIdRef = useRef<number>(0);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  const initialHistory: CommandEntry[] = [
    {
      id: "init-1",
      command: "whoami",
      lines: [
        <div key="w-1" className="text-accent font-semibold">
          Vivek Singh — Backend & Distributed Systems Engineer
        </div>,
        <div key="w-2" className="text-fg/80">
          B.E. Electronics & Telecommunication (2023–2027) @ Army Institute of Technology, Pune (CGPA: 8.17)
        </div>,
        <div key="w-3" className="text-fg/80">
          650+ DSA Solved · LeetCode 1550+ · CodeChef Starters 225 Rank #320 globally
        </div>,
      ],
      isStreaming: false,
    },
    {
      id: "init-2",
      command: "systemctl status microservices",
      lines: [
        <div key="s-1" className="text-green-400">
          ● order-service.service - active (running) on :8081 [O(log n) Match Engine]
        </div>,
        <div key="s-2" className="text-green-400">
          ● wallet-service.service - active (running) on :8082 [Pessimistic Balance Locks]
        </div>,
        <div key="s-3" className="text-green-400">
          ● trade-service.service - active (running) on :8083 [Audit Log & Execution]
        </div>,
        <div key="s-4" className="text-green-400">
          ● kafka-broker.service - active (streaming) topics: [trade.settlement, driver.geo]
        </div>,
        <div key="s-5" className="text-green-400">
          ● redis-cluster.service - active (in-memory) lookup-latency: &lt; 50ms
        </div>,
      ],
      isStreaming: false,
    },
  ];

  const [history, setHistory] = useState<CommandEntry[]>(initialHistory);

  const quickCommands = ["help", "projects", "skills", "benchmark", "contact", "clear"];

  const clearAllTimeouts = () => {
    timeoutsRef.current.forEach((t) => clearTimeout(t));
    timeoutsRef.current = [];
  };

  useEffect(() => {
    return () => {
      clearAllTimeouts();
    };
  }, []);

  // Auto-scroll whenever history updates
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const getCommandLines = (rawCmd: string): TerminalLineItem[] => {
    const cmd = rawCmd.trim().toLowerCase();

    switch (cmd) {
      case "help":
        return [
          {
            node: <p className="text-accent font-semibold">Available System Commands:</p>,
            delay: 40,
          },
          {
            node: (
              <p>
                <span className="text-accent font-medium">whoami</span> — Identity and background
              </p>
            ),
            delay: 50,
          },
          {
            node: (
              <p>
                <span className="text-accent font-medium">projects</span> — Key distributed systems & architecture
              </p>
            ),
            delay: 50,
          },
          {
            node: (
              <p>
                <span className="text-accent font-medium">skills</span> — Technical languages, frameworks & databases
              </p>
            ),
            delay: 50,
          },
          {
            node: (
              <p>
                <span className="text-accent font-medium">benchmark</span> — Execute live simulated system load test
              </p>
            ),
            delay: 50,
          },
          {
            node: (
              <p>
                <span className="text-accent font-medium">systemctl</span> — Query status of background microservices
              </p>
            ),
            delay: 50,
          },
          {
            node: (
              <p>
                <span className="text-accent font-medium">education</span> — Academic degrees & scores
              </p>
            ),
            delay: 50,
          },
          {
            node: (
              <p>
                <span className="text-accent font-medium">contact</span> — Get direct contact links
              </p>
            ),
            delay: 50,
          },
          {
            node: (
              <p>
                <span className="text-accent font-medium">clear</span> — Reset terminal window
              </p>
            ),
            delay: 50,
          },
        ];

      case "whoami":
        return [
          {
            node: <p className="text-accent font-semibold">Vivek Singh — Backend & Distributed Systems Engineer</p>,
            delay: 60,
          },
          {
            node: (
              <p className="text-fg/80">
                B.E. Electronics & Telecommunication (2023–2027) @ Army Institute of Technology, Pune (CGPA: 8.17)
              </p>
            ),
            delay: 80,
          },
          {
            node: (
              <p className="text-fg/80">
                650+ DSA Solved · LeetCode 1550+ · CodeChef Starters 225 Rank #320 globally
              </p>
            ),
            delay: 80,
          },
        ];

      case "systemctl":
      case "systemctl status":
      case "systemctl status microservices":
      case "status":
        return [
          {
            node: <p className="text-green-400">● order-service.service - active (running) on :8081 [O(log n) Match Engine]</p>,
            delay: 90,
          },
          {
            node: <p className="text-green-400">● wallet-service.service - active (running) on :8082 [Pessimistic Balance Locks]</p>,
            delay: 90,
          },
          {
            node: <p className="text-green-400">● trade-service.service - active (running) on :8083 [Audit Log & Execution]</p>,
            delay: 90,
          },
          {
            node: <p className="text-green-400">● kafka-broker.service - active (streaming) topics: [trade.settlement, driver.geo]</p>,
            delay: 90,
          },
          {
            node: <p className="text-green-400">● redis-cluster.service - active (in-memory) lookup-latency: &lt; 50ms</p>,
            delay: 90,
          },
        ];

      case "projects":
        return [
          {
            node: (
              <div className="pt-0.5">
                <p className="text-accent font-semibold">[01] TradeX — Distributed Crypto Trading Engine</p>
                <p className="text-muted">Java, Spring Boot, Kafka, MySQL, Eureka, API Gateway</p>
                <p className="text-fg/70">3 Microservices · O(log n) matching · 2-balance wallet locking</p>
              </div>
            ),
            delay: 90,
          },
          {
            node: (
              <div className="pt-1.5">
                <p className="text-accent font-semibold">[02] Ride-Sharing System — Uber-like Backend</p>
                <p className="text-muted">Java, Spring Boot, Kafka, Redis GEO, MySQL, WebSockets</p>
                <p className="text-fg/70">Sub-50ms driver lookups · Transactional driver state · Real-time socket stream</p>
              </div>
            ),
            delay: 150,
          },
          {
            node: (
              <div className="pt-1.5">
                <p className="text-accent font-semibold">[03] AI Video Assistant (RAG Pipeline)</p>
                <p className="text-muted">Python, Streamlit, LangChain, Whisper, ChromaDB, Mistral AI</p>
                <p className="text-fg/70">6-Stage RAG pipeline · Whisper English/Hindi ASR · 5 structured outputs</p>
              </div>
            ),
            delay: 150,
          },
        ];

      case "skills":
        return [
          {
            node: (
              <p>
                <span className="text-accent font-medium">Languages:</span> Java, Python, SQL, JavaScript, HTML, CSS
              </p>
            ),
            delay: 60,
          },
          {
            node: (
              <p>
                <span className="text-accent font-medium">Frameworks:</span> Spring Boot, Spring Security, Spring Cloud, Hibernate/JPA
              </p>
            ),
            delay: 70,
          },
          {
            node: (
              <p>
                <span className="text-accent font-medium">Architecture:</span> Microservices, Eureka, API Gateway, Event-Driven, Concurrency
              </p>
            ),
            delay: 70,
          },
          {
            node: (
              <p>
                <span className="text-accent font-medium">Data & Streams:</span> Apache Kafka, Redis, MySQL, MongoDB, ChromaDB
              </p>
            ),
            delay: 70,
          },
          {
            node: (
              <p>
                <span className="text-accent font-medium">AI & RAG:</span> LangChain, OpenAI Whisper, Sentence Transformers
              </p>
            ),
            delay: 70,
          },
          {
            node: (
              <p>
                <span className="text-accent font-medium">Tools:</span> Docker, Docker Compose, Git, Postman
              </p>
            ),
            delay: 70,
          },
        ];

      case "benchmark":
        return [
          {
            node: <p className="text-yellow-400 font-semibold">--- Running System Concurrency Benchmark ---</p>,
            delay: 120,
          },
          {
            node: <p className="text-fg/80">[1] Dispatching 10,000 concurrent trade orders across 2 Priority Queues...</p>,
            delay: 280,
          },
          {
            node: <p className="text-green-400">✔ Matching Complexity: O(log n) verified. 0 order collisions.</p>,
            delay: 240,
          },
          {
            node: <p className="text-fg/80">[2] Pinging Redis GEO spatial index radius (5km)...</p>,
            delay: 280,
          },
          {
            node: <p className="text-green-400">✔ Nearest driver query latency: 38.4ms (Target: &lt;50ms) PASS.</p>,
            delay: 240,
          },
          {
            node: <p className="text-fg/80">[3] Kafka event stream throughput...</p>,
            delay: 280,
          },
          {
            node: <p className="text-green-400">✔ Asynchronous settlement events decoupled. Zero double-spend exceptions.</p>,
            delay: 240,
          },
          {
            node: <p className="text-accent font-semibold pt-0.5">ALL BENCHMARKS SATISFIED.</p>,
            delay: 200,
          },
        ];

      case "education":
        return [
          {
            node: (
              <div>
                <p className="text-accent font-semibold">Army Institute of Technology, Pune (2023 - 2027)</p>
                <p className="text-muted">B.E. Electronics & Telecommunication · CGPA: 8.17</p>
              </div>
            ),
            delay: 80,
          },
          {
            node: (
              <div className="pt-1">
                <p className="text-accent font-semibold">Army Public School, Gorakhpur (2021 - 2022)</p>
                <p className="text-muted">Higher Secondary (CBSE) · 88.2%</p>
              </div>
            ),
            delay: 110,
          },
        ];

      case "contact":
        return [
          {
            node: (
              <p>
                <span className="text-accent font-medium">Email:</span>{" "}
                <a href="mailto:viveksinghait2027@gmail.com" className="underline hover:text-white transition-colors">
                  viveksinghait2027@gmail.com
                </a>
              </p>
            ),
            delay: 50,
          },
          {
            node: (
              <p>
                <span className="text-accent font-medium">Phone:</span> +91-6394127185
              </p>
            ),
            delay: 50,
          },
          {
            node: (
              <p>
                <span className="text-accent font-medium">GitHub:</span>{" "}
                <a
                  href="https://github.com/FABvivek"
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-accent hover:text-white transition-colors"
                >
                  github.com/FABvivek
                </a>
              </p>
            ),
            delay: 50,
          },
          {
            node: (
              <p>
                <span className="text-accent font-medium">LinkedIn:</span>{" "}
                <a
                  href="https://linkedin.com/in/vivek-singh-072242309"
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-accent hover:text-white transition-colors"
                >
                  linkedin.com/in/vivek-singh-072242309
                </a>
              </p>
            ),
            delay: 50,
          },
          {
            node: (
              <p>
                <span className="text-accent font-medium">LeetCode:</span>{" "}
                <a
                  href="https://leetcode.com/u/fabvivek"
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-accent hover:text-white transition-colors"
                >
                  leetcode.com/u/fabvivek
                </a>
              </p>
            ),
            delay: 50,
          },
        ];

      default:
        return [
          {
            node: (
              <p className="text-red-400">
                command not found: {rawCmd.trim()}. Type &apos;help&apos; for available commands.
              </p>
            ),
            delay: 50,
          },
        ];
    }
  };

  const handleCommand = (cmdStr: string) => {
    if (isExecuting) return;
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    setInput("");
    setHistoryIndex(-1);
    setCommandHistoryList((prev) => [...prev, trimmed]);

    if (trimmed.toLowerCase() === "clear") {
      clearAllTimeouts();
      executionIdRef.current += 1;
      setIsExecuting(false);
      setHistory([]);
      return;
    }

    const linesToStream = getCommandLines(trimmed);
    const entryId = "cmd-" + Date.now() + "-" + Math.random().toString(36).slice(2, 7);

    // Add entry immediately with empty lines
    setHistory((prev) => [
      ...prev,
      {
        id: entryId,
        command: trimmed,
        lines: [],
        isStreaming: true,
      },
    ]);

    setIsExecuting(true);
    const currentExecutionId = ++executionIdRef.current;

    let accumulatedDelay = 0;
    linesToStream.forEach((item, index) => {
      accumulatedDelay += item.delay || 70;
      const timeoutId = setTimeout(() => {
        if (executionIdRef.current !== currentExecutionId) return;

        const isLast = index === linesToStream.length - 1;

        setHistory((prev) =>
          prev.map((entry) => {
            if (entry.id !== entryId) return entry;
            return {
              ...entry,
              lines: [...entry.lines, item.node],
              isStreaming: !isLast,
            };
          })
        );

        if (isLast) {
          setIsExecuting(false);
          setTimeout(() => inputRef.current?.focus(), 20);
        }
      }, accumulatedDelay);

      timeoutsRef.current.push(timeoutId);
    });
  };

  const handleCancel = () => {
    if (!isExecuting) return;
    clearAllTimeouts();
    executionIdRef.current += 1;
    setIsExecuting(false);
    setHistory((prev) => {
      if (prev.length === 0) return prev;
      const last = prev[prev.length - 1];
      return [
        ...prev.slice(0, -1),
        {
          ...last,
          lines: [
            ...last.lines,
            <p key="cancel" className="text-muted/70 italic text-[11px] pt-1">
              ^C (process terminated)
            </p>,
          ],
          isStreaming: false,
        },
      ];
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Ctrl+C to terminate running process
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "c" && isExecuting) {
      e.preventDefault();
      handleCancel();
      return;
    }

    if (e.key === "Enter") {
      handleCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistoryList.length === 0) return;
      const nextIdx = historyIndex + 1;
      if (nextIdx < commandHistoryList.length) {
        setHistoryIndex(nextIdx);
        setInput(commandHistoryList[commandHistoryList.length - 1 - nextIdx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInput(commandHistoryList[commandHistoryList.length - 1 - nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  const handleReset = () => {
    clearAllTimeouts();
    executionIdRef.current += 1;
    setIsExecuting(false);
    setHistory([]);
    setInput("");
  };

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
                  onClick={handleReset}
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
            <div
              ref={terminalBodyRef}
              onClick={() => inputRef.current?.focus()}
              className="p-5 sm:p-6 min-h-[300px] max-h-[440px] overflow-y-auto space-y-4 cursor-text"
            >
              {history.map((item) => (
                <div key={item.id} className="space-y-1.5 leading-relaxed">
                  <div className="flex items-center gap-2 text-muted">
                    <span className="text-accent font-semibold">vivek@core:~$</span>
                    <span className="text-fg">{item.command}</span>
                  </div>
                  <div className="pl-4 border-l border-border/80 space-y-1">
                    {item.lines.map((line, lIdx) => (
                      <div key={lIdx} className="transition-all duration-150 ease-out">
                        {line}
                      </div>
                    ))}
                    {item.isStreaming && (
                      <div className="flex items-center gap-1 text-accent pt-0.5">
                        <span className="inline-block w-1.5 h-3.5 bg-accent animate-pulse" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Terminal Input Row */}
            <div className="p-3 sm:p-4 bg-white/[0.015] border-t border-border flex items-center gap-3">
              <span className="text-accent font-bold pl-2">vivek@core:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                disabled={isExecuting}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={
                  isExecuting
                    ? "Executing command... (press Ctrl+C to cancel)"
                    : "type 'help', 'benchmark', 'projects', or 'skills'..."
                }
                className="w-full bg-transparent text-fg placeholder:text-muted/40 focus:outline-none font-mono text-xs disabled:opacity-60"
              />
              <button
                disabled={isExecuting}
                onClick={() => handleCommand(input)}
                className="px-3.5 py-1.5 rounded border border-accent/60 bg-accent/10 text-accent font-mono text-[11px] font-medium hover:bg-accent hover:text-bg transition-colors shrink-0 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5"
              >
                {isExecuting ? (
                  <>
                    <Loader2 className="w-3 h-3 animate-spin" />
                    <span>Running</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3" />
                    <span>Run</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Command Suggestion Chips */}
            <div className="px-4 py-2.5 bg-black/60 border-t border-border/40 flex flex-wrap items-center gap-2 text-[11px]">
              <span className="text-muted/70 uppercase tracking-widest text-[10px]">Quick:</span>
              {quickCommands.map((q) => (
                <button
                  key={q}
                  disabled={isExecuting}
                  onClick={() => handleCommand(q)}
                  className="px-2.5 py-0.5 rounded border border-border/70 hover:border-accent hover:text-accent text-muted transition-colors font-mono disabled:opacity-40 disabled:cursor-not-allowed"
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

