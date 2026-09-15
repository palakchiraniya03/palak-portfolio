import { Brain, Cpu, ShieldCheck, CheckCircle } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const Certifications = () => {
  const getCertIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-6 h-6 text-cyan-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-blue-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-violet-400" />;
      default:
        return <Brain className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="certifications" className="py-24 relative z-10 bg-[#0D131B]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-cyan-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-medium">
              05. Specializations
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-12">
            Certifications & Credentials
          </h2>
        </ScrollReveal>

        {/* Certifications Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <ScrollReveal key={cert.id} delay={idx * 120}>
              <div
                className="tech-card p-6 rounded-2xl bg-[#111823]/90 border border-slate-700/60 relative overflow-hidden group hover:border-cyan-500/50 flex flex-col justify-between shadow-sm h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {getCertIcon(cert.iconName)}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-300 bg-emerald-950/40 px-2.5 py-1 rounded border border-emerald-500/30">
                      <CheckCircle className="w-3 h-3 text-emerald-400" />
                      Verified
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors leading-snug">
                    {cert.title}
                  </h3>
                </div>

                <div className="pt-6 border-t border-slate-800/80 mt-6 font-mono text-xs text-slate-400 flex items-center justify-between">
                  <span>Issuer:</span>
                  <span className="text-cyan-400 font-medium">
                    {cert.issuer} {cert.platform ? `(${cert.platform})` : ''}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
