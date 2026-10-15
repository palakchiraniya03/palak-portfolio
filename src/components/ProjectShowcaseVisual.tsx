import React, { useState, useEffect } from 'react';
import {
  Compass,
  Play,
  Pause,
  Sprout
} from 'lucide-react';

interface ProjectShowcaseVisualProps {
  projectId: string;
}

export const ProjectShowcaseVisual: React.FC<ProjectShowcaseVisualProps> = ({ projectId }) => {
  // Initialize play state respecting prefers-reduced-motion
  const [isPlaying, setIsPlaying] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return true;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setIsPlaying(false);
      }
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  switch (projectId) {
    case 'krishimitra':
      return (
        <KrishiMitraShowcase
          isPlaying={isPlaying}
          onTogglePlay={() => setIsPlaying((p) => !p)}
        />
      );
    case 'pradarshak-ai':
      return (
        <PradarshakShowcase
          isPlaying={isPlaying}
          onTogglePlay={() => setIsPlaying((p) => !p)}
        />
      );
    default:
      return null;
  }
};

interface ShowcaseProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
}

/**
 * --------------------------------------------------------------------------
 * 1. KRISHIMITRA SHOWCASE VISUAL
 * Verified Architecture:
 * - ESP32 soil moisture, temp, humidity sensing
 * - Firebase Realtime Database (via Wi-Fi)
 * - FastAPI backend
 * - OpenWeather forecast integration
 * - Scikit-learn moisture forecasting across 9 crops
 * - Deterministic crop-specific rule engine
 * - RAG-based crop knowledge retrieval (FastEmbed)
 * - Groq-hosted Llama 3.1 for explainable advisory
 * - React + TypeScript + Capacitor mobile application
 * --------------------------------------------------------------------------
 */
