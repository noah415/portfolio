import React from 'react';

export interface ComparisonBar {
  label: string;
  value: string;
  fillPercent: number;
  accent?: boolean;
}

interface MetricHeroCardProps {
  eyebrow: string;
  statPrefix?: string;
  stat: string;
  statSuffix: string;
  body: React.ReactNode;
  bars: ComparisonBar[];
}

export const MetricHeroCard = ({ eyebrow, statPrefix, stat, statSuffix, body, bars }: MetricHeroCardProps) => {
  return (
    <div
      className="relative overflow-hidden rounded-[22px]"
      style={{
        padding: 'clamp(20px,2.6vw,32px)',
        background: 'linear-gradient(140deg, rgba(22,30,54,.55), rgba(10,14,28,.5))',
        border: '1px solid rgba(140,160,220,.16)',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(120% 90% at 100% 0%, color-mix(in srgb,var(--accent) 14%, transparent), transparent 55%)' }}
      />
      <div className="relative">
        <div className="font-heading text-[12px] tracking-[.2em] uppercase mb-3" style={{ color: '#8b95b2' }}>
          {eyebrow}
        </div>

        <div className="flex items-end" style={{ gap: statPrefix ? 2 : 6, lineHeight: 0.82 }}>
          {statPrefix && (
            <span
              className="font-heading font-medium"
              style={{ fontSize: 'clamp(24px,3vw,34px)', color: 'var(--accent-soft)', paddingBottom: 'clamp(6px,1vw,11px)' }}
            >
              {statPrefix}
            </span>
          )}
          <span
            className="font-heading font-bold"
            style={{
              fontSize: 'clamp(48px,6.5vw,76px)',
              letterSpacing: '-.03em',
              background: 'linear-gradient(180deg,#eef3ff,var(--accent-soft))',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            {stat}
          </span>
          <span
            className="font-heading font-medium"
            style={{ fontSize: 'clamp(18px,2vw,26px)', color: 'var(--accent-soft)', paddingBottom: 'clamp(6px,1vw,11px)' }}
          >
            {statSuffix}
          </span>
        </div>

        <p style={{ maxWidth: 420, fontSize: 'clamp(12.5px,1.2vw,14.5px)', lineHeight: 1.58, color: '#9aa5c4', margin: '14px 0 18px' }}>
          {body}
        </p>

        <div className="flex flex-col gap-[14px]">
          {bars.map((bar) => (
            <div key={bar.label} className="grid items-center gap-3" style={{ gridTemplateColumns: 'auto 1fr auto' }}>
              <span
                className="text-[12.5px]"
                style={{ color: bar.accent ? 'var(--accent-soft)' : '#9aa5c4', whiteSpace: 'nowrap', width: 68 }}
              >
                {bar.label}
              </span>
              <div style={{ height: 7, borderRadius: 99, background: 'rgba(255,255,255,.06)', overflow: 'hidden' }}>
                <div
                  style={{
                    height: '100%',
                    width: `${bar.fillPercent}%`,
                    borderRadius: 99,
                    background: bar.accent ? 'linear-gradient(90deg,var(--accent),var(--accent-soft))' : '#4a5578',
                  }}
                />
              </div>
              <span
                className="text-[12.5px]"
                style={{ color: '#c3cde8', whiteSpace: 'nowrap', fontVariantNumeric: 'tabular-nums' }}
              >
                {bar.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
