import React from 'react';
import { ScrollReveal } from './ScrollReveal';

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
          <div className="lg:col-span-5 space-y-4">
            
            {/* Block 01: WHAT I BUILD */}
            <ScrollReveal delay={150}>
              <div className="p-5 sm:p-6 rounded-2xl bg-[#111823]/90 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 shadow-sm group">
                <div className="flex items-center gap-2 mb-2 font-mono text-xs font-semibold">
                  <span className="text-cyan-400">01</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-200 uppercase tracking-wider">WHAT I BUILD</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  AI-powered applications, intelligent backend systems, and full-stack products that solve practical problems.
                </p>
              </div>
            </ScrollReveal>

            {/* Block 02: WHAT I ENJOY */}
            <ScrollReveal delay={250}>
              <div className="p-5 sm:p-6 rounded-2xl bg-[#111823]/90 border border-slate-800/80 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1 shadow-sm group">
                <div className="flex items-center gap-2 mb-2 font-mono text-xs font-semibold">
                  <span className="text-blue-400">02</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-200 uppercase tracking-wider">WHAT I ENJOY</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  Exploring new technologies, solving challenging problems, and turning ideas into working products through experimentation and iteration.
                </p>
              </div>
            </ScrollReveal>

            {/* Block 03: CURRENTLY EXPLORING */}
            <ScrollReveal delay={350}>
              <div className="p-5 sm:p-6 rounded-2xl bg-[#111823]/90 border border-slate-800/80 hover:border-violet-500/40 transition-all duration-300 hover:-translate-y-1 shadow-sm group">
                <div className="flex items-center gap-2 mb-2 font-mono text-xs font-semibold">
                  <span className="text-violet-400">03</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-200 uppercase tracking-wider">CURRENTLY EXPLORING</span>
                </div>
                <p className="text-xs sm:text-sm font-mono text-cyan-300/90 leading-relaxed">
                  AI/ML • Computer Vision • RAG • Backend Engineering • Intelligent Systems
                </p>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </div>
    </section>
  );
};
