import React, { useState } from 'react';
import { 
  Code2, 
  Cpu, 
  Layers, 
  BrainCircuit, 
  Check, 
  Database, 
  Server, 
  Flame, 
  GitBranch, 
  Zap, 
  Smartphone, 
  Coffee, 
  Terminal, 
  BarChart3, 
  Layout, 
  Sparkles 
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';
import { ReactIcon, PythonIcon } from './SocialIcons';

export const Skills = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTabChange = (tabId: string) => {
    if (tabId === activeTab) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(tabId);
      setIsTransitioning(false);
    }, 150);
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-blue-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-violet-400" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-emerald-400" />;
      default:
        return <Code2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  const getSkillIcon = (skill: string) => {
    switch (skill) {
      case 'C++':
      case 'C':
        return <Terminal className="w-3.5 h-3.5 text-cyan-400 shrink-0" />;
      case 'Java':
        return <Coffee className="w-3.5 h-3.5 text-amber-400 shrink-0" />;
      case 'Python':
        return <PythonIcon className="w-3.5 h-3.5 text-blue-400 shrink-0" />;
      case 'SQL':
      case 'MySQL':
      case 'MongoDB':
      case 'PostgreSQL':
        return <Database className="w-3.5 h-3.5 text-indigo-400 shrink-0" />;
      case 'TypeScript':
        return <Code2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />;
      case 'R':
        return <BarChart3 className="w-3.5 h-3.5 text-blue-300 shrink-0" />;
      case 'HTML/CSS':
        return <Layout className="w-3.5 h-3.5 text-orange-400 shrink-0" />;
      case 'OOP':
      case 'Data Structures & Algorithms':
      case 'Problem Solving':
      case 'SDLC':
        return <Cpu className="w-3.5 h-3.5 text-cyan-400 shrink-0" />;
      case 'REST APIs':
        return <Server className="w-3.5 h-3.5 text-violet-400 shrink-0" />;
      case 'React':
        return <ReactIcon className="w-3.5 h-3.5 text-cyan-400 shrink-0" />;
      case 'FastAPI':
        return <Zap className="w-3.5 h-3.5 text-emerald-400 shrink-0" />;
      case 'Flutter':
        return <Smartphone className="w-3.5 h-3.5 text-sky-400 shrink-0" />;
      case 'Firebase':
        return <Flame className="w-3.5 h-3.5 text-amber-400 shrink-0" />;
      case 'Git':
      case 'GitHub Actions':
        return <GitBranch className="w-3.5 h-3.5 text-orange-400 shrink-0" />;
      case 'Scikit-learn':
      case 'PyTorch':
      case 'OpenCV':
      case 'NLP':
      case 'Computer Vision':
        return <BrainCircuit className="w-3.5 h-3.5 text-emerald-400 shrink-0" />;
      default:
        return <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />;
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  const filteredCategories =
    activeTab === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.title.toLowerCase().replace(/\s+/g, '-') === activeTab);

  // Key featured technologies for the bottom technical stack summary
  const featuredTechStack = [
    { name: 'C++', category: 'Languages' },
    { name: 'Python', category: 'Languages' },
    { name: 'TypeScript', category: 'Languages' },
    { name: 'React', category: 'Frameworks' },
    { name: 'FastAPI', category: 'Frameworks' },
    { name: 'PostgreSQL', category: 'Databases' },
    { name: 'PyTorch', category: 'AI/ML' },
    { name: 'Git', category: 'Tools' }
  ];

  return (
    <section id="skills" className="py-24 relative z-10 bg-[#0B1017]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-[2px] bg-cyan-400" />
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-medium">
                  02. Technical Arsenal
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Skills & Expertise
              </h2>
            </div>

            {/* Interactive Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              <button
                type="button"
                onClick={() => handleTabChange('all')}
                className={`px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer ${
                  activeTab === 'all'
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
                    : 'bg-[#111823] text-slate-300 hover:text-white border border-slate-700/60 hover:border-cyan-500/40'
                }`}
              >
                All Capabilities
              </button>
              {SKILL_CATEGORIES.map((cat) => {
                const tabId = cat.title.toLowerCase().replace(/\s+/g, '-');
                const isActive = activeTab === tabId;
                return (
                  <button
                    key={cat.title}
                    type="button"
                    onClick={() => handleTabChange(tabId)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
                        : 'bg-[#111823] text-slate-300 hover:text-white border border-slate-700/60 hover:border-cyan-500/40'
                    }`}
                  >
                    {cat.title}
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Categories Grid with Smooth Filter Transition */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-opacity duration-300 ${
            isTransitioning ? 'opacity-0 scale-[0.99]' : 'opacity-100 scale-100'
          }`}
        >
          {filteredCategories.map((category, idx) => (
            <ScrollReveal key={category.title} delay={idx * 100}>
              <div
                onMouseMove={handleMouseMove}
                className="tech-card p-8 rounded-2xl bg-[#111823]/90 border border-slate-700/60 relative overflow-hidden group hover:border-cyan-500/50 shadow-sm hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Subtle Mouse-Following Spotlight Radial Glow */}
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(450px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(34, 211, 238, 0.08), transparent 80%)`,
                  }}
                />

                {/* Soft ambient corner glow */}
                <div className="absolute -bottom-16 -right-16 w-36 h-36 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/15 transition-all duration-500" />

                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-cyan-500/40 transition-all duration-300 shadow-inner">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">{category.title}</h3>
                    <p className="text-xs text-slate-400 mt-0.5">{category.description}</p>
                  </div>
                </div>

                {/* Skill Chips with visual icons and subtle hover scaling */}
                <div className="flex flex-wrap gap-2.5 relative z-10">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-3.5 py-2 rounded-xl bg-[#16202e] border border-slate-700/60 hover:border-cyan-500/50 text-xs font-mono text-slate-200 hover:text-cyan-300 flex items-center gap-2 transition-all duration-200 hover:scale-[1.04] shadow-sm hover:bg-[#1a2638]"
                    >
                      {getSkillIcon(skill)}
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Subtle Technical Stack Summary Bar */}
        <ScrollReveal delay={250}>
          <div className="mt-12 p-6 rounded-2xl bg-[#111823]/60 border border-slate-800/80 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="text-xs font-mono font-medium uppercase tracking-wider text-slate-300">
                Core Stack Highlights
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 text-xs font-mono">
              {featuredTechStack.map((tech) => (
                <span
                  key={tech.name}
                  className="px-2.5 py-1 rounded-md bg-slate-800/60 border border-slate-700/50 text-slate-300 flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
                >
                  {getSkillIcon(tech.name)}
                  <span>{tech.name}</span>
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

