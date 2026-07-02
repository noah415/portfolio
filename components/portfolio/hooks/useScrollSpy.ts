import { useEffect, useRef, useState } from 'react';

export function useScrollSpy(
  containerRef: React.RefObject<HTMLDivElement | null>,
  sectionRefs: React.RefObject<(HTMLElement | null)[]>
) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(() => {
        const count = sectionRefs.current.length;
        const idx = Math.round(container.scrollTop / container.clientHeight);
        setActiveIndex(Math.max(0, Math.min(count - 1, idx)));
        tickingRef.current = false;
      });
    };

    container.addEventListener('scroll', onScroll);
    return () => container.removeEventListener('scroll', onScroll);
  }, [containerRef, sectionRefs]);

  return activeIndex;
}
