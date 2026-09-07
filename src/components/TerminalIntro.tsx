import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CHAR_MS = 25; // Faster typing for terminal feel

interface Line {
  text: string;
  delayBefore?: number;
  gap?: boolean; // Adds a larger margin below
}

const lines: Line[] = [
  { text: "Hello, guys.", delayBefore: 500, gap: true },
  { text: "Welcome to", delayBefore: 400 },
  { text: "Prince's UI Gallery.", delayBefore: 0, gap: true },
  { text: "A little space for", delayBefore: 400 },
  { text: "interfaces, ideas & experiences.", delayBefore: 0, gap: true }
];

export function TerminalIntro({
  onEnter,
  reduced
}: {onEnter: () => void;reduced: boolean;}) {
  const [visibleLines, setVisibleLines] = useState<number>(reduced ? lines.length : 0);
  const [typed, setTyped] = useState('');
  const [done, setDone] = useState(reduced);
  const timer = useRef<number>();

  useEffect(() => {
    if (reduced) return;
    if (visibleLines >= lines.length) {
      setDone(true);
      return;
    }

    const currentLine = lines[visibleLines];
    let charIndex = 0;

    const tick = () => {
      charIndex += 1;
      setTyped(currentLine.text.slice(0, charIndex));
      
      if (charIndex < currentLine.text.length) {
        timer.current = window.setTimeout(tick, CHAR_MS);
      } else {
        // Line finished typing
        const nextDelay = visibleLines + 1 < lines.length 
          ? (lines[visibleLines + 1].delayBefore || 200) 
          : 500;
        
        timer.current = window.setTimeout(() => {
          setVisibleLines((v) => v + 1);
          setTyped('');
        }, nextDelay);
      }
    };

    // Initial delay before starting the line
    const startDelay = visibleLines === 0 ? (currentLine.delayBefore || 0) : 0;
    timer.current = window.setTimeout(tick, startDelay || 20);

    return () => window.clearTimeout(timer.current);
  }, [visibleLines, reduced]);

  useEffect(() => {
    if (done && !reduced) {
      const autoEnterTimer = window.setTimeout(() => {
        onEnter();
      }, 1500); // 1.5 second pause after finishing before auto-entering
      return () => window.clearTimeout(autoEnterTimer);
    }
  }, [done, reduced, onEnter]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === 'Escape') {
        e.preventDefault();
        onEnter();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onEnter]);

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-ink px-6 py-8 sm:px-10 sm:py-10 text-white font-sans selection:bg-white/20">
      
      {/* Top Bar - MacBook Header */}
      <div className="flex items-center justify-center sm:justify-between border-b border-white/10 pb-4">
        <span className="rt-meta tracking-widest text-mid hidden sm:block">macOS</span>
        <span className="font-display tracking-widest text-sm text-white/80">PRINCE'S MACBOOK</span>
        <button
          onClick={onEnter}
          className="rt-meta text-mid transition-colors duration-150 ease-expo hover:text-white hidden sm:block">
          SKIP [ESC]
        </button>
      </div>

      {/* Main Content Area */}
      <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center px-4 sm:px-0">
        <div className="font-mono text-[14px] sm:text-[15px] leading-[1.8] tracking-widest text-white/90">
          
          {lines.slice(0, visibleLines).map((l, i) => (
            <div key={i} className={`opacity-100 ${l.gap ? 'mb-6 sm:mb-8' : 'mb-1'}`}>
              <span className="text-white/40 mr-3">&gt;</span>{l.text}
            </div>
          ))}
          
          {visibleLines < lines.length && (
            <div className={`${lines[visibleLines].gap ? 'mb-6 sm:mb-8' : 'mb-1'}`}>
              <span className="text-white/40 mr-3">&gt;</span>{typed}
              <motion.span
                className="ml-[2px] inline-block h-[15px] w-[8px] translate-y-[2px] bg-white"
                animate={{ opacity: [1, 1, 0, 0] }}
                transition={{ duration: 0.9, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
              />
            </div>
          )}
          
          {/* Keep cursor blinking at the end before it transitions */}
          {done && (
            <div className="mb-1">
              <span className="text-white/40 mr-3">&gt;</span>
              <motion.span
                className="ml-[2px] inline-block h-[15px] w-[8px] translate-y-[2px] bg-white"
                animate={{ opacity: [1, 1, 0, 0] }}
                transition={{ duration: 0.9, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
              />
            </div>
          )}
        </div>
      </div>
      
    </div>
  );
}