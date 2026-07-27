import React from 'react';
import { Reveal } from '../Reveal';
import { Icon } from '../Icon';
import { email, socials } from '../data';

const socialLinks = [
  { name: 'github' as const, label: 'GitHub', href: socials.github },
  { name: 'linkedin' as const, label: 'LinkedIn', href: socials.linkedin },
  { name: 'x' as const, label: '@noah_otsuka', href: socials.x },
];

export const Contact = () => {
  return (
    <section
      data-section
      className="relative h-full flex flex-col items-center justify-center text-center"
      style={{
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always',
        padding: 'clamp(80px,11vh,120px) clamp(28px,7vw,120px)',
      }}
    >
      <Reveal className="font-heading text-[13px] tracking-[.26em] uppercase mb-4" style={{ color: 'var(--accent-soft)' }}>
        Get in touch
      </Reveal>
      <Reveal
        as="h2"
        className="font-heading font-bold m-0"
        style={{ fontSize: 'clamp(38px,6.5vw,84px)', letterSpacing: '-.03em', color: '#f3f6ff', lineHeight: 0.98 }}
      >
        Let&apos;s build something.
      </Reveal>
      <Reveal
        as="p"
        style={{ fontSize: 'clamp(15px,1.6vw,19px)', color: '#93a0bf', margin: '22px 0 40px', maxWidth: 520, lineHeight: 1.6 }}
      >
        Open to senior engineering roles and remote work. The fastest way to reach me is email.
      </Reveal>
      <Reveal
        as="a"
        href={`mailto:${email}`}
        className="no-underline font-heading font-semibold inline-block transition-transform duration-200"
        style={{
          fontSize: 'clamp(17px,2vw,22px)',
          color: '#05070f',
          background: 'var(--accent-soft)',
          padding: '16px 34px',
          borderRadius: 14,
          boxShadow: '0 10px 40px var(--accent-glow)',
        }}
      >
        {email}
      </Reveal>
      <Reveal data-contact-social className="flex gap-3.5" style={{ marginTop: 34 }}>
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 no-underline text-sm font-semibold rounded-xl transition-colors duration-200"
            style={{ color: '#c3cde8', padding: '11px 20px', border: '1px solid rgba(140,160,220,.22)', background: 'rgba(255,255,255,.02)' }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-glow)';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'rgba(140,160,220,.22)';
              e.currentTarget.style.color = '#c3cde8';
            }}
          >
            <Icon name={social.name} size={16} />
            {social.label}
          </a>
        ))}
      </Reveal>
    </section>
  );
};
