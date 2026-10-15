import React, { useState, useEffect, useRef } from 'react';
import profileImg from '../assets/profile.jpeg';

interface ProfilePhotoPlaceholderProps {
  imageSrc?: string;
}

export const ProfilePhotoPlaceholder: React.FC<ProfilePhotoPlaceholderProps> = ({ imageSrc = profileImg }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [pos, setPos] = useState({ x: 205, y: 205, isHovered: false });

  // Stable target ref for pointer coordinates
  const mouseRef = useRef({ x: 205, y: 205, isHovered: false });

  // Continuous interpolation loop running at 60fps
  useEffect(() => {
    let animId: number;

    const loop = () => {
      const target = mouseRef.current;

      setPos((prev) => ({
        x: prev.x + (target.x - prev.x) * 0.2,
        y: prev.y + (target.y - prev.y) * 0.2,
        isHovered: target.isHovered,
      }));

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, []);

  const handlePointerEnter = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseRef.current = { x, y, isHovered: true };
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseRef.current = { x, y, isHovered: true };

    // 3D tilt calculation
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setTilt({
      x: (-(y - centerY) / rect.height) * 8,
      y: ((x - centerX) / rect.width) * 8,
    });
  };

  const handlePointerLeave = () => {
    mouseRef.current = { x: 205, y: 205, isHovered: false };
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div style={{ animation: 'floatGently 6s ease-in-out infinite' }}>
      <div
        onPointerEnter={handlePointerEnter}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[410px] md:h-[410px] mx-auto flex items-center justify-center cursor-pointer select-none group"
        style={{ perspective: '1000px' }}
      >
        {/* Translucent Cursor-Following Lens Glow */}
        <div
          className={`absolute w-36 h-36 rounded-full pointer-events-none z-[4] transition-opacity duration-300 -translate-x-1/2 -translate-y-1/2 ${
            pos.isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            background: 'radial-gradient(circle, rgba(148, 163, 184, 0.15) 0%, rgba(148, 163, 184, 0.05) 50%, transparent 75%)',
          }}
        />

        {/* Ambient background glow */}
        <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-[#9DB7A5]/5 via-[#41403C]/5 to-[#9DB7A5]/5 blur-2xl group-hover:from-[#9DB7A5]/10 group-hover:to-[#41403C]/10 transition-all duration-500 pointer-events-none" />

        {/* Ring 1 (Outer Ring - Subtle, Dashed, Rotating Clockwise over 40s) */}
        <div
          className="absolute inset-0 rounded-full border border-dashed border-[#41403C]/50 pointer-events-none z-10"
          style={{ animation: 'spinClockwise 40s linear infinite' }}
        >
        </div>

        {/* Ring 2 (Inner Ring - Subtle, Dotted, Rotating Counter-Clockwise over 30s) */}
        <div
          className="absolute inset-5 sm:inset-6 rounded-full border border-dotted border-[#41403C]/50 pointer-events-none z-10"
          style={{ animation: 'spinCounterClockwise 30s linear infinite' }}
        >
        </div>

        {/* Parallax Central Circular Photo Frame (Static photo, non-rotating, 3D tilt response) */}
        <div
          className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-[#292929] border border-[#41403C] p-1.5 shadow-xl transition-transform duration-200 ease-out flex items-center justify-center overflow-hidden z-20 pointer-events-none group-hover:border-[#9DB7A5]/40"
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Circular Profile photo */}
          <img
            src={imageSrc}
            alt="Palak Chiraniya"
            className="w-full h-full object-cover object-[center_15%] scale-110 rounded-full relative z-10"
          />
        </div>
      </div>
    </div>
  );
};



