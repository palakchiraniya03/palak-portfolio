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
    leetcode: "https://leetcode.com/u/palakchiraniya/",
    email: "palakchiraniya@gmail.com",
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
    flowSteps: ["Sensor", "Backend", "ML / Rules", "Irrigation"],
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
    id: "fake-id-screening",
    title: "AI-Based Fake Identity Document Screening System",
    subtitle: "Fraud Detection & Risk Analysis Platform",
    projectType: "AI / Computer Vision",
    focusOrContextLabel: "CONTEXT",
    focusOrContextValue: "Collaborative Project",
    badge: "Collaborative Project",
    flowSteps: ["Document", "Vision / Analysis", "Risk Scoring"],
    technologies: ["Python", "OpenCV", "Machine Learning", "Fraud Detection"],
    points: [
      "Engineered an AI-driven document screening system to verify identity credentials and detect tampering.",
      "Identified visual inconsistencies and structural anomalies across submitted identity documents.",
      "Implemented automated risk scoring & intelligent fraud analysis pipelines."
    ],
    githubUrl: "https://github.com/tishabora6111/Al-Based-Fake-Identity-Document-Screening-System.git"
  },
  {
    id: "pradarshak-ai",
    title: "Pradarshak AI",
    subtitle: "Loan Scheme Discovery Platform",
    projectType: "AI / Full Stack / Geospatial",
    focusOrContextLabel: "CONTEXT",
    focusOrContextValue: "SIH 2026",
    context: "SIH 2026",
    isPrivate: true,
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
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "leetcode",
    title: "250+ DSA Problems Solved",
    tag: "LeetCode",
    detail: "Solved 250+ Data Structures & Algorithms problems on LeetCode demonstrating strong problem solving.",
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
