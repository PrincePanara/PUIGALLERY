import React from 'react';
import { motion } from 'framer-motion';
import { useUI } from '../contexts/UIContext';

const LINKS: [string, string][] = [
['EMAIL', 'mailto:hello@princepanara.design'],
['TWITTER', 'https://twitter.com'],
['GITHUB', 'https://github.com']];




export function Contact({ onExit }: {onExit: () => void;}) {
  const { hoverProps } = useUI();

  return (
    <section id="contact" className="w-full bg-off px-5 py-16 sm:px-8 sm:py-24">
      <div className="flex items-baseline justify-between border-b border-line pb-5">
        <span className="rt-meta text-mid">03 — CONTACT</span>
        <span className="rt-meta text-mid">RESPONDS IN 24H</span>
      </div>

      <div className="mt-10 grid grid-cols-1 border-t border-line sm:grid-cols-3">
        {LINKS.map(([label, href]) =>
        <a
          key={label}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel="noreferrer"
          {...hoverProps('OPEN')}
          className="group flex items-center justify-between border-b border-line px-1 py-7 transition-colors duration-150 ease-expo hover:bg-ink hover:text-paper sm:border-b-0 sm:border-r sm:last:border-r-0">
          
            <span className="font-display text-[22px] font-medium tracking-[-0.03em] sm:text-[26px]">
              {label}
            </span>
            <span className="text-[15px] transition-transform duration-200 ease-expo group-hover:-translate-y-1 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        )}
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
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