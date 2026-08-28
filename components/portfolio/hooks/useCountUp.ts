import { useEffect, useRef, useState } from 'react';

export function useCountUp(target: number, trigger: boolean, duration = 1600) {
  const [value, setValue] = useState(0);
  // Once a target has finished counting, it stays counted. Rewinding to 0 on
  // the way out means a stat that is still on screen — mobile sections run
  // taller than the viewport — can blank itself back to 0 while the reader is
  // looking straight at it.
  const settledForRef = useRef<number | null>(null);

  useEffect(() => {
    if (!trigger || settledForRef.current === target) return;

    const start = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setValue(Math.round(target));
        settledForRef.current = target;
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [trigger, target, duration]);

  return value;
}
