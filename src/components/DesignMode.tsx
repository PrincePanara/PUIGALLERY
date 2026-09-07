import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useUI } from '../contexts/UIContext';

/** Signature feature: reveals the grid, spacing and measurements the site is built on. */
export function DesignModeOverlay() {
  const { designMode } = useUI();
  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const measure = () => setSize({ w: window.innerWidth, h: window.innerHeight });
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const cols = size.w < 720 ? 4 : 12;

  return (
    <AnimatePresence>
      {designMode &&
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
        className="pointer-events-none fixed inset-0 z-[60]"
        aria-hidden="true">
        
          <div className="absolute inset-0 px-5 sm:px-8">
            <div className="grid h-full" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 24 }}>
              {Array.from({ length: cols }).map((_, i) =>
            <div key={i} style={{ background: 'rgba(0,255,209,0.055)', borderLeft: '1px solid rgba(0,255,209,0.35)' }} />
            )}
            </div>
          </div>

          {/* baseline rhythm */}
          <div
          className="absolute inset-0"
          style={{
            backgroundImage:
            'repeating-linear-gradient(to bottom, rgba(0,255,209,0.16) 0 1px, transparent 1px 96px)'
          }} />
        

          {/* edge measurements */}
          <div className="absolute left-5 top-1/2 -translate-y-1/2 sm:left-8">
            <div className="rt-meta rotate-180 text-[#00A98C]" style={{ writingMode: 'vertical-rl' }}>
              H {size.h}
            </div>
          </div>
          <div className="absolute left-1/2 top-4 -translate-x-1/2">
            <div className="rt-meta text-[#00A98C]">W {size.w}</div>
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <div className="rt-meta text-[#00A98C]">
              {cols} COLUMN GRID · GAP 24 · MARGIN {size.w < 720 ? 20 : 32}
            </div>
          </div>
        </motion.div>
      }
    </AnimatePresence>);

}

export function DesignModeToggle() {
  const { designMode, setDesignMode, hoverProps } = useUI();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'd' && !e.metaKey && !e.ctrlKey) setDesignMode(!designMode);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [designMode, setDesignMode]);

  return (
    <button
      onClick={() => setDesignMode(!designMode)}
      {...hoverProps('OPEN')}
      aria-pressed={designMode}
      className="fixed bottom-4 left-4 z-[70] flex items-center gap-2 border px-3 py-2 transition-colors duration-150 ease-expo"
      style={{
        borderColor: designMode ? '#00FFD1' : 'rgba(138,138,138,0.5)',
        background: designMode ? 'rgba(0,255,209,0.08)' : 'rgba(5,5,5,0.72)',
        color: designMode ? '#00FFD1' : '#F5F5F3',
        backdropFilter: 'blur(6px)'
      }}>
      
      <span className="text-[9px] leading-none">{designMode ? '◉' : '○'}</span>
      <span className="rt-meta">DESIGN MODE</span>
    </button>);

}