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
        // Measure against each section's real offset rather than assuming every
        // section is exactly one viewport tall. On mobile [data-section] becomes
        // height:auto/min-height:100vh, so a section can run well past one
        // screen — dividing scrollTop by the viewport height would flag the next
        // section as active while the current one is still filling the screen.
        const sections = sectionRefs.current;
        const center = container.scrollTop + container.clientHeight / 2;

        let idx = 0;
        for (let i = 0; i < sections.length; i += 1) {
          const section = sections[i];
          if (section && section.offsetTop <= center) idx = i;
        }

        setActiveIndex(idx);
        tickingRef.current = false;
      });
    };

    container.addEventListener('scroll', onScroll);
    return () => container.removeEventListener('scroll', onScroll);
  }, [containerRef, sectionRefs]);

  return activeIndex;
}
