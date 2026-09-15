import React, { useEffect, useRef, useState } from 'react';

interface CountUpNumberProps {
  end?: number;
  suffix?: string;
  duration?: number;
}

export const CountUpNumber: React.FC<CountUpNumberProps> = ({
  end = 250,
  suffix = '+',
  duration = 1800,
}) => {
  const [count, setCount] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    let animationFrameId: number;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;

          let startTime: number | null = null;

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Quadratic ease-out
            const easedProgress = progress * (2 - progress);
            const currentCount = Math.floor(easedProgress * end);

            setCount(currentCount);

            if (progress < 1) {
              animationFrameId = requestAnimationFrame(animate);
            } else {
              setCount(end);
              setIsCompleted(true);
            }
          };

          animationFrameId = requestAnimationFrame(animate);

          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      observer.disconnect();
    };
  }, [end, duration]);

  return (
    <span ref={ref}>
      {count}{isCompleted ? suffix : ''}
    </span>
  );
};




