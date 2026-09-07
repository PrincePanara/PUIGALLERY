import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Screen } from '../../types/project';

const CIRCLED = ['①', '②', '③', '④'];

/** Tiny numbered markers over the UI. Used sparingly — two per screen at most. */
export function InteractionNotes({ screen }: {screen: Screen;}) {
  const [open, setOpen] = useState<number | null>(null);

  if (!screen.notes?.length) return null;

  return (
    <div className="pointer-events-none absolute inset-0 hidden sm:block">
      {screen.notes.map((note, i) =>
      <div
        key={i}
        className="pointer-events-auto absolute"
        style={{ left: `${note.x}%`, top: `${note.y}%`, transform: 'translate(-50%,-50%)' }}>
        
          <button
          onMouseEnter={() => setOpen(i)}
          onMouseLeave={() => setOpen(null)}
          onClick={() => setOpen(open === i ? null : i)}
          aria-label={`${note.kind}: ${note.body}`}
          className="flex h-[24px] w-[24px] items-center justify-center rounded-full text-[12px] leading-none transition-colors duration-150 ease-expo"
          style={{
            background: open === i ? '#050505' : 'rgba(5,5,5,0.72)',
            color: '#fff',
            boxShadow: '0 0 0 3px rgba(255,255,255,0.55)'
          }}>
          
            {CIRCLED[i] ?? '●'}
          </button>
          <AnimatePresence>
            {open === i &&
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
            className="absolute left-1/2 top-[32px] w-[220px] -translate-x-1/2 border border-white/20 bg-ink p-3">
            
                <span className="rt-meta text-white/55">{note.kind}</span>
                <p className="mt-2 text-[12px] leading-[1.5] text-off">{note.body}</p>
              </motion.div>
          }
          </AnimatePresence>
        </div>
      )}
    </div>);

}