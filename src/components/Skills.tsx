import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import {
  Code2,
  Coffee,
  Terminal,
  Cpu,
  Database,
  FileCode2,
  Binary,
  Layout,
  Boxes,
  Workflow,
  Puzzle,
  GitMerge,
  Network,
  Atom,
  Zap,
  Smartphone,
  Flame,
  GitBranch,
  PlayCircle,
  HardDrive,
  Layers,
  LineChart,
  Eye,
  MessageSquareCode,
  Scan,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import CircularCarousel from './CircularCarousel';
import type { CircularCarouselItem } from './CircularCarousel';

// Mapping each technology to its verified icon
const SKILL_ICONS: Record<string, React.ElementType> = {
  // 01 — Languages
  'C++': Code2,
  'Java': Coffee,
  'Python': Terminal,
  'C': Cpu,
  'SQL': Database,
  'TypeScript': FileCode2,
  'R': Binary,
  'HTML/CSS': Layout,

  // 02 — Core CS
  'OOP': Boxes,
  'Data Structures & Algorithms': Workflow,
  'Problem Solving': Puzzle,
  'SDLC': GitMerge,
  'REST APIs': Network,

  // 03 — Frameworks & Tools
  'React': Atom,
  'FastAPI': Zap,
  'Flutter': Smartphone,
  'Firebase': Flame,
  'Git': GitBranch,
  'GitHub Actions': PlayCircle,

  // 04 — Databases & AI/ML
  'MySQL': Database,
  'MongoDB': HardDrive,
  'PostgreSQL': Layers,
  'Scikit-learn': LineChart,
  'PyTorch': Flame,
  'OpenCV': Eye,
  'NLP': MessageSquareCode,
  'Computer Vision': Scan
};

// Concise engineering descriptions reflecting Palak's actual projects and coursework
const SKILL_DETAILS: Record<string, string> = {
  // Languages
  'C++': 'High-performance systems programming and competitive algorithmic problem solving.',
  'Java': 'Object-oriented software development and enterprise application architectures.',
  'Python': 'Machine learning pipelines, FastAPI microservices, and rapid system scripting.',
  'C': 'Low-level system architecture, memory management, and hardware fundamentals.',
  'SQL': 'Relational database querying, complex joins, and transactional schema design.',
  'TypeScript': 'Type-safe full-stack application development and modular UI architectures.',
  'R': 'Statistical computing, exploratory data analysis, and mathematical modeling.',
  'HTML/CSS': 'Semantic web document structuring and modern responsive CSS/Tailwind layouts.',

  // Core CS
  'OOP': 'Encapsulation, inheritance, polymorphism, and clean maintainable code patterns.',
  'Data Structures & Algorithms': '250+ LeetCode problems solved across graphs, trees, DP, and greedy algorithms.',
  'Problem Solving': 'Analytical decomposition, time/space complexity optimization, and debugging.',
  'SDLC': 'Iterative agile engineering, code reviews, testing, and continuous delivery.',
  'REST APIs': 'Stateless HTTP services, resource endpoints, and JSON request/response design.',

  // Frameworks & Tools
  'React': 'Component-driven reactive frontend interfaces, state management, and hooks.',
  'FastAPI': 'High-throughput asynchronous Python backends with automatic OpenAPI documentation.',
  'Flutter': 'Cross-platform mobile application engineering with reactive widget hierarchies.',
  'Firebase': 'Real-time NoSQL datastores, user authentication, and cloud messaging services.',
  'Git': 'Distributed version control, collaborative branching, merging, and history rebasing.',
  'GitHub Actions': 'Automated CI/CD build, test, and containerized deployment workflows.',

  // Databases & AI/ML
  'MySQL': 'Structured relational data management, ACID transactions, and index tuning.',
  'MongoDB': 'Flexible document-based NoSQL storage for semi-structured dynamic schemas.',
  'PostgreSQL': 'Advanced relational engine with PostGIS geospatial indexes and extensions.',
  'Scikit-learn': 'Predictive modeling, regression, classification, and data pre-processing.',
  'PyTorch': 'Deep neural network architectures, tensor computations, and model training.',
  'OpenCV': 'Computer vision algorithms, image manipulation, edge detection, and feature extraction.',
  'NLP': 'Text preprocessing, semantic embeddings, sentiment analysis, and LLM prompting.',
  'Computer Vision': 'Document tampering analysis, optical character recognition, and image classification.'
};

export const Skills: React.FC = () => {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);
  const [activeSkillIdx, setActiveSkillIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentCategory = SKILL_CATEGORIES[activeCategoryIdx];
  const currentSkills = currentCategory.skills;

  // Format current category's skills for CircularCarousel
  const carouselItems = useMemo<CircularCarouselItem[]>(() => {
    return currentSkills.map((skillName) => ({
      id: skillName,
      title: skillName,
      category: currentCategory.title,
      description: SKILL_DETAILS[skillName] || 'Engineering capability and core software tool.'
    }));
  }, [currentSkills, currentCategory.title]);

  const activeSkillName = currentSkills[activeSkillIdx] || currentSkills[0];
  const activeSkillDesc = SKILL_DETAILS[activeSkillName] || 'Engineering capability and core software tool.';

  const categoryHoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pillHoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (categoryHoverTimerRef.current) clearTimeout(categoryHoverTimerRef.current);
      if (pillHoverTimerRef.current) clearTimeout(pillHoverTimerRef.current);
    };
  }, []);

  const handlePrev = useCallback(() => {
    if (pillHoverTimerRef.current) {
      clearTimeout(pillHoverTimerRef.current);
      pillHoverTimerRef.current = null;
    }
    setActiveSkillIdx((prev) => (prev > 0 ? prev - 1 : currentSkills.length - 1));
  }, [currentSkills.length]);

  const handleNext = useCallback(() => {
    if (pillHoverTimerRef.current) {
      clearTimeout(pillHoverTimerRef.current);
      pillHoverTimerRef.current = null;
    }
    setActiveSkillIdx((prev) => (prev < currentSkills.length - 1 ? prev + 1 : 0));
  }, [currentSkills.length]);

  const handleCategoryClick = useCallback((idx: number) => {
    if (categoryHoverTimerRef.current) {
      clearTimeout(categoryHoverTimerRef.current);
      categoryHoverTimerRef.current = null;
    }
    setActiveCategoryIdx(idx);
    setActiveSkillIdx(0);
  }, []);

  const handleCategoryHover = useCallback((idx: number) => {
    if (idx === activeCategoryIdx) {
      if (categoryHoverTimerRef.current) {
        clearTimeout(categoryHoverTimerRef.current);
        categoryHoverTimerRef.current = null;
      }
      return;
    }
    if (categoryHoverTimerRef.current) {
      clearTimeout(categoryHoverTimerRef.current);
    }
    categoryHoverTimerRef.current = setTimeout(() => {
      setActiveCategoryIdx(idx);
      setActiveSkillIdx(0);
      categoryHoverTimerRef.current = null;
    }, 75);
  }, [activeCategoryIdx]);

  const handleCategoryLeave = useCallback(() => {
    if (categoryHoverTimerRef.current) {
      clearTimeout(categoryHoverTimerRef.current);
      categoryHoverTimerRef.current = null;
    }
  }, []);

  const handlePillClick = useCallback((idx: number) => {
    if (pillHoverTimerRef.current) {
      clearTimeout(pillHoverTimerRef.current);
      pillHoverTimerRef.current = null;
    }
    setActiveSkillIdx(idx);
  }, []);

  const handlePillHover = useCallback((idx: number) => {
    if (idx === activeSkillIdx) {
      if (pillHoverTimerRef.current) {
        clearTimeout(pillHoverTimerRef.current);
        pillHoverTimerRef.current = null;
      }
      return;
    }
    if (pillHoverTimerRef.current) {
      clearTimeout(pillHoverTimerRef.current);
    }
    pillHoverTimerRef.current = setTimeout(() => {
      setActiveSkillIdx(idx);
      pillHoverTimerRef.current = null;
    }, 50);
  }, [activeSkillIdx]);

  const handlePillLeave = useCallback(() => {
    if (pillHoverTimerRef.current) {
      clearTimeout(pillHoverTimerRef.current);
      pillHoverTimerRef.current = null;
    }
  }, []);

  return (
    <section id="skills" className="py-24 relative z-10 bg-[#202020] text-[#F4F1EA]">
      {/* Subtle Technical Radial Ambient Glow (restrained sage green/charcoal) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#9DB7A5]/5 via-transparent to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[2px] bg-[#9DB7A5]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#9DB7A5] font-medium">
              02. Technical Index
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F4F1EA] tracking-tight font-sans uppercase">
            Skills & Technologies
          </h2>
          <p className="text-base sm:text-lg text-[#B8B3AA] mt-2 max-w-xl font-normal leading-relaxed">
            The tools I use to turn ideas into working software.
          </p>
        </div>

        {/* 4 Numbered Category Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const isActive = activeCategoryIdx === idx;
            return (
              <button
                key={cat.title}
                onClick={() => handleCategoryClick(idx)}
                onMouseEnter={() => handleCategoryHover(idx)}
                onMouseLeave={handleCategoryLeave}
                className={`flex items-center gap-3.5 p-4 rounded-xl border text-left transition-all duration-300 group cursor-pointer ${
                  isActive
                    ? 'bg-[#303030] border-[#9DB7A5] text-[#F4F1EA] shadow-[0_0_20px_rgba(157,183,165,0.12)]'
                    : 'bg-[#292929] border-[#41403C] hover:border-[#9DB7A5]/40 text-[#B8B3AA] hover:text-[#F4F1EA]'
                }`}
              >
                <span className={`font-mono text-base font-bold transition-colors ${
                  isActive ? 'text-[#9DB7A5]' : 'text-[#B8B3AA]/50 group-hover:text-[#B8B3AA]'
                }`}>
                  0{idx + 1}
                </span>
                <div className="min-w-0">
                  <p className="font-sans font-bold text-sm tracking-wide truncate">{cat.title}</p>
                  <p className="text-[11px] text-[#B8B3AA]/60 truncate mt-0.5">{cat.skills.length} skills</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Stage: Focused Skill Details Card */}
        <div className="bg-[#292929] border border-[#41403C] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#9DB7A5] font-semibold px-2.5 py-1 rounded bg-[#9DB7A5]/10 border border-[#9DB7A5]/25">
                0{activeCategoryIdx + 1} / {currentCategory.title}
              </span>
              <span className="text-xs font-mono text-[#B8B3AA]">
                {activeSkillIdx + 1} of {currentSkills.length}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F4F1EA] tracking-tight">
              {activeSkillName}
            </h3>
            <p className="text-sm sm:text-base text-[#B8B3AA] leading-relaxed">
              {activeSkillDesc}
            </p>
          </div>

          {/* Stepper controls */}
          <div className="flex items-center gap-2.5 shrink-0 self-end sm:self-center">
            <button
              onClick={handlePrev}
              className="p-3 rounded-xl bg-[#303030] border border-[#41403C] hover:border-[#9DB7A5] text-[#B8B3AA] hover:text-[#F4F1EA] transition-all cursor-pointer"
              aria-label="Previous skill"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-xl bg-[#303030] border border-[#41403C] hover:border-[#9DB7A5] text-[#B8B3AA] hover:text-[#F4F1EA] transition-all cursor-pointer"
              aria-label="Next skill"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* React Bits Circular Carousel Orbit Ring */}
        <div className="w-full h-[360px] sm:h-[400px] lg:h-[430px] relative my-4 overflow-hidden">
          <CircularCarousel
            items={carouselItems}
            preset="orbit"
            tilt={-12}
            perspective={1500}
            cardWidth={isMobile ? 160 : 195}
            aspectRatio={1.18}
            gap={isMobile ? 14 : 22}
            autoplay="off"
            speed={6.5}
            snap={true}
            pauseOnHover={true}
            draggable={true}
            focusOnClick={true}
            focusOnHover={true}
            hoverDelay={65}
            momentum={0.6}
            fadeColor="#202020"
            depthFade={0.65}
            activeIndex={activeSkillIdx}
            onChange={(idx) => setActiveSkillIdx(idx)}
            renderCard={(item, _index, isActive) => {
              const IconComp = SKILL_ICONS[item.title || ''] || Code2;
              return (
                <div
                  className={`w-full h-full p-5 rounded-2xl flex flex-col justify-between select-none transition-all duration-300 ${
                    isActive
                      ? 'bg-[#303030] border-2 border-[#9DB7A5] shadow-[0_0_24px_rgba(157,183,165,0.18)] scale-[1.03]'
                      : 'bg-[#292929]/95 border border-[#41403C] hover:border-[#9DB7A5]/50'
                  }`}
                >
                  {/* Card Header: Icon + Active Status Dot */}
                  <div className="flex items-center justify-between">
                    <div className={`p-2.5 rounded-xl border transition-colors ${
                      isActive
                        ? 'bg-[#9DB7A5]/15 border-[#9DB7A5]/40 text-[#9DB7A5]'
                        : 'bg-[#252525] border-[#41403C] text-[#B8B3AA]'
                    }`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#9DB7A5] shadow-[0_0_8px_#9DB7A5]" />
                    )}
                  </div>

                  {/* Card Title & Category Tag */}
                  <div className="pt-2">
                    <h4 className={`text-base sm:text-lg font-bold tracking-tight transition-colors truncate ${
                      isActive ? 'text-[#F4F1EA]' : 'text-[#B8B3AA]'
                    }`}>
                      {item.title}
                    </h4>
                    <p className="text-[11px] font-mono text-[#B8B3AA]/60 uppercase tracking-wider mt-0.5 truncate">
                      {item.category}
                    </p>
                  </div>
                </div>
              );
            }}
          />
        </div>

        {/* Quick-Reference Accessible Technology Pill Strip */}
        <div className="pt-6 border-t border-[#41403C]/60">
          <div className="flex items-center justify-between mb-3.5">
            <span className="text-xs font-mono text-[#B8B3AA] uppercase tracking-wider">
              0{activeCategoryIdx + 1} — {currentCategory.title} ({currentSkills.length} skills)
            </span>
            <span className="text-[11px] font-mono text-[#B8B3AA]/60 hidden sm:inline">
              Hover or click any skill to center in carousel
            </span>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {currentSkills.map((skill, idx) => {
              const isSelected = activeSkillIdx === idx;
              return (
                <button
                  key={skill}
                  onClick={() => handlePillClick(idx)}
                  onMouseEnter={() => handlePillHover(idx)}
                  onMouseLeave={handlePillLeave}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 border cursor-pointer ${
                    isSelected
                      ? 'bg-[#9DB7A5]/15 border-[#9DB7A5] text-[#F4F1EA] shadow-[0_0_12px_rgba(157,183,165,0.15)] font-semibold'
                      : 'bg-[#292929] border-[#41403C] text-[#B8B3AA] hover:text-[#F4F1EA] hover:border-[#9DB7A5]/40'
                  }`}
                >
                  {skill}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
