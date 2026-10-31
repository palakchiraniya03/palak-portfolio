import React from 'react';

export interface ProjectMicroVisualProps {
  projectId: string;
  isHovered?: boolean;
}

export const ProjectMicroVisual: React.FC<ProjectMicroVisualProps> = ({ projectId, isHovered = false }) => {
  switch (projectId) {
    case 'krishimitra':
      return <KrishiMitraMicroVisual isHovered={isHovered} />;
    case 'raglab':
      return <RAGLabMicroVisual isHovered={isHovered} />;
    case 'pradarshak-ai':
      return <PradarshakMicroVisual isHovered={isHovered} />;
    case 'crawlforge':
      return <CrawlForgeMicroVisual isHovered={isHovered} />;
    case 'secure-proxy-gateway':
      return <SecureProxyMicroVisual isHovered={isHovered} />;
    default:
      return null;
  }
};

interface MicroVisualProps {
  isHovered: boolean;
}

/**
 * Common CSS Keyframes injected once to guarantee 100% reliable hardware-accelerated animations
 * without SMIL or SVG <animate> browser compatibility pitfalls.
 */
const MicroAnimationStyles = () => (
  <style>{`
    @keyframes km-droplet-move {
      0% { transform: translateX(0px); opacity: 0.3; }
      20% { opacity: 1; }
      80% { opacity: 1; }
      100% { transform: translateX(110px); opacity: 0.3; }
    }
    @keyframes km-valve-pulse {
      0% { transform: scale(1); opacity: 0.9; }
      70% { transform: scale(2.2); opacity: 0; }
      100% { transform: scale(1); opacity: 0; }
    }
    @keyframes rag-packet-move {
      0% { transform: translateX(0px); opacity: 0.3; }
      30% { opacity: 1; }
      70% { opacity: 1; }
      100% { transform: translateX(42px); opacity: 0.3; }
    }
    @keyframes rag-retrieve-move {
      0% { transform: translateX(0px); opacity: 0.3; }
      30% { opacity: 1; }
      70% { opacity: 1; }
      100% { transform: translateX(28px); opacity: 0.3; }
    }
    @keyframes rag-radar-pulse {
      0% { transform: scale(1); opacity: 0.9; }
      70% { transform: scale(2.2); opacity: 0; }
      100% { transform: scale(1); opacity: 0; }
    }
    @keyframes pradarshak-radar-spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes pradarshak-query-move {
      0% { transform: translateX(0px); opacity: 0.3; }
      30% { opacity: 1; }
      70% { opacity: 1; }
      100% { transform: translateX(94px); opacity: 0.3; }
    }
    @keyframes pradarshak-pin-pulse {
      0% { transform: scale(1); opacity: 0.9; }
      70% { transform: scale(2.2); opacity: 0; }
      100% { transform: scale(1); opacity: 0; }
    }
    @keyframes crawl-scan-move {
      0% { transform: translate(0px, 0px); opacity: 0.4; }
      35% { transform: translate(42px, 0px); opacity: 1; }
      70% { transform: translate(62px, -9px); opacity: 1; }
      100% { transform: translate(62px, -9px); opacity: 0.2; }
    }
    @keyframes crawl-node-pulse {
      0%, 100% { opacity: 0.4; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.3); }
    }
    @keyframes proxy-packet-move {
      0% { transform: translateX(0px); opacity: 0.3; }
      25% { transform: translateX(36px); opacity: 1; }
      60% { transform: translateX(118px); opacity: 1; }
      100% { transform: translateX(152px); opacity: 0.3; }
    }
    @keyframes proxy-shield-pulse {
      0% { transform: scale(1); opacity: 0.9; }
      70% { transform: scale(2.2); opacity: 0; }
      100% { transform: scale(1); opacity: 0; }
    }
  `}</style>
);

/**
 * 1. KrishiMitra – Smart Irrigation Micro-Animation
 * Technical Concept: ESP32 soil moisture telemetry -> gentle water droplet flow -> smart valve pulse.
 */
