import React from 'react';
import { Icon } from './Icon';
import { socials } from './data';

export const SocialRail = () => {
  return (
    <div
      data-social
      className="absolute z-40 flex flex-col items-center gap-4"
      style={{ left: 'clamp(14px,2.2vw,30px)', bottom: 'clamp(18px,3vh,34px)' }}
    >
      <a
        href={socials.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="block transition-[color,transform] duration-200"
        style={{ color: '#8b95b2' }}
        onMouseOver={(e) => {
          e.currentTarget.style.color = 'var(--accent-soft)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.color = '#8b95b2';
          e.currentTarget.style.transform = 'none';
        }}
      >
        <Icon name="github" size={19} />
      </a>
      <a
        href={socials.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="block transition-[color,transform] duration-200"
        style={{ color: '#8b95b2' }}
        onMouseOver={(e) => {
          e.currentTarget.style.color = 'var(--accent-soft)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.color = '#8b95b2';
          e.currentTarget.style.transform = 'none';
        }}
      >
        <Icon name="linkedin" size={19} />
      </a>
      <a
        href={socials.x}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X"
        className="block transition-[color,transform] duration-200"
        style={{ color: '#8b95b2' }}
        onMouseOver={(e) => {
          e.currentTarget.style.color = 'var(--accent-soft)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.color = '#8b95b2';
          e.currentTarget.style.transform = 'none';
        }}
      >
        <Icon name="x" size={17} />
      </a>
      <span
        style={{ width: 1, height: 70, background: 'linear-gradient(#33405f,transparent)' }}
      />
    </div>
  );
};
