import React from 'react';
import { motion } from 'framer-motion';
import { totals } from '../data/projects';

function Reveal({ children, delay = 0 }: {children: React.ReactNode;delay?: number;}) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: '105%' }}
        whileInView={{ y: '0%' }}
        viewport={{ once: true, margin: '-15%' }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay }}>
        
        {children}
      </motion.span>
    </span>);

}

export function SelectedWork() {
  return (
    <section className="w-full bg-paper px-5 pb-16 pt-8 sm:px-8 sm:pb-24 sm:pt-12">
      <div className="rt-meta text-mid">01 — INDEX</div>
      <h2
        className="mt-8 font-display font-medium text-ink"
        style={{ fontSize: 'clamp(56px, 13vw, 210px)', lineHeight: 0.84, letterSpacing: '-0.055em' }}>
        
        <Reveal>SELECTED</Reveal>
        <Reveal delay={0.06}>INTERFACES</Reveal>
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-10 border-t border-line pt-8 sm:mt-20 sm:grid-cols-3">
        {[
        [String(totals.projects).padStart(2, '0'), 'PROJECTS'],
        [String(totals.screens), 'SCREENS'],
        [String(totals.products).padStart(2, '0'), 'PRODUCTS']].
        map(([n, l], i) =>
        <motion.div
          key={l}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
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