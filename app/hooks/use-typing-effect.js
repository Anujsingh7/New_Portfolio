'use client';
import { useState, useEffect, useRef } from 'react';

export function useTypingEffect(text, speed = 50, startDelay = 500) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const indexRef = useRef(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Show all text immediately if user prefers reduced motion
      setDisplayedText(text);
      setIsComplete(true);
      return;
    }

    // Start typing after initial delay
    const startTimeout = setTimeout(() => {
      const typeNextChar = () => {
        if (indexRef.current < text.length) {
          setDisplayedText(text.substring(0, indexRef.current + 1));
          indexRef.current += 1;
          
          // Add slight delay for newlines to create natural pauses
          const currentChar = text[indexRef.current - 1];
          const delay = currentChar === '\n' ? speed * 3 : speed;
          
          timeoutRef.current = setTimeout(typeNextChar, delay);
        } else {
          setIsComplete(true);
        }
      };

      typeNextChar();
    }, startDelay);

    return () => {
      clearTimeout(startTimeout);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text, speed, startDelay]);

  return { displayedText, isComplete };
}
