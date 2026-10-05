import React, { useEffect, useRef } from 'react';

export default function ParticleBackground({ realm }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle settings based on realm
    const particleCount = 45;
    const particles = [];

    const getRealmColors = (r) => {
      if (r === 'land') {
        return ['rgba(249, 115, 22, 0.4)', 'rgba(234, 88, 12, 0.3)', 'rgba(251, 146, 60, 0.2)'];
      }
      if (r === 'ocean') {
        return ['rgba(6, 182, 212, 0.4)', 'rgba(8, 145, 178, 0.3)', 'rgba(103, 232, 249, 0.2)'];
      }
      return ['rgba(168, 85, 247, 0.4)', 'rgba(147, 51, 234, 0.3)', 'rgba(216, 180, 254, 0.2)'];
    };

    let colors = getRealmColors(realm);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.5 + 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * (realm === 'air' ? 1.5 : 0.4),
        vy: realm === 'land' ? -(Math.random() * 0.8 + 0.2) : (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.7 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.005,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around borders
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Pulse opacity
        p.opacity += Math.sin(Date.now() * p.pulseSpeed) * 0.01;
        const clampedOpacity = Math.max(0.1, Math.min(0.8, p.opacity));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace(/[\d\.]+\)$/g, `${clampedOpacity})`);
        ctx.shadowBlur = 12;
        ctx.shadowColor = p.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [realm]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
}