const KrishiMitraShowcase: React.FC<ShowcaseProps> = ({ isPlaying, onTogglePlay }) => {
  return (
    <div className="tech-card rounded-2xl p-5 sm:p-7 bg-[#252525] border border-[#41403C] hover:border-[#9DB7A5]/40 transition-all duration-300 relative overflow-hidden shadow-lg space-y-6">
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#9DB7A5]/[0.03] blur-3xl pointer-events-none" />

      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#41403C]/60 pb-4 relative z-10">
        <div className="space-y-1">
          <div className="flex items-center gap-2 font-mono text-xs text-[#9DB7A5] font-semibold tracking-wider">
            <Sprout className="w-4 h-4 text-[#9DB7A5]" />
            <span>01 // ARCHITECTURE &amp; AI DECISION PIPELINE</span>
          </div>
          <h4 className="text-lg sm:text-xl font-bold text-[#F4F1EA] tracking-tight">
            KrishiMitra: IoT Sensing → ML Forecasting → RAG Advisory
          </h4>
        </div>

        {/* Status Pill & Play/Pause Control */}
        <div className="flex items-center gap-2 self-start sm:self-auto shrink-0 font-mono text-xs">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#202020] border border-[#41403C] text-[#B8B3AA]">
            <span
              className={`w-2 h-2 rounded-full ${
                isPlaying ? 'bg-[#9DB7A5] shadow-[0_0_8px_#9DB7A5] animate-pulse' : 'bg-[#41403C]'
              }`}
            />
            <span>{isPlaying ? 'Pipeline Simulation' : 'Simulation Paused'}</span>
          </span>

          <button
            type="button"
            onClick={onTogglePlay}
            className="p-1.5 rounded-lg bg-[#292929] border border-[#41403C] hover:border-[#9DB7A5]/40 text-[#B8B3AA] hover:text-[#F4F1EA] transition-colors cursor-pointer"
            title={isPlaying ? 'Pause simulation' : 'Play simulation'}
            aria-label={isPlaying ? 'Pause simulation' : 'Play simulation'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Main SVG Architecture Pipeline Canvas */}
      <div className="w-full relative z-10 overflow-hidden bg-[#202020]/70 rounded-xl border border-[#41403C]/70 p-3 sm:p-5">
        <svg
          viewBox="0 0 920 220"
          className="w-full h-auto min-h-[170px] select-none block"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="kmPacketGlow" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#9DB7A5" />
            </linearGradient>
          </defs>

          {/* Connecting Data Pipeline Busses */}
          <line x1="185" y1="110" x2="265" y2="110" stroke="#41403C" strokeWidth="2" strokeDasharray="4 3" />
          <line x1="435" y1="110" x2="515" y2="110" stroke="#41403C" strokeWidth="2" strokeDasharray="4 3" />
          <line x1="685" y1="110" x2="765" y2="110" stroke="#41403C" strokeWidth="2" strokeDasharray="4 3" />

          {/* Animated Data Packets (Active when playing) */}
          {isPlaying && (
            <>
              {/* Packet 1: ESP32 to Firebase */}
              <g>
                <circle cx="185" cy="110" r="7" fill="#9DB7A5" opacity="0.3">
                  <animate attributeName="cx" values="185; 265" dur="2.4s" repeatCount="indefinite" />
                </circle>
                <circle cx="185" cy="110" r="3.5" fill="url(#kmPacketGlow)">
                  <animate attributeName="cx" values="185; 265" dur="2.4s" repeatCount="indefinite" />
                </circle>
              </g>

              {/* Packet 2: Firebase/FastAPI to ML Engine */}
              <g>
                <circle cx="435" cy="110" r="7" fill="#9DB7A5" opacity="0.3">
                  <animate attributeName="cx" values="435; 515" dur="2.4s" begin="0.8s" repeatCount="indefinite" />
                </circle>
                <circle cx="435" cy="110" r="3.5" fill="url(#kmPacketGlow)">
                  <animate attributeName="cx" values="435; 515" dur="2.4s" begin="0.8s" repeatCount="indefinite" />
                </circle>
              </g>

              {/* Packet 3: ML/Rules & RAG to Advisory App */}
              <g>
                <circle cx="685" cy="110" r="7" fill="#9DB7A5" opacity="0.3">
                  <animate attributeName="cx" values="685; 765" dur="2.4s" begin="1.6s" repeatCount="indefinite" />
                </circle>
                <circle cx="685" cy="110" r="3.5" fill="url(#kmPacketGlow)">
                  <animate attributeName="cx" values="685; 765" dur="2.4s" begin="1.6s" repeatCount="indefinite" />
                </circle>
              </g>
            </>
          )}

          {/* ========================================================= */}
          {/* STATION 1: ESP32 Field Sensor Ingestion */}
          {/* ========================================================= */}
          <g transform="translate(20, 20)">
            <rect
              x="0"
              y="0"
              width="165"
              height="180"
              rx="12"
              fill="#252525"
              stroke="#41403C"
              strokeWidth="1.5"
            />
            <path d="M 0 12 Q 0 0 12 0 L 153 0 Q 165 0 165 12 L 165 34 L 0 34 Z" fill="#292929" />
            <text x="14" y="22" fill="#9DB7A5" fontSize="10" fontFamily="monospace" fontWeight="bold">
              01 // ESP32 FIELD SENSING
            </text>
            <circle cx="150" cy="17" r="3.5" fill="#9DB7A5" />

            {/* Illustrative Telemetry Readout */}
            <g transform="translate(14, 46)">
              <text x="0" y="0" fill="#9DB7A5" fontSize="8" fontFamily="monospace" fontWeight="bold">
                [SIMULATED READINGS]
              </text>
              <text x="0" y="14" fill="#B8B3AA" fontSize="8.5" fontFamily="monospace">SOIL MOISTURE</text>
              <text x="0" y="29" fill="#F4F1EA" fontSize="13" fontFamily="monospace" fontWeight="bold">28%</text>
              <text x="38" y="29" fill="#9DB7A5" fontSize="8.5" fontFamily="monospace">(Threshold 35%)</text>
              <rect x="0" y="36" width="137" height="4" rx="2" fill="#303030" />
              <rect x="0" y="36" width="38" height="4" rx="2" fill="#9DB7A5" />
            </g>

            <g transform="translate(14, 98)">
              <text x="0" y="0" fill="#B8B3AA" fontSize="8.5" fontFamily="monospace">TEMP &amp; HUMIDITY</text>
              <text x="0" y="14" fill="#F4F1EA" fontSize="10.5" fontFamily="monospace">31.4°C · 54% RH (Demo)</text>
            </g>

            <g transform="translate(14, 134)">
              <rect x="0" y="0" width="137" height="26" rx="6" fill="#202020" stroke="#41403C" strokeWidth="1" />
              <text x="8" y="17" fill="#9DB7A5" fontSize="9" fontFamily="monospace">
                Wi-Fi Sync → Firebase
              </text>
            </g>
          </g>

          {/* ========================================================= */}
          {/* STATION 2: Firebase Realtime DB & FastAPI Backend */}
          {/* ========================================================= */}
          <g transform="translate(265, 20)">
            <rect
              x="0"
              y="0"
              width="170"
              height="180"
              rx="12"
              fill="#252525"
              stroke="#41403C"
              strokeWidth="1.5"
            />
            <path d="M 0 12 Q 0 0 12 0 L 158 0 Q 170 0 170 12 L 170 34 L 0 34 Z" fill="#292929" />
            <text x="14" y="22" fill="#9DB7A5" fontSize="10" fontFamily="monospace" fontWeight="bold">
              02 // FIREBASE &amp; FASTAPI
            </text>
            <circle cx="155" cy="17" r="3.5" fill="#9DB7A5" />

            <g transform="translate(14, 46)">
              <text x="0" y="0" fill="#B8B3AA" fontSize="8.5" fontFamily="monospace">FIREBASE REALTIME DB</text>
              <text x="0" y="14" fill="#F4F1EA" fontSize="10.5" fontFamily="monospace" fontWeight="bold">Sensor Store &amp; Sync</text>
              <text x="0" y="26" fill="#9DB7A5" fontSize="8" fontFamily="monospace">Bi-directional State</text>
            </g>

            <g transform="translate(14, 90)">
              <text x="0" y="0" fill="#B8B3AA" fontSize="8.5" fontFamily="monospace">OPENWEATHER API</text>
              <text x="0" y="12" fill="#9DB7A5" fontSize="7.5" fontFamily="monospace" fontWeight="bold">
                [SIMULATED FORECAST]
              </text>
              <text x="0" y="26" fill="#F4F1EA" fontSize="10.5" fontFamily="monospace">
                Rain Prob: 12% (Dry 48h)
              </text>
            </g>

            <g transform="translate(14, 134)">
              <rect x="0" y="0" width="142" height="26" rx="6" fill="#202020" stroke="#41403C" strokeWidth="1" />
              <text x="8" y="17" fill="#9DB7A5" fontSize="9" fontFamily="monospace">
                FastAPI Modular Router
              </text>
            </g>
          </g>

          {/* ========================================================= */}
          {/* STATION 3: Scikit-learn ML & Deterministic Rules */}
          {/* ========================================================= */}
          <g transform="translate(515, 20)">
            <rect
              x="0"
              y="0"
              width="170"
              height="180"
              rx="12"
              fill="#252525"
              stroke="#41403C"
              strokeWidth="1.5"
            />
            <path d="M 0 12 Q 0 0 12 0 L 158 0 Q 170 0 170 12 L 170 34 L 0 34 Z" fill="#292929" />
            <text x="14" y="22" fill="#9DB7A5" fontSize="10" fontFamily="monospace" fontWeight="bold">
              03 // ML &amp; RULE ENGINE
            </text>
            <circle cx="155" cy="17" r="3.5" fill="#9DB7A5" />

            <g transform="translate(14, 46)">
              <text x="0" y="0" fill="#B8B3AA" fontSize="8.5" fontFamily="monospace">SCIKIT-LEARN ML MODEL</text>
              <text x="0" y="14" fill="#F4F1EA" fontSize="10.5" fontFamily="monospace" fontWeight="bold">Forecasts Threshold</text>
              <text x="0" y="26" fill="#B8B3AA" fontSize="8" fontFamily="monospace">9 Supported Crop Types</text>
            </g>

            <g transform="translate(14, 88)">
              <text x="0" y="0" fill="#B8B3AA" fontSize="8.5" fontFamily="monospace">DETERMINISTIC RULES</text>
              <text x="0" y="12" fill="#9DB7A5" fontSize="7.5" fontFamily="monospace" fontWeight="bold">
                [SIMULATED DECISION]
              </text>
              <text x="0" y="26" fill="#9DB7A5" fontSize="10.5" fontFamily="monospace" fontWeight="bold">
                IRRIGATE: YES
              </text>
              <text x="0" y="38" fill="#B8B3AA" fontSize="8" fontFamily="monospace">
                Moisture &lt; Target Deficit
              </text>
            </g>

            <g transform="translate(14, 134)">
              <rect x="0" y="0" width="142" height="26" rx="6" fill="#202020" stroke="#41403C" strokeWidth="1" />
              <text x="8" y="17" fill="#9DB7A5" fontSize="9" fontFamily="monospace">
                FastEmbed RAG Search
              </text>
            </g>
          </g>

          {/* ========================================================= */}
          {/* STATION 4: Groq Llama 3.1 & React/Capacitor App */}
          {/* ========================================================= */}
          <g transform="translate(765, 20)">
            <rect
              x="0"
              y="0"
              width="135"
              height="180"
              rx="12"
              fill="#252525"
              stroke="#9DB7A5"
              strokeWidth="1.5"
            />
            <path d="M 0 12 Q 0 0 12 0 L 123 0 Q 135 0 135 12 L 135 34 L 0 34 Z" fill="#303030" />
            <text x="12" y="22" fill="#9DB7A5" fontSize="10" fontFamily="monospace" fontWeight="bold">
              04 // ADVISORY APP
            </text>
            <circle cx="121" cy="17" r="3.5" fill="#9DB7A5" />

            {/* AI Explanation & Mobile Advisory Display */}
            <g transform="translate(12, 46)">
              <text x="0" y="0" fill="#B8B3AA" fontSize="8.5" fontFamily="monospace">GROQ + LLAMA 3.1</text>
              <text x="0" y="13" fill="#9DB7A5" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
                Natural Language
              </text>
              <text x="0" y="25" fill="#B8B3AA" fontSize="8" fontFamily="monospace">
                Reasoning Explanation
              </text>
            </g>

            <g transform="translate(10, 88)">
              <rect x="0" y="0" width="115" height="40" rx="6" fill="#202020" stroke="#41403C" strokeWidth="1" />
              <text x="8" y="13" fill="#9DB7A5" fontSize="7.5" fontFamily="monospace" fontWeight="bold">
                [DEMO ADVISORY]
              </text>
              <text x="8" y="24" fill="#B8B3AA" fontSize="7.5" fontFamily="monospace">
                FARM RECOMMENDATION
              </text>
              <text x="8" y="35" fill="#F4F1EA" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
                Watering Needed
              </text>
            </g>

            <g transform="translate(10, 138)">
              <rect x="0" y="0" width="115" height="24" rx="6" fill="#202020" stroke="#9DB7A5" strokeWidth="1" />
              <text x="57" y="16" textAnchor="middle" fill="#9DB7A5" fontSize="8.5" fontFamily="monospace">
                React + Capacitor
              </text>
            </g>
          </g>
        </svg>
      </div>

      {/* Verified Architecture Specification Strip */}
      <div className="space-y-1.5 pt-1 border-t border-[#41403C]/60">
        <div className="flex items-center justify-between text-[10px] font-mono tracking-wider">
          <span className="text-[#9DB7A5] font-semibold uppercase">VERIFIED ARCHITECTURE SPECIFICATIONS</span>
          <span className="text-[#B8B3AA]/50 text-[9px] uppercase hidden sm:inline">Engineered Capabilities</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono">
          <div className="p-3 rounded-xl bg-[#202020] border border-[#41403C]">
            <span className="text-[#B8B3AA]/70 block text-[10px] uppercase">SENSOR PROTOCOL</span>
            <span className="text-[#F4F1EA] font-semibold mt-0.5 block truncate">ESP32 Wi-Fi Sync</span>
          </div>
          <div className="p-3 rounded-xl bg-[#202020] border border-[#41403C]">
            <span className="text-[#B8B3AA]/70 block text-[10px] uppercase">CLOUD DATABASE</span>
            <span className="text-[#9DB7A5] font-semibold mt-0.5 block truncate">Firebase Realtime DB</span>
          </div>
          <div className="p-3 rounded-xl bg-[#202020] border border-[#41403C]">
            <span className="text-[#B8B3AA]/70 block text-[10px] uppercase">DECISION ENGINE</span>
            <span className="text-[#F4F1EA] font-semibold mt-0.5 block truncate">Crop Rules + ML Forecast</span>
          </div>
          <div className="p-3 rounded-xl bg-[#202020] border border-[#41403C]">
            <span className="text-[#B8B3AA]/70 block text-[10px] uppercase">EXPLAINABLE AI</span>
            <span className="text-[#9DB7A5] font-semibold mt-0.5 block truncate">RAG + Groq Llama 3.1</span>
          </div>
        </div>
      </div>

      {/* Explicit Simulation Disclaimer */}
      <div className="pt-2 text-[11px] font-mono text-[#B8B3AA]/60 flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#9DB7A5]/60" />
        <span>Demonstration notice: Soil moisture (28%), temperature, weather forecast (12% rain), and irrigation decision are simulated outputs for illustrative system demonstration.</span>
      </div>
    </div>
  );
};

