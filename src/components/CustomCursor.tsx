import { useEffect, useState, useRef } from 'react';

// 4 tiny relative node offset positions around trailing cursor center
const GLOBAL_CURSOR_NODES = [
  { id: 1, dx: -28, dy: -20, color: '#19B8D0' },
  { id: 2, dx: 32, dy: -24, color: '#3B82F6' },
  { id: 3, dx: -24, dy: 30, color: '#8B5CF6' },
  { id: 4, dx: 36, dy: 26, color: '#19B8D0' },
];

export const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [hoverType, setHoverType] = useState<'none' | 'heading' | 'interactive'>('none');
  const [isVisible, setIsVisible] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const mouseRef = useRef({ x: -100, y: -100 });
  const ringRef = useRef({ x: -100, y: -100 });
  const isInitializedRef = useRef(false);

  // Global Mouse Tracking & Element Context Detection (Mount once)
  useEffect(() => {
    // Check touch device or reduced motion
    const touchMedia = window.matchMedia('(pointer: coarse)');
    const motionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (touchMedia.matches || motionMedia.matches) {
      setIsDisabled(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Instant position update for main cursor dot
      mouseRef.current = { x: e.clientX, y: e.clientY };
      setPos({ x: e.clientX, y: e.clientY });

      // On first mouse movement, snap trailing lerp position immediately to avoid offscreen glide
      if (!isInitializedRef.current) {
        ringRef.current = { x: e.clientX, y: e.clientY };
        setRingPos({ x: e.clientX, y: e.clientY });
        isInitializedRef.current = true;
      }

      setIsVisible(true);

      // Context-aware target inspection for atmospheric visual hierarchy
      const target = e.target as HTMLElement | null;
      if (target) {
        const isHeading =
          target.tagName === 'H1' ||
          target.tagName === 'H2' ||
          target.tagName === 'H3' ||
          Boolean(target.closest('h1, h2, h3'));

        const isInteractive =
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          Boolean(target.closest('button, a')) ||
          target.getAttribute('data-cursor') === 'pointer' ||
          Boolean(target.closest('[data-cursor="pointer"]'));

        if (isInteractive) {
          setHoverType('interactive');
        } else if (isHeading) {
          setHoverType('heading');
        } else {
          setHoverType('none');
        }
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  // 60fps continuous lerp animation loop for trailing technical atmosphere
  useEffect(() => {
    if (isDisabled) return;

    let animId: number;
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const animate = () => {
      if (mouseRef.current.x !== -100) {
        const target = mouseRef.current;
        ringRef.current = {
          x: lerp(ringRef.current.x, target.x, 0.18),
          y: lerp(ringRef.current.y, target.y, 0.18),
        };
        setRingPos({ x: ringRef.current.x, y: ringRef.current.y });
      }
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [isDisabled]);

  if (isDisabled) return null;

  // Visual strength adjustments based on context
  const isHeading = hoverType === 'heading';
  const isInteractive = hoverType === 'interactive';

  // REFINED GLOBAL ATMOSPHERE VALUES
  const glowOpacity = isInteractive ? 0.40 : isHeading ? 0.35 : 0.22;
  const lineOpacity = isInteractive ? 0.50 : isHeading ? 0.42 : 0.32;
  const nodeRadius = isInteractive ? 4.0 : isHeading ? 3.5 : 2.9;
  const ringSize = isInteractive ? 48 : isHeading ? 36 : 28;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {/* Soft Cursor Ambient Radial Glow */}
      <div
        className="fixed top-0 left-0 rounded-full pointer-events-none transition-all duration-300 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: isInteractive ? '170px' : '135px',
          height: isInteractive ? '170px' : '135px',
          transform: `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)`,
          background: `radial-gradient(circle, rgba(25, 184, 208, ${glowOpacity}) 0%, rgba(139, 92, 246, ${glowOpacity * 0.55}) 60%, transparent 80%)`,
        }}
      />

      {/* Trailing Graphical Technical Atmosphere Overlay */}
      <svg className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Faint Dashed Connecting Lines between Cursor Center & Surrounding Nodes */}
        {GLOBAL_CURSOR_NODES.map((node) => (
          <line
            key={`line-${node.id}`}
            x1={ringPos.x}
            y1={ringPos.y}
            x2={ringPos.x + node.dx}
            y2={ringPos.y + node.dy}
            stroke={node.color}
            strokeWidth="1.2"
            strokeDasharray="2 2"
            opacity={lineOpacity}
          />
        ))}

        {/* Outer Node-to-Node Interconnect Lines */}
        <line
          x1={ringPos.x + GLOBAL_CURSOR_NODES[0].dx}
          y1={ringPos.y + GLOBAL_CURSOR_NODES[0].dy}
          x2={ringPos.x + GLOBAL_CURSOR_NODES[1].dx}
          y2={ringPos.y + GLOBAL_CURSOR_NODES[1].dy}
          stroke="#19B8D0"
          strokeWidth="1.2"
          strokeDasharray="3 3"
          opacity={lineOpacity * 0.85}
        />
        <line
          x1={ringPos.x + GLOBAL_CURSOR_NODES[2].dx}
          y1={ringPos.y + GLOBAL_CURSOR_NODES[2].dy}
          x2={ringPos.x + GLOBAL_CURSOR_NODES[3].dx}
          y2={ringPos.y + GLOBAL_CURSOR_NODES[3].dy}
          stroke="#8B5CF6"
          strokeWidth="1.2"
          strokeDasharray="3 3"
          opacity={lineOpacity * 0.85}
        />

        {/* Graphical Nodes (2.9px - 4px) */}
        {GLOBAL_CURSOR_NODES.map((node) => (
          <circle
            key={`node-${node.id}`}
            cx={ringPos.x + node.dx}
            cy={ringPos.y + node.dy}
            r={nodeRadius}
            fill={node.color}
            opacity={isInteractive ? 0.95 : isHeading ? 0.88 : 0.7}
          />
        ))}
      </svg>

      {/* Trailing Ring Cursor */}
      <div
        className={`fixed top-0 left-0 pointer-events-none rounded-full border transition-all duration-200 ease-out -translate-x-1/2 -translate-y-1/2 ${
          isInteractive
            ? 'border-cyan-400/75 bg-cyan-500/10 shadow-[0_0_15px_rgba(25,184,208,0.25)]'
            : isHeading
            ? 'border-cyan-400/55 bg-cyan-500/5'
            : 'border-cyan-400/40 bg-transparent'
        }`}
        style={{
          width: `${ringSize}px`,
          height: `${ringSize}px`,
          transform: `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)`,
        }}
      />

      {/* Inner Dot Cursor */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full pointer-events-none transition-transform duration-75 ease-out shadow-[0_0_8px_rgba(25,184,208,0.85)] -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) scale(${isInteractive ? 0.6 : 1})`,
        }}
      />
    </div>
  );
};