const KrishiMitraMicroVisual: React.FC<MicroVisualProps> = ({ isHovered }) => {
  return (
    <div
      className={`w-full rounded-xl p-3 relative overflow-hidden select-none transition-all duration-300 ${
        isHovered
          ? 'bg-[#282828] border border-[#9DB7A5]/50 shadow-sm'
          : 'bg-[#252525] border border-[#41403C]'
      }`}
    >
      <MicroAnimationStyles />
      {/* Header Bar */}
      <div className="flex items-center justify-between font-mono text-[10px] tracking-wider mb-2">
        <span className="text-[#9DB7A5] font-semibold flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9DB7A5]" />
          SOIL TELEMETRY // IRRIGATION
        </span>
        <span className="text-[#B8B3AA] text-[9.5px]">28% Deficit</span>
      </div>

      {/* SVG Canvas */}
      <svg viewBox="0 0 280 38" className="w-full h-9 block" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Moisture Level Readout Node (Left) */}
        <g transform="translate(10, 8)">
          <rect x="0" y="0" width="68" height="22" rx="4" fill="#202020" stroke="#41403C" strokeWidth="1" />
          <rect x="6" y="13" width="56" height="3" rx="1.5" fill="#303030" />
          <rect x="6" y="13" width="20" height="3" rx="1.5" fill="#9DB7A5" />
          <path
            d="M 12 5 C 12 3.5 13.5 2 13.5 2 C 13.5 2 15 3.5 15 5 C 15 5.8 14.3 6.5 13.5 6.5 C 12.7 6.5 12 5.8 12 5 Z"
            fill="#9DB7A5"
          />
          <text x="20" y="8.5" fill="#F4F1EA" fontSize="7.5" fontFamily="monospace" fontWeight="bold">
            28% MOIST
          </text>
        </g>

        {/* Gentle Irrigation Flow Line (Center) */}
        <line x1="84" y1="19" x2="194" y2="19" stroke="#41403C" strokeWidth="1.5" strokeDasharray="3 3" />

        {/* Traveling Water Droplet Packet (CSS Keyframe Driven) */}
        <g style={{ animation: 'km-droplet-move 2.4s cubic-bezier(0.4, 0, 0.2, 1) infinite' }}>
          <circle cx="84" cy="19" r="3.5" fill="#9DB7A5" />
          <circle cx="84" cy="19" r="6" fill="#9DB7A5" opacity="0.3" />
        </g>

        {/* Smart Valve / Irrigation Emitter Node (Right) */}
        <g transform="translate(202, 8)">
          <rect
            x="0"
            y="0"
            width="68"
            height="22"
            rx="4"
            fill="#202020"
            stroke={isHovered ? '#9DB7A5' : '#41403C'}
            strokeWidth="1"
            className="transition-colors duration-200"
          />
          {/* Radiating Water Pulse Ring */}
          <circle
            cx="14"
            cy="11"
            r="3.5"
            fill="none"
            stroke="#9DB7A5"
            strokeWidth="1.2"
            style={{ transformOrigin: '14px 11px', animation: 'km-valve-pulse 2.4s ease-out infinite' }}
          />
          <circle cx="14" cy="11" r="3" fill="#9DB7A5" />
          <text x="24" y="14" fill="#9DB7A5" fontSize="7" fontFamily="monospace" fontWeight="bold">
            IRRIGATE
          </text>
        </g>
      </svg>
    </div>
  );
};

/**
 * 2. RAGLab – Offline RAG Workbench Micro-Animation
 * Technical Concept: Document ingestion -> Ollama embedding -> Qdrant vector retrieval.
 */
