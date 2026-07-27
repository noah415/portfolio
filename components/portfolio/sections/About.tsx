/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Reveal } from '../Reveal';

export const About = () => {
  return (
    <section
      data-section
      className="relative h-full flex items-center"
      style={{
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always',
        padding: 'clamp(80px,11vh,120px) clamp(28px,7vw,120px)',
      }}
    >
      <div data-about-grid className="grid items-center w-full" style={{ gridTemplateColumns: '1fr 1.25fr', gap: 'clamp(30px,5vw,80px)' }}>
        <Reveal className="relative justify-self-center">
          <div
            className="absolute rounded-3xl"
            style={{ inset: -14, background: 'radial-gradient(circle at 40% 30%, var(--accent-glow), transparent 70%)', filter: 'blur(20px)' }}
          />
          <img
            src="/profile.jpg"
            alt="Noah Otsuka"
            className="relative block object-cover rounded-[20px]"
            style={{ width: 'clamp(220px,26vw,340px)', height: 'clamp(280px,33vw,430px)' }}
          />
        </Reveal>
        <div>
          <Reveal className="font-heading text-[13px] tracking-[.26em] uppercase mb-3" style={{ color: 'var(--accent-soft)' }}>
            About &amp; goals
          </Reveal>
          <Reveal
            as="h2"
            className="font-heading font-bold"
            style={{ fontSize: 'clamp(28px,3.6vw,46px)', letterSpacing: '-.02em', margin: '0 0 22px', color: '#f2f5ff', lineHeight: 1.05 }}
          >
            I lead by doing.
          </Reveal>
          <Reveal as="p" style={{ fontSize: 'clamp(15px,1.5vw,18px)', lineHeight: 1.7, color: '#9aa5c4', margin: '0 0 18px', maxWidth: 600 }}>
            I&apos;ve stepped up as an acting frontend tech lead and cross-functional project manager
            through complex migrations — scoping work, designing features, and keeping delivery on track
            for platforms serving hundreds of teams.
          </Reveal>
          <Reveal
            style={{
              padding: '20px 24px',
              borderRadius: 16,
              border: '1px solid var(--accent-glow)',
              background: 'linear-gradient(150deg, var(--accent-dim), rgba(255,255,255,.01))',
              maxWidth: 600,
            }}
          >
            <div className="text-[11px] tracking-[.18em] uppercase mb-2" style={{ color: 'var(--accent-soft)' }}>
              Where I&apos;m headed
            </div>
            <p className="m-0" style={{ fontSize: 'clamp(15px,1.5vw,17px)', lineHeight: 1.6, color: '#dbe2f2' }}>
              A senior engineering role at a growth-stage startup where I can move fast, own outcomes, and
              grow into technical and product leadership.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
