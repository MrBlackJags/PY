import React, { useState, useEffect, useRef } from 'react';
import { Compass, Eye, Sparkles, MapPin, Maximize2, Wind, Droplets, Thermometer } from 'lucide-react';

export default function SceneryViewer({ scenery, onSelectCreature, realmTheme }) {
  const [activeMoodIndex, setActiveMoodIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeHotspot, setActiveHotspot] = useState(null);
  const containerRef = useRef(null);

  const currentMood = scenery.alternateMoods[activeMoodIndex] || scenery.alternateMoods[0];

  useEffect(() => {
    setActiveMoodIndex(0);
    setActiveHotspot(null);
  }, [scenery.id]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20; // -10px to +10px
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePos({ x, y });
  };

  const getThemeAccent = () => {
    if (realmTheme === 'land') return 'from-orange-500/20 to-amber-500/20 border-orange-500/40 text-orange-300';
    if (realmTheme === 'ocean') return 'from-cyan-500/20 to-blue-500/20 border-cyan-500/40 text-cyan-300';
    return 'from-purple-500/20 to-pink-500/20 border-purple-500/40 text-purple-300';
  };

  const getPillActive = () => {
    if (realmTheme === 'land') return 'bg-orange-500/30 text-orange-200 border-orange-500/50 shadow-orange-950/60';
    if (realmTheme === 'ocean') return 'bg-cyan-500/30 text-cyan-200 border-cyan-500/50 shadow-cyan-950/60';
    return 'bg-purple-500/30 text-purple-200 border-purple-500/50 shadow-purple-950/60';
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto my-8 px-4 sm:px-6">
      {/* Container Frame */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
        className="group relative h-[440px] sm:h-[580px] w-full rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-zinc-950 select-none transition-all duration-700"
      >
        {/* Realistic Scenery Image Layer with Parallax */}
        <div
          className="absolute inset-[-20px] transition-transform duration-300 ease-out will-change-transform"
          style={{
            transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0px) scale(1.05)`,
          }}
        >
          <img
            src={currentMood.image}
            alt={currentMood.name}
            className="w-full h-full object-cover filter brightness-[0.88] contrast-[1.08] saturate-[1.15] transition-opacity duration-1000"
          />
          {/* Natural Vignette & Atmospheric Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
        </div>

        {/* Top Floating Glass HUD */}
        <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-start justify-between z-20 pointer-events-none">
          <div className="pointer-events-auto bg-black/50 backdrop-blur-xl border border-white/10 px-4 py-2.5 rounded-2xl shadow-lg max-w-md">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[11px] font-mono tracking-widest uppercase text-emerald-300 font-semibold">
                HABITAT OBSERVATION PORTAL
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-black text-white tracking-wide">
              {scenery.name}
            </h2>
            <p className="text-xs text-zinc-300 font-sans mt-0.5 line-clamp-1">
              {currentMood.desc}
            </p>
          </div>

          {/* Telemetry Indicator */}
          <div className="hidden md:flex pointer-events-auto items-center gap-2 bg-black/50 backdrop-blur-xl border border-white/10 px-3.5 py-2 rounded-xl text-[11px] font-mono text-zinc-300 shadow-lg">
            <Thermometer className="w-3.5 h-3.5 text-amber-400" />
            <span>{currentMood.atmosphere}</span>
          </div>
        </div>

        {/* Interactive Scenery Hotspots (Creature Territory Markers) */}
        {scenery.hotspots.map((spot) => {
          const isSelected = activeHotspot === spot.id;
          return (
            <div
              key={spot.id}
              style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onSelectCreature(spot.creatureId);
              }}
              className="absolute z-30 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            >
              <div
                onMouseEnter={() => setActiveHotspot(spot.id)}
                onMouseLeave={() => setActiveHotspot(null)}
                className="group/spot relative flex items-center justify-center transition-transform hover:scale-125 focus:outline-none"
                role="button"
                tabIndex={0}
                aria-label={`Explore ${spot.creatureName}`}
              >
                {/* Ping rings */}
                <span className="absolute w-12 h-12 rounded-full bg-white/20 animate-ping opacity-60 pointer-events-none" />
                <span className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/85 backdrop-blur-md border border-white/40 shadow-xl flex items-center justify-center text-sm transition-all group-hover/spot:border-amber-400 group-hover/spot:bg-zinc-800">
                  {spot.icon}
                </span>

                {/* Popover Card on Hover/Focus */}
                <div
                  className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 p-3 rounded-xl bg-black/95 backdrop-blur-2xl border border-white/25 shadow-2xl text-left transition-all duration-200 z-40 ${
                    isSelected
                      ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
                      : 'opacity-0 translate-y-2 scale-95 pointer-events-none'
                  }`}
                >
                  <div className="text-[10px] font-mono uppercase tracking-wider text-amber-300 font-semibold mb-0.5">
                    {spot.title}
                  </div>
                  <div className="text-xs font-serif font-bold text-white mb-1">
                    {spot.creatureName}
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400">
                    <span>Click to examine specimen &rarr;</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Bottom Floating Mood Switcher Bar */}
        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row items-center justify-between gap-3 z-20">
          {/* Mood Selector Pills */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-xl">
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 px-2 hidden sm:inline">
              VISTA MOOD:
            </span>
            {scenery.alternateMoods.map((mood, idx) => (
              <button
                key={mood.name}
                onClick={() => setActiveMoodIndex(idx)}
                className={`px-3 py-1.5 rounded-xl text-xs font-sans font-medium transition-all duration-300 border ${
                  activeMoodIndex === idx
                    ? `${getPillActive()} shadow-md`
                    : 'border-transparent text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {mood.name}
              </button>
            ))}
          </div>

          {/* Quick Hotspot Legend */}
          <div className="text-[11px] font-mono text-zinc-300 bg-black/60 backdrop-blur-xl border border-white/10 px-3.5 py-2 rounded-2xl shadow-lg flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
            <span>Interactive Terrain Hotspots Active ({scenery.hotspots.length})</span>
          </div>
        </div>
      </div>
    </div>
  );
}
