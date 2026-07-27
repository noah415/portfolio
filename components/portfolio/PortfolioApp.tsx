import React, { useEffect, useRef } from 'react';
import { Starfield } from './Starfield';
import { Nav } from './Nav';
import { ProgressDots } from './ProgressDots';
import { SocialRail } from './SocialRail';
import { RevealContext } from './RevealContext';
import { useScrollSpy } from './hooks/useScrollSpy';
import { Hero } from './sections/Hero';
import { Metrics } from './sections/Metrics';
import { Experience } from './sections/Experience';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { FunFacts } from './sections/FunFacts';

export const PortfolioApp = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    if (containerRef.current) {
      sectionsRef.current = Array.from(containerRef.current.querySelectorAll<HTMLElement>('[data-section]'));
    }
  }, []);

  const activeIndex = useScrollSpy(containerRef, sectionsRef);

  const go = (index: number) => {
    const target = sectionsRef.current[index];
    if (!target || !containerRef.current) return;
    containerRef.current.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
  };

  return (
    <RevealContext.Provider value={containerRef}>
      <div
        data-portfolio
        ref={wrapperRef}
        className="fixed inset-0 overflow-hidden"
        style={{ fontFamily: 'var(--font-body), system-ui, sans-serif', background: '#04060d', color: '#e9edf7' }}
      >
        <Starfield wrapperRef={wrapperRef} containerRef={containerRef} />

        <div
          className="absolute pointer-events-none"
          style={{
            zIndex: 1,
            top: '-12%',
            left: '-8%',
            width: '60vw',
            height: '60vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, color-mix(in srgb,var(--accent) 22%, transparent) 0%, transparent 62%)',
            filter: 'blur(30px)',
            animation: 'hueDrift 14s ease-in-out infinite',
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            zIndex: 1,
            bottom: '-18%',
            right: '-10%',
            width: '55vw',
            height: '55vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, color-mix(in srgb,#7a6cf0 20%, transparent) 0%, transparent 60%)',
            filter: 'blur(30px)',
            animation: 'hueDrift 18s ease-in-out infinite reverse',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 1, background: 'radial-gradient(120% 90% at 50% 0%, transparent 40%, rgba(2,4,10,.55) 100%)' }}
        />

        <Nav onGo={go} activeIndex={activeIndex} />
        <ProgressDots activeIndex={activeIndex} onGo={go} />
        <SocialRail />

        <div
          data-scroll
          ref={containerRef}
          className="absolute inset-0 overflow-y-scroll overflow-x-hidden"
          style={{ zIndex: 5, scrollSnapType: 'y mandatory' }}
        >
          <Hero onGo={go} />
          <Metrics active={activeIndex === 1} />
          <Experience />
          <About />
          <Contact />
          <FunFacts />
        </div>
      </div>
    </RevealContext.Provider>
  );
};
