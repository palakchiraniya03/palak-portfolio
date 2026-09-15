import React from 'react';

interface ProjectMicroVisualProps {
  projectId: string;
  isHovered: boolean;
}

export const ProjectMicroVisual: React.FC<ProjectMicroVisualProps> = ({ projectId, isHovered }) => {
  switch (projectId) {
    case 'krishimitra':
      return <KrishiMitraVisual isHovered={isHovered} />;
    case 'fake-id-screening':
      return <FakeIdVisual isHovered={isHovered} />;
    case 'pradarshak-ai':
      return <PradarshakVisual isHovered={isHovered} />;
    default:
      return null;
  }
};

/**
 * PROJECT 1: KrishiMitra Micro-Visualization
 * Theme: Sensor → Backend → ML / Rules → Irrigation
 * Enhanced 2-3x more visible signal flow & sequential node pulses on hover.
 */
const KrishiMitraVisual: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  return (
    <div
      className={`w-full h-20 sm:h-22 rounded-xl p-3 relative overflow-hidden flex flex-col justify-between select-none transition-all duration-300 ${
        isHovered
          ? 'bg-[#182637] border border-cyan-500/40 shadow-lg shadow-cyan-950/30'
          : 'bg-[#16202e]/60 border border-slate-800/80'
      }`}
    >
      {/* Visual Header Label */}
      <div className="flex items-center justify-between font-mono text-[10px] tracking-wider uppercase">
        <span className={isHovered ? 'text-cyan-300 font-semibold' : 'text-slate-400'}>
          Smart Irrigation Loop
        </span>
        <span className={`transition-colors duration-300 font-semibold ${isHovered ? 'text-cyan-400' : 'text-slate-500'}`}>
          {isHovered ? '● Active Signal Flow' : 'Standby'}
        </span>
      </div>

      {/* SVG Canvas for Pipeline Flow */}
      <svg className="w-full h-12" viewBox="0 0 320 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Base Connecting Pipeline Path */}
        <line
          x1="30"
          y1="20"
          x2="290"
          y2="20"
          stroke={isHovered ? '#19B8D0' : '#334155'}
          strokeWidth={isHovered ? '2.5' : '1.5'}
          strokeDasharray={isHovered ? 'none' : '4 4'}
          opacity={isHovered ? '0.85' : '0.4'}
          className="transition-all duration-300"
        />

        {/* Traveling Data Packet (Clearly Visible 5px glowing dot) */}
        {isHovered && (
          <g>
            {/* Outer Glow Halo */}
            <circle cx="30" cy="20" r="8" fill="#19B8D0" opacity="0.35">
              <animate attributeName="cx" values="30; 115; 200; 290" dur="2.2s" repeatCount="indefinite" />
            </circle>
            {/* Core Data Packet Dot */}
            <circle cx="30" cy="20" r="4.5" fill="#FFFFFF" stroke="#19B8D0" strokeWidth="2">
              <animate attributeName="cx" values="30; 115; 200; 290" dur="2.2s" repeatCount="indefinite" />
            </circle>
          </g>
        )}

        {/* Node 1: Sensor (ESP32) */}
        <g transform="translate(30, 20)">
          {isHovered && (
            <circle cx="0" cy="0" r="6" fill="none" stroke="#19B8D0" strokeWidth="1.5" opacity="0.8">
              <animate attributeName="r" values="6;17;6" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.9;0;0.9" dur="2s" repeatCount="indefinite" />
            </circle>
          )}
          <circle cx="0" cy="0" r={isHovered ? '6' : '4.5'} fill={isHovered ? '#19B8D0' : '#475569'} className="transition-all duration-300" />
          <text x="0" y="16" textAnchor="middle" fill={isHovered ? '#67E8F9' : '#94A3B8'} fontSize="8" fontFamily="monospace" fontWeight={isHovered ? 'bold' : 'normal'}>
            Sensor
          </text>
        </g>

        {/* Node 2: Backend (FastAPI) */}
        <g transform="translate(115, 20)">
          {isHovered && (
            <circle cx="0" cy="0" r="5" fill="none" stroke="#3B82F6" strokeWidth="1.5" opacity="0.8">
              <animate attributeName="r" values="5;14;5" dur="2.2s" begin="0.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0;0.8" dur="2.2s" begin="0.5s" repeatCount="indefinite" />
            </circle>
          )}
          <circle cx="0" cy="0" r={isHovered ? '6' : '4.5'} fill={isHovered ? '#3B82F6' : '#475569'} className="transition-all duration-300" />
          <text x="0" y="16" textAnchor="middle" fill={isHovered ? '#93C5FD' : '#94A3B8'} fontSize="8" fontFamily="monospace" fontWeight={isHovered ? 'bold' : 'normal'}>
            Backend
          </text>
        </g>

        {/* Node 3: ML / Rules Engine */}
        <g transform="translate(200, 20)">
          {isHovered && (
            <circle cx="0" cy="0" r="5" fill="none" stroke="#8B5CF6" strokeWidth="1.5" opacity="0.8">
              <animate attributeName="r" values="5;14;5" dur="2.2s" begin="1s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0;0.8" dur="2.2s" begin="1s" repeatCount="indefinite" />
            </circle>
          )}
          <circle cx="0" cy="0" r={isHovered ? '6' : '4.5'} fill={isHovered ? '#8B5CF6' : '#475569'} className="transition-all duration-300" />
          <text x="0" y="16" textAnchor="middle" fill={isHovered ? '#C4B5FD' : '#94A3B8'} fontSize="8" fontFamily="monospace" fontWeight={isHovered ? 'bold' : 'normal'}>
            ML Rules
          </text>
        </g>

        {/* Node 4: Irrigation (Valve / Water Pulse) */}
        <g transform="translate(290, 20)">
          {isHovered && (
            <circle cx="0" cy="0" r="6" fill="none" stroke="#10B981" strokeWidth="1.8" opacity="0.9">
              <animate attributeName="r" values="5;18;5" dur="2.2s" begin="1.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.9;0;0.9" dur="2.2s" begin="1.5s" repeatCount="indefinite" />
            </circle>
          )}
          <circle cx="0" cy="0" r={isHovered ? '6.5' : '4.5'} fill={isHovered ? '#10B981' : '#475569'} className="transition-all duration-300" />
          <text x="0" y="16" textAnchor="middle" fill={isHovered ? '#6EE7B7' : '#94A3B8'} fontSize="8" fontFamily="monospace" fontWeight={isHovered ? 'bold' : 'normal'}>
            Irrigate
          </text>
        </g>
      </svg>
    </div>
  );
};

