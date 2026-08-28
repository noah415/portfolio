import React, { useEffect, useRef, useState } from 'react';
import { sectionLabels } from './ProgressDots';
import { projects } from './data';

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
  const [projectsOpen, setProjectsOpen] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!projectsOpen) return;

    const onDocumentClick = (event: MouseEvent) => {
      if (!projectsRef.current?.contains(event.target as Node)) {
        setProjectsOpen(false);
      }
    };

    document.addEventListener('click', onDocumentClick);
    return () => document.removeEventListener('click', onDocumentClick);
  }, [projectsOpen]);

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
        <div data-projects-wrap ref={projectsRef} className="relative">
          <button
            type="button"
            aria-expanded={projectsOpen}
            onClick={(e) => {
              e.stopPropagation();
              setProjectsOpen((open) => !open);
            }}
            className="bg-transparent border-0 p-0 text-sm font-semibold cursor-pointer select-none inline-flex items-center gap-1.5"
            style={{ color: '#aab4d0' }}
          >
            Projects
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              className="transition-transform duration-200"
              style={{ transform: projectsOpen ? 'rotate(180deg)' : 'none' }}
            >
              <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {projectsOpen && (
            <div
              className="absolute rounded-xl"
              style={{
                top: 'calc(100% + 12px)',
                right: 0,
                minWidth: 180,
                padding: 6,
                background: '#0b1122',
                border: '1px solid rgba(140,160,220,.22)',
                boxShadow: '0 12px 30px rgba(0,0,0,.4)',
              }}
            >
              {projects.map((project) => (
                <a
                  key={project.href}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block no-underline text-[13.5px] font-semibold rounded-lg transition-colors duration-200"
                  style={{ color: '#c3cde8', padding: '9px 12px' }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'var(--accent-dim)';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#c3cde8';
                  }}
                >
                  {project.label}
                </a>
              ))}
            </div>
          )}
        </div>
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