/**
 * --------------------------------------------------------------------------
 * 2. PRADARSHAK AI SHOWCASE VISUAL
 * Verified Architecture:
 * - Express.js backend + PostgreSQL with PostGIS extension
 * - ST_DWithin & ST_Distance spatial querying within 150 km radius
 * - Geocoding via curated Indian city dictionary with OpenStreetMap Nominatim fallback
 * - Channel partner health filtering (npa_percent <= 7.0%, fund_availability_status)
 * - Deterministic multi-criteria scheme ranking engine (income limits, loan caps, gender rules)
 * - Moratorium-aware financial calculations
 * --------------------------------------------------------------------------
 */
const PradarshakShowcase: React.FC<ShowcaseProps> = ({ isPlaying, onTogglePlay }) => {
  return (
    <div className="tech-card rounded-2xl p-5 sm:p-7 bg-[#252525] border border-[#41403C] hover:border-[#9DB7A5]/40 transition-all duration-300 relative overflow-hidden shadow-lg space-y-6">
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#9DB7A5]/[0.03] blur-3xl pointer-events-none" />

      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#41403C]/60 pb-4 relative z-10">
        <div className="space-y-1">
          <div className="flex items-center gap-2 font-mono text-xs text-[#9DB7A5] font-semibold tracking-wider">
            <Compass className="w-4 h-4 text-[#9DB7A5]" />
            <span>02 // GEOSPATIAL POSTGIS RADAR &amp; SCHEME SCORING</span>
          </div>
          <h4 className="text-lg sm:text-xl font-bold text-[#F4F1EA] tracking-tight">
            PostGIS 150km Radius Search &amp; Deterministic Scheme Matching
          </h4>
        </div>

        {/* Status Pill & Play/Pause Control */}
        <div className="flex items-center gap-2 self-start sm:self-auto shrink-0 font-mono text-xs">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#202020] border border-[#41403C] text-[#B8B3AA]">
            <span
              className={`w-2 h-2 rounded-full ${
                isPlaying ? 'bg-[#9DB7A5] shadow-[0_0_8px_#9DB7A5] animate-pulse' : 'bg-[#41403C]'
              }`}
            />
            <span>{isPlaying ? '150km Scope Active' : 'Radar Paused'}</span>
          </span>

          <button
            type="button"
            onClick={onTogglePlay}
            className="p-1.5 rounded-lg bg-[#292929] border border-[#41403C] hover:border-[#9DB7A5]/40 text-[#B8B3AA] hover:text-[#F4F1EA] transition-colors cursor-pointer"
            title={isPlaying ? 'Pause radar' : 'Resume radar'}
            aria-label={isPlaying ? 'Pause radar' : 'Resume radar'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Main SVG Visualization Canvas */}
      <div className="w-full relative z-10 overflow-hidden bg-[#202020]/70 rounded-xl border border-[#41403C]/70 p-3 sm:p-5">
        <svg
          viewBox="0 0 920 220"
          className="w-full h-auto min-h-[170px] select-none block"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="radarSweepGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#9DB7A5" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#9DB7A5" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* ========================================================= */}
          {/* SECTION 1: Geospatial 150km PostGIS Scope */}
          {/* ========================================================= */}
          <g transform="translate(20, 20)">
            <rect
              x="0"
              y="0"
              width="450"
              height="180"
              rx="12"
              fill="#252525"
              stroke="#41403C"
              strokeWidth="1.5"
            />
            <path d="M 0 12 Q 0 0 12 0 L 438 0 Q 450 0 450 12 L 450 34 L 0 34 Z" fill="#292929" />
            <text x="14" y="22" fill="#9DB7A5" fontSize="10" fontFamily="monospace" fontWeight="bold">
              01 // POSTGIS SPATIAL SEARCH (ST_DWithin)
            </text>
            <text x="436" y="22" textAnchor="end" fill="#9DB7A5" fontSize="9" fontFamily="monospace">
              RADIUS &lt;= 150KM (VERIFIED)
            </text>

            {/* Radar Scope Origin: cx=225, cy=105 */}
            {/* Range Rings representing 50km, 100km, 150km boundaries */}
            <circle cx="225" cy="105" r="70" stroke="#9DB7A5" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.65" />
            <circle cx="225" cy="105" r="48" stroke="#41403C" strokeWidth="1" strokeDasharray="2 2" />
            <circle cx="225" cy="105" r="24" stroke="#41403C" strokeWidth="1" />

            {/* Scope Crosshairs */}
            <line x1="85" y1="105" x2="365" y2="105" stroke="#41403C" strokeWidth="1" opacity="0.6" />
            <line x1="225" y1="35" x2="225" y2="175" stroke="#41403C" strokeWidth="1" opacity="0.6" />

            {/* Radar Range Labels */}
            <text x="298" y="102" fill="#B8B3AA" fontSize="7.5" fontFamily="monospace">150km</text>
            <text x="275" y="102" fill="#B8B3AA" fontSize="7.5" fontFamily="monospace">100km</text>
            <text x="251" y="102" fill="#B8B3AA" fontSize="7.5" fontFamily="monospace">50km</text>

            {/* Radar Sweep Arm (Active when playing, stationary guide when paused) */}
            {isPlaying ? (
              <g>
                <circle cx="225" cy="105" r="70" fill="url(#radarSweepGradient)" opacity="0.25">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 225 105"
                    to="360 225 105"
                    dur="3.2s"
                    repeatCount="indefinite"
                  />
                </circle>
                <line x1="225" y1="105" x2="295" y2="105" stroke="#9DB7A5" strokeWidth="2" opacity="0.9">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 225 105"
                    to="360 225 105"
                    dur="3.2s"
                    repeatCount="indefinite"
                  />
                </line>
              </g>
            ) : (
              <line x1="225" y1="105" x2="274" y2="56" stroke="#9DB7A5" strokeWidth="1.5" opacity="0.35" strokeDasharray="3 3" />
            )}

            {/* Central Geocoded User Point (Pune City Coords [18.5204° N, 73.8567° E]) */}
            <g transform="translate(225, 105)">
              <circle cx="0" cy="0" r="5" fill="#9DB7A5" />
              <circle cx="0" cy="0" r="2" fill="#202020" />
              {isPlaying && (
                <circle cx="0" cy="0" r="5" fill="none" stroke="#9DB7A5" strokeWidth="1.5" opacity="0.9">
                  <animate attributeName="r" values="5; 18; 5" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.9; 0; 0.9" dur="2s" repeatCount="indefinite" />
                </circle>
              )}
              <text x="8" y="3" fill="#F4F1EA" fontSize="7.5" fontFamily="monospace" fontWeight="bold">USER [PUNE]</text>
            </g>

            {/* Illustrative Demo Channel Partner Pin 1 (Sample: 12.4 km) */}
            <g transform="translate(275, 85)">
              <circle cx="0" cy="0" r="4.5" fill="#9DB7A5" />
              {isPlaying && (
                <circle cx="0" cy="0" r="4.5" fill="none" stroke="#9DB7A5" strokeWidth="1.2" opacity="0.8">
                  <animate attributeName="r" values="4.5; 12; 4.5" dur="1.8s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.8; 0; 0.8" dur="1.8s" repeatCount="indefinite" />
                </circle>
              )}
              <line x1="0" y1="0" x2="-50" y2="20" stroke="#9DB7A5" strokeWidth="1" strokeDasharray="2 2" opacity="0.7" />
              <rect x="6" y="-14" width="134" height="15" rx="3" fill="#202020" stroke="#9DB7A5" strokeWidth="1" />
              <text x="10" y="-3" fill="#9DB7A5" fontSize="7" fontFamily="monospace" fontWeight="bold">
                DEMO PIN: 12.4km (NPA &lt; 7%)
              </text>
            </g>

            {/* Illustrative Demo Channel Partner Pin 2 (Sample: 45.2 km) */}
            <g transform="translate(160, 80)">
              <circle cx="0" cy="0" r="3.5" fill="#B8B3AA" />
              <line x1="0" y1="0" x2="65" y2="25" stroke="#41403C" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
              <rect x="-105" y="-12" width="100" height="15" rx="3" fill="#202020" stroke="#41403C" strokeWidth="1" />
              <text x="-100" y="-1" fill="#B8B3AA" fontSize="7" fontFamily="monospace">
                DEMO PIN: 45.2km
              </text>
            </g>

            {/* Illustrative Demo Channel Partner Pin 3 (Sample: 95.0 km) */}
            <g transform="translate(265, 155)">
              <circle cx="0" cy="0" r="3.5" fill="#B8B3AA" />
              <line x1="0" y1="0" x2="-40" y2="-50" stroke="#41403C" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
              <rect x="6" y="-6" width="100" height="15" rx="3" fill="#202020" stroke="#41403C" strokeWidth="1" />
              <text x="10" y="5" fill="#B8B3AA" fontSize="7" fontFamily="monospace">
                DEMO PIN: 95.0km
              </text>
            </g>
          </g>

          {/* Connection Channel: Radar to Scheme Scoring Engine */}
          <path d="M 470 110 L 520 110" stroke="#41403C" strokeWidth="2" strokeDasharray="4 3" />
          {isPlaying && (
            <circle cx="470" cy="110" r="4" fill="#9DB7A5">
              <animate attributeName="cx" values="470; 520" dur="1.5s" repeatCount="indefinite" />
            </circle>
          )}

          {/* ========================================================= */}
          {/* SECTION 2: Multi-Criteria Scheme Scoring & Rules Terminal */}
          {/* ========================================================= */}
          <g transform="translate(520, 20)">
            <rect
              x="0"
              y="0"
              width="380"
              height="180"
              rx="12"
              fill="#252525"
              stroke="#41403C"
              strokeWidth="1.5"
            />
            <path d="M 0 12 Q 0 0 12 0 L 368 0 Q 380 0 380 12 L 380 34 L 0 34 Z" fill="#292929" />
            <text x="14" y="22" fill="#9DB7A5" fontSize="10" fontFamily="monospace" fontWeight="bold">
              02 // MULTI-CRITERIA SCHEME MATCHING
            </text>
            <text x="366" y="22" textAnchor="end" fill="#9DB7A5" fontSize="9" fontFamily="monospace">
              DETERMINISTIC RULES
            </text>

            {/* Criteria Breakdown based on SchemeEngine.ts */}
            <g transform="translate(16, 46)">
              {/* Factor 1: Purpose & Activity Match */}
              <g transform="translate(0, 0)">
                <text x="0" y="10" fill="#B8B3AA" fontSize="8.5" fontFamily="monospace">
                  DEMO PROFILE: PURPOSE (+100 PTS)
                </text>
                <text x="348" y="10" textAnchor="end" fill="#F4F1EA" fontSize="8.5" fontFamily="monospace" fontWeight="bold">
                  QUALIFIED
                </text>
                <rect x="0" y="15" width="348" height="4" rx="2" fill="#303030" />
                <rect x="0" y="15" width="335" height="4" rx="2" fill="#9DB7A5" />
              </g>

              {/* Factor 2: Income Ceiling Check */}
              <g transform="translate(0, 28)">
                <text x="0" y="10" fill="#B8B3AA" fontSize="8.5" fontFamily="monospace">
                  DEMO PROFILE: INCOME (≤ ₹5.00L)
                </text>
                <text x="348" y="10" textAnchor="end" fill="#9DB7A5" fontSize="8.5" fontFamily="monospace" fontWeight="bold">
                  VERIFIED
                </text>
                <rect x="0" y="15" width="348" height="4" rx="2" fill="#303030" />
                <rect x="0" y="15" width="348" height="4" rx="2" fill="#9DB7A5" />
              </g>

              {/* Factor 3: Loan Ceiling & Gender Safeguards */}
              <g transform="translate(0, 56)">
                <text x="0" y="10" fill="#B8B3AA" fontSize="8.5" fontFamily="monospace">
                  DEMO PROFILE: CEILING &amp; GENDER
                </text>
                <text x="348" y="10" textAnchor="end" fill="#9DB7A5" fontSize="8.5" fontFamily="monospace" fontWeight="bold">
                  APPLICABLE
                </text>
                <rect x="0" y="15" width="348" height="4" rx="2" fill="#303030" />
                <rect x="0" y="15" width="320" height="4" rx="2" fill="#9DB7A5" />
              </g>

              {/* Scheme Classification Result Callout (Clearly tagged with Demo labels) */}
              <g transform="translate(0, 82)">
                <rect x="0" y="0" width="348" height="38" rx="6" fill="#202020" stroke="#9DB7A5" strokeWidth="1" />
                <g transform="translate(10, 14)">
                  <text x="0" y="0" fill="#9DB7A5" fontSize="7.5" fontFamily="monospace" fontWeight="bold">
                    [DEMO RECOMMENDATION]
                  </text>
                  <text x="328" y="0" textAnchor="end" fill="#9DB7A5" fontSize="7.5" fontFamily="monospace" fontWeight="bold">
                    [DEMO STATUS]
                  </text>
                </g>
                <g transform="translate(10, 29)">
                  <text x="0" y="0" fill="#F4F1EA" fontSize="9" fontFamily="monospace" fontWeight="bold">
                    NSFDC CONCESSIONAL SCHEME
                  </text>
                  <text x="328" y="0" textAnchor="end" fill="#9DB7A5" fontSize="10" fontFamily="monospace" fontWeight="bold">
                    ELIGIBLE
                  </text>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>

      {/* Verified Architecture Specification Strip */}
      <div className="space-y-1.5 pt-1 border-t border-[#41403C]/60">
        <div className="flex items-center justify-between text-[10px] font-mono tracking-wider">
          <span className="text-[#9DB7A5] font-semibold uppercase">VERIFIED ARCHITECTURE SPECIFICATIONS</span>
          <span className="text-[#B8B3AA]/50 text-[9px] uppercase hidden sm:inline">Engineered Capabilities</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono">
          <div className="p-3 rounded-xl bg-[#202020] border border-[#41403C]">
            <span className="text-[#B8B3AA]/70 block text-[10px] uppercase">POSTGIS FUNCTION</span>
            <span className="text-[#F4F1EA] font-semibold mt-0.5 block truncate">ST_DWithin &amp; ST_Distance</span>
          </div>
          <div className="p-3 rounded-xl bg-[#202020] border border-[#41403C]">
            <span className="text-[#B8B3AA]/70 block text-[10px] uppercase">SEARCH BOUND</span>
            <span className="text-[#9DB7A5] font-semibold mt-0.5 block">150km Radius Filter</span>
          </div>
          <div className="p-3 rounded-xl bg-[#202020] border border-[#41403C]">
            <span className="text-[#B8B3AA]/70 block text-[10px] uppercase">PARTNER HEALTH</span>
            <span className="text-[#F4F1EA] font-semibold mt-0.5 block truncate">NPA &lt;= 7.0% Filter</span>
          </div>
          <div className="p-3 rounded-xl bg-[#202020] border border-[#41403C]">
            <span className="text-[#B8B3AA]/70 block text-[10px] uppercase">SCORING RULES</span>
            <span className="text-[#9DB7A5] font-semibold mt-0.5 block truncate">Purpose + Income + Ceiling</span>
          </div>
        </div>
      </div>

      {/* Explicit Simulation Disclaimer */}
      <div className="pt-2 text-[11px] font-mono text-[#B8B3AA]/60 flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#9DB7A5]/60" />
        <span>Demonstration notice: Channel partner pins (12.4km, 45.2km, 95.0km), profile criteria evaluation, and scheme recommendation (NSFDC / Eligible) are illustrative demo data for demonstrating PostGIS spatial routing and multi-criteria scoring.</span>
      </div>
    </div>
  );
};
