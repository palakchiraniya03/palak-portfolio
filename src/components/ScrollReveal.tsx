import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect reduced motion preference
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) {
      setIsVisible(true);
      return;
    }

    // Safety fallback: ensure elements reveal within 1 second regardless of viewport calculation delays
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000 + delay);

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      clearTimeout(timer);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          clearTimeout(timer);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold: 0.01, rootMargin: '0px 0px 0px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [delay]);

  const getVisibilityClasses = () => {
    if (isVisible) return 'opacity-100 translate-x-0 translate-y-0';

    switch (direction) {
      case 'up':
        return 'opacity-0 translate-y-6';
      case 'down':
        return 'opacity-0 -translate-y-6';
      case 'left':
        return 'opacity-0 translate-x-6';
      case 'right':
        return 'opacity-0 -translate-x-6';
      case 'none':
        return 'opacity-0';
      default:
        return 'opacity-0 translate-y-6';
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: '600ms',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform',
      }}
      className={`transition-all ${getVisibilityClasses()} ${className}`}
    >
      {children}
    </div>
  );
};
