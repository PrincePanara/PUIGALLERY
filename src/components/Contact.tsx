import React from 'react';
import { motion } from 'framer-motion';
import { useUI } from '../contexts/UIContext';

const LINKS: [string, string][] = [
['EMAIL', 'mailto:hello@princepanara.design'],
['TWITTER', 'https://twitter.com'],
['GITHUB', 'https://github.com'],
['INSTAGRAM', 'https://instagram.com']];


function Big({ words, delay = 0 }: {words: string[];delay?: number;}) {
  return (
    <>
      {words.map((w, i) =>
      <span key={w + i} className="block overflow-hidden">
          <motion.span
          className="block"
          initial={{ y: '105%' }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.62, ease: [0.23, 1, 0.32, 1], delay: delay + i * 0.045 }}>
          
            {w}
          </motion.span>
        </span>
      )}
    </>);

}

export function Contact({ onExit }: {onExit: () => void;}) {
  const { hoverProps } = useUI();

  return (
    <section id="contact" className="w-full bg-off px-5 py-28 sm:px-8 sm:py-40">
      <div className="flex items-baseline justify-between border-b border-line pb-5">
        <span className="rt-meta text-mid">03 — CONTACT</span>
        <span className="rt-meta text-mid">RESPONDS IN 24H</span>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-16 sm:mt-32 lg:grid-cols-[1.15fr_1fr]">
        <div
          className="font-display font-medium text-ink"
          style={{ fontSize: 'clamp(56px, 12vw, 190px)', lineHeight: 0.82, letterSpacing: '-0.06em' }}>
          
          <Big words={['SO...', 'HAVE', 'AN', 'IDEA?']} />
        </div>
        <div
          className="font-display font-medium text-mid lg:pt-10"
          style={{ fontSize: 'clamp(46px, 9vw, 140px)', lineHeight: 0.84, letterSpacing: '-0.06em' }}>
          
          <Big words={["LET'S", 'MAKE', 'IT', 'REAL.']} delay={0.08} />
        </div>
      </div>

      <div className="mt-24 grid grid-cols-1 border-t border-line sm:mt-36 sm:grid-cols-2 lg:grid-cols-4">
        {LINKS.map(([label, href]) =>
        <a
          key={label}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel="noreferrer"
          {...hoverProps('OPEN')}
          className="group flex items-center justify-between border-b border-line px-1 py-7 transition-colors duration-150 ease-expo hover:bg-ink hover:text-paper sm:border-r sm:last:border-r-0">
          
            <span className="font-display text-[22px] font-medium tracking-[-0.03em] sm:text-[26px]">
              {label}
            </span>
            <span className="text-[15px] transition-transform duration-200 ease-expo group-hover:-translate-y-1 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        )}
      </div>

      <div className="mt-16 flex flex-wrap items-center justify-between gap-6">
        <span className="rt-meta text-mid">END OF EXPERIENCE</span>
        <button
          onClick={onExit}
          {...hoverProps('CLOSE')}
          className="group flex items-center gap-8 border border-ink px-5 py-4 transition-colors duration-150 ease-expo hover:bg-ink hover:text-paper">
          
          <span className="rt-meta">[ EXIT EXPERIENCE</span>
          <span className="text-[13px] transition-transform duration-200 ease-expo group-hover:translate-x-1">
            → ]
          </span>
        </button>
      </div>
    </section>);

}