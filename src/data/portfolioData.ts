export interface Project {
  id: string;
  title: string;
  subtitle: string;
  projectType: string;
  focusOrContextLabel: string;
  focusOrContextValue: string;
  badge?: string;
  context?: string;
  description?: string;
  technologies: string[];
  points?: string[];
  flowSteps?: string[];
  githubUrl?: string;
  liveUrl?: string;
  isPrivate?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: string[];
}

export interface Achievement {
  id: string;
  title: string;
  tag: string;
  detail: string;
  iconName: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  platform?: string;
  iconName: string;
}

export const PERSONAL_INFO = {
  name: "Palak Chiraniya",
  title: "Computer Engineering Student",
  specializations: ["AI/ML", "Full-Stack Development", "Problem Solving"],
  college: "Pune Institute of Computer Technology (PICT)",
  degree: "Bachelor of Engineering in Computer Engineering",
  year: "Third Year",
  cgpa: "9.44 / 10",
  bioHeadline: "Building intelligent and practical software systems that solve real-world problems.",
  aboutText: [
    "I am a third-year Computer Engineering student at Pune Institute of Computer Technology (PICT) with a 9.44/10 CGPA.",
    "My focus lies at the intersection of AI/ML, full-stack software development, and backend architecture. I enjoy taking complex algorithmic and system design challenges and engineering reliable, practical software solutions.",
    "Whether designing modular backends, building deterministic rule engines, training machine learning pipelines, or optimizing geo-spatial queries, I focus on clean code, strong CS fundamentals, and end-to-end functionality."
  ],
  status: "Available for opportunities",
  socialLinks: {
    github: "https://github.com/palakchiraniya03",
    linkedin: "https://www.linkedin.com/in/palak-chiraniya",
    email: "palakschiraniya@gmail.com",
    resume: "#"
  }
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    description: "Core programming and query languages",
    iconName: "Code2",
    skills: ["C++", "Java", "Python", "C", "SQL", "TypeScript", "R", "HTML/CSS"]
  },
  {
    title: "Core CS",
    description: "Computer Science fundamentals & engineering principles",
    iconName: "Cpu",
    skills: ["OOP", "Data Structures & Algorithms", "Problem Solving", "SDLC", "REST APIs"]
  },
  {
    title: "Frameworks & Tools",
    description: "Modern frameworks, mobile & DevOps tools",
    iconName: "Layers",
    skills: ["React", "FastAPI", "Flutter", "Firebase", "Git", "GitHub Actions"]
  },
  {
    title: "Databases & AI/ML",
    description: "Data management systems, computer vision & machine learning",
    iconName: "BrainCircuit",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Scikit-learn", "PyTorch", "OpenCV", "NLP", "Computer Vision"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "krishimitra",
    title: "KrishiMitra",
    subtitle: "AI-Powered Smart Irrigation Platform",
    projectType: "AI / IoT",
    focusOrContextLabel: "FOCUS",
    focusOrContextValue: "Smart Irrigation",
    flowSteps: ["ESP32 Sensing", "Firebase & FastAPI", "ML & Rule Engine", "Advisory App"],
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "Firebase",
      "Scikit-learn",
      "ESP32",
      "Semantic RAG",
      "Groq"
    ],
    points: [
      "Designed a modular FastAPI backend with rule engine, ML forecasting, RAG retrieval and LLM generation.",
      "Built a deterministic irrigation decision engine using crop thresholds, live sensor data and weather forecasts.",
      "Engineered a Scikit-learn ML pipeline across 9 crop types and integrated it with REST APIs, Firebase and ESP32."
    ],
    githubUrl: "https://github.com/palakchiraniya03/krishimitra"
  },
  {
    id: "raglab",
    title: "RAGLab – Offline RAG Workbench",
    subtitle: "Offline Knowledge Base & Document Q&A Platform",
    projectType: "AI / Offline RAG",
    focusOrContextLabel: "FOCUS",
    focusOrContextValue: "Local Knowledge Base",
    description: "An offline-first Retrieval-Augmented Generation (RAG) workbench that allows users to ingest documents, build a searchable knowledge base, and perform AI-powered question answering over their documents.",
    flowSteps: ["Parse & Chunk", "Ollama Embeddings", "Qdrant Retrieval", "Local LLM Answer"],
    technologies: [
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "RAG",
      "Qdrant",
      "Ollama",
      "Gemma 3 1B"
    ],
    points: [
      "Engineered an offline-first RAG pipeline using FastAPI, local Qdrant vector storage, and Ollama embeddings with zero cloud dependencies.",
      "Implemented multi-format document ingestion (PDF, DOCX, TXT, MD) with SHA-256 deduplication and hybrid semantic-lexical retrieval.",
      "Built a React and TypeScript workbench featuring a Retrieval Inspector, numbered source evidence citations, and local Gemma 3 generation."
    ],
    githubUrl: "https://github.com/palakchiraniya03/raglab"
  },
  {
    id: "pradarshak-ai",
    title: "Pradarshak AI",
    subtitle: "Loan Scheme Discovery Platform",
    projectType: "AI / Full Stack / Geospatial",
    focusOrContextLabel: "CONTEXT",
    focusOrContextValue: "SIH 2026",
    context: "SIH 2026",
    githubUrl: "https://github.com/palakchiraniya03/PradarsakAI",
    flowSteps: ["Eligibility", "Ranking", "Geo Search"],
    technologies: [
      "TypeScript",
      "Express.js",
      "Next.js",
      "PostgreSQL/PostGIS",
      "Gemini 2.5 Flash"
    ],
    points: [
      "Architected a modular TypeScript/Express backend spanning conversation management, scheme scoring, EMI calculation, and geo-spatial search.",
      "Engineered a rule-based scheme-ranking engine using weighted multi-criteria scoring with hard eligibility filters.",
      "Implemented PostGIS-based geo-spatial search to retrieve partner branches within 150 km with Nominatim fallback."
    ]
  },
  {
    id: "crawlforge",
    title: "CrawlForge – Web Crawler",
    subtitle: "Safe Asynchronous Crawler & Hybrid Search Engine",
    projectType: "TypeScript / Node.js / Search",
    focusOrContextLabel: "FOCUS",
    focusOrContextValue: "Web Crawling & Search",
    description: "A safe, production-grade asynchronous web crawler, persistent document store, and hybrid BM25 + vector search engine built with TypeScript, Node.js, and MongoDB.",
    flowSteps: ["URL Frontier", "SSRF-Safe Crawler", "Page Versioning", "BM25 & Vector Search"],
    technologies: [
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "BM25 Search",
      "Vector Embeddings",
      "Playwright"
    ],
    points: [
      "Architected an asynchronous BFS crawler featuring domain rate limiting, robots.txt compliance, and strict SSRF DNS-resolution defense.",
      "Engineered a content-hashed page store with HTTP conditional requests (ETag / Last-Modified) and optimistic concurrency versioning.",
      "Implemented a hybrid search engine combining BM25 lexical ranking and dense vector embeddings using Reciprocal Rank Fusion (RRF)."
    ],
    githubUrl: "https://github.com/palakchiraniya03/CrawlForge"
  },
  {
    id: "secure-proxy-gateway",
    title: "SecureProxyGateway – Secure Proxy",
    subtitle: "C++17 Multi-Threaded Forward Proxy & CONNECT Tunnel",
    projectType: "C++17 / Systems & Security",
    focusOrContextLabel: "FOCUS",
    focusOrContextValue: "Systems & Network Security",
    description: "A security-hardened HTTP/1.1 forward proxy and HTTPS CONNECT tunneling gateway built in modern C++17 with POSIX sockets, multi-threaded worker pools, and SSRF prevention.",
    flowSteps: ["Client Connection", "Proxy Auth (RFC 7617)", "SSRF IP Filter", "Worker Pool / TCP Tunnel"],
    technologies: [
      "C++17",
      "POSIX Sockets",
      "Multithreading",
      "Network Security",
      "CMake",
      "TCP/IP"
    ],
    points: [
      "Engineered an HTTP/1.1 forward proxy and HTTPS CONNECT tunnel in modern C++17 using POSIX sockets and non-blocking I/O multiplexing.",
      "Built a concurrent architecture with a fixed-size worker thread pool (32 threads), condition variables, and a thread-safe task queue.",
      "Implemented defense-in-depth security with RFC 7617 Basic Proxy Authentication, hop-by-hop header stripping, and comprehensive SSRF IP filtering."
    ],
    githubUrl: "https://github.com/palakchiraniya03/SecureProxyGateway"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "leetcode",
    title: "300+ DSA Problems Solved",
    tag: "LeetCode",
    detail: "Solved 300+ Data Structures & Algorithms problems on LeetCode demonstrating strong problem solving.",
    iconName: "Code"
  },
  {
    id: "sih-2026",
    title: "Selected for Smart India Hackathon (SIH) 2026",
    tag: "Internal Rounds",
    detail: "Selected through competitive internal college rounds at Pune Institute of Computer Technology (PICT).",
    iconName: "Award"
  },
  {
    id: "adobe-hackathon",
    title: "Advanced to Round 2 - Adobe University Hackathon 2026",
    tag: "Adobe Hackathon",
    detail: "Advanced to the second round of Adobe University Hackathon 2026.",
    iconName: "Zap"
  },
  {
    id: "vit-resonance",
    title: "Finalist - Resonance Hackathon, VIT (IoT Track)",
    tag: "Selected among 50+ teams",
    detail: "Selected as a finalist among 50+ teams in the IoT track at Resonance Hackathon, VIT.",
    iconName: "Trophy"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "ml-specialization",
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI",
    platform: "Coursera",
    iconName: "Brain"
  },
  {
    id: "amd-ai-agents",
    title: "AI Agents 101: Building AI Agents with MCP & Open-Source Inference",
    issuer: "AMD AI Academy",
    iconName: "Cpu"
  },
  {
    id: "web3-rust",
    title: "Web3 & Rust Foundations",
    issuer: "Xcan / Lampros DAO",
    iconName: "ShieldCheck"
  }
];
