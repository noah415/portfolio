import React from 'react';

interface ProgressDotsProps {
  activeIndex: number;
  onGo: (index: number) => void;
}

export const sectionLabels = ['Intro', 'Metrics', 'Experience', 'About', 'Contact', 'Fun Facts'];

export const ProgressDots = ({ activeIndex, onGo }: ProgressDotsProps) => {
  return (
    <aside
      data-dots
      className="absolute z-40 top-1/2 -translate-y-1/2 flex flex-col gap-4 items-end"
      style={{ right: 'clamp(16px,2.4vw,34px)' }}
    >
      {sectionLabels.map((label, i) => {
        const on = i === activeIndex;
        return (
          <div
            key={label}
            onClick={() => onGo(i)}
            className="dot-item cursor-pointer flex items-center gap-2.5"
          >
            <span className="dot-label text-[11px] tracking-[.12em] uppercase whitespace-nowrap">
              {label}
            </span>
            <span
              className="rounded-full transition-all duration-300"
              style={{
                width: 8,
                height: 8,
                background: on ? 'var(--accent-soft)' : '#33405f',
                transform: on ? 'scale(1.5)' : 'scale(1)',
                boxShadow: on ? '0 0 12px var(--accent-glow)' : 'none',
              }}
            />
          </div>
        );
      })}
    </aside>
  );
};
