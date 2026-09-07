import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const WORD = 'hello';

export function EasterEgg() {
  const [open, setOpen] = useState(false);
  const buffer = useRef('');

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === 'Escape') {
        setOpen(false);
        return;
      }
      if (e.key.length !== 1) return;
      buffer.current = (buffer.current + e.key.toLowerCase()).slice(-WORD.length);
      if (buffer.current === WORD) {
        buffer.current = '';
        setOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <AnimatePresence>
      {open &&
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
        className="rt-scan fixed inset-0 z-[95] flex items-center justify-center bg-ink/97 px-6"
        role="dialog"
        aria-label="Hidden terminal">
        
          <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
          className="w-full max-w-[440px] border border-white/18 bg-ink p-7 font-mono text-[13px] leading-[1.9] text-white">
          
            <div className="text-white">$ hello</div>
            <div className="mt-4 text-mid">
              hello, explorer.
              <br />
              you found something
              <br />
              that wasn&apos;t supposed to
              <br />
              be obvious.
            </div>
            <div className="mt-4 text-white">nice.</div>
            <button
            onClick={() => setOpen(false)}
            className="mt-7 w-full border border-white/25 py-3 transition-colors duration-150 ease-expo hover:border-white">
            
              <span className="rt-meta">[ RETURN ]</span>
            </button>
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>);

}