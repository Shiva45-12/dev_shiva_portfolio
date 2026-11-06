import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Reveal({
  children,
  className = '',
  animation = 'fade-up', // 'fade-up', 'fade-down', 'fade-left', 'fade-right', 'zoom-in', 'fade'
  delay = 0,
  duration = 750,
  threshold = 0.1,
  style = {},
  ...props
}) {
  const [ref, isRevealed] = useScrollReveal({ threshold });

  const getAnimationClasses = () => {
    switch (animation) {
      case 'fade-left':
        return isRevealed
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 -translate-x-8';
      case 'fade-right':
        return isRevealed
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 translate-x-8';
      case 'fade-down':
        return isRevealed
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-8';
      case 'zoom-in':
        return isRevealed
          ? 'opacity-100 scale-100'
          : 'opacity-0 scale-[0.93]';
      case 'fade':
        return isRevealed
          ? 'opacity-100'
          : 'opacity-0';
      case 'fade-up':
      default:
        return isRevealed
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8';
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', // Smooth Apple/Linear deceleration curve
        willChange: 'opacity, transform',
        ...style,
      }}
      className={`transition-all ${getAnimationClasses()} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

