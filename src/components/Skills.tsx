import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const categoryVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative z-10 bg-[#0B1017]">
      {/* Subtle Technical Visual Element (Background) */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden z-0 flex items-center justify-end opacity-[0.02]">
        <svg width="800" height="800" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-cyan-400 translate-x-1/4 md:translate-x-1/3">
          <defs>
            <pattern id="tech-grid" width="4" height="4" patternUnits="userSpaceOnUse">
              <path d="M 4 0 L 0 0 0 4" fill="none" stroke="currentColor" strokeWidth="0.1"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#tech-grid)" />
          <circle cx="50" cy="50" r="40" strokeWidth="0.15" strokeDasharray="1 2" />
          <circle cx="50" cy="50" r="25" strokeWidth="0.15" />
          <path d="M 10 50 L 90 50 M 50 10 L 50 90" strokeWidth="0.1" strokeDasharray="1 3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans uppercase">
            SKILLS & EXPERTISE
          </h2>
        </div>

        {/* Editorial Categories List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col"
        >
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div 
              key={category.title} 
              variants={categoryVariants}
              className="flex flex-col md:flex-row gap-6 md:gap-8 py-12 border-t border-slate-800/60 hover:border-slate-700/80 transition-colors duration-500 group"
            >
              {/* Category Number & Title (Stacked Layout) */}
              <div className="w-full md:w-[240px] flex flex-col items-start shrink-0">
                <span className="font-mono text-4xl sm:text-5xl font-light text-slate-800 group-hover:text-cyan-500/30 transition-colors duration-500 leading-none">
                  0{index + 1}
                </span>
                <h3 className="text-sm font-bold text-slate-300 uppercase tracking-widest mt-2 group-hover:text-white transition-colors duration-500">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="w-full flex-1 flex flex-wrap gap-x-10 gap-y-5 pt-1">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="group/skill flex items-center relative text-base sm:text-lg text-slate-400 font-sans transition-all duration-300 hover:text-white hover:translate-x-3 cursor-default"
                  >
                    <span className="absolute -left-4 opacity-0 transition-opacity duration-300 group-hover/skill:opacity-100 text-cyan-500/70 text-sm font-mono leading-none flex items-center h-full">
                      →
                    </span>
                    <span>{skill}</span>
                    <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400/60 transition-all duration-300 group-hover/skill:w-full" />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
          {/* Bottom border for the last item */}
          <div className="border-t border-slate-800/60 w-full" />
        </motion.div>
      </div>
    </section>
  );
};

