import React from 'react';
import { motion } from 'framer-motion';
import { totals } from '../data/projects';



export function SelectedWork() {
  return (
    <section className="w-full bg-paper px-5 pb-4 pt-8 sm:px-8 sm:pb-12 sm:pt-12">
      <div className="rt-meta text-mid">01 — INDEX</div>


      <div className="mt-6 grid grid-cols-3 gap-4 border-t border-line pt-6 sm:mt-12 sm:gap-10 sm:pt-8">
        {[
        [String(totals.projects).padStart(2, '0'), 'PROJECTS'],
        [String(totals.screens), 'SCREENS'],
        [String(totals.products).padStart(2, '0'), 'PRODUCTS']].
        map(([n, l], i) =>
        <motion.div
          key={l}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1], delay: i * 0.05 }}>
          
            <div
            className="font-display font-medium text-ink"
            style={{ fontSize: 'clamp(52px, 8vw, 104px)', lineHeight: 0.86, letterSpacing: '-0.05em' }}>
            
              {n}
            </div>
            <div className="rt-meta mt-3 text-mid">{l}</div>
          </motion.div>
        )}
      </div>
    </section>);

}