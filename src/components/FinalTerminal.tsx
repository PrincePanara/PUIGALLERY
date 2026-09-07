import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { totals } from '../data/projects';

export function FinalTerminal({
  onReturn,
  screensExplored,
  reduced




}: {onReturn: () => void;screensExplored: number;reduced: boolean;}) {
  const lines = useMemo(
    () => [
    { t: '$ exit', tone: 'cmd' as const },
    { t: 'closing experience...', tone: 'dim' as const, gap: true },
    { t: `projects explored: ${String(totals.projects).padStart(2, '0')}`, tone: 'dim' as const },
    { t: `screens explored: ${screensExplored}`, tone: 'dim' as const, gap: true },
    { t: 'thanks for stopping by.', tone: 'bright' as const }],

    [screensExplored]
  );

  const [visible, setVisible] = useState(reduced ? lines.length : 0);
  const [typed, setTyped] = useState('');
  const timer = useRef<number>();

  useEffect(() => {
    if (reduced || visible >= lines.length) return;
    const line = lines[visible];
    let i = 0;
    const tick = () => {
      i += 1;
      setTyped(line.t.slice(0, i));
      if (i < line.t.length) timer.current = window.setTimeout(tick, 16);else

      timer.current = window.setTimeout(() => {
        setVisible((v) => v + 1);
        setTyped('');
      }, 140);
    };
    timer.current = window.setTimeout(tick, 40);
    return () => window.clearTimeout(timer.current);
  }, [visible, lines, reduced]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === 'Escape') onReturn();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onReturn]);

  const color = (tone: string) => tone === 'dim' ? '#8A8A8A' : '#FFFFFF';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
      className="rt-scan fixed inset-0 z-[80] flex flex-col bg-ink px-6 py-8 sm:px-10 sm:py-10">
      
      <span className="rt-meta text-mid">TERMINAL · SESSION CLOSED</span>

      <div className="mx-auto flex w-full max-w-[720px] flex-1 flex-col justify-center font-mono text-[12px] leading-[1.9] sm:text-[13px]">
        {lines.slice(0, visible).map((l, i) =>
        <div key={i} style={{ color: color(l.tone), marginBottom: l.gap ? 14 : 0 }}>
            {l.t}
          </div>
        )}
        {visible < lines.length && <div style={{ color: color(lines[visible].tone) }}>{typed}</div>}
        <div className="mt-4 flex items-center gap-2 text-white">
          <span>$</span>
          <motion.span
            className="inline-block h-[13px] w-[7px] bg-white"
            animate={{ opacity: [1, 1, 0, 0] }}
            transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }} />
          
        </div>
      </div>

      <div className="flex flex-col gap-6 border-t border-white/12 pt-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div
            className="font-display font-medium text-white"
            style={{ fontSize: 'clamp(28px, 5vw, 60px)', lineHeight: 0.9, letterSpacing: '-0.05em' }}>
            
            PRINCE PANARA
          </div>
          <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1">
            <span className="rt-meta text-mid">UI / UX / PRODUCT</span>
            <span className="rt-meta text-mid">WEB / MOBILE</span>
            <span className="rt-meta text-mid">© 2026</span>
          </div>
        </div>
        <button
          onClick={onReturn}
          className="group flex items-center gap-8 border border-white/25 px-5 py-4 text-white transition-colors duration-150 ease-expo hover:border-white">
          
          <span className="rt-meta">[ RETURN</span>
          <span className="text-[13px] transition-transform duration-200 ease-expo group-hover:-translate-x-1">
            ← ]
          </span>
        </button>
      </div>
    </motion.div>);

}