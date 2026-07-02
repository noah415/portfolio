import React from 'react';
import { Reveal } from '../Reveal';
import { Icon } from '../Icon';
import { funFacts, version } from '../data';

const GlyphContent = ({ glyph }: { glyph: (typeof funFacts)[number]['glyph'] }) => {
  if (glyph === 'baking') {
    return (
      <div className="flex items-center" style={{ color: 'var(--accent-soft)', height: 34 }}>
        <Icon name="baking" size={32} />
      </div>
    );
  }
  if (glyph === 'japanese') {
    return (
      <div className="font-heading" style={{ fontSize: 34, color: 'var(--accent-soft)' }}>
        日本語
      </div>
    );
  }
  return (
    <div className="font-heading" style={{ fontSize: 34, color: 'var(--accent-soft)', letterSpacing: '.08em' }}>
      ≋
    </div>
  );
};

export const FunFacts = () => {
  return (
    <section
      data-section
      className="relative h-full flex flex-col justify-center"
      style={{
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always',
        padding: 'clamp(80px,11vh,120px) clamp(28px,7vw,120px) clamp(60px,8vh,90px)',
      }}
    >
      <Reveal style={{ marginBottom: 'clamp(24px,4vh,44px)' }}>
        <div className="font-heading text-[13px] tracking-[.26em] uppercase mb-2.5" style={{ color: 'var(--accent-soft)' }}>
          Off the clock
        </div>
        <h2 className="font-heading font-bold m-0" style={{ fontSize: 'clamp(30px,4.4vw,54px)', letterSpacing: '-.02em', color: '#f2f5ff' }}>
          A few fun facts
        </h2>
      </Reveal>

      <div data-fun-grid className="grid" style={{ gridTemplateColumns: 'repeat(3,1fr)', gap: 'clamp(14px,1.6vw,22px)' }}>
        {funFacts.map((fact) => (
          <Reveal
            key={fact.title}
            className="flex flex-col rounded-[18px]"
            style={{
              padding: '26px 22px',
              background: 'rgba(255,255,255,.03)',
              border: '1px solid rgba(140,160,220,.16)',
              gap: 12,
              minHeight: 200,
            }}
          >
            <GlyphContent glyph={fact.glyph} />
            <div className="font-heading font-semibold" style={{ fontSize: 19, color: '#eef3ff' }}>{fact.title}</div>
            <div className="text-[13.5px]" style={{ lineHeight: 1.55, color: '#9aa5c4' }}>{fact.body}</div>
          </Reveal>
        ))}
      </div>

      <Reveal
        className="flex justify-between items-center flex-wrap"
        style={{ gap: 14, marginTop: 'clamp(30px,5vh,56px)', paddingTop: 22, borderTop: '1px solid rgba(140,160,220,.12)' }}
      >
        <div className="font-heading text-sm" style={{ color: '#8b95b2' }}>Noah Otsuka · Senior Software Engineer</div>
        <div className="text-[13px] flex items-center gap-2.5" style={{ color: '#5b678c' }}>
          <span>© 2026 - Built with NextJS</span>
          <span aria-hidden style={{ opacity: 0.5 }}>·</span>
          <span>{version}</span>
        </div>
      </Reveal>
    </section>
  );
};
