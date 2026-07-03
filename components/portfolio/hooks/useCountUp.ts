import { useEffect, useState } from 'react';

export function useCountUp(target: number, trigger: boolean, duration = 1600) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!trigger) {
      setValue(0);
      return;
    }

    const start = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setValue(Math.round(target));
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [trigger, target, duration]);

  return value;
}
