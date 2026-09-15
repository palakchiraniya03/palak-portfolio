import { useState } from 'react';
import { BackgroundGrid } from './components/BackgroundGrid';
import { CustomCursor } from './components/CustomCursor';
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
    <div className="min-h-screen bg-[#07080d] text-gray-100 relative selection:bg-cyan-500 selection:text-black">
      {/* Background radial spotlight & tech grid */}
      <BackgroundGrid />

      {/* Interactive 2-stage custom cursor */}
      <CustomCursor />

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
