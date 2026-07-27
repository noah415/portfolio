import React, { useState } from 'react';
import { Reveal } from '../Reveal';
import { CertificationAccordion } from '../CertificationAccordion';
import { jobs, skills, certifications, education } from '../data';

export const Experience = () => {
  const [certExpanded, setCertExpanded] = useState(false);

  return (
    <section
      data-section
      className="relative h-full flex flex-col justify-center"
      style={{
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always',
        padding: 'clamp(80px,11vh,120px) clamp(28px,7vw,120px) clamp(50px,7vh,80px)',
      }}
    >
      <Reveal style={{ marginBottom: 'clamp(20px,3.4vh,40px)' }}>
        <div className="font-heading text-[13px] tracking-[.26em] uppercase mb-2.5" style={{ color: 'var(--accent-soft)' }}>
          Experience &amp; expertise
        </div>
        <h2 className="font-heading font-bold m-0" style={{ fontSize: 'clamp(30px,4.4vw,54px)', letterSpacing: '-.02em', color: '#f2f5ff' }}>
          Where I&apos;ve shipped
        </h2>
      </Reveal>

      <div
        data-exp-grid
        className="grid items-start"
        style={{ gridTemplateColumns: 'minmax(0, 1.35fr) minmax(0, 1fr)', gap: 'clamp(28px,4vw,70px)' }}
      >
        <div className="flex flex-col" style={{ gap: 'clamp(16px,2.4vh,26px)' }}>
          {jobs.map((job) => (
            <Reveal
              key={job.title + job.company}
              className="relative"
              style={{ paddingLeft: 22, borderLeft: '1px solid rgba(140,160,220,.2)' }}
            >
              <span
                className="absolute rounded-full"
                style={{
                  left: -5,
                  top: 5,
                  width: 9,
                  height: 9,
                  background: job.current ? 'var(--accent-soft)' : '#33405f',
                  boxShadow: job.current ? '0 0 12px var(--accent-glow)' : 'none',
                }}
              />
              <div className="flex justify-between items-baseline gap-3 flex-wrap">
                <h3 className="font-heading font-semibold m-0" style={{ fontSize: 'clamp(17px,1.7vw,21px)', color: '#eef3ff' }}>
                  {job.title}
                </h3>
                <span className="text-xs whitespace-nowrap" style={{ color: '#5b678c' }}>{job.dates}</span>
              </div>
              <div className="text-[13px]" style={{ color: 'var(--accent-soft)', margin: '3px 0 9px' }}>{job.company}</div>
              <ul className="m-0 flex flex-col gap-1.5" style={{ paddingLeft: 18, color: '#9aa5c4', fontSize: 13.5, lineHeight: 1.55 }}>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="flex flex-col" style={{ gap: 'clamp(14px,2.2vh,22px)' }}>
          <div>
            <div className="text-[11px] tracking-[.16em] uppercase mb-2.5" style={{ color: '#5b678c' }}>Toolbox</div>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-[12.5px] rounded-lg"
                  style={{ color: '#c3cde8', padding: '5px 11px', background: 'rgba(255,255,255,.03)', border: '1px solid rgba(140,160,220,.16)' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <CertificationAccordion
              certifications={certifications}
              expanded={certExpanded}
              onToggle={setCertExpanded}
            />
          </div>
          <div>
            <div className="text-[11px] tracking-[.16em] uppercase mb-1.5" style={{ color: '#5b678c' }}>Education</div>
            <div className="text-sm font-semibold" style={{ color: '#d7deef' }}>{education.degree}</div>
            <div className="text-[13px]" style={{ color: '#9aa5c4' }}>{education.school} · {education.dates}</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