/**
 * PROJECT 2: AI-Based Fake ID Screening Micro-Visualization
 * Theme: Document → Vision / Analysis → Risk Scoring
 * Enhanced 2-3x more visible scanning beam, feature box detection & risk score fill on hover.
 */
const FakeIdVisual: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  return (
    <div
      className={`w-full h-20 sm:h-22 rounded-xl p-3 relative overflow-hidden flex flex-col justify-between select-none transition-all duration-300 ${
        isHovered
          ? 'bg-[#182637] border border-cyan-500/40 shadow-lg shadow-cyan-950/30'
          : 'bg-[#16202e]/60 border border-slate-800/80'
      }`}
    >
      {/* Visual Header Label */}
      <div className="flex items-center justify-between font-mono text-[10px] tracking-wider uppercase">
        <span className={isHovered ? 'text-cyan-300 font-semibold' : 'text-slate-400'}>
          CV Document Inspection
        </span>
        <span className={`transition-colors duration-300 font-semibold ${isHovered ? 'text-cyan-400' : 'text-slate-500'}`}>
          {isHovered ? '● Active Scan & Score' : 'Verified'}
        </span>
      </div>

      {/* SVG Canvas for Computer Vision Inspection */}
      <svg className="w-full h-12" viewBox="0 0 320 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Document Wireframe Outline */}
        <rect
          x="20"
          y="4"
          width="75"
          height="32"
          rx="3"
          stroke={isHovered ? '#19B8D0' : '#475569'}
          strokeWidth={isHovered ? '1.8' : '1.2'}
          fill="#0F172A"
          className="transition-all duration-300"
        />
        
        {/* Document Details (Photo Placeholder & Code Lines) */}
        <rect x="25" y="8" width="18" height="14" rx="1" fill={isHovered ? '#1E293B' : '#334155'} />
        <line x1="47" y1="10" x2="88" y2="10" stroke={isHovered ? '#64748B' : '#475569'} strokeWidth="1.8" />
        <line x1="47" y1="15" x2="78" y2="15" stroke={isHovered ? '#475569' : '#334155'} strokeWidth="1.8" />
        <line x1="25" y1="26" x2="88" y2="26" stroke={isHovered ? '#475569' : '#334155'} strokeWidth="1.8" />

        {/* Feature Inspection Bounding Corner Box */}
        <rect
          x="23"
          y="6"
          width="22"
          height="18"
          fill={isHovered ? 'rgba(25, 184, 208, 0.2)' : 'none'}
          stroke={isHovered ? '#19B8D0' : 'none'}
          strokeWidth="1.5"
          strokeDasharray="3 2"
          opacity={isHovered ? '1' : '0'}
          className="transition-opacity duration-300"
        />

        {/* Luminous Scanning Beam Line Moving Across Document */}
        {isHovered && (
          <g>
            <line x1="20" y1="4" x2="95" y2="4" stroke="#19B8D0" strokeWidth="2.5" opacity="0.95">
              <animate attributeName="y1" values="4;35;4" dur="2.2s" repeatCount="indefinite" />
              <animate attributeName="y2" values="4;35;4" dur="2.2s" repeatCount="indefinite" />
            </line>
            <rect x="20" y="4" width="75" height="4" fill="url(#scanGradient)" opacity="0.4">
              <animate attributeName="y" values="4;32;4" dur="2.2s" repeatCount="indefinite" />
            </rect>
          </g>
        )}

        <defs>
          <linearGradient id="scanGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#19B8D0" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#19B8D0" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Signal Arrow from Document to Vision Node */}
        <path d="M 100 20 L 132 20" stroke={isHovered ? '#3B82F6' : '#334155'} strokeWidth="1.8" strokeDasharray="3 2" />
        {isHovered && (
          <circle cx="100" cy="20" r="3.5" fill="#3B82F6">
            <animate attributeName="cx" values="100; 132" dur="1.2s" repeatCount="indefinite" />
          </circle>
        )}

        {/* Vision / Feature Analysis Node */}
        <g transform="translate(158, 20)">
          <rect
            x="-22"
            y="-12"
            width="44"
            height="24"
            rx="4"
            fill="#0F172A"
            stroke={isHovered ? '#3B82F6' : '#475569'}
            strokeWidth={isHovered ? '1.8' : '1'}
            className="transition-all duration-300"
          />
          <text x="0" y="-1" textAnchor="middle" fill={isHovered ? '#93C5FD' : '#94A3B8'} fontSize="7" fontFamily="monospace" fontWeight="bold">VISION</text>
          <text x="0" y="7" textAnchor="middle" fill={isHovered ? '#60A5FA' : '#64748B'} fontSize="6" fontFamily="monospace">ANALYSIS</text>
        </g>

        {/* Signal Arrow from Vision Node to Risk Score */}
        <path d="M 184 20 L 216 20" stroke={isHovered ? '#8B5CF6' : '#334155'} strokeWidth="1.8" strokeDasharray="3 2" />
        {isHovered && (
          <circle cx="184" cy="20" r="3.5" fill="#8B5CF6">
            <animate attributeName="cx" values="184; 216" dur="1.2s" repeatCount="indefinite" />
          </circle>
        )}

        {/* Risk Scoring Indicator Node */}
        <g transform="translate(262, 20)">
          <rect
            x="-38"
            y="-12"
            width="76"
            height="24"
            rx="4"
            fill="#0F172A"
            stroke={isHovered ? '#10B981' : '#475569'}
            strokeWidth={isHovered ? '1.8' : '1'}
            className="transition-all duration-300"
          />
          <text x="-28" y="-2" fill={isHovered ? '#A7F3D0' : '#94A3B8'} fontSize="6.5" fontFamily="monospace" fontWeight={isHovered ? 'bold' : 'normal'}>
            {isHovered ? 'VERIFIED' : 'RISK SCORE'}
          </text>
          {/* Animated Risk Level Bar */}
          <rect x="-28" y="3" width="56" height="5" rx="2.5" fill="#1E293B" />
          <rect
            x="-28"
            y="3"
            width={isHovered ? '50' : '15'}
            height="5"
            rx="2.5"
            fill={isHovered ? '#10B981' : '#475569'}
            className="transition-all duration-500"
          />
        </g>
      </svg>
    </div>
  );
};

