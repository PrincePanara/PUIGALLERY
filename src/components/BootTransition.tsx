import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.23, 1, 0.32, 1] as const;

/**
 * SIGNATURE: COMMAND → EXPERIENCE.
 * The frozen terminal stretches to the viewport edges, then the black splits open.
 */
export function BootTransition({ reduced }: {reduced: boolean;}) {
  if (reduced) {
    return (
      <motion.div
        className="pointer-events-none fixed inset-0 z-[88] bg-ink"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.22, ease: EASE }}
        aria-hidden="true" />);


  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[88] overflow-hidden" aria-hidden="true">
      {/* terminal frame stretching to the edges */}
      <motion.div
        className="absolute border border-white/60"
        initial={{ top: '18%', bottom: '18%', left: '22%', right: '22%', opacity: 1 }}
        animate={{ top: 0, bottom: 0, left: 0, right: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: EASE }} />
      
      {/* black splits */}
      <motion.div
        className="absolute inset-x-0 top-0 bg-ink"
        initial={{ height: '50%', y: 0 }}
        animate={{ y: '-100%' }}
        transition={{ duration: 0.62, ease: EASE, delay: 0.16 }} />
      
      <motion.div
        className="absolute inset-x-0 bottom-0 bg-ink"
        initial={{ height: '50%', y: 0 }}
        animate={{ y: '100%' }}
        transition={{ duration: 0.62, ease: EASE, delay: 0.16 }} />
      
      {/* the seam of white light between them */}
      <motion.div
        className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 bg-white"
        initial={{ scaleX: 0.2, opacity: 0 }}
        animate={{ scaleX: 1, opacity: [0, 1, 0] }}
        transition={{ duration: 0.5, ease: EASE }} />
      
    </div>);

}