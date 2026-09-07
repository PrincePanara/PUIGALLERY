import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useUI } from '../contexts/UIContext';

const ARROWS: Record<string, string> = {
  VIEW: '↗',
  EXPLORE: '+',
  DRAG: '↔',
  OPEN: '',
  CLOSE: '✕',
  PLAY: '▸'
};

export function CustomCursor() {
  const { cursor, pointerFine, reduced } = useUI();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 700, damping: 42, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 700, damping: 42, mass: 0.35 });
  const [velocity, setVelocity] = useState(0);
  const last = useRef({ x: 0, y: 0, t: 0 });

  useEffect(() => {
    if (!pointerFine) return;
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const now = performance.now();
      const dt = Math.max(now - last.current.t, 1);
      const dist = Math.hypot(e.clientX - last.current.x, e.clientY - last.current.y);
      last.current = { x: e.clientX, y: e.clientY, t: now };
      setVelocity(Math.min(dist / dt, 3));
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, [pointerFine, x, y]);

  useEffect(() => {
    if (!pointerFine) return;
    document.documentElement.classList.add('rt-hide-cursor');
    return () => document.documentElement.classList.remove('rt-hide-cursor');
  }, [pointerFine]);

  if (!pointerFine) return null;

  const stretch = reduced ? 1 : 1 + velocity * 0.12;
  const label = cursor;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
      style={{ x: sx, y: sy }}>
      
      <div className="relative -translate-x-1/2 -translate-y-1/2">
        {/* crosshair */}
        <motion.div
          className="relative"
          animate={{ opacity: label ? 0 : 1, scale: label ? 0.6 : 1 }}
          transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}>
          
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white"
            style={{ width: 13 * stretch, height: 1 }} />
          
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white"
            style={{ width: 1, height: 13 / stretch }} />
          
        </motion.div>
        {/* labelled state */}
        <motion.div
          className="flex items-center gap-[6px] whitespace-nowrap border border-white px-[9px] py-[5px]"
          initial={false}
          animate={{ opacity: label ? 1 : 0, scale: label ? 1 : 0.94 }}
          transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}>
          
          <span className="rt-meta text-white">{label ?? ''}</span>
          {label && ARROWS[label] && <span className="text-[10px] leading-none text-white">{ARROWS[label]}</span>}
        </motion.div>
      </div>
    </motion.div>);

}