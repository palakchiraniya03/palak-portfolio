import { useEffect } from 'react';

export const BackgroundGrid = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Warm graphite base (#202020) */}
      <div className="absolute inset-0 bg-[#202020]" />

      {/* Subtle sage green technical grid overlay */}
      <div className="absolute inset-0 bg-tech-grid opacity-85" />

      {/* Soft radial mouse spotlight */}
      <div className="absolute inset-0 bg-radial-spotlight opacity-90" />

      {/* Barely noticeable subtle sage green and graphite ambient glows */}
      <div className="absolute -top-[15%] -left-[10%] w-[600px] h-[600px] rounded-full bg-[#9DB7A5]/5 blur-[160px] animate-ambient-pulse" />
      <div className="absolute top-[35%] -right-[10%] w-[650px] h-[650px] rounded-full bg-[#292929]/50 blur-[180px] animate-ambient-pulse" style={{ animationDelay: '3s' }} />
      <div className="absolute -bottom-[15%] left-[20%] w-[600px] h-[600px] rounded-full bg-[#303832]/40 blur-[170px] animate-ambient-pulse" style={{ animationDelay: '6s' }} />
    </div>
  );
};
