import React, { useState, useEffect, useRef } from 'react';

// Subtle underlying graphical network nodes (6 graphical nodes, no text tags)
const NETWORK_NODES = [
  { id: 1, x: 20, y: 30, color: '#19B8D0' },
  { id: 2, x: 46, y: 22, color: '#3B82F6' },
  { id: 3, x: 76, y: 28, color: '#8B5CF6' },
  { id: 4, x: 32, y: 68, color: '#19B8D0' },
  { id: 5, x: 64, y: 76, color: '#3B82F6' },
  { id: 6, x: 86, y: 66, color: '#8B5CF6' },
];

export const InteractiveHeroTitle: React.FC = () => {
  const [pos, setPos] = useState({ x: 0, y: 0, isHovered: false });
  const mouseRef = useRef({ x: 0, y: 0, isHovered: false });
  const containerRef = useRef<HTMLDivElement>(null);

  // 60fps continuous interpolation loop
  useEffect(() => {
    let animId: number;

    const loop = () => {
      const target = mouseRef.current;
      setPos((prev) => ({
        x: prev.x + (target.x - prev.x) * 0.18,
        y: prev.y + (target.y - prev.y) * 0.18,
        isHovered: target.isHovered,
      }));
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, []);

  const handlePointerEnter = (e: React.PointerEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      isHovered: true,
    };
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      isHovered: true,
    };
  };

  const handlePointerLeave = () => {
    mouseRef.current = { ...mouseRef.current, isHovered: false };
  };

  // Increased parallax shift for underlying technical network layer
  const rect = containerRef.current?.getBoundingClientRect();
  const width = rect?.width || 400;
  const height = rect?.height || 200;
  const parallaxX = (pos.x - width / 2) * 0.09;
  const parallaxY = (pos.y - height / 2) * 0.09;

  return (
    <div
      ref={containerRef}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative inline-block select-none group cursor-default"
    >
      {/* Base Title (Normal State - 100% Unchanged) */}
      <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-none font-sans uppercase relative z-10">
        PALAK <br />
        <span className="text-white">CHIRANIYA</span>
      </h1>

      {/* Underlying Technical Lens Layer (~140px Soft Feathered Radial Mask Reveal) */}
      <div
        className={`absolute inset-0 z-20 pointer-events-none transition-opacity duration-300 ${
          pos.isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          maskImage: pos.isHovered
            ? `radial-gradient(circle 72px at ${pos.x}px ${pos.y}px, black 0%, rgba(0,0,0,0.85) 55%, transparent 100%)`
            : 'none',
          WebkitMaskImage: pos.isHovered
            ? `radial-gradient(circle 72px at ${pos.x}px ${pos.y}px, black 0%, rgba(0,0,0,0.85) 55%, transparent 100%)`
            : 'none',
        }}
      >
        {/* Soft Radial Ambient Glow Centered at Cursor */}
        <div
          className="absolute w-48 h-48 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            background: 'radial-gradient(circle, rgba(241, 245, 249, 0.1) 0%, rgba(25, 184, 208, 0.05) 55%, transparent 80%)',
          }}
        />

        {/* Revealed Graphical Technical Network Layer (With Increased Parallax Shift & Line Opacity) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none transition-transform duration-150 ease-out"
          style={{
            transform: `translate3d(${parallaxX}px, ${parallaxY}px, 0)`,
          }}
        >
          {/* Connecting Lines Between Nodes */}
          <line x1="20%" y1="30%" x2="46%" y2="22%" stroke="#19B8D0" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.65" />
          <line x1="46%" y1="22%" x2="76%" y2="28%" stroke="#3B82F6" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.65" />
          <line x1="20%" y1="30%" x2="32%" y2="68%" stroke="#19B8D0" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.55" />
          <line x1="32%" y1="68%" x2="64%" y2="76%" stroke="#8B5CF6" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.55" />
          <line x1="64%" y1="76%" x2="86%" y2="66%" stroke="#8B5CF6" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.55" />
          <line x1="46%" y1="22%" x2="64%" y2="76%" stroke="#8B5CF6" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.45" />

          {/* Lines Connecting Nearby Nodes to Cursor Lens Center */}
          {NETWORK_NODES.map((node) => {
            const nx = (node.x / 100) * width;
            const ny = (node.y / 100) * height;
            const dist = Math.hypot(pos.x - nx, pos.y - ny);

            if (dist > 115) return null;
            const opacity = (1 - dist / 115) * 0.65;

            return (
              <line
                key={`line-${node.id}`}
                x1={nx}
                y1={ny}
                x2={pos.x}
                y2={pos.y}
                stroke={node.color}
                strokeWidth="1.2"
                strokeDasharray="2 2"
                opacity={opacity}
              />
            );
          })}

          {/* Graphical Nodes (4px - 4.5px dots with halo rings) */}
          {NETWORK_NODES.map((node) => {
            const nx = (node.x / 100) * width;
            const ny = (node.y / 100) * height;
            const dist = Math.hypot(pos.x - nx, pos.y - ny);
            const isNear = dist < 100;

            return (
              <g key={`node-${node.id}`}>
                <circle
                  cx={`${node.x}%`}
                  cy={`${node.y}%`}
                  r={isNear ? '4.5' : '3'}
                  fill={node.color}
                  opacity={isNear ? 0.95 : 0.4}
                />
                {isNear && (
                  <circle
                    cx={`${node.x}%`}
                    cy={`${node.y}%`}
                    r="8"
                    fill="none"
                    stroke={node.color}
                    strokeWidth="1"
                    opacity="0.5"
                  />
                )}
              </g>
            );
          })}
        </svg>

        {/* Title Layer inside lens (70% Opacity reveal so underlying network layer shines through clearly) */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white/70 leading-none font-sans uppercase relative z-30 pointer-events-none">
          PALAK <br />
          <span className="text-white/70">CHIRANIYA</span>
        </h1>
      </div>
    </div>
  );
};
