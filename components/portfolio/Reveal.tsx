import React from 'react';
import { useReveal } from './hooks/useReveal';

type RevealProps<T extends keyof React.JSX.IntrinsicElements> = {
  as?: T;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'className' | 'children' | 'ref'>;

export function Reveal<T extends keyof React.JSX.IntrinsicElements = 'div'>({
  as,
  className,
  children,
  ...rest
}: RevealProps<T>) {
  const { ref, revealed } = useReveal<HTMLElement>();
  const Tag = (as || 'div') as React.ElementType;

  return (
    <Tag
      ref={ref}
      data-reveal
      className={[className, revealed ? 'revealed' : ''].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </Tag>
  );
}
