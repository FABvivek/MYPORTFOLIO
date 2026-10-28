// Types
export interface NavLink {
  label: string;
  href: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface EducationInfo {
  institution: string;
  degree: string;
  period: string;
  cgpa: string;
  details?: string;
}

export interface Perspective {
  id: string;
  label: string;
  tagline: string;
  description: string;
  keywords: string[];
}

export interface ProjectHighlight {
  text: string;
}

export interface Project {
  number: string;
  category: string;
  title: string;
  summary: string;
  tech: string[];
  highlights: ProjectHighlight[];
  githubUrl: string;
  liveUrl?: string;
  metrics?: { label: string; value: string }[];
}

export interface SkillGroup {
  category: string;
  iconName: string;
  skills: string[];
}

export interface Achievement {
  value: number;
  suffix: string;
  label: string;
  subtitle: string;
  link?: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  organization?: string;
  description: string;
  highlight?: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

// Content data
export const siteMetadata = {
  title: "Vivek Singh | Backend Engineer & Distributed Systems",
  description: "Backend engineer building high-performance microservices, event-driven architectures with Kafka, low-latency Redis services, and RAG applications. B.E. at Army Institute of Technology, Pune.",
  url: "https://viveksingh.dev",
  themeColor: "#030303",
  keywords: [
    "Vivek Singh",
    "Backend Engineer",
    "Distributed Systems",
    "Java",
    "Spring Boot",
    "Apache Kafka",
    "Redis",
    "RAG",
    "LangChain",
    "Army Institute of Technology",
    "Software Engineer",
  ],
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#skills" },
  { label: "Console", href: "#console" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  status: "AVAILABLE FOR SDE INTERN & NEW GRAD 2027",
  location: "BASED IN PUNE, INDIA · THINKING IN DISTRIBUTED SYSTEMS",
  eyebrow: "A SYSTEM-LEVEL PERSPECTIVE ON SOFTWARE",
  name: "Vivek Singh",
  subtitle: "Backend-focused engineer building high-throughput microservices, event-driven architectures with Apache Kafka, and production RAG pipelines with Python and LangChain.",
  bioLine: "Solved 650+ Data Structures & Algorithms problems (LeetCode 1550+, CodeChef Top 320 globally) with a relentless focus on clean concurrency and low-latency system design.",
  cta1: { label: "Explore my work", href: "#work" },
  cta2: { label: "Download Resume", href: "/Vivek_Singh_Resume.pdf" },
  ctaContact: { label: "Start a conversation", href: "#contact" },
  scrollLabel: "SCROLL TO DISCOVER",
  photo: "/images/vivek.jpg",
  sideNote: {
    number: "01 / PRESENCE",
    lines: ["JAVA & SPRING BOOT", "APACHE KAFKA & REDIS", "RAG & VECTOR SEARCH"],
  },
  stats: [
    { value: "650+", label: "DSA problems solved" },
    { value: "Top 320", label: "globally in CodeChef Starters 225" },
    { value: "1550+", label: "LeetCode contest rating" },
    { value: "8.17", label: "CGPA at AIT Pune" },
  ] as HeroStat[],
};

export const marqueeKeywords = [
  "JAVA",
  "SPRING BOOT",
  "APACHE KAFKA",
  "REDIS GEO",
  "MYSQL",
  "MICROSERVICES",
  "API GATEWAY",
  "EUREKA DISCOVERY",
  "WEBSOCKETS",
  "RAG PIPELINES",
  "LANGCHAIN",
  "CHROMADB",
  "DOCKER",
  "SYSTEM DESIGN",
  "CONCURRENCY & LOCKS",
];

export const about = {
  eyebrow: "01 / THE PERSON BEHIND THE CODE",
  subEyebrow: "A CONNECTED PERSPECTIVE",
  heading: { plain: "Systems that scale.", italic: "Code that lasts." },
  lead: "I connect high-level architecture with low-level concurrency, data consistency, and event streaming.",
  bio: [
    "I'm an Electronics and Telecommunication engineering student at Army Institute of Technology, Pune (Graduating 2027). My focus is squarely on backend systems: architecting Spring Boot microservices, building asynchronous event-driven pipelines with Apache Kafka, and engineering sub-50ms data layers with Redis.",
    "Beyond classical backend engineering, I design multimodal Retrieval-Augmented Generation (RAG) pipelines with LangChain and vector databases—bringing structured knowledge retrieval and intelligent automation to distributed platforms.",
  ],
  education: [
    {
      institution: "Army Institute of Technology, Pune",
      degree: "Bachelor of Engineering in Electronics & Telecommunication",
      period: "Aug 2023 – Jul 2027",
      cgpa: "CGPA: 8.17",
      details: "Premier engineering institution for children of Army personnel. Active in competitive programming and backend architecture research.",
    },
    {
      institution: "Army Public School, Gorakhpur",
      degree: "Higher Secondary (CBSE - Science & Math)",
      period: "Jul 2021 – Jun 2022",
      cgpa: "88.2%",
      details: "Strong foundational grounding in mathematics, algorithms, and analytical problem-solving.",
    },
  ] as EducationInfo[],
  perspectives: [
    {
      id: "build",
      label: "Build",
      tagline: "Microservices with strict domain boundaries",
      description: "I architect decoupled Spring Boot services with Eureka discovery and Spring Cloud API Gateway. Each service maintains its own transactional boundary and communicates via clean contract-driven REST APIs and asynchronous message queues.",
      keywords: ["Microservices", "API Gateway", "Eureka Discovery", "Spring Boot", "REST APIs", "Spring Security"],
    },
    {
      id: "scale",
      label: "Scale",
      tagline: "High throughput, low latency, and zero race conditions",
      description: "I leverage Kafka event streams for asynchronous trade settlement and trip lifecycles, Redis GEO indexing for sub-50ms spatial lookups, and pessimistic/optimistic balance locking to eliminate double-spending in high-concurrency environments.",
      keywords: ["Apache Kafka", "Redis GEO", "Concurrency", "Database Locking", "WebSockets", "Distributed Transactions"],
    },
    {
      id: "explore",
      label: "AI / RAG",
      tagline: "Bridging distributed backends with LLM intelligence",
      description: "I assemble 6-stage RAG pipelines using LangChain, OpenAI Whisper for multilingual speech chunking, and ChromaDB vector indexing to transform unstructured media into deterministic, structured data and interactive Q&A.",
      keywords: ["RAG Pipelines", "LangChain", "OpenAI Whisper", "ChromaDB", "Sentence Transformers", "Streamlit"],
    },
  ] as Perspective[],
};

export const work = {
  eyebrow: "02 / SELECTED WORK",
  subEyebrow: "ARCHITECTED. CODED. BENCHMARKED.",
  heading: { plain: "Ideas are a start.", italic: "This is the engineering." },
  description: "A selection of production-grade systems, from multi-service financial matching engines to real-time geospatial dispatch and AI video assistants.",
  projects: [
    {
      number: "01",
      category: "DISTRIBUTED SYSTEMS · TRADING ENGINE",
      title: "TradeX — Distributed Crypto Trading Engine",
      summary: "A distributed cryptocurrency trading architecture featuring 3 Spring Boot microservices, high-performance order matching, Kafka-based asynchronous trade settlement, and double-spend protection.",
      tech: ["Java", "Spring Boot", "Apache Kafka", "MySQL", "Eureka", "API Gateway", "Docker"],
      metrics: [
        { label: "Matching Complexity", value: "O(log n)" },
        { label: "Microservices", value: "3 Services" },
        { label: "Settlement", value: "Async Kafka" },
      ],
      highlights: [
        { text: "Architected 3 Spring Boot microservices (Order, Wallet, Trade) with Netflix Eureka service discovery and 1 centralized Spring Cloud API Gateway entry point." },
        { text: "Engineered a high-performance matching engine using dual Priority Queues achieving O(log n) order placement with strict price-time priority and partial fill support." },
        { text: "Decoupled all 3 microservices with Kafka event topics so trade execution and balance settlement execute asynchronously without blocking order ingress." },
        { text: "Designed a 2-balance wallet model (available balance, locked balance) with pessimistic locking to completely prevent double spending across concurrent order placements." },
        { text: "Exposed clean RESTful APIs covering 3 full order lifecycle phases (placement, matching, execution) plus complete paginated trade history audit logs." },
      ],
      githubUrl: "https://github.com/FABvivek",
    },
    {
      number: "02",
      category: "REAL-TIME SYSTEMS · GEOSPATIAL ENGINE",
      title: "Ride-Sharing System — Uber-like Backend",
      summary: "A low-latency backend powering real-time ride hailing, geospatial nearest-driver search with Redis GEO, event-driven Kafka trip workflows, and live driver tracking via WebSockets.",
      tech: ["Java", "Spring Boot", "Apache Kafka", "Redis", "MySQL", "WebSockets", "Docker"],
      metrics: [
        { label: "Geo Lookup Latency", value: "< 50ms" },
        { label: "Active Trips / Driver", value: "Strictly 1" },
        { label: "Location Updates", value: "WebSockets" },
      ],
      highlights: [
        { text: "Implemented nearest-driver discovery with Redis GEO radius indexing, achieving sub-50 ms spatial lookups in local project benchmark tests." },
        { text: "Processed 2 asynchronous event streams (high-frequency driver locations, trip state transitions) through dedicated Apache Kafka topics." },
        { text: "Prevented conflicting driver assignments with transactional state machines and database locking, ensuring strictly 1 active trip per driver." },
        { text: "Persisted the full trip lifecycle (request, assignment, completion, cancellation) across 3 normalized stages in MySQL with referential integrity." },
        { text: "Streamed real-time driver coordinates over 1 persistent WebSocket connection per client, eliminating aggressive client-side polling overhead." },
      ],
      githubUrl: "https://github.com/FABvivek",
    },
    {
      number: "03",
      category: "AI / ML · MULTIMODAL RAG PIPELINE",
      title: "AI Video Assistant — Video RAG & Transcription",
      summary: "An end-to-end Retrieval-Augmented Generation assistant that ingests YouTube and local video, transcribes bilingual audio with Whisper, indexes embeddings in ChromaDB, and delivers structured Q&A.",
      tech: ["Python", "Streamlit", "LangChain", "OpenAI Whisper", "ChromaDB", "Mistral AI", "yt-dlp", "ffmpeg"],
      metrics: [
        { label: "Pipeline Stages", value: "6 Stages" },
        { label: "Languages", value: "English & Hindi" },
        { label: "Vector Store", value: "ChromaDB" },
      ],
      highlights: [
        { text: "Created an automated Retrieval-Augmented Generation (RAG) video pipeline featuring 6 distinct ingestion and inference stages supporting both YouTube URLs and file uploads." },
        { text: "Integrated OpenAI Whisper ASR to accurately transcribe audio across 2 languages (English and Hindi), using yt-dlp and ffmpeg for segmented audio chunking." },
        { text: "Assembled a LangChain RAG pipeline with ChromaDB vector store and Sentence Transformers generating 5 structured summary outputs and conversational semantic Q&A." },
      ],
      githubUrl: "https://github.com/FABvivek",
    },
  ] as Project[],
};

export const skills = {
  eyebrow: "03 / STACK & CRAFT",
  subEyebrow: "DEPTH MEETS EXECUTION",
  heading: { plain: "How I build.", italic: "From foundations to distributed systems." },
  description: "A curated view of tools and technologies I use to build scalable backends, design distributed architectures, and engineer AI-augmented applications.",
  groups: [
    {
      category: "Languages",
      iconName: "code",
      skills: ["Java (Core, Concurrency, Streams)", "Python (Data, AI, Scripting)", "SQL (MySQL, Complex Joins, Indexing)", "JavaScript (ES6+, Node)", "HTML5", "CSS3"],
    },
    {
      category: "Frameworks & Backend",
      iconName: "cpu",
      skills: ["Spring Boot", "Spring Framework", "Spring Security", "Spring Cloud", "Hibernate / JPA", "RESTful APIs", "WebSockets"],
    },
    {
      category: "Architecture & Distributed",
      iconName: "network",
      skills: ["Microservices Architecture", "API Gateway (Spring Cloud)", "Service Discovery (Eureka)", "Event-Driven Architecture", "Distributed Systems", "Thread Safety & Concurrency"],
    },
    {
      category: "Messaging & Caching",
      iconName: "zap",
      skills: ["Apache Kafka (Topics, Partitions, Consumer Groups)", "Redis (GEO Indexing, Caching, Key-Value)"],
    },
    {
      category: "Databases & Storage",
      iconName: "database",
      skills: ["MySQL (ACID, Transactions, Locking)", "MongoDB (Document Store)", "ChromaDB (Vector Embeddings)"],
    },
    {
      category: "AI & LLM Engineering",
      iconName: "bot",
      skills: ["Retrieval-Augmented Generation (RAG)", "LangChain", "OpenAI Whisper (Bilingual ASR)", "Sentence Transformers", "Streamlit"],
    },
    {
      category: "Core Computer Science",
      iconName: "terminal",
      skills: ["Data Structures & Algorithms (650+ Solved)", "Object-Oriented Programming (OOP)", "Database Management Systems (DBMS)", "Low-Level & High-Level System Design"],
    },
    {
      category: "Developer Tools",
      iconName: "wrench",
      skills: ["Git & GitHub", "Docker & Docker Compose", "Postman (API Testing)", "Maven & Gradle", "Linux / Bash"],
    },
  ] as SkillGroup[],
};

export const achievements = {
  eyebrow: "04 / THE NUMBERS",
  subEyebrow: "CONSISTENCY IS A HABIT",
  heading: { plain: "Reach is a number.", italic: "Consistency is a discipline." },
  stats: [
    {
      value: 320,
      suffix: "",
      label: "Global Rank in CodeChef Starters 225",
      subtitle: "Ranked 320th out of 35,000+ participating engineers worldwide.",
      link: "https://www.codechef.com/users/fabvivek",
    },
    {
      value: 650,
      suffix: "+",
      label: "DSA Problems Solved",
      subtitle: "Rigorous problem solving across LeetCode, CodeChef, and GeeksforGeeks.",
    },
    {
      value: 1550,
      suffix: "+",
      label: "LeetCode Contest Rating",
      subtitle: "Demonstrated algorithm fluency through regular competitive contest participation.",
      link: "https://leetcode.com/u/fabvivek",
    },
    {
      value: 8.17,
      suffix: "",
      label: "CGPA at AIT Pune",
      subtitle: "Consistent academic performance in Electronics & Telecommunication Engineering.",
    },
  ] as Achievement[],
};

export const leadership = {
  eyebrow: "05 / LEADERSHIP & COMMUNITY",
  subEyebrow: "BUILDING THE CULTURE",
  heading: { plain: "Building the community.", italic: "Not just the code." },
  role: "Joint Secretary",
  organization: "Coding Club · Army Institute of Technology, Pune",
  period: "Jun 2024 – Present",
  description: "Promoting competitive programming, algorithms mastery, and modern software development culture among future engineers.",
  highlights: [
    "Organized 5+ institute-wide coding contests and DSA workshop sessions for 150+ students.",
    "Led a 10-member core organizing team in planning, curation, and execution of competitive programming hackathons.",
    "Actively mentored and engaged 120+ student coders through daily problem-solving tracks on LeetCode and Codeforces.",
  ],
};

export const timeline = {
  eyebrow: "06 / STILL BECOMING",
  subEyebrow: "A JOURNEY IN MOTION",
  heading: { plain: "Started with curiosity.", italic: "Built with discipline." },
  events: [
    {
      year: "2021",
      title: "Foundations at APS Gorakhpur",
      organization: "Army Public School, Gorakhpur",
      description: "Graduated Higher Secondary (CBSE) with 88.2%, developing a deep passion for mathematics, logic, and computing.",
      highlight: "88.2% CBSE Board",
    },
    {
      year: "2023",
      title: "B.E. Begins at AIT Pune",
      organization: "Army Institute of Technology, Pune",
      description: "Commenced Bachelor of Engineering in Electronics and Telecommunication, building core fundamentals in Data Structures, OS, and Networks.",
      highlight: "CGPA: 8.17",
    },
    {
      year: "2024",
      title: "Leadership & Distributed Systems",
      organization: "AIT Coding Club & Engineering",
      description: "Elected Joint Secretary of the Coding Club. Began architecting distributed crypto trading engines (TradeX) and Kafka-driven ride sharing backends.",
      highlight: "Rank 320 CodeChef · 650+ DSA",
    },
    {
      year: "Today",
      title: "Building at Scale",
      organization: "Microservices & AI RAG Systems",
      description: "Architecting event-driven microservices, Redis low-latency layers, and multimodal RAG pipelines. Open to SDE Internships and 2027 Engineering roles.",
      highlight: "Full-Stack Ready",
    },
    {
      year: "2027",
      title: "What's Ahead",
      organization: "High-Impact Engineering",
      description: "Targeting high-scale distributed backend engineering, financial tech, and AI infrastructure teams.",
      highlight: "SDE 2027",
    },
  ] as TimelineEvent[],
};

export const contact = {
  eyebrow: "07 / THE NEXT CHAPTER",
  subEyebrow: "LET'S MAKE IT MATTER",
  status: "AVAILABLE FOR INTERNSHIPS & SDE ROLES (BATCH 2027)",
  heading: { plain: "Something great starts", italic: "with a hello." },
  lead: "Whether you're looking for a dedicated backend engineer, want to discuss distributed system design, or collaborate on a high-throughput project, my inbox is open.",
  email: "viveksinghait2027@gmail.com",
  phone: "+91-6394127185",
  location: "Pune, Maharashtra, India",
  resumeUrl: "/Vivek_Singh_Resume.pdf",
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/in/vivek-singh-072242309", icon: "linkedin" },
    { label: "GitHub", href: "https://github.com/FABvivek", icon: "github" },
    { label: "LeetCode", href: "https://leetcode.com/u/fabvivek", icon: "leetcode" },
    { label: "CodeChef", href: "https://www.codechef.com/users/fabvivek", icon: "codechef" },
    { label: "Email", href: "mailto:viveksinghait2027@gmail.com", icon: "email" },
  ] as SocialLink[],
};

export const footer = {
  wordmark: "Vivek Singh.",
  copyright: "© 2026 Vivek Singh · Built with intent. Always evolving.",
  location: "PUNE, INDIA ↗ THE WORLD",
  navLinks: navLinks,
  socials: contact.socials,
};
