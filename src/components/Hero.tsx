import React from 'react';
import { ArrowRight, FileText, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import ProfileCard from './ProfileCard';
import profileImg from '../assets/profile.jpeg';
import { MagneticButton } from './MagneticButton';
import { GithubIcon } from './SocialIcons';
import TechText from './TechText';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const handleContactClick = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = '#contact';
    }
  };
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center bg-[#202020] overflow-hidden">
      
      {/* Subtle sage green and graphite radial glow environment */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#9DB7A5]/5 via-[#41403C]/10 to-transparent blur-[140px] pointer-events-none animate-ambient-pulse" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Headline & Info */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          
          {/* Status Badge */}
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#292929] border border-[#41403C] text-xs font-mono text-[#B8B3AA] shadow-sm animate-hero-fade"
            style={{ animationDelay: '100ms' }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-status-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <span>{PERSONAL_INFO.status}</span>
          </div>

          {/* Large Editorial Name with React Bits Tech Text Animation */}
          <div
            className="w-full h-[150px] sm:h-[190px] lg:h-[225px] relative animate-hero-fade -ml-1 z-20"
            style={{ animationDelay: '200ms' }}
          >
            <h1 className="sr-only">Palak Chiraniya</h1>
            <TechText
              text={'PALAK\nCHIRANIYA'}
              fontWeight={800}
              fontSize={100}
              reveal="letter"
              dashLength={4}
              dashGap={2}
              specks={15}
              intro="none"
              introDuration={2}
              clickKick
              guides={false}
              fontFamily=""
              letterSpacing={-0.05}
              accentColor="#9DB7A5"
              reach={200}
              softness={0.7}
              lineStyle="dashed"
              strokeWidth={1.5}
              speed={1}
              bounce={0.4}
              selection
              labels={false}
              color="#F4F1EA"
              align="left"
              draggable={false}
              sweep={false}
            />
          </div>

          {/* Roles & Education Subtitle */}
          <div
            className="space-y-2 pt-2 animate-hero-fade"
            style={{ animationDelay: '350ms' }}
          >
            <div className="text-lg sm:text-xl font-medium text-[#F4F1EA] font-sans flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#9DB7A5] shrink-0" />
              <span>{PERSONAL_INFO.title}</span>
            </div>
            <div className="text-sm sm:text-base font-mono text-[#B8B3AA] flex flex-wrap items-center gap-2">
              {PERSONAL_INFO.specializations.map((spec, i) => (
                <React.Fragment key={spec}>
                  <span className="hover:text-[#9DB7A5] transition-colors duration-300 cursor-default">{spec}</span>
                  {i < PERSONAL_INFO.specializations.length - 1 && (
                    <span className="text-[#41403C]">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Short Bio Statement */}
          <p
            className="text-base sm:text-lg text-[#B8B3AA] max-w-xl leading-relaxed animate-hero-fade"
            style={{ animationDelay: '450ms' }}
          >
            "{PERSONAL_INFO.bioHeadline}"
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <div className="animate-hero-fade" style={{ animationDelay: '550ms' }}>
              <MagneticButton href="#projects">
                <div className="px-6 py-3.5 rounded-xl bg-[#F4F1EA] hover:bg-white text-[#202020] font-semibold text-sm font-mono flex items-center gap-2 transition-all duration-300 shadow-sm border border-transparent hover:border-[#9DB7A5]/50 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(157,183,165,0.15)]">
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </MagneticButton>
            </div>

            <div className="animate-hero-fade" style={{ animationDelay: '620ms' }}>
              <MagneticButton href={PERSONAL_INFO.socialLinks.github} target="_blank" rel="noopener noreferrer">
                <div className="group px-6 py-3.5 rounded-xl bg-[#292929] hover:bg-[#303832] border border-[#41403C] text-[#B8B3AA] hover:text-[#F4F1EA] font-medium text-sm font-mono flex items-center gap-2 transition-all duration-300 shadow-sm hover:border-[#9DB7A5]/40 hover:-translate-y-0.5">
                  <GithubIcon className="w-4 h-4 text-[#B8B3AA] group-hover:text-[#9DB7A5] transition-colors" />
                  <span>GitHub</span>
                </div>
              </MagneticButton>
            </div>

            <div className="animate-hero-fade" style={{ animationDelay: '690ms' }}>
              <MagneticButton onClick={onOpenResume}>
                <div className="group px-6 py-3.5 rounded-xl bg-[#292929] hover:bg-[#303832] border border-[#41403C] text-[#B8B3AA] hover:text-[#F4F1EA] font-medium text-sm font-mono flex items-center gap-2 transition-all duration-300 shadow-sm hover:border-[#9DB7A5]/40 hover:-translate-y-0.5">
                  <FileText className="w-4 h-4 text-[#B8B3AA] group-hover:text-[#9DB7A5] transition-colors" />
                  <span>Resume</span>
                </div>
              </MagneticButton>
            </div>
          </div>

        </div>

        {/* Right Column: Profile Card */}
        <div className="lg:col-span-5 flex items-center justify-center w-full pt-6 lg:pt-0 animate-hero-fade" style={{ animationDelay: '300ms' }}>
          <ProfileCard
            name="Palak Chiraniya"
            title="Computer Engineering Student"
            handle="palakchiraniya"
            status="Available for opportunities"
            contactText="Contact"
            avatarUrl={profileImg}
            holo={0.8}
            glare={0.5}
            tiltStrength={12}
            parallax={8}
            radius={16}
            enableTilt={true}
            intro={true}
            showUserInfo={true}
            enableMobileTilt={false}
            theme="dark"
            onContactClick={handleContactClick}
          />
        </div>

      </div>
    </section>
  );
};
