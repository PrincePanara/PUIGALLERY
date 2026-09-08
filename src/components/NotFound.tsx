import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from './SEO';

export function NotFound({ onHome }: { onHome: () => void }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="flex min-h-[100svh] w-full flex-col items-center justify-center bg-paper px-6 text-center">
      
      <SEO title="404 — Page Not Found | Prince Panara" description="The interface you're looking for doesn't exist." />

      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.1, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}>
        <h1 className="font-display text-[120px] font-medium leading-[0.85] tracking-tightest text-ink sm:text-[200px]">
          404
        </h1>
        <p className="rt-meta mt-6 text-mid">PAGE NOT FOUND</p>
        <p className="font-display mt-8 text-xl leading-[1.4] text-ink sm:text-2xl">
          The interface you're looking for doesn't exist.
        </p>

        <button
          onClick={onHome}
          className="rt-meta mt-12 transition-colors duration-200 hover:text-ink text-mid border border-line px-6 py-3 rounded-full">
          [ BACK HOME ]
        </button>
      </motion.div>
    </motion.main>
  );
}
