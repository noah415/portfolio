import { useEffect, useRef, useState } from 'react';
import { useRevealRoot } from '../RevealContext';

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [revealed, setRevealed] = useState(false);
  const rootRef = useRevealRoot();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Keep observing (don't unobserve) so the reveal replays every time the
        // element enters, and plays in reverse (via the shared CSS transition)
        // every time it leaves.
        setRevealed(entry.isIntersecting);
      },
      { root: rootRef?.current ?? null, threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootRef]);

  return { ref, revealed };
}
