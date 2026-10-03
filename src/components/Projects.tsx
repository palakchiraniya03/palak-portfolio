import React, { useState } from 'react';
import { Sparkles, CheckCircle2, Users, ArrowRight, Lock, ShieldCheck, Sprout, Database, ChevronRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { MagneticButton } from './MagneticButton';
import { GithubIcon } from './SocialIcons';
import { ScrollReveal } from './ScrollReveal';
import { ProjectMicroVisual } from './ProjectMicroVisual';

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative z-10 bg-[#0E141D]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-cyan-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-medium">
              03. Featured Systems & Applications
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-12">
            Featured Engineering Projects
          </h2>
        </ScrollReveal>

        {/* Streamlined Visually Balanced Projects Stack */}
        <div className="space-y-8">
          {PROJECTS.map((project) => (
            <ScrollReveal key={project.id} delay={150}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovered) setIsHovered(true);

    // Disable tilt on small screens/touch
    if (window.innerWidth < 768) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Set mouse spotlight coordinates
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);

    // Subtle 3D tilt max 2.5deg
    setTilt({
      x: (-y / rect.height) * 2.5,
      y: (x / rect.width) * 2.5,
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
    e.currentTarget.style.setProperty('--mouse-x', `50%`);
    e.currentTarget.style.setProperty('--mouse-y', `50%`);
  };

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'krishimitra':
        return <Sprout className="w-5 h-5 text-emerald-400" />;
      case 'fake-id-screening':
        return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
      case 'pradarshak-ai':
        return <Database className="w-5 h-5 text-violet-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.25s ease-out',
      }}
      className="tech-card p-5 sm:p-6.5 rounded-2xl relative overflow-hidden group bg-[#111823]/95 border border-slate-700/60 hover:border-cyan-500/50 shadow-md shadow-black/20 transition-all duration-300"
    >
      {/* Subtle Mouse-Following Spotlight Radial Glow */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(500px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(34, 211, 238, 0.08), transparent 80%)`,
        }}
      />

      {/* Subtle background ambient corner glow */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none group-hover:bg-cyan-500/10 transition-all duration-500" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start relative z-10">
        
        {/* Left main content column */}
        <div className="lg:col-span-8 space-y-4">
          
          {/* Category & Context Badges Row */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-xs font-mono text-cyan-400 font-bold px-2.5 py-0.5 rounded bg-cyan-950/40 border border-cyan-500/30">
              {project.projectType}
            </span>
            {project.badge && (
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-violet-300 font-medium px-2.5 py-0.5 rounded bg-violet-950/40 border border-violet-500/30">
                <Users className="w-3.5 h-3.5 text-violet-400" />
                {project.badge}
              </span>
            )}
            {project.context && (
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-300 font-medium px-2.5 py-0.5 rounded bg-amber-950/40 border border-amber-500/30">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                {project.context}
              </span>
            )}
          </div>

          {/* Title & Subtitle */}
          <div className="mb-2">
            <div className="flex items-center gap-4 mb-2">
              <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 shrink-0 group-hover:scale-110 group-hover:border-cyan-500/40 transition-all duration-300">
                {getProjectIcon(project.id)}
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>
            </div>
            <p className="text-sm sm:text-base font-mono text-cyan-400/90 font-medium ml-14 sm:ml-16">
              {project.subtitle}
            </p>
          </div>

          {/* Consistent Bullet-Style Engineering Highlights for ALL Projects */}
          {project.points && project.points.length > 0 && (
            <div className="space-y-2 pt-0.5">
              <ul className="space-y-1.5">
                {project.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technology Row */}
          <div className="pt-3 flex flex-wrap items-center gap-x-2 gap-y-1">
            {project.technologies.map((tech, idx) => (
              <React.Fragment key={tech}>
                <span className="text-xs font-mono text-slate-400 group-hover:text-cyan-300 transition-colors">
                  {tech}
                </span>
                {idx < project.technologies.length - 1 && (
                  <span className="text-slate-600 text-[10px]">•</span>
                )}
              </React.Fragment>
            ))}
          </div>

        </div>

        {/* Right Action & Metadata Column */}
        <div className="lg:col-span-4 flex flex-col justify-between h-full pt-6 lg:pt-0 lg:border-l lg:border-slate-800/50 lg:pl-8 space-y-6">
          
          {/* Project-Specific Micro-Visualization */}
          <ProjectMicroVisual projectId={project.id} isHovered={isHovered} />

          {/* Metadata Summary & Pipeline Flow */}
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-medium">
                Metadata & Attributes
              </div>
              <div className="p-4 rounded-xl bg-slate-800/20 border border-slate-800/60 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-500">CATEGORY:</span>
                  <span className="text-cyan-400/90 font-semibold">{project.projectType}</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-500">{project.focusOrContextLabel}:</span>
                  <span className="text-slate-300 font-medium">{project.focusOrContextValue}</span>
                </div>
                {project.isPrivate && (
                  <div className="flex items-center justify-between text-slate-300 pt-2 border-t border-slate-800/60">
                    <span className="text-slate-500">ACCESS:</span>
                    <span className="text-amber-400/90 font-medium flex items-center gap-1">
                      <Lock className="w-3 h-3" /> Private Repo
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Minimal Pipeline Flow Visual */}
            {project.flowSteps && project.flowSteps.length > 0 && (
              <div className="space-y-3 pt-1">
                <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-medium flex items-center justify-between">
                  <span>Architecture Flow</span>
                  <span className="text-[10px] text-cyan-500/70 font-mono font-semibold">PIPELINE</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/20 border border-slate-800/60">
                  <div className="flex items-center gap-1.5 flex-wrap font-mono text-[11px]">
                    {project.flowSteps.map((step, idx) => (
                      <React.Fragment key={step}>
                        <span className="px-2 py-1 rounded bg-slate-800/40 border border-slate-700/40 text-slate-300 font-medium shrink-0">
                          {step}
                        </span>
                        {idx < project.flowSteps!.length - 1 && (
                          <ChevronRight className="w-3.5 h-3.5 text-cyan-500/50 shrink-0" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Action Area */}
          <div className="pt-2">
            {project.isPrivate ? (
              <div 
                title="Source available upon request"
                className="w-full px-4 py-3 rounded-xl bg-[#16202e] border border-slate-700/60 text-slate-400 font-medium text-xs font-mono flex items-center justify-between gap-2 shadow-sm cursor-default"
              >
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-amber-400" />
                  <span>Private Repository</span>
                </div>
                <span className="text-[10px] text-slate-500 font-sans italic">Upon request</span>
              </div>
            ) : project.githubUrl ? (
              <MagneticButton href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <div className="w-full px-4 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs font-mono flex items-center justify-between gap-2 transition-all duration-300 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:-translate-y-0.5 group/btn">
                  <div className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository</span>
                  </div>
                  <ArrowRight className="w-4 h-4 opacity-80 group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </MagneticButton>
            ) : null}
          </div>

        </div>

      </div>
    </div>
  );
};
