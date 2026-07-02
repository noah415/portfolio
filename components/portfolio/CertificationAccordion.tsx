import React from 'react';
import { Icon } from './Icon';
import { Certification } from './data';

interface CertificationAccordionProps {
  certifications: Certification[];
  expanded: boolean;
  onToggle: (expanded: boolean) => void;
}

export const CertificationAccordion = ({ certifications, expanded, onToggle }: CertificationAccordionProps) => {

  const summary = certifications
    .slice(0, 5)
    .map((c) => c.name)
    .join(' · ');

  return (
    <div>
      <button
        type="button"
        aria-expanded={expanded}
        onClick={() => onToggle(!expanded)}
        className="text-left w-full bg-transparent border-0 p-0 cursor-pointer group"
      >
        <div className="flex items-center gap-2">
          <div
            className="text-[11px] tracking-[.16em] uppercase mb-0"
            style={{ color: '#5b678c' }}
          >
            Certifications · {certifications.length}
          </div>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            className="transition-transform duration-200"
            style={{ transform: expanded ? 'rotate(180deg)' : 'none', color: '#5b678c' }}
          >
            <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        {!expanded && (
          <div className="text-[13px] leading-[1.7] mt-[9px]" style={{ color: '#9aa5c4' }}>
            {summary} <span style={{ color: '#5b678c' }}>+ more</span>
          </div>
        )}
      </button>

      {expanded && (
        <ul
          className="cert-scroll list-none m-0 p-0 mt-2.5 flex flex-col gap-2"
          style={{ maxHeight: 'min(36vh, 340px)', overflowY: 'auto', overscrollBehavior: 'contain' }}
        >
          {certifications.map((cert) => (
            <li
              key={cert.credlyUrl}
              className="flex items-center justify-between gap-3 rounded-lg px-3 py-2"
              style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(140,160,220,.16)' }}
            >
              <div className="min-w-0">
                <div className="text-[13px] font-semibold truncate" style={{ color: '#d7deef' }}>
                  {cert.name}
                </div>
                <div className="text-[11.5px]" style={{ color: '#5b678c' }}>{cert.issuer}</div>
              </div>
              <a
                href={cert.credlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 no-underline text-[12px] font-semibold whitespace-nowrap transition-colors duration-200"
                style={{ color: 'var(--accent-soft)' }}
              >
                Credly
                <Icon name="external-link" size={12} />
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
