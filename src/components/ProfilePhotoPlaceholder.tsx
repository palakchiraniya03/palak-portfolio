import React, { useState, useEffect, useRef } from 'react';
import { Code2 } from 'lucide-react';
import profileImg from '../assets/profile.jpeg';
import { ReactIcon, PythonIcon } from './SocialIcons';

interface ProfilePhotoPlaceholderProps {
  imageSrc?: string;
}

// 7 constrained AI/ML nodes around orbit boundary (410x410 coordinate space)
const NODES = [
  { id: 1, x: 75, y: 85, label: 'ML', color: 'cyan' },
  { id: 2, x: 330, y: 75, label: 'NLP', color: 'blue' },
  { id: 3, x: 355, y: 215, label: 'RAG', color: 'violet' },
  { id: 4, x: 325, y: 335, label: 'inference', color: 'cyan' },
  { id: 5, x: 85, y: 325, label: 'CV', color: 'blue' },
  { id: 6, x: 55, y: 205, label: 'embeddings', color: 'violet' },
  { id: 7, x: 205, y: 40, label: 'AI', color: 'cyan' },
];

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
        {/* Translucent Cursor-Following AI Field Glow */}
        <div
          className={`absolute w-36 h-36 rounded-full pointer-events-none z-[4] transition-opacity duration-300 -translate-x-1/2 -translate-y-1/2 ${
            pos.isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            background: 'radial-gradient(circle, rgba(25, 184, 208, 0.22) 0%, rgba(139, 92, 246, 0.12) 50%, transparent 75%)',
            boxShadow: '0 0 25px rgba(25, 184, 208, 0.2)',
          }}
        />

        {/* SVG Layer for Node Connections */}
        <svg
          className={`absolute inset-0 w-full h-full pointer-events-none z-[5] transition-opacity duration-300 ${
            pos.isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          viewBox="0 0 410 410"
        >
          {NODES.map((node) => {
            const dx = pos.x - node.x;
            const dy = pos.y - node.y;
            const dist = Math.hypot(dx, dy);

            // Node attraction shift toward cursor (up to 10px)
            const pull = pos.isHovered && dist < 220 ? (1 - dist / 220) * 10 : 0;
            const nx = node.x + (dist > 0 ? (dx / dist) * pull : 0);
            const ny = node.y + (dist > 0 ? (dy / dist) * pull : 0);

            const lineOpacity = dist < 200 ? (1 - dist / 200) * 0.45 : 0;
            const isNear = dist < 140;

            return (
              <g key={node.id}>
                {/* Line connecting node to cursor */}
                {lineOpacity > 0 && (
                  <line
                    x1={nx}
                    y1={ny}
                    x2={pos.x}
                    y2={pos.y}
                    stroke={node.color === 'cyan' ? '#19B8D0' : node.color === 'violet' ? '#8B5CF6' : '#3B82F6'}
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    opacity={lineOpacity}
                  />
                )}

                {/* Node Dot */}
                <circle
                  cx={nx}
                  cy={ny}
                  r={isNear ? '4' : '2.5'}
                  fill={node.color === 'cyan' ? '#19B8D0' : node.color === 'violet' ? '#8B5CF6' : '#3B82F6'}
                  opacity={isNear ? 0.8 : 0.3}
                />

                {/* Node Glow Pulse */}
                {isNear && (
                  <circle
                    cx={nx}
                    cy={ny}
                    r="8"
                    fill="none"
                    stroke={node.color === 'cyan' ? '#19B8D0' : '#8B5CF6'}
                    strokeWidth="1"
                    opacity="0.4"
                  />
                )}
              </g>
            );
          })}
        </svg>

        {/* Technical Labels */}
        <div
          className={`absolute inset-0 pointer-events-none z-[6] transition-opacity duration-300 ${
            pos.isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {NODES.map((node) => {
            const dx = pos.x - node.x;
            const dy = pos.y - node.y;
            const dist = Math.hypot(dx, dy);
            const pull = pos.isHovered && dist < 220 ? (1 - dist / 220) * 10 : 0;
            const nx = node.x + (dist > 0 ? (dx / dist) * pull : 0);
            const ny = node.y + (dist > 0 ? (dy / dist) * pull : 0);

            const isNear = dist < 120;

            return (
              <span
                key={`label-${node.id}`}
                style={{ left: `${(nx / 410) * 100}%`, top: `${(ny / 410) * 100}%` }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 text-[10px] font-mono font-semibold tracking-wider px-1.5 py-0.5 rounded bg-[#111823]/95 border border-slate-700/80 text-cyan-300 shadow-md transition-all duration-300 pointer-events-none ${
                  isNear ? 'opacity-100 scale-105 border-cyan-500/50' : 'opacity-35 scale-95'
                }`}
              >
                {node.label}
              </span>
            );
          })}
        </div>

        {/* Ambient background glow */}
        <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-violet-600/15 blur-2xl group-hover:from-cyan-500/25 group-hover:to-violet-600/25 transition-all duration-500 pointer-events-none" />

        {/* Ring 1 (Outer Ring - Cyan/Blue, Dashed, Rotating Clockwise over 20s) */}
        <div
          className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/50 pointer-events-none z-10 shadow-[0_0_15px_rgba(34,211,238,0.15)]"
          style={{ animation: 'spinClockwise 20s linear infinite' }}
        >
          {/* Floating Icon 1: React (Top Center of Outer Ring) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#111823] border border-cyan-400/60 flex items-center justify-center text-cyan-400 shadow-md shadow-cyan-950/60 backdrop-blur-md hover:scale-110 transition-transform">
              <ReactIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </div>
          </div>

          {/* Floating Icon 2: Python (Bottom Right of Outer Ring) */}
          <div className="absolute bottom-4 right-6 translate-x-1/4 translate-y-1/4">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#111823] border border-blue-400/60 flex items-center justify-center text-blue-400 shadow-md shadow-blue-950/60 backdrop-blur-md hover:scale-110 transition-transform">
              <PythonIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </div>
          </div>
        </div>

        {/* Ring 2 (Inner Ring - Violet/Blue, Dotted, Rotating Counter-Clockwise over 14s) */}
        <div
          className="absolute inset-5 sm:inset-6 rounded-full border-2 border-dotted border-violet-400/50 pointer-events-none z-10 shadow-[0_0_15px_rgba(139,92,246,0.15)]"
          style={{ animation: 'spinCounterClockwise 14s linear infinite' }}
        >
          {/* Floating Icon 3: Code </> (Left Center of Inner Ring) */}
          <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#111823] border border-violet-400/60 flex items-center justify-center text-violet-400 shadow-md shadow-violet-950/60 backdrop-blur-md hover:scale-110 transition-transform">
              <Code2 className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </div>
          </div>
        </div>

        {/* Parallax Central Circular Photo Frame (Static photo, non-rotating, 3D tilt response) */}
        <div
          className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-[#111823] border-2 border-slate-700/70 p-1.5 shadow-2xl transition-transform duration-200 ease-out flex items-center justify-center overflow-hidden z-20 pointer-events-none group-hover:border-cyan-500/50"
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



