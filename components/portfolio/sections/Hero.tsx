/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Reveal } from '../Reveal';

interface HeroProps {
  onGo: (index: number) => void;
}

export const Hero = ({ onGo }: HeroProps) => {
  return (
    <section
      data-section
      className="relative h-full flex items-center"
      style={{
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always',
        padding: '0 clamp(28px,8vw,150px)',
      }}
    >
      <div style={{ maxWidth: 820 }}>
        <Reveal
          className="font-heading text-[15px] tracking-[.28em] uppercase mb-[22px]"
          style={{ color: 'var(--accent-soft)' }}
        >
          Hi, my name is
        </Reveal>
        <Reveal
          as="h1"
          data-hero-name
          className="font-heading font-bold m-0"
          style={{
            fontSize: 'clamp(52px,8.5vw,116px)',
            lineHeight: 0.95,
            letterSpacing: '-.03em',
            color: '#f3f6ff',
          }}
        >
          Noah Otsuka
        </Reveal>
        <Reveal
          as="h2"
          className="font-heading font-medium"
          style={{
            fontSize: 'clamp(22px,3.4vw,40px)',
            lineHeight: 1.1,
            letterSpacing: '-.02em',
            margin: '16px 0 0',
            color: '#7f8bad',
          }}
        >
          I build production systems that scale.
        </Reveal>
        <Reveal
          as="p"
          style={{
            maxWidth: 560,
            fontSize: 'clamp(15px,1.5vw,18px)',
            lineHeight: 1.65,
            color: '#93a0bf',
            margin: '26px 0 0',
          }}
        >
          Full-stack engineer with 4 years shipping and owning software for Fortune 100 clients — cloud
          migrations and platforms used by hundreds of teams.
        </Reveal>
        <Reveal className="flex gap-4 flex-wrap" style={{ marginTop: 38 }}>
          <span
            onClick={() => onGo(1)}
            className="cursor-pointer font-semibold text-[15px] transition-transform duration-200"
            style={{
              color: '#05070f',
              background: 'var(--accent-soft)',
              padding: '14px 26px',
              borderRadius: 12,
              boxShadow: '0 8px 30px var(--accent-glow)',
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'none')}
          >
            My experience
          </span>
          <span
            onClick={() => onGo(4)}
            className="cursor-pointer font-semibold text-[15px] transition-colors duration-200"
            style={{
              color: '#dce3f6',
              padding: '14px 26px',
              borderRadius: 12,
              border: '1px solid rgba(140,160,220,.28)',
              background: 'rgba(255,255,255,.02)',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-glow)';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'rgba(140,160,220,.28)';
              e.currentTarget.style.color = '#dce3f6';
            }}
          >
            Get in touch
          </span>
        </Reveal>
      </div>

      <div
        data-hero-planet
        className="absolute pointer-events-none"
        style={{
          right: 'clamp(-120px,-2vw,60px)',
          top: '50%',
          transform: 'translateY(-50%)',
          width: 'min(46vw,560px)',
          height: 'min(46vw,560px)',
        }}
      >
        <div
          className="absolute rounded-full"
          style={{
            left: '50%',
            top: '50%',
            width: '78%',
            height: '78%',
            transform: 'translate(-50%,-50%)',
            background:
              'radial-gradient(circle at 34% 30%, #d7e4ff 0%, var(--accent) 40%, #14203f 78%, #0a0f22 100%)',
            boxShadow: '0 0 60px var(--accent-glow), inset -22px -30px 70px rgba(0,0,0,.6)',
          }}
        />
        <div className="absolute" style={{ inset: '2%', animation: 'spin 32s linear infinite', animationDelay: '-4s' }}>
          <div
            className="absolute rounded-full"
            style={{
              left: '50%',
              top: 0,
              transform: 'translate(-50%,-50%)',
              width: 24,
              height: 24,
              background: 'radial-gradient(circle at 34% 30%, #eef3ff, var(--accent-soft) 55%, #1b2547 100%)',
              boxShadow: '0 0 16px var(--accent-glow)',
            }}
          />
        </div>
        <div className="absolute" style={{ inset: '-12%', animation: 'spin 54s linear infinite reverse', animationDelay: '-24s' }}>
          <div
            className="absolute rounded-full"
            style={{
              left: '50%',
              top: 0,
              transform: 'translate(-50%,-50%)',
              width: 14,
              height: 14,
              background: 'radial-gradient(circle at 34% 30%, #eef3ff, var(--accent) 60%, #14203f 100%)',
              boxShadow: '0 0 12px var(--accent-glow)',
            }}
          />
        </div>
        <div className="absolute" style={{ inset: '-24%', animation: 'spin 42s linear infinite', animationDelay: '-11s' }}>
          <div
            className="absolute rounded-full"
            style={{
              left: '50%',
              top: 0,
              transform: 'translate(-50%,-50%)',
              width: 10,
              height: 10,
              background: 'radial-gradient(circle at 34% 30%, #dfe8ff, var(--accent-soft) 60%, #1b2547 100%)',
              boxShadow: '0 0 10px var(--accent-glow)',
            }}
          />
        </div>
      </div>

      <div
        onClick={() => onGo(1)}
        className="absolute left-1/2 -translate-x-1/2 cursor-pointer flex flex-col items-center gap-2"
        style={{ bottom: 34, color: '#5b678c' }}
      >
        <span className="text-[11px] tracking-[.24em] uppercase">Scroll</span>
        <img
          src="/icons/scroll-cue.svg"
          alt=""
          width={16}
          height={24}
          style={{ animation: 'bob 1.8s ease-in-out infinite' }}
        />
      </div>
    </section>
  );
};
