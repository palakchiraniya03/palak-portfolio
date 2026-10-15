import React, { useState, useEffect } from 'react';
import { Brain, Cpu, ShieldCheck, CheckCircle, ChevronLeft, ChevronRight, Award } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';
import BounceCards from './BounceCards';

// Category / Track mapping for richer context
const CERT_TRACKS: Record<string, string> = {
  'ml-specialization': 'Machine Learning & Deep Learning',
  'amd-ai-agents': 'Autonomous Systems & Model Context Protocol (MCP)',
  'web3-rust': 'Systems Programming & Web3 Infrastructure'
};

export const Certifications: React.FC = () => {
  const [activeCertIdx, setActiveCertIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getCertIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-5 h-5 text-[#9DB7A5]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#9DB7A5]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#9DB7A5]" />;
      default:
        return <Award className="w-5 h-5 text-[#9DB7A5]" />;
    }
  };

  const activeCert = CERTIFICATIONS[activeCertIdx] || CERTIFICATIONS[0];

  const handlePrev = () => {
    setActiveCertIdx((prev) => (prev > 0 ? prev - 1 : CERTIFICATIONS.length - 1));
  };

  const handleNext = () => {
    setActiveCertIdx((prev) => (prev < CERTIFICATIONS.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="certifications" className="py-24 relative z-10 bg-[#202020] overflow-hidden">
      {/* Subtle Warm Sage Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-[#9DB7A5]/5 via-[#41403C]/5 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-[#9DB7A5]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#9DB7A5] font-medium">
              05. Specializations
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F4F1EA] tracking-tight">
                Certifications & Credentials
              </h2>
              <p className="text-sm sm:text-base text-[#B8B3AA] mt-2 max-w-xl font-normal leading-relaxed">
                Verified technical credentials and engineering specializations in machine learning, AI agents, and systems.
              </p>
            </div>

            {/* Stepper controls */}
            <div className="flex items-center gap-2.5 shrink-0 self-start md:self-auto">
              <button
                type="button"
                onClick={handlePrev}
                className="p-3 rounded-xl bg-[#292929] border border-[#41403C] hover:border-[#9DB7A5] text-[#B8B3AA] hover:text-[#F4F1EA] transition-all cursor-pointer"
                aria-label="Previous credential"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="p-3 rounded-xl bg-[#292929] border border-[#41403C] hover:border-[#9DB7A5] text-[#B8B3AA] hover:text-[#F4F1EA] transition-all cursor-pointer"
                aria-label="Next credential"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Centerpiece: React Bits BounceCards Interactive Deck */}
        <div className="relative my-6 py-4 flex items-center justify-center">
          <BounceCards
            images={CERTIFICATIONS}
            containerWidth={isMobile ? '100%' : 840}
            containerHeight={isMobile ? 350 : 410}
            cardSize={isMobile ? 245 : 295}
            aspectRatio={1.05}
            spread={isMobile ? 70 : 170}
            rotation={isMobile ? 5 : 7}
            arc={isMobile ? 8 : 14}
            animationDelay={0.3}
            animationStagger={0.08}
            bounciness={0.65}
            enableHover={true}
            pushDistance={isMobile ? 100 : 155}
            hoverScale={isMobile ? 1.05 : 1.08}
            borderWidth={1.5}
            borderColor="#41403C"
            backgroundColor="#292929"
            radius={20}
            shadow={true}
            activeIndex={activeCertIdx}
            onCardClick={(idx) => setActiveCertIdx(idx)}
            onHoverChange={(idx) => {
              if (idx >= 0) setActiveCertIdx(idx);
            }}
            renderCard={(card, idx, isActive) => {
              const IconComp = getCertIcon(card.iconName || 'Award');
              const track = (card.id && CERT_TRACKS[card.id]) || 'Verified Engineering Credential';
              const isSelected = activeCertIdx === idx || isActive;

              return (
                <div
                  className={`w-full h-full p-5 sm:p-6 flex flex-col justify-between text-left select-none transition-colors duration-300 ${
                    isSelected ? 'bg-[#303030]' : 'bg-[#292929]'
                  }`}
                >
                  {/* Card Header: Icon + Verified Badge */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-[#252525] border border-[#41403C] flex items-center justify-center shrink-0">
                        {IconComp}
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-medium text-[#9DB7A5] bg-[#9DB7A5]/10 px-2.5 py-1 rounded-full border border-[#9DB7A5]/30">
                        <CheckCircle className="w-3.5 h-3.5 text-[#9DB7A5]" />
                        Verified
                      </span>
                    </div>

                    {/* Track Eyebrow */}
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#9DB7A5] font-semibold">
                        0{idx + 1} // Track
                      </span>
                      <span className="text-[10px] font-mono text-[#B8B3AA]/60 truncate">
                        {track}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-[#F4F1EA] leading-snug line-clamp-3">
                      {card.title}
                    </h3>
                  </div>

                  {/* Card Footer: Issuer & Platform */}
                  <div className="pt-4 border-t border-[#41403C] mt-3 flex items-center justify-between text-xs font-mono">
                    <span className="text-[#B8B3AA]/70">Issuer:</span>
                    <span className="text-[#9DB7A5] font-medium text-right truncate ml-2">
                      {card.issuer} {card.platform ? `(${card.platform})` : ''}
                    </span>
                  </div>
                </div>
              );
            }}
          />
        </div>

        {/* Synchronized Credential Selector Pills & Detail Strip */}
        <div className="pt-8 border-t border-[#41403C]/60 mt-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono text-[#B8B3AA] uppercase tracking-wider">
              Select Credential ({CERTIFICATIONS.length} verified)
            </span>
            <span className="text-[11px] font-mono text-[#B8B3AA]/60 hidden sm:inline">
              Hover or click any card to bounce and view details
            </span>
          </div>

          {/* Interactive Credential Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {CERTIFICATIONS.map((cert, idx) => {
              const isSelected = activeCertIdx === idx;
              return (
                <button
                  key={cert.id}
                  type="button"
                  onClick={() => setActiveCertIdx(idx)}
                  className={`p-3.5 rounded-xl border text-left transition-all duration-300 group cursor-pointer flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-[#303030] border-[#9DB7A5] text-[#F4F1EA] shadow-[0_0_20px_rgba(157,183,165,0.12)]'
                      : 'bg-[#292929] border-[#41403C] hover:border-[#9DB7A5]/40 text-[#B8B3AA] hover:text-[#F4F1EA]'
                  }`}
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`font-mono text-xs font-bold ${
                        isSelected ? 'text-[#9DB7A5]' : 'text-[#B8B3AA]/50 group-hover:text-[#B8B3AA]'
                      }`}>
                        0{idx + 1}
                      </span>
                      <span className="text-[11px] font-mono text-[#B8B3AA]/60 truncate">
                        {cert.issuer}
                      </span>
                    </div>
                    <p className="font-sans font-bold text-xs tracking-wide truncate mt-0.5">
                      {cert.title}
                    </p>
                  </div>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-[#9DB7A5] shadow-[0_0_8px_#9DB7A5]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Credential Detail Callout */}
          <div className="mt-4 p-4 rounded-xl bg-[#252525] border border-[#41403C] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2.5 truncate">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9DB7A5] shrink-0" />
              <span className="text-[#B8B3AA] shrink-0">Active Credential:</span>
              <span className="text-[#F4F1EA] font-bold truncate">{activeCert.title}</span>
            </div>
            <div className="flex items-center gap-3 text-[#9DB7A5] shrink-0">
              <span className="text-[#B8B3AA]/60">Platform:</span>
              <span className="font-semibold">{activeCert.issuer} {activeCert.platform ? `· ${activeCert.platform}` : ''}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