const RAGLabMicroVisual: React.FC<MicroVisualProps> = ({ isHovered }) => {
  return (
    <div
      className={`w-full rounded-xl p-3 relative overflow-hidden select-none transition-all duration-300 ${
        isHovered
          ? 'bg-[#282828] border border-[#9DB7A5]/50 shadow-sm'
          : 'bg-[#252525] border border-[#41403C]'
      }`}
    >
      <MicroAnimationStyles />
      {/* Header Bar */}
      <div className="flex items-center justify-between font-mono text-[10px] tracking-wider mb-2">
        <span className="text-[#9DB7A5] font-semibold flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9DB7A5]" />
          VECTOR PIPELINE // QDRANT
        </span>
        <span className="text-[#B8B3AA] text-[9.5px]">Local RAG</span>
      </div>

      {/* SVG Canvas */}
      <svg viewBox="0 0 280 38" className="w-full h-9 block" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Document Ingestion Node (Left) */}
        <g transform="translate(10, 8)">
          <rect x="0" y="0" width="58" height="22" rx="4" fill="#202020" stroke="#41403C" strokeWidth="1" />
          <line x1="8" y1="8" x2="20" y2="8" stroke="#9DB7A5" strokeWidth="1" />
          <line x1="8" y1="12" x2="24" y2="12" stroke="#41403C" strokeWidth="1" />
          <text x="28" y="14" fill="#F4F1EA" fontSize="7" fontFamily="monospace" fontWeight="bold">
            INGEST
          </text>
        </g>

        {/* Connecting Vector Bus */}
        <line x1="74" y1="19" x2="114" y2="19" stroke="#41403C" strokeWidth="1.5" strokeDasharray="3 3" />
        {/* Traveling Embedding Packet */}
        <g style={{ animation: 'rag-packet-move 2.2s ease-in-out infinite' }}>
          <circle cx="74" cy="19" r="3" fill="#9DB7A5" />
          <circle cx="74" cy="19" r="5" fill="#9DB7A5" opacity="0.3" />
        </g>

        {/* Qdrant Vector Space (Center) */}
        <g transform="translate(118, 8)">
          <rect
            x="0"
            y="0"
            width="68"
            height="22"
            rx="4"
            fill="#202020"
            stroke={isHovered ? '#9DB7A5' : '#41403C'}
            strokeWidth="1"
            className="transition-colors duration-200"
          />
          {/* Vector Search Pulse */}
          <circle
            cx="12"
            cy="11"
            r="3"
            fill="none"
            stroke="#9DB7A5"
            strokeWidth="1.2"
            style={{ transformOrigin: '12px 11px', animation: 'rag-radar-pulse 2.2s ease-out infinite' }}
          />
          <circle cx="12" cy="11" r="2.5" fill="#9DB7A5" />
          <text x="20" y="14" fill="#9DB7A5" fontSize="7" fontFamily="monospace" fontWeight="bold">
            QDRANT
          </text>
        </g>

        {/* Retrieval Connection Bus */}
        <line x1="192" y1="19" x2="216" y2="19" stroke="#41403C" strokeWidth="1.5" strokeDasharray="3 3" />
        {/* Retrieved Context Packet */}
        <g style={{ animation: 'rag-retrieve-move 2.2s ease-in-out 0.8s infinite' }}>
          <circle cx="190" cy="19" r="2.5" fill="#9DB7A5" />
        </g>

        {/* Local Answer Generator Node (Right) */}
        <g transform="translate(220, 8)">
          <rect x="0" y="0" width="50" height="22" rx="4" fill="#202020" stroke="#41403C" strokeWidth="1" />
          <text x="25" y="14" textAnchor="middle" fill="#F4F1EA" fontSize="7" fontFamily="monospace" fontWeight="bold">
            GEMMA 3
          </text>
        </g>
      </svg>
    </div>
  );
};

/**
 * 3. Pradarshak AI – Geospatial Scheme Discovery Micro-Animation
 * Technical Concept: PostGIS 150km spatial search -> radar sweep -> verified branch pin.
 */
