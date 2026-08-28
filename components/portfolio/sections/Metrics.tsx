import React from 'react';
import { Reveal } from '../Reveal';
import { MetricHeroCard } from '../MetricHeroCard';
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
        data-hero-grid
        className="grid"
        style={{ flex: '0 0 auto', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 'clamp(14px,1.6vw,20px)' }}
      >
        <MetricHeroCard
          eyebrow="The migration everyone else gave up on"
          stat="5"
          statSuffix="months"
          body={
            <>
              A prior team spent{' '}
              <strong style={{ color: '#dce3f6', fontWeight: 600 }}>2 years</strong> trying to migrate a
              23-server on-prem environment to Azure — and failed. I finished it in{' '}
              <strong style={{ color: '#dce3f6', fontWeight: 600 }}>5 months</strong>, coordinating 12+
              stakeholders across networking, security, and warehouse teams.
            </>
          }
          bars={[
            { label: 'Prior team', value: '24 mo', fillPercent: 100 },
            { label: 'My approach', value: '5 mo', fillPercent: 21, accent: true },
          ]}
        />
        <MetricHeroCard
          eyebrow="Annualized savings, unlocked"
          statPrefix="$"
          stat="350k"
          statSuffix="savings per year"
          body={
            <>
              Driven by a codebase refactor I proposed, designed, and led — cutting the code required to
              ship a new feature <strong style={{ color: '#dce3f6', fontWeight: 600 }}>73%</strong>, from{' '}
              <strong style={{ color: '#dce3f6', fontWeight: 600 }}>532 lines</strong> down to{' '}
              <strong style={{ color: '#dce3f6', fontWeight: 600 }}>140</strong>.
            </>
          }
          bars={[
            { label: 'Lines · before', value: '532', fillPercent: 100 },
            { label: 'Lines · after', value: '140', fillPercent: 26.3, accent: true },
          ]}
        />
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
