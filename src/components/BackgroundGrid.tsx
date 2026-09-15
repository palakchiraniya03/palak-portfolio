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
      {/* Deep charcoal / blue-black base (#0B1017) */}
      <div className="absolute inset-0 bg-[#0B1017]" />

      {/* Cool blue technical grid overlay */}
      <div className="absolute inset-0 bg-tech-grid opacity-80" />

      {/* Soft radial mouse spotlight */}
      <div className="absolute inset-0 bg-radial-spotlight opacity-90" />

      {/* Barely noticeable ambient slow-moving light glow overlays */}
      <div className="absolute -top-[15%] -left-[10%] w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[150px] animate-ambient-pulse" />
      <div className="absolute top-[35%] -right-[10%] w-[650px] h-[650px] rounded-full bg-blue-600/10 blur-[170px] animate-ambient-pulse" style={{ animationDelay: '3s' }} />
      <div className="absolute -bottom-[15%] left-[20%] w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[160px] animate-ambient-pulse" style={{ animationDelay: '6s' }} />
    </div>
  );
};
