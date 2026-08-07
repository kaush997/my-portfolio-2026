import { useEffect, useRef, useState } from "react";

function parseValue(value) {
  const match = String(value).match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { number: 0, suffix: String(value) };
  return { number: parseFloat(match[1]), suffix: match[2] };
}

export default function CountUp({ value, duration = 1500, className = "" }) {
  const { number: target, suffix } = parseValue(value);
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();

          const tick = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  );
}