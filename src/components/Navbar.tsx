import React, { useState, useEffect } from 'react';
import { Menu, X, FileLock } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B1017]/90 border-b border-slate-800/70 py-3.5 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-2.5 text-sm font-semibold tracking-wider text-white hover:text-cyan-400 transition-colors uppercase font-mono"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
          {PERSONAL_INFO.name}
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isCurrent = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs uppercase tracking-widest font-mono transition-all duration-200 relative py-1 ${
                  isCurrent
                    ? 'text-cyan-400 font-medium'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
                {isCurrent && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-400 rounded-full shadow-[0_0_6px_rgba(34,211,238,0.6)]" />
                )}
              </a>
            );
          })}

          {onOpenResume && (
            <button
              type="button"
              onClick={onOpenResume}
              className="ml-2 px-3.5 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 hover:text-cyan-200 text-xs uppercase tracking-wider font-mono font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <FileLock className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          )}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-white p-2"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-[#0D131B]/95 border-b border-slate-800 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm uppercase tracking-wider font-mono text-slate-200 hover:text-cyan-400 py-2 transition-colors border-b border-slate-800/60"
            >
              {link.name}
            </a>
          ))}

          {onOpenResume && (
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="text-left text-sm uppercase tracking-wider font-mono text-cyan-300 hover:text-cyan-200 py-2 transition-colors border-b border-slate-800/60 flex items-center justify-between cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <FileLock className="w-4 h-4 text-cyan-400" />
                <span>Resume</span>
              </span>
              <span className="text-[10px] text-cyan-400/90 border border-cyan-500/30 px-2 py-0.5 rounded font-mono">Request</span>
            </button>
          )}
        </nav>
      )}
    </header>
  );
};
