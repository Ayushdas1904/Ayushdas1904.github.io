'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    const move = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;

      // Position outer normally
      outer.style.transform = `translate3d(${x - 20}px, ${y - 20}px, 0)`; // 40x40 = 20px offset
      // Position inner based on hover size
      if (hovered) {
        inner.style.transform = `translate3d(${x - 12}px, ${y - 12}px, 0)`; // 24x24 = 12px offset
      } else {
        inner.style.transform = `translate3d(${x - 4}px, ${y - 4}px, 0)`; // 8x8 = 4px offset
      }
    };

    const checkHover = (e: MouseEvent) => {
      let el = e.target as HTMLElement | null;

      while (el && el !== document.body) {
        const style = window.getComputedStyle(el);
        if (style.cursor === 'pointer') {
          setHovered(true);
          return;
        }
        el = el.parentElement;
      }
      setHovered(false);
    };

    document.addEventListener('mousemove', move);
    document.addEventListener('mouseover', checkHover);

    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', checkHover);
    };
  }, [hovered]);

  return (
    <>
      {/* Outer Circle */}
      <div
        ref={outerRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-10 h-10 rounded-full border border-black dark:border-white transition-transform duration-150 ease-out"
      />

      {/* Inner Dot / Animated Circle */}
      <div
        ref={innerRef}
        className={`pointer-events-none fixed top-0 left-0 z-[9999] rounded-full transition-all duration-150 ease-linear
          ${hovered
            ? 'w-6 h-6 border border-black dark:border-white'
            : 'w-2 h-2 bg-black dark:bg-white'}`}
      />
    </>
  );
}
