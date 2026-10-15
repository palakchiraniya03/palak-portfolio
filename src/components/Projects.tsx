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
    <section id="projects" className="py-24 relative z-10 bg-[#202020]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-[#9DB7A5]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#9DB7A5] font-medium">
              03. Featured Systems & Applications
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#F4F1EA] tracking-tight mb-12">
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
        return <Sprout className="w-5 h-5 text-[#9DB7A5]" />;
      case 'fake-id-screening':
        return <ShieldCheck className="w-5 h-5 text-[#9DB7A5]" />;
      case 'pradarshak-ai':
        return <Database className="w-5 h-5 text-[#9DB7A5]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#9DB7A5]" />;
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
      className="tech-card p-5 sm:p-6.5 rounded-2xl relative overflow-hidden group bg-[#292929] border border-[#41403C] hover:border-[#9DB7A5]/50 shadow-md shadow-black/30 transition-all duration-300"
    >
      {/* Subtle Mouse-Following Spotlight Radial Glow */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(500px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(157, 183, 165, 0.08), transparent 80%)`,
        }}
      />

      {/* Subtle background ambient corner glow */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#9DB7A5]/5 blur-3xl pointer-events-none group-hover:bg-[#9DB7A5]/10 transition-all duration-500" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start relative z-10">
        
        {/* Left main content column */}
        <div className="lg:col-span-8 space-y-4">
          
          {/* Category & Context Badges Row */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-xs font-mono text-[#9DB7A5] font-bold px-2.5 py-0.5 rounded bg-[#9DB7A5]/10 border border-[#9DB7A5]/30">
              {project.projectType}
            </span>
            {project.badge && (
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#F4F1EA] font-medium px-2.5 py-0.5 rounded bg-[#303030] border border-[#41403C]">
                <Users className="w-3.5 h-3.5 text-[#9DB7A5]" />
                {project.badge}
              </span>
            )}
            {project.context && (
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#9DB7A5] font-medium px-2.5 py-0.5 rounded bg-[#9DB7A5]/15 border border-[#9DB7A5]/40">
                <Sparkles className="w-3.5 h-3.5 text-[#9DB7A5]" />
                {project.context}
              </span>
            )}
          </div>

          {/* Title & Subtitle */}
          <div className="mb-2">
            <div className="flex items-center gap-4 mb-2">
              <div className="p-3 rounded-xl bg-[#303030] border border-[#41403C] shrink-0 group-hover:scale-110 group-hover:border-[#9DB7A5]/40 transition-all duration-300">
                {getProjectIcon(project.id)}
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#F4F1EA] tracking-tight group-hover:text-[#9DB7A5] transition-colors">
                {project.title}
              </h3>
            </div>
            <p className="text-sm sm:text-base font-mono text-[#9DB7A5]/90 font-medium ml-14 sm:ml-16">
              {project.subtitle}
            </p>
          </div>

          {/* Consistent Bullet-Style Engineering Highlights for ALL Projects */}
          {project.points && project.points.length > 0 && (
            <div className="space-y-2 pt-0.5">
              <ul className="space-y-1.5">
                {project.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#B8B3AA] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#9DB7A5] shrink-0 mt-0.5" />
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
                <span className="text-xs font-mono text-[#B8B3AA] group-hover:text-[#9DB7A5] transition-colors">
                  {tech}
                </span>
                {idx < project.technologies.length - 1 && (
                  <span className="text-[#41403C] text-[10px]">•</span>
                )}
              </React.Fragment>
            ))}
          </div>

        </div>

        {/* Right Action & Metadata Column */}
        <div className="lg:col-span-4 flex flex-col justify-between h-full pt-6 lg:pt-0 lg:border-l lg:border-[#41403C]/50 lg:pl-8 space-y-6">
          
          {/* Project-Specific Micro-Visualization */}
          <ProjectMicroVisual projectId={project.id} isHovered={isHovered} />

          {/* Metadata Summary & Pipeline Flow */}
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="text-[11px] font-mono text-[#B8B3AA]/70 uppercase tracking-wider font-medium">
                Metadata & Attributes
              </div>
              <div className="p-4 rounded-xl bg-[#252525] border border-[#41403C] space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between text-[#F4F1EA]">
                  <span className="text-[#B8B3AA]/70">CATEGORY:</span>
                  <span className="text-[#9DB7A5] font-semibold">{project.projectType}</span>
                </div>
                <div className="flex items-center justify-between text-[#F4F1EA]">
                  <span className="text-[#B8B3AA]/70">{project.focusOrContextLabel}:</span>
                  <span className="text-[#F4F1EA] font-medium">{project.focusOrContextValue}</span>
                </div>
                {project.isPrivate && (
                  <div className="flex items-center justify-between text-[#F4F1EA] pt-2 border-t border-[#41403C]">
                    <span className="text-[#B8B3AA]/70">ACCESS:</span>
                    <span className="text-[#9DB7A5] font-medium flex items-center gap-1">
                      <Lock className="w-3 h-3" /> Private Repo
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Minimal Pipeline Flow Visual */}
            {project.flowSteps && project.flowSteps.length > 0 && (
              <div className="space-y-3 pt-1">
                <div className="text-[11px] font-mono text-[#B8B3AA]/70 uppercase tracking-wider font-medium flex items-center justify-between">
                  <span>Architecture Flow</span>
                  <span className="text-[10px] text-[#9DB7A5]/80 font-mono font-semibold">PIPELINE</span>
                </div>
                <div className="p-4 rounded-xl bg-[#252525] border border-[#41403C]">
                  <div className="flex items-center gap-1.5 flex-wrap font-mono text-[11px]">
                    {project.flowSteps.map((step, idx) => (
                      <React.Fragment key={step}>
                        <span className="px-2 py-1 rounded bg-[#303030] border border-[#41403C] text-[#F4F1EA] font-medium shrink-0">
                          {step}
                        </span>
                        {idx < project.flowSteps!.length - 1 && (
                          <ChevronRight className="w-3.5 h-3.5 text-[#9DB7A5]/70 shrink-0" />
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
                className="w-full px-4 py-3 rounded-xl bg-[#252525] border border-[#41403C] text-[#B8B3AA] font-medium text-xs font-mono flex items-center justify-between gap-2 shadow-sm cursor-default"
              >
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#9DB7A5]" />
                  <span>Private Repository</span>
                </div>
                <span className="text-[10px] text-[#B8B3AA]/60 font-sans italic">Upon request</span>
              </div>
            ) : project.githubUrl ? (
              <MagneticButton href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <div className="w-full px-4 py-3 rounded-xl bg-[#9DB7A5] hover:bg-[#B3C9B9] text-[#202020] font-semibold text-xs font-mono flex items-center justify-between gap-2 transition-all duration-300 shadow-md shadow-[#9DB7A5]/20 hover:shadow-[#9DB7A5]/35 hover:-translate-y-0.5 group/btn">
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
