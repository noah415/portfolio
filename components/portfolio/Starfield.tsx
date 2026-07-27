import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  r: number;
  a: number;
  ph: number;
  sp: number;
  tint: boolean;
}

const ACCENT_RGB = { r: 91, g: 140, b: 255 };

interface StarfieldProps {
  wrapperRef: React.RefObject<HTMLDivElement | null>;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export const Starfield = ({ wrapperRef, containerRef }: StarfieldProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrapper || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mouse = { x: 0, y: 0 };
    let stars: Star[] = [];
    let W = 0;
    let H = 0;
    let raf: number | null = null;

    const resizeStars = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = wrapper.clientWidth;
      const h = wrapper.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      W = w;
      H = h;

      const density = 1;
      const count = Math.round(150 * density * Math.min(1.6, (w * h) / (1440 * 900)));
      stars = [];
      for (let i = 0; i < count; i++) {
        const z = Math.random();
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          z,
          r: z * 1.3 + 0.25,
          a: 0.35 + Math.random() * 0.6,
          ph: Math.random() * 6.28,
          sp: 0.02 + z * 0.05,
          tint: Math.random() < 0.28,
        });
      }
      if (reduceMotion) drawStars(performance.now());
    };

    const drawStars = (now: number) => {
      ctx.clearRect(0, 0, W, H);
      const move = !reduceMotion;
      const scrollY = containerRef.current ? containerRef.current.scrollTop : 0;
      const { r, g, b } = ACCENT_RGB;
      const mx = mouse.x;
      const my = mouse.y;

      for (const s of stars) {
        if (move) {
          s.y += s.sp * 0.5;
          if (s.y > H) s.y -= H;
        }
        const par = scrollY * s.z * 0.05;
        let dy = s.y - (par % H);
        if (dy < 0) dy += H;
        const dx = s.x + mx * s.z * 26;
        const py = dy + my * s.z * 18;
        const tw = move ? 0.55 + 0.45 * Math.sin(now * 0.001 + s.ph) : 0.85;
        const alpha = s.a * tw;

        ctx.beginPath();
        ctx.arc(dx, py, s.r, 0, 6.283);
        ctx.fillStyle = s.tint
          ? `rgba(${r},${g},${b},${alpha})`
          : `rgba(226,234,255,${alpha})`;
        if (s.r > 1) {
          ctx.shadowBlur = 6;
          ctx.shadowColor = `rgba(${r},${g},${b},0.5)`;
        } else {
          ctx.shadowBlur = 0;
        }
        ctx.fill();
      }
      ctx.shadowBlur = 0;
    };

    const loop = () => {
      const step = (now: number) => {
        drawStars(now);
        raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };

    const onMouseMove = (ev: MouseEvent) => {
      const w = wrapper.clientWidth;
      const h = wrapper.clientHeight;
      mouse.x = ev.clientX / w - 0.5;
      mouse.y = ev.clientY / h - 0.5;
    };

    resizeStars();
    if (reduceMotion) drawStars(performance.now());
    else loop();

    wrapper.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', resizeStars);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      wrapper.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', resizeStars);
    };
  }, [wrapperRef, containerRef]);

  return (
    <canvas
      ref={canvasRef}
      data-stars
      style={{ position: 'absolute', inset: 0, zIndex: 0, display: 'block' }}
    />
  );
};