const PradarshakMicroVisual: React.FC<MicroVisualProps> = ({ isHovered }) => {
  return (
    <div
      className={`w-full rounded-xl p-3 relative overflow-hidden select-none transition-all duration-300 ${
        isHovered
          ? 'bg-[#282828] border border-[#9DB7A5]/50 shadow-sm'
          : 'bg-[#252525] border border-[#41403C]'
      }`}
    >
      <MicroAnimationStyles />
      {/* Header Bar */}
      <div className="flex items-center justify-between font-mono text-[10px] tracking-wider mb-2">
        <span className="text-[#9DB7A5] font-semibold flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9DB7A5]" />
          POSTGIS SPATIAL SEARCH
        </span>
        <span className="text-[#B8B3AA] text-[9.5px]">150km Radius</span>
      </div>

      {/* SVG Canvas */}
      <svg viewBox="0 0 280 38" className="w-full h-9 block" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* User Location Radar Origin (Left) */}
        <g transform="translate(32, 19)">
          <circle cx="0" cy="0" r="14" stroke="#41403C" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="0" cy="0" r="7" stroke="#41403C" strokeWidth="1" />
          {/* Rotating Radar Line Sweep */}
          <g style={{ transformOrigin: '0px 0px', animation: 'pradarshak-radar-spin 2.8s linear infinite' }}>
            <line x1="0" y1="0" x2="14" y2="0" stroke="#9DB7A5" strokeWidth="1.5" />
            <polygon points="0,0 14,0 12,3" fill="#9DB7A5" opacity="0.4" />
          </g>
          <circle cx="0" cy="0" r="2.5" fill="#9DB7A5" />
          <text x="18" y="3.5" fill="#F4F1EA" fontSize="7" fontFamily="monospace">
            PUNE
          </text>
        </g>

        {/* Spatial Distance Ray */}
        <line x1="68" y1="19" x2="162" y2="19" stroke="#41403C" strokeWidth="1.5" strokeDasharray="3 3" />
        {/* Geospatial Query Packet */}
        <g style={{ animation: 'pradarshak-query-move 2.2s ease-in-out infinite' }}>
          <circle cx="68" cy="19" r="3" fill="#9DB7A5" />
          <circle cx="68" cy="19" r="5" fill="#9DB7A5" opacity="0.3" />
        </g>

        {/* Verified Nearest Channel Partner Pin (Center-Right) */}
        <g transform="translate(166, 8)">
          <rect
            x="0"
            y="0"
            width="58"
            height="22"
            rx="4"
            fill="#202020"
            stroke={isHovered ? '#9DB7A5' : '#41403C'}
            strokeWidth="1"
            className="transition-colors duration-200"
          />
          {/* Beacon pulse */}
          <circle
            cx="10"
            cy="11"
            r="3.5"
            fill="none"
            stroke="#9DB7A5"
            strokeWidth="1.2"
            style={{ transformOrigin: '10px 11px', animation: 'pradarshak-pin-pulse 2.2s ease-out infinite' }}
          />
          <circle cx="10" cy="11" r="2.5" fill="#9DB7A5" />
          <text x="18" y="14" fill="#9DB7A5" fontSize="6.5" fontFamily="monospace" fontWeight="bold">
            12.4km
          </text>
        </g>

        {/* Qualified Tag (Far Right) */}
        <g transform="translate(230, 8)">
          <rect x="0" y="0" width="40" height="22" rx="4" fill="#202020" stroke="#41403C" strokeWidth="1" />
          <text x="20" y="14" textAnchor="middle" fill="#F4F1EA" fontSize="6.5" fontFamily="monospace" fontWeight="bold">
            MATCH
          </text>
        </g>
      </svg>
    </div>
  );
};

/**
 * 4. CrawlForge – Web Crawler Micro-Animation
 * Technical Concept: URL frontier -> SSRF-safe crawling branches -> discovered web nodes.
 */
