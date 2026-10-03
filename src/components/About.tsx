import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
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

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10 bg-[#0B1017] border-t border-slate-800/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Developer Label, Headline & Main Intro */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Developer Section Label */}
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold text-cyan-400 tracking-wider">
                <span className="text-cyan-500/80">$</span>
                <span>whoami</span>
              </div>
            </ScrollReveal>

            {/* Main Headline */}
            <ScrollReveal delay={100}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] font-sans">
                Building things that make technology useful.
              </h2>
            </ScrollReveal>

            {/* Intro Statement */}
            <ScrollReveal delay={200}>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl">
                I'm a Computer Engineering student at PICT Pune with a strong interest in AI/ML, intelligent systems, and full-stack development. I enjoy turning real-world problems into practical products — from AI-powered applications and computer vision systems to data-driven backend solutions.
              </p>
            </ScrollReveal>

            {/* Secondary Academic Detail */}
            <ScrollReveal delay={300}>
              <div className="pt-2 flex items-center gap-2.5 font-mono text-xs text-slate-400">
                <span className="w-2 h-2 rounded-full bg-cyan-400/80 shrink-0" />
                <span>Computer Engineering · PICT Pune · CGPA 9.44/10</span>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Three Compact Supporting Information Blocks */}
          <div className="lg:col-span-5 pt-8 lg:pt-0">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col"
            >
              
              {/* Item 01 */}
              <motion.div variants={itemVariants} className="group flex flex-col sm:flex-row gap-2 sm:gap-8 py-6 border-t border-slate-800/80 hover:border-slate-700 transition-colors duration-500">
                <div className="font-mono text-sm font-semibold text-slate-500 group-hover:text-white transition-colors duration-500 shrink-0 sm:w-8 mt-0.5">
                  01
                </div>
                <div className="space-y-2 group-hover:translate-x-2 transition-transform duration-500">
                  <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider group-hover:text-cyan-400 transition-colors duration-500">WHAT I BUILD</h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-sans group-hover:text-slate-300 transition-colors duration-500">
                    AI-powered applications, intelligent backend systems, and full-stack products that solve practical problems.
                  </p>
                </div>
              </motion.div>

              {/* Item 02 */}
              <motion.div variants={itemVariants} className="group flex flex-col sm:flex-row gap-2 sm:gap-8 py-6 border-t border-slate-800/80 hover:border-slate-700 transition-colors duration-500">
                <div className="font-mono text-sm font-semibold text-slate-500 group-hover:text-white transition-colors duration-500 shrink-0 sm:w-8 mt-0.5">
                  02
                </div>
                <div className="space-y-2 group-hover:translate-x-2 transition-transform duration-500">
                  <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider group-hover:text-cyan-400 transition-colors duration-500">WHAT I ENJOY</h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-sans group-hover:text-slate-300 transition-colors duration-500">
                    Exploring new technologies, solving challenging problems, and turning ideas into working products through experimentation and iteration.
                  </p>
                </div>
              </motion.div>

              {/* Item 03 */}
              <motion.div variants={itemVariants} className="group flex flex-col sm:flex-row gap-2 sm:gap-8 py-6 border-t border-b border-slate-800/80 hover:border-slate-700 transition-colors duration-500">
                <div className="font-mono text-sm font-semibold text-slate-500 group-hover:text-white transition-colors duration-500 shrink-0 sm:w-8 mt-0.5">
                  03
                </div>
                <div className="space-y-2 group-hover:translate-x-2 transition-transform duration-500">
                  <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider group-hover:text-cyan-400 transition-colors duration-500">CURRENTLY EXPLORING</h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-sans group-hover:text-slate-300 transition-colors duration-500">
                    AI/ML • Computer Vision • RAG • Backend Engineering • Intelligent Systems
                  </p>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
