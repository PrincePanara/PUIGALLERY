import React from 'react';
import { motion } from 'framer-motion';

const LINES = ['I DESIGN', 'INTERFACES,', 'PRODUCTS &', 'DIGITAL', 'EXPERIENCES.'];
const TAGS = ['UI / UX', 'PRODUCT', 'WEB', 'MOBILE', 'INTERACTION'];

export function About() {
  return (
    <section id="about" className="w-full bg-ink px-5 py-16 sm:px-8 sm:py-24">
      <div className="flex items-baseline justify-between border-b border-white/12 pb-5">
        <span className="rt-meta text-mid">02 — ABOUT</span>
        <span className="rt-meta text-mid">KOLKATA · IST</span>
      </div>

      <h2
        className="mt-12 font-display font-medium text-white sm:mt-16"
        style={{ fontSize: 'clamp(40px, 7vw, 110px)', lineHeight: 0.9, letterSpacing: '-0.05em' }}>
        
        <span className="block overflow-hidden">
          <motion.span
            className="block"
            initial={{ y: '105%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}>
            
            A LITTLE
          </motion.span>
        </span>
        <span className="block overflow-hidden text-mid">
          <motion.span
            className="block"
            initial={{ y: '105%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.06 }}>
            
            ABOUT ME.
          </motion.span>
        </span>
      </h2>

      <div className="mt-16 grid grid-cols-1 gap-14 sm:mt-24 lg:grid-cols-[1fr_240px]">
        <div
          className="font-display font-medium text-white"
          style={{ fontSize: 'clamp(38px, 8.4vw, 132px)', lineHeight: 0.88, letterSpacing: '-0.055em' }}>
          
          {LINES.map((l, i) =>
          <span key={l} className="block overflow-hidden">
              <motion.span
              className="block"
              initial={{ y: '105%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1], delay: i * 0.05 }}>
              
                {l}
              </motion.span>
            </span>
          )}
        </div>

        <div className="flex flex-col gap-3 lg:pt-4">
          {TAGS.map((t) =>
          <div key={t} className="flex items-center justify-between border-b border-white/12 pb-3">
              <span className="rt-meta text-mid">{t}</span>
              <span className="rt-meta text-white/30">●</span>
            </div>
          )}
          <p className="mt-6 max-w-[240px] text-[13px] leading-[1.6] text-mid">
            Six years designing products end to end. I work in systems, ship with engineers, and
            care about the fourth screen as much as the first.
          </p>
        </div>
      </div>
    </section>);

}