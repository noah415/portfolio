import React from 'react';
import { Reveal } from '../Reveal';
import { useCountUp } from '../hooks/useCountUp';
import { headlineStats, secondaryStats } from '../data';

interface MetricsProps {
  active: boolean;
}

const StatCard = ({ count, suffix, label, active }: { count: number; suffix?: string; label: string; active: boolean }) => {
  const value = useCountUp(count, active);
  return (
    <div
      className="rounded-[18px]"
      style={{ padding: 'clamp(16px,1.8vw,26px)', background: 'rgba(255,255,255,.03)', border: '1px solid rgba(140,160,220,.16)' }}
    >
      <div
        className="font-heading font-bold"
        style={{ fontSize: 'clamp(38px,4.4vw,58px)', lineHeight: 1, color: '#eef3ff', letterSpacing: '-.02em' }}
      >
        <span>{value}</span>
        {suffix && <span style={{ color: 'var(--accent-soft)' }}>{suffix}</span>}
      </div>
      <div className="text-[13.5px] mt-2.5" style={{ color: '#9aa5c4' }}>{label}</div>
    </div>
  );
};

export const Metrics = ({ active }: MetricsProps) => {
  return (
    <section
      data-section
      className="relative h-full flex flex-col justify-center overflow-y-auto"
      style={{
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always',
        gap: 'clamp(14px,2.2vh,24px)',
        padding: 'clamp(60px,8vh,92px) clamp(28px,7vw,120px) clamp(44px,6vh,72px)',
      }}
    >
      <Reveal style={{ flex: '0 0 auto' }}>
        <h2
          className="font-heading font-bold m-0"
          style={{ fontSize: 'clamp(28px,4.2vw,52px)', lineHeight: 1.02, letterSpacing: '-.02em', color: '#f2f5ff', maxWidth: 640 }}
        >
          Four years, measured in outcomes.
        </h2>
      </Reveal>

      <Reveal
        style={{
          flex: '0 0 auto',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 22,
          padding: 'clamp(22px,3.2vw,40px)',
          background: 'linear-gradient(140deg, rgba(22,30,54,.55), rgba(10,14,28,.5))',
          border: '1px solid rgba(140,160,220,.16)',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(120% 90% at 100% 0%, color-mix(in srgb,var(--accent) 14%, transparent), transparent 55%)' }}
        />
        <div
          data-hero-grid
          className="relative grid items-center"
          style={{ gridTemplateColumns: 'minmax(0,1fr) minmax(0,.82fr)', gap: 'clamp(22px,4vw,56px)' }}
        >
          <div>
            <div className="font-heading text-[12.5px] tracking-[.2em] uppercase mb-3" style={{ color: '#8b95b2' }}>
              The migration everyone else gave up on
            </div>
            <div className="flex items-end gap-2" style={{ lineHeight: 0.82 }}>
              <span
                className="font-heading font-bold"
                style={{
                  fontSize: 'clamp(72px,10vw,120px)',
                  letterSpacing: '-.03em',
                  background: 'linear-gradient(180deg,#eef3ff,var(--accent-soft))',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                5
              </span>
              <span
                className="font-heading font-medium"
                style={{ fontSize: 'clamp(22px,2.8vw,38px)', color: 'var(--accent-soft)', paddingBottom: 'clamp(9px,1.3vw,16px)' }}
              >
                months
              </span>
            </div>
            <p style={{ maxWidth: 480, fontSize: 'clamp(13.5px,1.35vw,16px)', lineHeight: 1.62, color: '#9aa5c4', margin: '16px 0 0' }}>
              A prior team spent{' '}
              <strong style={{ color: '#dce3f6', fontWeight: 600 }}>2 years</strong> trying to migrate a
              23-server on-prem environment to Azure — and failed. I finished it in{' '}
              <strong style={{ color: '#dce3f6', fontWeight: 600 }}>5 months</strong>, coordinating 12+
              stakeholders across networking, security, and warehouse teams.
            </p>
          </div>
          <div className="flex flex-col gap-[18px]">
            <div className="grid items-center gap-3.5" style={{ gridTemplateColumns: 'auto 1fr auto' }}>
              <span style={{ fontSize: 13, color: '#9aa5c4', whiteSpace: 'nowrap', minWidth: 70, width: 77 }}>Prior team</span>
              <div style={{ height: 8, borderRadius: 99, background: 'rgba(255,255,255,.06)', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: '100%', borderRadius: 99, background: '#4a5578' }} />
              </div>
              <span style={{ fontSize: 13, color: '#c3cde8', whiteSpace: 'nowrap', fontVariantNumeric: 'tabular-nums' }}>24 mo</span>
            </div>
            <div className="grid items-center gap-3.5" style={{ gridTemplateColumns: 'auto 1fr auto' }}>
              <span style={{ fontSize: 13, color: 'var(--accent-soft)', whiteSpace: 'nowrap', minWidth: 70, width: 77 }}>My approach</span>
              <div style={{ height: 8, borderRadius: 99, background: 'rgba(255,255,255,.06)', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: '21%', borderRadius: 99, background: 'linear-gradient(90deg,var(--accent),var(--accent-soft))' }} />
              </div>
              <span style={{ fontSize: 13, color: '#c3cde8', whiteSpace: 'nowrap', fontVariantNumeric: 'tabular-nums' }}>5 mo</span>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal
        data-stat-grid
        className="grid"
        style={{ flex: '0 0 auto', gridTemplateColumns: 'repeat(3,1fr)', gap: 'clamp(12px,1.4vw,20px)' }}
      >
        {headlineStats.map((stat) => (
          <StatCard key={stat.label} count={stat.count} suffix={stat.suffix} label={stat.label} active={active} />
        ))}
      </Reveal>

      <Reveal className="flex flex-wrap" style={{ flex: '0 0 auto', gap: 'clamp(10px,1vw,14px)' }}>
        {secondaryStats.map((stat) => (
          <div
            key={stat.label}
            className="flex items-baseline gap-2.5 rounded-xl"
            style={{ padding: '10px 16px', background: 'rgba(255,255,255,.03)', border: '1px solid rgba(140,160,220,.16)' }}
          >
            <span className="font-heading font-bold text-lg" style={{ color: 'var(--accent-soft)' }}>{stat.value}</span>
            <span className="text-[12.5px]" style={{ color: '#9aa5c4' }}>{stat.label}</span>
          </div>
        ))}
      </Reveal>
    </section>
  );
};
