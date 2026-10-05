import React, { useState } from 'react';
import { Scale, X, ArrowRight, Zap } from 'lucide-react';

export default function CreatureCompare({ creatures, isOpen, onClose }) {
  if (!isOpen) return null;

  const [idA, setIdA] = useState(creatures[0]?.id || '');
  const [idB, setIdB] = useState(creatures[1]?.id || '');

  const creatureA = creatures.find((c) => c.id === idA) || creatures[0];
  const creatureB = creatures.find((c) => c.id === idB) || creatures[1];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-zinc-950 border border-white/10 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8 flex flex-col max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-serif font-bold text-white">
                Titan Comparative Analysis
              </h2>
              <p className="text-xs font-mono text-zinc-400">
                Cross-Epoch Biometric Juxtaposition
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Selection Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          <div>
            <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
              Specimen Alpha
            </label>
            <select
              value={idA}
              onChange={(e) => setIdA(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-sm text-white font-medium focus:outline-none focus:border-zinc-500"
            >
              {creatures.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name} ({c.realm.toUpperCase()})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
              Specimen Beta
            </label>
            <select
              value={idB}
              onChange={(e) => setIdB(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-sm text-white font-medium focus:outline-none focus:border-zinc-500"
            >
              {creatures.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name} ({c.realm.toUpperCase()})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Comparison Cards */}
        {creatureA && creatureB && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card A */}
            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800 flex flex-col items-center text-center">
              <img
                src={creatureA.image_url}
                alt={creatureA.name}
                className="w-full h-44 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-serif font-bold text-white mb-0.5">
                {creatureA.name}
              </h3>
              <p className="text-xs font-serif italic text-zinc-400 mb-4">
                {creatureA.scientific_name}
              </p>

              <div className="w-full space-y-2.5 text-xs font-mono">
                <div className="flex justify-between py-2 border-b border-zinc-800/80">
                  <span className="text-zinc-500">REALM</span>
                  <span className="font-bold text-amber-400 uppercase">{creatureA.realm}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-zinc-800/80">
                  <span className="text-zinc-500">LENGTH</span>
                  <span className="font-bold text-white">{creatureA.length_m} m</span>
                </div>
                <div className="flex justify-between py-2 border-b border-zinc-800/80">
                  <span className="text-zinc-500">ESTIMATED MASS</span>
                  <span className="font-bold text-white">
                    {creatureA.weight_kg >= 1000
                      ? `${(creatureA.weight_kg / 1000).toFixed(1)} tons`
                      : `${creatureA.weight_kg} kg`}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-zinc-800/80">
                  <span className="text-zinc-500">BITE FORCE / WINGSPAN</span>
                  <span className="font-bold text-white">
                    {creatureA.wingspan_m
                      ? `${creatureA.wingspan_m} m span`
                      : creatureA.bite_force_n
                      ? `${creatureA.bite_force_n.toLocaleString()} N`
                      : 'N/A'}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-zinc-800/80">
                  <span className="text-zinc-500">DEEP TIME PERIOD</span>
                  <span className="font-bold text-zinc-300">{creatureA.period}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-zinc-500">MYA EXISTENCE</span>
                  <span className="font-bold text-zinc-300">
                    {creatureA.mya_start} – {creatureA.mya_end} MYA
                  </span>
                </div>
              </div>
            </div>

            {/* Card B */}
            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800 flex flex-col items-center text-center">
              <img
                src={creatureB.image_url}
                alt={creatureB.name}
                className="w-full h-44 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-serif font-bold text-white mb-0.5">
                {creatureB.name}
              </h3>
              <p className="text-xs font-serif italic text-zinc-400 mb-4">
                {creatureB.scientific_name}
              </p>

              <div className="w-full space-y-2.5 text-xs font-mono">
                <div className="flex justify-between py-2 border-b border-zinc-800/80">
                  <span className="text-zinc-500">REALM</span>
                  <span className="font-bold text-cyan-400 uppercase">{creatureB.realm}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-zinc-800/80">
                  <span className="text-zinc-500">LENGTH</span>
                  <span className="font-bold text-white">{creatureB.length_m} m</span>
                </div>
                <div className="flex justify-between py-2 border-b border-zinc-800/80">
                  <span className="text-zinc-500">ESTIMATED MASS</span>
                  <span className="font-bold text-white">
                    {creatureB.weight_kg >= 1000
                      ? `${(creatureB.weight_kg / 1000).toFixed(1)} tons`
                      : `${creatureB.weight_kg} kg`}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-zinc-800/80">
                  <span className="text-zinc-500">BITE FORCE / WINGSPAN</span>
                  <span className="font-bold text-white">
                    {creatureB.wingspan_m
                      ? `${creatureB.wingspan_m} m span`
                      : creatureB.bite_force_n
                      ? `${creatureB.bite_force_n.toLocaleString()} N`
                      : 'N/A'}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-zinc-800/80">
                  <span className="text-zinc-500">DEEP TIME PERIOD</span>
                  <span className="font-bold text-zinc-300">{creatureB.period}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-zinc-500">MYA EXISTENCE</span>
                  <span className="font-bold text-zinc-300">
                    {creatureB.mya_start} – {creatureB.mya_end} MYA
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
