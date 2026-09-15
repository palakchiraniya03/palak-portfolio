import { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    // Check touch device or reduced motion
    const touchMedia = window.matchMedia('(pointer: coarse)');
    const motionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (touchMedia.matches || motionMedia.matches) {
      setIsDisabled(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if mouse is over interactive element
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('data-cursor') === 'pointer' ||
          target.closest('[data-cursor="pointer"]'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  // Smooth lerp for trailing ring
  useEffect(() => {
    if (isDisabled) return;

    let animId: number;
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const animate = () => {
      setRingPos((prev) => ({
        x: lerp(prev.x, pos.x, 0.18),
        y: lerp(prev.y, pos.y, 0.18),
      }));
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [pos, isDisabled]);

  if (isDisabled || !isVisible) return null;

  return (
    <>
      {/* Inner Dot Cursor */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-50 transition-transform duration-75 ease-out shadow-[0_0_8px_rgba(56,189,248,0.8)]"
        style={{
          transform: `translate3d(${pos.x - 4}px, ${pos.y - 4}px, 0) scale(${isHovered ? 0.5 : 1})`,
        }}
      />

      {/* Trailing Ring Cursor */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-40 rounded-full border border-cyan-400/40 transition-all duration-200 ease-out ${
          isHovered
            ? 'w-12 h-12 border-cyan-400/70 bg-cyan-500/5 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
            : 'w-8 h-8'
        }`}
        style={{
          transform: `translate3d(${ringPos.x - (isHovered ? 24 : 16)}px, ${
            ringPos.y - (isHovered ? 24 : 16)
          }px, 0)`,
        }}
      />
    </>
  );
};
