import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function Soundscape({ realm }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const nodesRef = useRef([]);

  const stopAudio = () => {
    nodesRef.current.forEach(({ osc, gain }) => {
      try {
        gain.gain.linearRampToValueAtTime(0.001, audioCtxRef.current.currentTime + 0.5);
        setTimeout(() => osc.stop(), 500);
      } catch (e) {
        // ignore
      }
    });
    nodesRef.current = [];
  };

  const startAudio = () => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    stopAudio();

    // Setup drone sounds based on realm
    let freqs = [55, 110]; // Land: deep volcanic rumble
    let type = 'sine';

    if (realm === 'ocean') {
      freqs = [65, 130, 195]; // Ocean: deep hydrostatic resonance
      type = 'triangle';
    } else if (realm === 'air') {
      freqs = [140, 220, 330]; // Air: ethereal high-altitude wind
      type = 'sine';
    }

    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.05, ctx.currentTime);
    masterGain.connect(ctx.destination);

    freqs.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // Low frequency oscillator for natural undulating pulse
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.setValueAtTime(0.1 + i * 0.05, ctx.currentTime);
      lfoGain.gain.setValueAtTime(0.02, ctx.currentTime);

      lfo.connect(gain.gain);
      lfo.start();

      gain.gain.setValueAtTime(0.02 / (i + 1), ctx.currentTime);

      osc.connect(gain);
      gain.connect(masterGain);
      osc.start();

      nodesRef.current.push({ osc, gain, lfo });
    });
  };

  useEffect(() => {
    if (isPlaying) {
      startAudio();
    }
    return () => {
      stopAudio();
    };
  }, [realm]);

  const toggleSound = () => {
    if (isPlaying) {
      stopAudio();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      startAudio();
    }
  };

  return (
    <button
      onClick={toggleSound}
      title={isPlaying ? "Mute Primordial Resonance" : "Enable Primordial Soundscape"}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 backdrop-blur-md text-slate-300 hover:text-white"
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          <span className="hidden sm:inline">ATMOSPHERE: ACTIVE</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-slate-500" />
          <span className="hidden sm:inline">ATMOSPHERE: OFF</span>
        </>
      )}
    </button>
  );
}
