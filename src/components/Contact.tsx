import React, { useState } from 'react';
import { Mail, FileText, Copy, Check, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MagneticButton } from './MagneticButton';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { ScrollReveal } from './ScrollReveal';

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.socialLinks.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-slate-800/60 bg-[#0B1017]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main Banner */}
        <ScrollReveal>
          <div className="tech-card p-8 sm:p-14 rounded-3xl relative overflow-hidden bg-[#111823]/95 border border-slate-700/60 text-center space-y-8 shadow-xl">
            
            {/* Subtle ambient light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-3xl pointer-events-none animate-ambient-pulse" />

            <div className="max-w-2xl mx-auto space-y-4 relative z-10">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-medium">
                06. Let's Connect
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Get In Touch
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I am actively seeking engineering opportunities, research collaborations, and software development challenges in AI/ML and backend systems.
              </p>
            </div>

            {/* Direct Email Copy Box */}
            <div className="max-w-md mx-auto p-2.5 rounded-2xl bg-[#16202e] border border-slate-700/60 flex items-center justify-between gap-3 font-mono text-xs sm:text-sm relative z-10 shadow-sm">
              <div className="flex items-center gap-2.5 px-3 text-slate-200 truncate">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="truncate">{PERSONAL_INFO.socialLinks.email}</span>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-4 py-2 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/40 font-medium flex items-center gap-1.5 transition-all duration-300 shrink-0 hover:scale-105"
                data-cursor="pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-300">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Links Row */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4 relative z-10">
              
              <MagneticButton href={`mailto:${PERSONAL_INFO.socialLinks.email}`}>
                <div className="px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs font-mono flex items-center gap-2 transition-all duration-300 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:-translate-y-0.5">
                  <Mail className="w-4 h-4" />
                  <span>Send Email</span>
                </div>
              </MagneticButton>

              <MagneticButton href={PERSONAL_INFO.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <div className="px-5 py-3 rounded-xl bg-[#16202e] hover:bg-[#1f2c3f] border border-slate-700/60 text-slate-200 hover:text-white font-medium text-xs font-mono flex items-center gap-2 transition-all duration-300 shadow-sm hover:border-cyan-500/40 hover:-translate-y-0.5">
                  <LinkedinIcon className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                </div>
              </MagneticButton>

              <MagneticButton href={PERSONAL_INFO.socialLinks.github} target="_blank" rel="noopener noreferrer">
                <div className="px-5 py-3 rounded-xl bg-[#16202e] hover:bg-[#1f2c3f] border border-slate-700/60 text-slate-200 hover:text-white font-medium text-xs font-mono flex items-center gap-2 transition-all duration-300 shadow-sm hover:border-cyan-500/40 hover:-translate-y-0.5">
                  <GithubIcon className="w-4 h-4 text-cyan-400" />
                  <span>GitHub</span>
                </div>
              </MagneticButton>

              <MagneticButton onClick={onOpenResume}>
                <div className="px-5 py-3 rounded-xl bg-[#16202e] hover:bg-[#1f2c3f] border border-slate-700/60 text-slate-200 hover:text-white font-medium text-xs font-mono flex items-center gap-2 transition-all duration-300 shadow-sm hover:border-violet-500/40 hover:-translate-y-0.5">
                  <FileText className="w-4 h-4 text-violet-400" />
                  <span>Resume</span>
                </div>
              </MagneticButton>

            </div>

          </div>
        </ScrollReveal>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React, TypeScript & Vite.
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
            data-cursor="pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
