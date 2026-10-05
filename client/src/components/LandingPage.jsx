import React, { useState, useEffect } from 'react';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';
import { SCENERIES } from '../data/primordialData';

export default function LandingPage({ onEnter }) {
  const [randomScenery, setRandomScenery] = useState(null);

  useEffect(() => {
    // Collect all realistic scenery vistas across Land, Ocean, and Air
    const allVistas = [
      {
        realm: 'land',
        title: 'Terra Primordia',
        subtitle: 'Pangaean Volcanic Caldera & Conifer Rainforests',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2560&q=95',
        telemetry: 'Atmospheric O₂: 32% • Surface Temp: 26°C • Late Cretaceous'
      },
      {
        realm: 'land',
        title: 'Cretaceous Basalt Rift',
        subtitle: 'Smoldering Geothermal Ridge & Primordial Fern Valleys',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2560&q=95',
        telemetry: 'Atmospheric O₂: 28% • Surface Temp: 34°C • Jurassic'
      },
      {
        realm: 'ocean',
        title: 'The Abyssal Tethys',
        subtitle: 'Prehistoric Sunlit Ocean Trench & Pelagic Drop-off',
        image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=2560&q=95',
        telemetry: 'Pelagic Depth: -350m • Salinity: 36 PSU • Miocene'
      },
      {
        realm: 'ocean',
        title: 'Bioluminescent Abyss',
        subtitle: 'Deep Oceanic Trench & Submarine Tectonic Vents',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=2560&q=95',
        telemetry: 'Pelagic Depth: -1,800m • Hydrostatic Pressure: 180 atm'
      },
      {
        realm: 'air',
        title: 'The Ancient Stratosphere',
        subtitle: 'Golden Cloud Inversion Above Jagged Prehistoric Spires',
        image: 'https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?auto=format&fit=crop&w=2560&q=95',
        telemetry: 'Soaring Altitude: 4,500m • Thermal Updraft: +14 m/s'
      }
    ];

    // Pick 1 realistic scenery at RANDOM
    const picked = allVistas[Math.floor(Math.random() * allVistas.length)];
    setRandomScenery(picked);
  }, []);

  if (!randomScenery) return null;

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden bg-black z-50 flex flex-col justify-between p-6 sm:p-12 select-none">
      {/* Fullscreen Realistic Background Scenery with Subtle Breathing Zoom */}
      <div className="absolute inset-[-30px] overflow-hidden pointer-events-none">
        <img
          src={randomScenery.image}
          alt={randomScenery.title}
          className="w-full h-full object-cover filter brightness-[0.82] contrast-[1.08] saturate-[1.1] transform scale-105 animate-pulse-slow"
        />
        {/* Subtle Primordial Darkness Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      </div>

      {/* Top Bar: Minimal Telemetry (No extra buttons) */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center font-serif font-black text-white shadow-xl">
            &Omega;
          </div>
          <div>
            <div className="text-xs font-serif font-bold tracking-widest text-white uppercase">
              PRIMORDIA
            </div>
            <div className="text-[10px] font-mono text-zinc-400 tracking-wider">
              DEEP TIME ARCHIVE
            </div>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 border border-white/10 backdrop-blur-xl text-[11px] font-mono text-zinc-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{randomScenery.telemetry}</span>
        </div>
      </div>

      {/* Center: Grand Title & Single Minimal Button */}
      <div className="relative z-10 max-w-4xl mx-auto text-center my-auto px-4 py-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-white/15 backdrop-blur-xl text-xs font-mono tracking-widest text-amber-300 uppercase mb-6 shadow-2xl">
          <Sparkles className="w-3.5 h-3.5" />
          <span>RANDOM SECTOR: {randomScenery.title}</span>
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif font-black tracking-widest text-white uppercase leading-none mb-4 drop-shadow-2xl">
          PRIMORDIA
        </h1>

        <p className="text-base sm:text-xl font-serif italic text-zinc-300 max-w-xl mx-auto mb-3 drop-shadow-md">
          {randomScenery.subtitle}
        </p>

        <p className="text-xs sm:text-sm font-sans text-zinc-400 max-w-md mx-auto mb-10 leading-relaxed">
          Embark on a visual journey through 541 million years of Earth's most colossal and catastrophic extinct creatures.
        </p>

        {/* ONE SINGLE PROMINENT BUTTON (NO EXTRA BUTTONS) */}
        <div>
          <button
            onClick={onEnter}
            className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl bg-zinc-950/90 hover:bg-black border border-amber-400/50 hover:border-amber-400 shadow-2xl shadow-amber-950/40 text-amber-300 hover:text-white font-serif font-bold text-sm sm:text-base tracking-wider transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-xl"
          >
            <span>ENTER DISCOVERIES</span>
            <ArrowRight className="w-5 h-5 text-amber-400 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* Bottom Bar: Environmental Footnote */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-500 pt-4 border-t border-white/5">
        <div>
          AUTHENTIC PREHISTORIC HABITAT RECONSTRUCTION
        </div>
        <div className="mt-1 sm:mt-0">
          CLICK ENTER TO ACCESS THE SPECIMEN ARCHIVES
        </div>
      </div>
    </div>
  );
}
