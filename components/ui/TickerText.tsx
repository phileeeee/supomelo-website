'use client';

import { useState, useEffect, useRef } from 'react';

interface TickerTextProps {
  children: string;
  className?: string;
}

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

export default function TickerText({ children, className = '' }: TickerTextProps) {
  const [displayText, setDisplayText] = useState(children);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const originalText = children;

  useEffect(() => {
    if (isHovering) {
      let iteration = 0;
      const maxIterations = originalText.length;

      intervalRef.current = setInterval(() => {
        setDisplayText(
          originalText
            .split('')
            .map((char, index) => {
              if (index < iteration) {
                return originalText[index];
              }
              if (char === ' ') return ' ';
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('')
        );

        iteration += 1 / 2;

        if (iteration >= maxIterations) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setDisplayText(originalText);
        }
      }, 30);
    } else {
      setDisplayText(originalText);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovering, originalText]);

  return (
    <span
      className={className}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{ fontFamily: 'inherit' }}
    >
      {displayText}
    </span>
  );
}
