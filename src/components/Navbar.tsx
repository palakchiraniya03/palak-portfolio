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
          ? 'bg-[#202020]/90 border-b border-[#41403C]/70 py-3.5 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-2.5 text-sm font-semibold tracking-wider text-[#F4F1EA] hover:text-[#9DB7A5] transition-colors uppercase font-mono"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#9DB7A5] shadow-[0_0_8px_rgba(157,183,165,0.8)]" />
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
                    ? 'text-[#9DB7A5] font-medium'
                    : 'text-[#B8B3AA] hover:text-[#F4F1EA]'
                }`}
              >
                {link.name}
                {isCurrent && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#9DB7A5] rounded-full shadow-[0_0_6px_rgba(157,183,165,0.6)]" />
                )}
              </a>
            );
          })}

          {onOpenResume && (
            <button
              type="button"
              onClick={onOpenResume}
              className="ml-2 px-3.5 py-1.5 rounded-lg bg-[#9DB7A5]/10 hover:bg-[#9DB7A5]/20 border border-[#9DB7A5]/30 text-[#9DB7A5] hover:text-[#F4F1EA] text-xs uppercase tracking-wider font-mono font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-sm"
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
          className="md:hidden text-[#B8B3AA] hover:text-[#F4F1EA] p-2"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-[#252525]/95 border-b border-[#41403C] px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm uppercase tracking-wider font-mono text-[#B8B3AA] hover:text-[#9DB7A5] py-2 transition-colors border-b border-[#41403C]/60"
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
              className="text-left text-sm uppercase tracking-wider font-mono text-[#9DB7A5] hover:text-[#F4F1EA] py-2 transition-colors border-b border-[#41403C]/60 flex items-center justify-between cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <FileLock className="w-4 h-4 text-[#9DB7A5]" />
                <span>Resume</span>
              </span>
              <span className="text-[10px] text-[#9DB7A5]/90 border border-[#9DB7A5]/30 px-2 py-0.5 rounded font-mono">Request</span>
            </button>
          )}
        </nav>
      )}
    </header>
  );
};
