import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { totals } from '../data/projects';

interface Line {
  text: string;
  tone?: 'dim' | 'ok' | 'bright' | 'cmd';
  pause?: number;
  gap?: boolean;
}

const CHAR_MS = 7;

export function TerminalIntro({
  onEnter,
  reduced



}: {onEnter: () => void;reduced: boolean;}) {
  const script = useMemo<Line[]>(
    () => [
    { text: 'PRINCE.PANARA', tone: 'bright' },
    { text: '————————————————————————————————', tone: 'dim' },
    { text: 'SYSTEM BOOT', tone: 'dim', gap: true },
    { text: '[OK] INITIALIZING INTERFACE', tone: 'ok' },
    { text: '[OK] LOADING PROJECTS', tone: 'ok' },
    { text: '[OK] LOADING UI SYSTEM', tone: 'ok' },
    { text: '[OK] LOADING SCREEN LIBRARY', tone: 'ok' },
    { text: '[OK] LOADING INTERACTIONS', tone: 'ok' },
    { text: '[OK] LOADING EXPERIENCE', tone: 'ok', gap: true },
    { text: `${String(totals.projects).padStart(2, '0')} PROJECTS FOUND`, tone: 'dim' },
    { text: `${totals.screens} SCREENS FOUND`, tone: 'dim' },
    { text: 'SYSTEM READY', tone: 'bright', gap: true },
    { text: '$ whoami', tone: 'cmd' },
    { text: 'prince_panara' },
    { text: 'ui/ux designer' },
    { text: 'product designer' },
    { text: 'interface explorer', gap: true },
    { text: '$ open experience', tone: 'cmd' }],

    []
  );

  const [done, setDone] = useState(reduced);
  const [visible, setVisible] = useState<number>(reduced ? script.length : 0);
  const [typed, setTyped] = useState('');
  const timer = useRef<number>();

  // character-by-character typing, line by line
  useEffect(() => {
    if (reduced) return;
    if (visible >= script.length) {
      setDone(true);
      return;
    }
    const line = script[visible];
    let i = 0;
    const tick = () => {
      i += 1;
      setTyped(line.text.slice(0, i));
      if (i < line.text.length) {
        timer.current = window.setTimeout(tick, CHAR_MS);
      } else {
        timer.current = window.setTimeout(() => {
          setVisible((v) => v + 1);
          setTyped('');
        }, line.gap ? 120 : 34);
      }
    };
    timer.current = window.setTimeout(tick, 20);
    return () => window.clearTimeout(timer.current);
  }, [visible, script, reduced]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        onEnter();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onEnter]);

  const color = (tone?: Line['tone']) =>
  tone === 'ok' ?
  '#F5F5F3' :
  tone === 'bright' ?
  '#FFFFFF' :
  tone === 'cmd' ?
  '#FFFFFF' :
  '#8A8A8A';

  return (
    <div className="rt-scan relative flex min-h-screen w-full flex-col bg-ink px-6 py-8 sm:px-10 sm:py-10">
      <div className="flex items-center justify-between">
        <span className="rt-meta text-mid">TERMINAL · SESSION 01</span>
        <button
          onClick={onEnter}
          className="rt-meta text-mid transition-colors duration-150 ease-expo hover:text-white">
          
          SKIP [ESC]
        </button>
      </div>

      <div className="mx-auto flex w-full max-w-[760px] flex-1 flex-col justify-center font-mono text-[12px] leading-[1.85] sm:text-[13px]">
        {script.slice(0, visible).map((l, i) =>
        <div
          key={i}
          style={{ color: color(l.tone), marginBottom: l.gap ? 14 : 0 }}
          className={l.tone === 'ok' ? 'tracking-[0.06em]' : 'tracking-[0.04em]'}>
          
            {l.tone === 'ok' ?
          <>
                <span className="text-white">[OK]</span>
                <span className="text-mid">{l.text.replace('[OK]', '')}</span>
              </> :

          l.text
          }
          </div>
        )}
        {visible < script.length &&
        <div style={{ color: color(script[visible].tone) }} className="tracking-[0.04em]">
            {typed}
            <span className="ml-[1px] inline-block h-[13px] w-[7px] translate-y-[2px] bg-white" />
          </div>
        }
        {done &&
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
          className="mt-[18px] flex items-center gap-[10px] text-white">
          
            <span>$</span>
            <motion.span
            className="inline-block h-[13px] w-[7px] bg-white"
            animate={{ opacity: [1, 1, 0, 0] }}
            transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }} />
          
          </motion.div>
        }
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <motion.button
          onClick={onEnter}
          initial={{ opacity: 0 }}
          animate={{ opacity: done ? 1 : 0.35 }}
          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="group flex w-full items-center justify-between border border-white/25 px-5 py-4 text-white transition-colors duration-150 ease-expo hover:border-white sm:w-auto sm:gap-14">
          
          <span className="rt-meta">[ ENTER EXPERIENCE</span>
          <span className="text-[13px] transition-transform duration-200 ease-expo group-hover:translate-x-1">
            → ]
          </span>
        </motion.button>
        <div className="flex gap-6">
          <span className="rt-meta text-mid">PRESS ENTER</span>
          <span className="rt-meta text-mid">{totals.screens} SCREENS</span>
        </div>
      </div>
    </div>);

}