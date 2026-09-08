import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useUI } from '../contexts/UIContext';
import { totals } from '../data/projects';

const DISCIPLINES = ['UI / UX', 'PRODUCT', 'WEB', 'MOBILE', 'INTERACTION'];

export function Hero() {
  const { reduced, pointerFine } = useUI();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const x1 = useSpring(px, { stiffness: 90, damping: 20 });
  const y1 = useSpring(py, { stiffness: 90, damping: 20 });
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!pointerFine || reduced) return;
    const move = (e: PointerEvent) => {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      px.set(nx);
      py.set(ny);
      setCoords({ x: Math.round(e.clientX), y: Math.round(e.clientY) });
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, [pointerFine, reduced, px, py]);

  return (
    <section className="relative flex min-h-[100svh] w-full flex-col justify-between overflow-hidden bg-paper pt-16 sm:pt-20">


      <div className="relative px-4 sm:px-6">
        <motion.h1
          className="select-none font-display font-medium text-ink"
          style={{ fontSize: 'clamp(84px, 21.5vw, 380px)', lineHeight: 0.8, letterSpacing: '-0.055em' }}>
          
          {['PRINCE', 'PANARA'].map((word, i) =>
          <span key={word} className="block overflow-hidden">
              <motion.span
              className="block"
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{
                duration: reduced ? 0.2 : 0.85,
                ease: [0.23, 1, 0.32, 1],
                delay: reduced ? 0 : 0.1 + i * 0.09
              }}>
              
                <motion.span
                className="block"
                style={{ x: reduced ? 0 : x1, y: reduced ? 0 : y1 }}>
                
                  {word}
                </motion.span>
              </motion.span>
            </span>
          )}
        </motion.h1>
      </div>

      <div className="flex flex-col gap-8 px-5 pb-6 sm:px-8 sm:pb-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="max-w-[420px]">
            
            <p className="font-display text-[17px] leading-[1.35] tracking-[-0.02em] text-ink sm:text-[20px]">
              “I design interfaces that are meant to be used, not just looked at.”
            </p>
            <div className="mt-5 flex items-center gap-2">
              <span className="inline-block h-[6px] w-[6px] rounded-full bg-ink" />
              <span className="rt-meta text-ink">AVAILABLE FOR SELECTED PROJECTS</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap gap-x-6 gap-y-2 sm:flex-col sm:gap-y-1 sm:text-right">
            
            {DISCIPLINES.map((d) =>
            <span key={d} className="rt-meta text-mid">
                {d}
              </span>
            )}
          </motion.div>
        </div>

        <div className="flex items-center justify-between border-t border-line pt-4">
          <motion.span
            className="rt-meta text-ink"
            animate={reduced ? {} : { y: [0, 3, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}>
            
            SCROLL TO EXPLORE ↓
          </motion.span>
          <span className="rt-meta text-mid">2026</span>
        </div>
      </div>
    </section>);

}