const CrawlForgeMicroVisual: React.FC<MicroVisualProps> = ({ isHovered }) => {
  return (
    <div
      className={`w-full rounded-xl p-3 relative overflow-hidden select-none transition-all duration-300 ${
        isHovered
          ? 'bg-[#282828] border border-[#9DB7A5]/50 shadow-sm'
          : 'bg-[#252525] border border-[#41403C]'
      }`}
    >
      <MicroAnimationStyles />
      {/* Header Bar */}
      <div className="flex items-center justify-between font-mono text-[10px] tracking-wider mb-2">
        <span className="text-[#9DB7A5] font-semibold flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9DB7A5]" />
          URL FRONTIER // BFS DISCOVERY
        </span>
        <span className="text-[#B8B3AA] text-[9.5px]">SSRF Safe</span>
      </div>

      {/* SVG Canvas */}
      <svg viewBox="0 0 280 38" className="w-full h-9 block" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Frontier Seed Queue Node (Left) */}
        <g transform="translate(10, 8)">
          <rect x="0" y="0" width="62" height="22" rx="4" fill="#202020" stroke="#41403C" strokeWidth="1" />
          <circle cx="10" cy="11" r="3" fill="#9DB7A5" />
          <text x="18" y="14" fill="#F4F1EA" fontSize="7" fontFamily="monospace" fontWeight="bold">
            FRONTIER
          </text>
        </g>

        {/* Tree Branch Lines leading to crawled pages */}
        <path d="M 78 19 L 120 19 L 140 10" stroke="#41403C" strokeWidth="1" strokeDasharray="2 2" />
        <path d="M 78 19 L 120 19 L 140 19" stroke="#41403C" strokeWidth="1" strokeDasharray="2 2" />
        <path d="M 78 19 L 120 19 L 140 28" stroke="#41403C" strokeWidth="1" strokeDasharray="2 2" />

        {/* Traveling Scanning Crawler Packet */}
        <g style={{ animation: 'crawl-scan-move 2.4s ease-in-out infinite' }}>
          <circle cx="78" cy="19" r="3" fill="#9DB7A5" />
          <circle cx="78" cy="19" r="5" fill="#9DB7A5" opacity="0.3" />
        </g>

        {/* Discovered Page Nodes (Center-Right) */}
        <g transform="translate(142, 6)">
          <circle
            cx="3"
            cy="4"
            r="2.5"
            fill={isHovered ? '#9DB7A5' : '#B8B3AA'}
            style={{ animation: 'crawl-node-pulse 2.4s ease-in-out 0.3s infinite' }}
          />
          <text x="10" y="6" fill="#B8B3AA" fontSize="6.5" fontFamily="monospace">
            /docs
          </text>

          <circle
            cx="3"
            cy="13"
            r="2.5"
            fill="#9DB7A5"
            style={{ animation: 'crawl-node-pulse 2.4s ease-in-out 0.7s infinite' }}
          />
          <text x="10" y="15" fill="#F4F1EA" fontSize="6.5" fontFamily="monospace" fontWeight="bold">
            /search
          </text>

          <circle
            cx="3"
            cy="22"
            r="2.5"
            fill={isHovered ? '#9DB7A5' : '#B8B3AA'}
            style={{ animation: 'crawl-node-pulse 2.4s ease-in-out 1.1s infinite' }}
          />
          <text x="10" y="24" fill="#B8B3AA" fontSize="6.5" fontFamily="monospace">
            /api
          </text>
        </g>

        {/* Inverted Index BM25 Status (Far Right) */}
        <g transform="translate(205, 8)">
          <rect
            x="0"
            y="0"
            width="65"
            height="22"
            rx="4"
            fill="#202020"
            stroke={isHovered ? '#9DB7A5' : '#41403C'}
            strokeWidth="1"
            className="transition-colors duration-200"
          />
          <text x="32" y="14" textAnchor="middle" fill="#9DB7A5" fontSize="7" fontFamily="monospace" fontWeight="bold">
            BM25 INDEX
          </text>
        </g>
      </svg>
    </div>
  );
};

