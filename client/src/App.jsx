import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  Search, 
  Flame, 
  Waves, 
  Wind, 
  Sparkles, 
  Scale, 
  ArrowUpRight, 
  Clock, 
  Database,
  Shuffle
} from 'lucide-react';
import ParticleBackground from './components/ParticleBackground';
import Soundscape from './components/Soundscape';
import CreatureModal from './components/CreatureModal';
import CreatureCompare from './components/CreatureCompare';

export default function App() {
  const [realm, setRealm] = useState('land'); // 'land', 'ocean', 'air'
  const [era, setEra] = useState('all'); // 'all', 'Paleozoic', 'Mesozoic', 'Cenozoic'
  const [searchQuery, setSearchQuery] = useState('');
  const [creatures, setCreatures] = useState([]);
  const [allCreatures, setAllCreatures] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedCreatureId, setSelectedCreatureId] = useState(null);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  // Fetch creatures from backend
  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams();
    if (realm) params.append('realm', realm);
    if (era !== 'all') params.append('era', era);
    if (searchQuery.trim()) params.append('search', searchQuery.trim());

    fetch(`/api/creatures?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCreatures(data.data);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [realm, era, searchQuery]);

  // Fetch all creatures for compare and global stats
  useEffect(() => {
    fetch('/api/creatures')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setAllCreatures(data.data);
      });

    fetch('/api/stats')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setStats(data.data);
      });
  }, []);

  const handleRandomDiscovery = () => {
    fetch('/api/random')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          setRealm(data.data.realm);
          setSelectedCreatureId(data.data.id);
        }
      });
  };

  // Dynamic Theme Visuals
  const themeStyles = {
    land: {
      gradient: 'from-amber-950/40 via-stone-950/80 to-black',
      glow: 'rgba(249, 115, 22, 0.15)',
      activeBtn: 'bg-orange-500/20 text-orange-400 border-orange-500/50 shadow-orange-950/50 shadow-lg',
      cardHover: 'hover:border-orange-500/40 hover:shadow-orange-950/40',
      badge: 'border-orange-500/30 text-orange-400 bg-orange-950/30',
      heroSubtitle: 'PANGAEA • VOLCANIC ASH • TERRESTRIAL TITANS',
      heroDesc: 'Where bone-crushing predators, colossal sauropods, and giant arthropods walked across prehistoric supercontinents.',
      tag: 'TERRA FORMATION',
    },
    ocean: {
      gradient: 'from-cyan-950/40 via-slate-950/80 to-black',
      glow: 'rgba(6, 182, 212, 0.15)',
      activeBtn: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/50 shadow-cyan-950/50 shadow-lg',
      cardHover: 'hover:border-cyan-500/40 hover:shadow-cyan-950/40',
      badge: 'border-cyan-500/30 text-cyan-400 bg-cyan-950/30',
      heroSubtitle: 'THE TETHYS TRENCHES • BIOLUMINESCENT DEPTHS • LEVIATHANS',
      heroDesc: 'Descend into primeval oceans where armored placoderms, marine squamates, and colossal megatooth sharks hunted in absolute silence.',
      tag: 'ABYSSAL DEEP',
    },
    air: {
      gradient: 'from-purple-950/40 via-zinc-950/80 to-black',
      glow: 'rgba(168, 85, 247, 0.15)',
      activeBtn: 'bg-purple-500/20 text-purple-400 border-purple-500/50 shadow-purple-950/50 shadow-lg',
      cardHover: 'hover:border-purple-500/40 hover:shadow-purple-950/40',
      badge: 'border-purple-500/30 text-purple-400 bg-purple-950/30',
      heroSubtitle: 'PRIMORDIAL STRATOSPHERE • GLIDERS • AZHDARCHID SOVEREIGNS',
      heroDesc: 'Soar through oxygen-rich ancient skies with giraffe-sized pterosaurs, giant teratorns, and the earliest transitional feathered innovators.',
      tag: 'AETHER EXPANSE',
    },
  }[realm];

  return (
    <div className={`min-h-screen text-slate-100 bg-black font-sans relative selection:bg-white/20 selection:text-white transition-colors duration-700`}>
      {/* Ambient Canvas Particles */}
      <ParticleBackground realm={realm} />

      {/* Atmospheric Radial Glow */}
      <div 
        className="fixed inset-0 pointer-events-none transition-all duration-1000 z-0"
        style={{
          background: `radial-gradient(ellipse at 50% 15%, ${themeStyles.glow} 0%, transparent 65%)`
        }}
      />

      {/* Floating Minimal Navigation Bar */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-black/60 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          
          {/* Logo & Deep Time Marker */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-serif font-black text-sm text-white">
              &Omega;
            </div>
            <div>
              <span className="font-serif font-bold tracking-widest text-sm sm:text-base text-white">
                PRIMORDIA
              </span>
              <span className="hidden sm:inline-block ml-2 text-[10px] font-mono uppercase tracking-widest text-zinc-500 border-l border-zinc-800 pl-2">
                541 MYA &rarr; 0.01 MYA
              </span>
            </div>
          </div>

          {/* Minimal 3-Realm Switcher */}
          <div className="flex items-center p-1 rounded-full bg-zinc-900/80 border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setRealm('land')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                realm === 'land'
                  ? themeStyles.activeBtn
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-orange-400" />
              <span>LAND</span>
            </button>

            <button
              onClick={() => setRealm('ocean')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                realm === 'ocean'
                  ? themeStyles.activeBtn
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Waves className="w-3.5 h-3.5 text-cyan-400" />
              <span>OCEAN</span>
            </button>

            <button
              onClick={() => setRealm('air')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                realm === 'air'
                  ? themeStyles.activeBtn
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Wind className="w-3.5 h-3.5 text-purple-400" />
              <span>AIR</span>
            </button>
          </div>

          {/* Ambient Soundscape & Quick Discovery */}
          <div className="flex items-center gap-2">
            <Soundscape realm={realm} />

            <button
              onClick={handleRandomDiscovery}
              title="Summon Random Primordial Creature"
              className="p-2 rounded-full border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
            >
              <Shuffle className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Vast Primordial Hero Section */}
      <section className="relative z-10 pt-16 sm:pt-24 pb-12 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-mono tracking-widest uppercase border bg-black/40 backdrop-blur-md mb-6 transition-all duration-500 border-white/10 text-zinc-400">
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span>{themeStyles.tag}</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight text-white uppercase leading-[1.08] mb-6">
          {realm === 'land' && (
            <>
              Monoliths of <span className="bg-gradient-to-r from-orange-400 to-amber-200 bg-clip-text text-transparent">Pangaea</span>
            </>
          )}
          {realm === 'ocean' && (
            <>
              Leviathans of <span className="bg-gradient-to-r from-cyan-400 to-teal-200 bg-clip-text text-transparent">The Abyss</span>
            </>
          )}
          {realm === 'air' && (
            <>
              Sovereigns of <span className="bg-gradient-to-r from-purple-400 to-pink-200 bg-clip-text text-transparent">The Aether</span>
            </>
          )}
        </h1>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-zinc-400 font-sans font-normal leading-relaxed mb-8">
          {themeStyles.heroDesc}
        </p>

        {/* Minimal Control Bar: Search & Era Pills & Compare */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-2xl mx-auto">
          {/* Search Box */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search titan, diet, fossil site..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 font-sans backdrop-blur-md shadow-inner"
            />
          </div>

          {/* Era Filter Selector */}
          <div className="flex items-center gap-1 p-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-mono">
            {['all', 'Paleozoic', 'Mesozoic', 'Cenozoic'].map((e) => (
              <button
                key={e}
                onClick={() => setEra(e)}
                className={`px-3 py-1.5 rounded-full capitalize transition-colors ${
                  era === e
                    ? 'bg-zinc-800 text-white font-medium border border-zinc-700'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {e === 'all' ? 'All Eras' : e}
              </button>
            ))}
          </div>

          {/* Compare Button */}
          <button
            onClick={() => setIsCompareOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
          >
            <Scale className="w-3.5 h-3.5 text-amber-400" />
            <span>Compare Titans</span>
          </button>
        </div>
      </section>

      {/* Main Creature Grid */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        {loading ? (
          <div className="py-24 text-center">
            <div className="inline-block w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin mb-4" />
            <p className="font-mono text-xs text-zinc-500 tracking-widest uppercase">
              Summoning fossil strata...
            </p>
          </div>
        ) : creatures.length === 0 ? (
          <div className="py-24 text-center max-w-md mx-auto">
            <p className="text-zinc-400 text-base mb-2 font-serif">
              No creatures unearthed in this horizon.
            </p>
            <p className="text-xs text-zinc-600 font-mono mb-4">
              Try clearing your search query or switching geological eras.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setEra('all');
              }}
              className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-xs font-mono text-white hover:bg-zinc-800"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {creatures.map((creature) => (
              <article
                key={creature.id}
                onClick={() => setSelectedCreatureId(creature.id)}
                className={`group relative bg-zinc-950/70 border border-zinc-800/80 rounded-2xl overflow-hidden p-0 flex flex-col transition-all duration-300 cursor-pointer shadow-xl ${themeStyles.cardHover}`}
              >
                {/* Image Wrap */}
                <div className="relative h-56 w-full overflow-hidden bg-zinc-900">
                  <img
                    src={creature.image_url}
                    alt={creature.name}
                    loading="lazy"
                    className="w-full h-full object-cover filter brightness-90 contrast-105 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                  {/* Threat tier pill */}
                  <span className={`absolute top-3 right-3 text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full border backdrop-blur-md ${themeStyles.badge}`}>
                    {creature.threat_tier}
                  </span>

                  {/* Period tag */}
                  <span className="absolute bottom-3 left-3 text-[10px] font-mono text-zinc-300 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
                    {creature.period} • {creature.mya_start} MYA
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-baseline justify-between mb-1">
                      <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-200 transition-colors">
                        {creature.name}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-xs font-serif italic text-zinc-400 mb-3">
                      {creature.scientific_name}
                    </p>
                    <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed mb-4 font-sans">
                      {creature.description}
                    </p>
                  </div>

                  {/* Key Metrics Footnote */}
                  <div className="pt-3 border-t border-zinc-800/80 grid grid-cols-3 gap-2 text-center font-mono text-[11px]">
                    <div className="bg-zinc-900/50 p-1.5 rounded border border-zinc-800/50">
                      <span className="text-zinc-500 block text-[9px]">LENGTH</span>
                      <span className="text-zinc-200 font-bold">{creature.length_m}m</span>
                    </div>
                    <div className="bg-zinc-900/50 p-1.5 rounded border border-zinc-800/50">
                      <span className="text-zinc-500 block text-[9px]">MASS</span>
                      <span className="text-zinc-200 font-bold">
                        {creature.weight_kg >= 1000
                          ? `${(creature.weight_kg / 1000).toFixed(0)}t`
                          : `${creature.weight_kg}kg`}
                      </span>
                    </div>
                    <div className="bg-zinc-900/50 p-1.5 rounded border border-zinc-800/50">
                      <span className="text-zinc-500 block text-[9px]">DIET</span>
                      <span className="text-zinc-200 font-bold truncate block">{creature.diet.split(' ')[0]}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      {/* Footer & Deep Time Metrics */}
      <footer className="relative z-10 border-t border-zinc-900 bg-zinc-950/80 backdrop-blur-md py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-zinc-400">
              <Database className="w-3.5 h-3.5 text-emerald-400" />
              <span>SQLITE PRIMORDIA ENGINE</span>
            </span>
            {stats && (
              <span className="hidden md:inline-block border-l border-zinc-800 pl-4 text-zinc-500">
                {stats.totalCreatures} Specimens cataloged across Land ({stats.realms.land}), Ocean ({stats.realms.ocean}), and Air ({stats.realms.air})
              </span>
            )}
          </div>

          <div>
            Built with modern React, Tailwind CSS, Shadcn UI patterns & SQLite.
          </div>
        </div>
      </footer>

      {/* Specimen Dossier Modal */}
      <CreatureModal
        creatureId={selectedCreatureId}
        onClose={() => setSelectedCreatureId(null)}
        realmTheme={realm}
      />

      {/* Compare Titans Modal */}
      <CreatureCompare
        creatures={allCreatures}
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
      />
    </div>
  );
}
