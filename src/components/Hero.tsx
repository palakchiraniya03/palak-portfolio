import React from 'react';
import { ArrowRight, FileText, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ProfilePhotoPlaceholder } from './ProfilePhotoPlaceholder';
import { MagneticButton } from './MagneticButton';
import { GithubIcon } from './SocialIcons';
import { InteractiveHeroTitle } from './InteractiveHeroTitle';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center bg-[#0B1017] overflow-hidden">
      
      {/* Subtle blue/cyan radial glow environment */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-slate-500/10 via-slate-600/5 to-transparent blur-[140px] pointer-events-none animate-ambient-pulse" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Headline & Info */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          
          {/* Status Badge */}
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111823] border border-slate-700/50 text-xs font-mono text-slate-300 shadow-sm animate-hero-fade"
            style={{ animationDelay: '100ms' }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-status-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <span>{PERSONAL_INFO.status}</span>
          </div>

          {/* Large Editorial Name with Interactive Spotlight Reveal */}
          <div
            className="space-y-1 animate-hero-fade"
            style={{ animationDelay: '200ms' }}
          >
            <InteractiveHeroTitle />
          </div>

          {/* Roles & Education Subtitle */}
          <div
            className="space-y-2 pt-2 animate-hero-fade"
            style={{ animationDelay: '350ms' }}
          >
            <div className="text-lg sm:text-xl font-medium text-slate-100 font-sans flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-slate-400 shrink-0" />
              <span>{PERSONAL_INFO.title}</span>
            </div>
            <div className="text-sm sm:text-base font-mono text-slate-400 flex flex-wrap items-center gap-2">
              {PERSONAL_INFO.specializations.map((spec, i) => (
                <React.Fragment key={spec}>
                  <span className="hover:text-cyan-300 transition-colors duration-300 cursor-default">{spec}</span>
                  {i < PERSONAL_INFO.specializations.length - 1 && (
                    <span className="text-slate-600">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Short Bio Statement */}
          <p
            className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed animate-hero-fade"
            style={{ animationDelay: '450ms' }}
          >
            "{PERSONAL_INFO.bioHeadline}"
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <div className="animate-hero-fade" style={{ animationDelay: '550ms' }}>
              <MagneticButton href="#projects">
                <div className="px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-white text-slate-900 font-semibold text-sm font-mono flex items-center gap-2 transition-all duration-300 shadow-sm border border-transparent hover:border-cyan-500/30 hover:-translate-y-0.5">
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </MagneticButton>
            </div>

            <div className="animate-hero-fade" style={{ animationDelay: '620ms' }}>
              <MagneticButton href={PERSONAL_INFO.socialLinks.github} target="_blank" rel="noopener noreferrer">
                <div className="px-6 py-3.5 rounded-xl bg-[#111823] hover:bg-[#182232] border border-slate-700/60 text-slate-300 hover:text-white font-medium text-sm font-mono flex items-center gap-2 transition-all duration-300 shadow-sm hover:border-cyan-500/40 hover:-translate-y-0.5">
                  <GithubIcon className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  <span>GitHub</span>
                </div>
              </MagneticButton>
            </div>

            <div className="animate-hero-fade" style={{ animationDelay: '690ms' }}>
              <MagneticButton onClick={onOpenResume}>
                <div className="px-6 py-3.5 rounded-xl bg-[#111823] hover:bg-[#182232] border border-slate-700/60 text-slate-300 hover:text-white font-medium text-sm font-mono flex items-center gap-2 transition-all duration-300 shadow-sm hover:border-cyan-500/40 hover:-translate-y-0.5">
                  <FileText className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  <span>Resume</span>
                </div>
              </MagneticButton>
            </div>
          </div>

        </div>

        {/* Right Column: Profile Photo Treatment */}
        <div className="lg:col-span-5 flex items-center justify-center w-full pt-6 lg:pt-0 animate-hero-fade" style={{ animationDelay: '300ms' }}>
          <ProfilePhotoPlaceholder />
        </div>

      </div>
    </section>
  );
};