/**
 * PROJECT 3: Pradarshak AI Geospatial Search Micro-Visualization
 * Theme: Eligibility → Ranking → Geo Search (150km Radius / PostGIS)
 * Enhanced 2-3x more visible radar sweep, expanding search radius ripple & ranked branch pin highlight.
 */
const PradarshakVisual: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  return (
    <div
      className={`w-full h-20 sm:h-22 rounded-xl p-3 relative overflow-hidden flex flex-col justify-between select-none transition-all duration-300 ${
        isHovered
          ? 'bg-[#182637] border border-violet-500/40 shadow-lg shadow-violet-950/30'
          : 'bg-[#16202e]/60 border border-slate-800/80'
      }`}
    >
      {/* Visual Header Label */}
      <div className="flex items-center justify-between font-mono text-[10px] tracking-wider uppercase">
        <span className={isHovered ? 'text-violet-300 font-semibold' : 'text-slate-400'}>
          PostGIS Geo-Spatial Radar
        </span>
        <span className={`transition-colors duration-300 font-semibold ${isHovered ? 'text-violet-400' : 'text-slate-500'}`}>
          {isHovered ? '● 150km Radius Scan' : 'Ready'}
        </span>
      </div>

      {/* SVG Canvas for Geospatial Search */}
      <svg className="w-full h-12" viewBox="0 0 320 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Minimal Grid Coordinates Background */}
        <line x1="20" y1="20" x2="300" y2="20" stroke={isHovered ? '#334155' : '#1E293B'} strokeWidth="1" />
        <line x1="160" y1="2" x2="160" y2="38" stroke={isHovered ? '#334155' : '#1E293B'} strokeWidth="1" />

        {/* 150km Radius Boundary Ring from Center Pin */}
        <circle
          cx="160"
          cy="20"
          r={isHovered ? '17' : '13'}
          fill="none"
          stroke={isHovered ? '#8B5CF6' : '#334155'}
          strokeWidth={isHovered ? '1.8' : '1'}
          strokeDasharray={isHovered ? 'none' : '3 3'}
          className="transition-all duration-500"
        />

        {/* Prominent Expanding Search Ripple Pulse (On Hover) */}
        {isHovered && (
          <g>
            <circle cx="160" cy="20" r="5" fill="none" stroke="#8B5CF6" strokeWidth="1.8" opacity="0.9">
              <animate attributeName="r" values="4;19;4" dur="2.2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.9;0;0.9" dur="2.2s" repeatCount="indefinite" />
            </circle>
            {/* Rotating Radar Line Sweep */}
            <line x1="160" y1="20" x2="177" y2="20" stroke="#C4B5FD" strokeWidth="1.8" opacity="0.85">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 160 20"
                to="360 160 20"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </line>
          </g>
        )}

        {/* Central User Location Node */}
        <g transform="translate(160, 20)">
          <circle cx="0" cy="0" r={isHovered ? '5' : '4'} fill="#8B5CF6" className="transition-all duration-300" />
          <circle cx="0" cy="0" r="2" fill="#FFFFFF" />
        </g>

        {/* Branch Location Node 1 (West - 45km) */}
        <g transform="translate(98, 14)">
          <circle cx="0" cy="0" r={isHovered ? '3.5' : '2.5'} fill={isHovered ? '#38BDF8' : '#475569'} />
          {isHovered && <line x1="0" y1="0" x2="62" y2="6" stroke="#38BDF8" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />}
          <text x="0" y="11" textAnchor="middle" fill={isHovered ? '#94A3B8' : '#64748B'} fontSize="6" fontFamily="monospace">45km</text>
        </g>

        {/* Branch Location Node 2 (East Rank #1 - 12km) */}
        <g transform="translate(225, 24)">
          {isHovered && (
            <circle cx="0" cy="0" r="8" fill="none" stroke="#10B981" strokeWidth="1.5" opacity="0.8">
              <animate attributeName="r" values="4;10;4" dur="1.8s" repeatCount="indefinite" />
            </circle>
          )}
          <circle cx="0" cy="0" r={isHovered ? '5.5' : '3'} fill={isHovered ? '#10B981' : '#475569'} className="transition-all duration-300" />
          {isHovered && <line x1="0" y1="0" x2="-65" y2="-4" stroke="#10B981" strokeWidth="1.8" opacity="0.9" />}
          <text x="0" y="-7" textAnchor="middle" fill={isHovered ? '#34D399' : '#64748B'} fontSize="7" fontFamily="monospace" fontWeight={isHovered ? 'bold' : 'normal'}>
            {isHovered ? 'RANK #1 (12km)' : '12km'}
          </text>
        </g>

        {/* Branch Location Node 3 (North East - 95km) */}
        <g transform="translate(202, 9)">
          <circle cx="0" cy="0" r={isHovered ? '3.5' : '2.5'} fill={isHovered ? '#3B82F6' : '#475569'} />
          <text x="0" y="-5" textAnchor="middle" fill={isHovered ? '#94A3B8' : '#64748B'} fontSize="6" fontFamily="monospace">95km</text>
        </g>

        {/* Eligibility Filter Tag (Left Side) */}
        <g transform="translate(35, 20)">
          <rect
            x="-22"
            y="-10"
            width="44"
            height="20"
            rx="3"
            fill="#0F172A"
            stroke={isHovered ? '#19B8D0' : '#475569'}
            strokeWidth={isHovered ? '1.5' : '1'}
            className="transition-all duration-300"
          />
          <text x="0" y="2" textAnchor="middle" fill={isHovered ? '#38BDF8' : '#94A3B8'} fontSize="6.5" fontFamily="monospace" fontWeight={isHovered ? 'bold' : 'normal'}>
            FILTER
          </text>
        </g>
      </svg>
    </div>
  );
};
