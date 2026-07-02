import React from 'react';
import { sectionLabels } from './ProgressDots';

interface NavProps {
  onGo: (index: number) => void;
  activeIndex: number;
}

const links = [
  { label: 'Metrics', index: 1 },
  { label: 'Experience', index: 2 },
  { label: 'About', index: 3 },
  { label: 'Contact', index: 4 },
];

export const Nav = ({ onGo, activeIndex }: NavProps) => {
  return (
    <nav
      className="absolute z-40 top-0 left-0 right-0 flex items-center justify-between"
      style={{ padding: 'clamp(16px,2.6vh,26px) clamp(22px,5vw,60px)' }}
    >
      <div
        onClick={() => onGo(0)}
        className="cursor-pointer flex items-center gap-3"
      >
        <div
          className="w-10 h-10 rounded-[11px] grid place-items-center font-heading font-bold text-xl"
          style={{
            background: 'linear-gradient(150deg, var(--accent-dim), rgba(255,255,255,.02))',
            border: '1px solid var(--accent-glow)',
            boxShadow: '0 0 22px var(--accent-glow)',
            color: 'var(--accent-soft)',
          }}
        >
          N
        </div>
      </div>

      <div data-nav-links className="flex items-center" style={{ gap: 'clamp(18px,2.4vw,40px)' }}>
        {links.map((link) => (
          <span
            key={link.index}
            onClick={() => onGo(link.index)}
            className="cursor-pointer text-sm font-semibold tracking-[.01em] transition-colors duration-200"
            style={{ color: '#aab4d0' }}
          >
            {link.label}
          </span>
        ))}
        <div data-mobile-dots className="hidden items-center gap-2">
          {sectionLabels.map((label, i) => (
            <span
              key={label}
              onClick={() => onGo(i)}
              aria-label={label}
              className="cursor-pointer rounded-full transition-all duration-300"
              style={{
                width: 6,
                height: 6,
                background: i === activeIndex ? 'var(--accent-soft)' : '#33405f',
                boxShadow: i === activeIndex ? '0 0 8px var(--accent-glow)' : 'none',
              }}
            />
          ))}
        </div>
        <span
          data-nav-projects
          title="Coming soon"
          className="text-sm font-semibold cursor-default inline-flex items-center gap-1.5"
          style={{ color: '#414c6b' }}
        >
          Projects
          <span
            className="text-[9px] tracking-[.14em] px-1.5 py-0.5 rounded-md"
            style={{ border: '1px solid #2a3350', color: '#63709a' }}
          >
            SOON
          </span>
        </span>
        <a
          href="/noah_otsuka_resume.pdf"
          download
          className="no-underline text-sm font-semibold rounded-[10px] transition-[box-shadow,transform] duration-200"
          style={{
            color: 'var(--accent-soft)',
            padding: '9px 20px',
            border: '1px solid var(--accent-glow)',
            background: 'var(--accent-dim)',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.boxShadow = '0 0 24px var(--accent-glow)';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'none';
          }}
        >
          Resume
        </a>
      </div>
    </nav>
  );
};
