import { useState } from 'react';
import { BackgroundGrid } from './components/BackgroundGrid';
import { GhostCursor } from './components/GhostCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { ResumeModal } from './components/ResumeModal';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#202020] text-[#F4F1EA] relative selection:bg-[#9DB7A5] selection:text-[#202020]">
      {/* Background radial spotlight & tech grid */}
      <BackgroundGrid />

      {/* Official React Bits Ghost Cursor fluid trail */}
      <GhostCursor
        color="#9DB7A5"
        brightness={0.48}
        size={60}
        trailLength={18}
        inertia={0.45}
        turbulence={0.35}
        drift={0.15}
        grainIntensity={0.03}
        bloomStrength={0.18}
        bloomRadius={0.7}
        fadeDelayMs={150}
        fadeDurationMs={450}
        zIndex={35}
      />

      {/* Translucent integrated navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Layout */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Certifications />
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Resume Document Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}

export default App;
