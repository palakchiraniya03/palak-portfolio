import { Code, Award, Zap, Trophy } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';
import { CountUpNumber } from './CountUpNumber';

export const Achievements = () => {
  const getAchievementIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-6 h-6 text-[#9DB7A5]" />;
      case 'Award':
        return <Award className="w-6 h-6 text-[#9DB7A5]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#9DB7A5]" />;
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-[#9DB7A5]" />;
      default:
        return <Award className="w-6 h-6 text-[#9DB7A5]" />;
    }
  };

  const leetcodeAchievement = ACHIEVEMENTS.find((a) => a.id === 'leetcode');
  const otherAchievements = ACHIEVEMENTS.filter((a) => a.id !== 'leetcode');

  return (
    <section id="achievements" className="py-24 relative z-10 bg-[#202020]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-[#9DB7A5]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#9DB7A5] font-medium">
              04. Highlights & Recognition
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#F4F1EA] tracking-tight mb-16">
            Key Achievements & Milestones
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Stat Card - LeetCode 300+ */}
          {leetcodeAchievement && (
            <div className="lg:col-span-5 flex flex-col">
              <ScrollReveal delay={100} className="h-full flex flex-col">
                <div className="tech-card p-8 sm:p-10 rounded-2xl bg-[#292929] border border-[#41403C] relative overflow-hidden group hover:border-[#9DB7A5]/50 shadow-sm flex flex-col justify-between h-full">
                  {/* Subtle Background Glow Accent */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#9DB7A5]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#9DB7A5]/20 transition-all duration-500" />

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="inline-block text-[11px] font-mono font-semibold uppercase tracking-wider text-[#9DB7A5] px-3 py-1 rounded bg-[#9DB7A5]/10 border border-[#9DB7A5]/30">
                        {leetcodeAchievement.tag}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-[#303030] border border-[#41403C] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {getAchievementIcon(leetcodeAchievement.iconName)}
                      </div>
                    </div>

                    {/* Eased Count-Up Stat with Sage Green Gradient */}
                    <div className="mb-4">
                      <div className="text-5xl sm:text-6xl lg:text-7xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-[#F4F1EA] via-[#9DB7A5] to-[#B8B3AA] tracking-tight">
                        <CountUpNumber end={300} suffix="+" duration={1800} />
                      </div>
                      <p className="text-lg font-bold text-[#F4F1EA] mt-2">
                        Problems Solved
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-[#B8B3AA] leading-relaxed mb-6">
                      {leetcodeAchievement.detail}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#41403C] flex items-center justify-between text-xs font-mono text-[#B8B3AA]">
                    <span>Data Structures & Algorithms</span>
                    <span className="text-[#9DB7A5]">Competitive Programming</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          )}

          {/* Other Achievements Column */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            {otherAchievements.map((item, idx) => (
              <ScrollReveal key={item.id} delay={150 + idx * 100}>
                <div className="tech-card p-6 sm:p-7 rounded-2xl bg-[#292929] border border-[#41403C] relative overflow-hidden group hover:border-[#9DB7A5]/50 shadow-sm">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-[#303030] border border-[#41403C] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {getAchievementIcon(item.iconName)}
                    </div>

                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <span className="inline-block text-[11px] font-mono font-semibold uppercase tracking-wider text-[#9DB7A5] px-2.5 py-0.5 rounded bg-[#9DB7A5]/10 border border-[#9DB7A5]/30">
                          {item.tag}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#F4F1EA] group-hover:text-[#9DB7A5] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#B8B3AA] leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