/**
 * 5. SecureProxyGateway – Secure Proxy Micro-Animation
 * Technical Concept: Client TCP -> RFC 7617 auth & SSRF guard -> encrypted CONNECT tunnel.
 */
const SecureProxyMicroVisual: React.FC<MicroVisualProps> = ({ isHovered }) => {
  return (
    <div
      className={`w-full rounded-xl p-3 relative overflow-hidden select-none transition-all duration-300 ${
        isHovered
          ? 'bg-[#282828] border border-[#9DB7A5]/50 shadow-sm'
          : 'bg-[#252525] border border-[#41403C]'
      }`}
    >
      <MicroAnimationStyles />
      {/* Header Bar */}
      <div className="flex items-center justify-between font-mono text-[10px] tracking-wider mb-2">
        <span className="text-[#9DB7A5] font-semibold flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9DB7A5]" />
          POSIX PROXY // CONNECT TUNNEL
        </span>
        <span className="text-[#B8B3AA] text-[9.5px]">TLS Blind</span>
      </div>

      {/* SVG Canvas */}
      <svg viewBox="0 0 280 38" className="w-full h-9 block" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Client Origin Node (Left) */}
        <g transform="translate(10, 8)">
          <rect x="0" y="0" width="52" height="22" rx="4" fill="#202020" stroke="#41403C" strokeWidth="1" />
          <circle cx="8" cy="11" r="2.5" fill="#9DB7A5" />
          <text x="16" y="14" fill="#F4F1EA" fontSize="7" fontFamily="monospace" fontWeight="bold">
            CLIENT
          </text>
        </g>

        {/* Inbound Connection */}
        <line x1="68" y1="19" x2="100" y2="19" stroke="#41403C" strokeWidth="1.5" strokeDasharray="3 3" />

        {/* Security Shield / Proxy Gateway Node (Center) */}
        <g transform="translate(104, 8)">
          <rect
            x="0"
            y="0"
            width="78"
            height="22"
            rx="4"
            fill="#202020"
            stroke={isHovered ? '#9DB7A5' : '#41403C'}
            strokeWidth="1"
            className="transition-colors duration-200"
          />
          {/* Shield pulse */}
          <circle
            cx="12"
            cy="11"
            r="3.5"
            fill="none"
            stroke="#9DB7A5"
            strokeWidth="1.2"
            style={{ transformOrigin: '12px 11px', animation: 'proxy-shield-pulse 2.2s ease-out infinite' }}
          />
          <circle cx="12" cy="11" r="2.5" fill="#9DB7A5" />
          <text x="21" y="14" fill="#9DB7A5" fontSize="6.5" fontFamily="monospace" fontWeight="bold">
            AUTH &amp; SSRF
          </text>
        </g>

        {/* Tunnel Channel Rails (CONNECT Tunnel) */}
        <line x1="188" y1="16" x2="220" y2="16" stroke="#41403C" strokeWidth="1" />
        <line x1="188" y1="22" x2="220" y2="22" stroke="#41403C" strokeWidth="1" />

        {/* Encrypted Data Packet traversing tunnel (CSS Keyframe Driven) */}
        <g style={{ animation: 'proxy-packet-move 2.2s cubic-bezier(0.4, 0, 0.2, 1) infinite' }}>
          <circle cx="68" cy="19" r="3" fill="#9DB7A5" />
          <circle cx="68" cy="19" r="5" fill="#9DB7A5" opacity="0.3" />
        </g>

        {/* Destination Host (Right) */}
        <g transform="translate(222, 8)">
          <rect x="0" y="0" width="48" height="22" rx="4" fill="#202020" stroke="#41403C" strokeWidth="1" />
          <text x="24" y="14" textAnchor="middle" fill="#F4F1EA" fontSize="7" fontFamily="monospace" fontWeight="bold">
            HOST:443
          </text>
        </g>
      </svg>
    </div>
  );
};
