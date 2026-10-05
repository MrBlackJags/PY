import React, { useState, useEffect } from 'react';
import { X, ShieldAlert, Clock, MapPin, Bone, Activity, Send, CheckCircle2 } from 'lucide-react';
import { INITIAL_CREATURES } from '../data/primordialData';

export default function CreatureModal({ creatureId, onClose, realmTheme }) {
  const localMatch = INITIAL_CREATURES.find((c) => c.id === creatureId) || null;
  const [data, setData] = useState(localMatch);
  const [loading, setLoading] = useState(!localMatch);
  const [notes, setNotes] = useState([]);
  const [author, setAuthor] = useState('');
  const [newNote, setNewNote] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!creatureId) return;
    const initial = INITIAL_CREATURES.find((c) => c.id === creatureId) || null;
    setData(initial);
    setLoading(!initial);

    fetch(`/api/creatures/${creatureId}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.success && res.data) {
          setData(res.data);
          setNotes(res.data.notes || []);
        }
      })
      .catch((err) => {
        // Fallback is already loaded
      })
      .finally(() => setLoading(false));
  }, [creatureId]);

  const handleAddNote = async (e) => {
    e.preventDefault();
    if (!author.trim() || !newNote.trim()) return;

    setSubmitting(true);
    try {
      const res = await fetch(`/api/creatures/${creatureId}/notes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ author, note: newNote }),
      });
      const result = await res.json();
      if (result.success) {
        setNotes([
          { id: result.noteId, author, note: newNote, created_at: 'Just now' },
          ...notes,
        ]);
        setNewNote('');
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!creatureId) return null;

  const accentColor =
    realmTheme === 'land'
      ? 'text-orange-400 border-orange-500/40 bg-orange-500/10'
      : realmTheme === 'ocean'
      ? 'text-cyan-400 border-cyan-500/40 bg-cyan-500/10'
      : 'text-purple-400 border-purple-500/40 bg-purple-500/10';

  const badgeBg =
    realmTheme === 'land'
      ? 'bg-orange-500/20 text-orange-300 border-orange-500/30'
      : realmTheme === 'ocean'
      ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'
      : 'bg-purple-500/20 text-purple-300 border-purple-500/30';

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-zinc-950/90 border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-zinc-800 border border-white/10 text-slate-300 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {loading ? (
          <div className="p-16 text-center text-slate-400 font-mono">
            <div className="inline-block w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin mb-4"></div>
            <p>Decoding fossil strata...</p>
          </div>
        ) : data ? (
          <div className="overflow-y-auto flex-1">
            {/* Header Hero Image */}
            <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-zinc-900">
              <img
                src={data.image_url}
                alt={data.name}
                className="w-full h-full object-cover filter brightness-90 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-mono uppercase tracking-wider border ${badgeBg}`}>
                      {data.threat_tier}
                    </span>
                    <span className="text-xs px-2.5 py-1 rounded-full font-mono bg-zinc-900/80 border border-zinc-700 text-zinc-300">
                      {data.period} • {data.mya_start}–{data.mya_end} MYA
                    </span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-serif font-black text-white tracking-wide">
                    {data.name}
                  </h1>
                  <p className="text-sm font-serif italic text-zinc-400">
                    {data.scientific_name}
                  </p>
                </div>
              </div>
            </div>

            {/* Specimen Metrics Grid */}
            <div className="p-6 sm:p-8 space-y-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-1">
                    <Bone className="w-3.5 h-3.5" /> LENGTH
                  </div>
                  <div className="text-xl font-mono font-bold text-white">
                    {data.length_m} m
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-1">
                    <Activity className="w-3.5 h-3.5" /> ESTIMATED MASS
                  </div>
                  <div className="text-xl font-mono font-bold text-white">
                    {data.weight_kg >= 1000
                      ? `${(data.weight_kg / 1000).toFixed(1)} tons`
                      : `${data.weight_kg} kg`}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-1">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    {data.wingspan_m ? 'WINGSPAN' : 'BITE FORCE'}
                  </div>
                  <div className="text-xl font-mono font-bold text-white">
                    {data.wingspan_m
                      ? `${data.wingspan_m} m`
                      : data.bite_force_n
                      ? `${data.bite_force_n.toLocaleString()} N`
                      : 'N/A'}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-1">
                    <Clock className="w-3.5 h-3.5" /> EPOCH
                  </div>
                  <div className="text-base font-semibold text-white truncate">
                    {data.geological_era}
                  </div>
                </div>
              </div>

              {/* Paleobiological Dossier */}
              <div className="space-y-4">
                <h3 className="text-sm font-mono tracking-widest uppercase text-zinc-400">
                  Paleobiology & Ecological Role
                </h3>
                <p className="text-zinc-300 leading-relaxed text-base">
                  {data.description}
                </p>
              </div>

              {/* Adaptations */}
              <div>
                <h3 className="text-sm font-mono tracking-widest uppercase text-zinc-400 mb-3">
                  Evolutionary Adaptations
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {data.unique_adaptations.map((trait, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/80 text-sm text-zinc-300"
                    >
                      <span className="text-emerald-400 mt-0.5">✦</span>
                      <span>{trait}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Extinction Cataclysm */}
              <div className="p-5 rounded-xl bg-red-950/20 border border-red-900/30">
                <div className="flex items-center gap-2 text-xs font-mono text-red-400 uppercase tracking-wider mb-2">
                  <ShieldAlert className="w-4 h-4" /> Extinction Cataclysm
                </div>
                <p className="text-sm text-red-200/90 leading-relaxed">
                  {data.extinction_event}
                </p>
              </div>

              {/* Fossil Discovery Locations */}
              <div className="flex items-start gap-3 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">
                    Primary Fossil Localities
                  </div>
                  <div className="text-sm text-zinc-200 font-medium">
                    {data.fossil_locations}
                  </div>
                </div>
              </div>

              {/* User Field Observations / Notes (Saved in SQLite) */}
              <div className="pt-6 border-t border-zinc-800/80">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-mono tracking-widest uppercase text-zinc-400">
                    Field Observations & Notes ({notes.length})
                  </h3>
                  <span className="text-xs font-mono text-zinc-500">Live Database Ledger</span>
                </div>

                <form onSubmit={handleAddNote} className="space-y-3 mb-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <input
                      type="text"
                      placeholder="Your Name / Researcher ID"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      className="px-3.5 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-sm text-white focus:outline-none focus:border-zinc-500 font-sans"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Add an observation, fossil query, or fact..."
                      value={newNote}
                      onChange={(e) => setNewNote(e.target.value)}
                      className="sm:col-span-2 px-3.5 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-sm text-white focus:outline-none focus:border-zinc-500 font-sans"
                      required
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    {submitted ? (
                      <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4" /> Observation logged in database!
                      </span>
                    ) : (
                      <span className="text-xs font-mono text-zinc-500">
                        Persists directly to SQLite
                      </span>
                    )}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-xs font-mono font-medium text-white transition-colors"
                    >
                      <Send className="w-3 h-3" />
                      {submitting ? 'Recording...' : 'Record Observation'}
                    </button>
                  </div>
                </form>

                {/* Notes List */}
                <div className="space-y-2.5 max-h-48 overflow-y-auto pr-1">
                  {notes.length === 0 ? (
                    <p className="text-xs text-zinc-600 font-mono italic">
                      No field notes recorded yet. Be the first to add an observation!
                    </p>
                  ) : (
                    notes.map((n, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/60 text-xs"
                      >
                        <div className="flex items-center justify-between text-zinc-400 mb-1">
                          <span className="font-semibold text-zinc-300">{n.author}</span>
                          <span className="font-mono text-[10px] text-zinc-500">{n.created_at}</span>
                        </div>
                        <p className="text-zinc-300 leading-normal">{n.note}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
