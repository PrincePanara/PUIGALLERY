import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import type { Project, Screen } from '../../types/project';
import { Device, deviceSize } from '../mockups/Device';
import { ScreenRender } from '../screens/registry';
import { useUI } from '../../contexts/UIContext';
import { useViewport } from '../../hooks/useViewport';
import { InteractionNotes } from './InteractionNotes';

export function ScreenViewer({
  project,
  index,
  setIndex,
  onZoom





}: {project: Project;index: number;setIndex: (i: number) => void;onZoom: (s: Screen) => void;}) {
  const { hoverProps, reduced, designMode } = useUI();
  const vp = useViewport();
  const sectionRef = useRef<HTMLElement>(null);
  const [film, setFilm] = useState<'off' | 'play' | 'pause'>('off');
  const [showWhy, setShowWhy] = useState(false);
  const n = project.screens.length;
  const screen = project.screens[Math.min(index, n - 1)];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end']
  });

  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    const i = Math.max(0, Math.min(n - 1, Math.floor(p * n)));
    if (i !== index) {
      setIndex(i);
      setShowWhy(false);
    }
  });

  const goTo = useCallback(
    (i: number) => {
      const el = sectionRef.current;
      if (!el) return;
      const clamped = Math.max(0, Math.min(n - 1, i));
      const scrollable = el.offsetHeight - window.innerHeight;
      const top = el.offsetTop + (clamped + 0.5) / n * scrollable;
      window.scrollTo({ top, behavior: reduced ? 'auto' : 'smooth' });
    },
    [n, reduced]
  );

  // keyboard + film transport
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        goTo(index + 1);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goTo(index - 1);
      } else if (e.code === 'Space') {
        e.preventDefault();
        setFilm((f) => f === 'play' ? 'pause' : 'play');
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goTo, index]);

  useEffect(() => {
    if (film !== 'play') return;
    const id = window.setInterval(() => {
      if (index >= n - 1) {
        setFilm('off');
        return;
      }
      goTo(index + 1);
    }, 2100);
    return () => window.clearInterval(id);
  }, [film, index, n, goTo]);

  // swipe (touch) navigation
  const touch = useRef({ x: 0, y: 0 });
  const onTouchStart = (e: React.TouchEvent) => {
    touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touch.current.x;
    const dy = e.changedTouches[0].clientY - touch.current.y;
    if (Math.abs(dx) > 52 && Math.abs(dx) > Math.abs(dy)) goTo(index + (dx < 0 ? 1 : -1));
  };

  const logical = deviceSize(project.type);
  const isMobileLayout = vp.w < 900;
  const availW = isMobileLayout ? vp.w - 40 : vp.w - (project.type === 'mobile' ? 620 : 420);
  const availH = vp.h - (isMobileLayout ? 260 : 170);
  const scale = Math.min(availW / logical.w, availH / logical.h, project.type === 'mobile' ? 0.92 : 0.82);

  return (
    <section
      ref={sectionRef}
      style={{ height: `${n * 92}vh` }}
      className="relative w-full"
      aria-label={`${project.name} screen sequence`}>
      
      <div className="sticky top-0 flex h-[100svh] w-full flex-col overflow-hidden bg-paper">
        {/* top strip */}
        <div className="flex items-center justify-between border-b border-line px-5 py-3 sm:px-8">
          <div className="flex gap-4 sm:gap-8">
            <span className="rt-meta text-ink">{project.name}</span>
            <span className="rt-meta hidden text-mid sm:inline">{project.category}</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-8">
            <span className="rt-meta text-mid">
              SCREEN {screen.number} / {String(n).padStart(2, '0')}
            </span>
            <span className="rt-meta hidden text-mid sm:inline">UI LOADED</span>
          </div>
        </div>

        <div className="relative flex min-h-0 flex-1">
          {/* screen rail */}
          <div className="hidden w-[200px] shrink-0 flex-col justify-center gap-1 border-r border-line px-6 sm:flex">
            {project.screens.map((s, i) =>
            <button
              key={s.id}
              onClick={() => goTo(i)}
              {...hoverProps('OPEN')}
              className="group flex items-baseline gap-3 py-1 text-left"
              aria-current={i === index}>
              
                <span
                className="rt-meta tabular-nums transition-colors duration-150 ease-expo"
                style={{ color: i === index ? '#050505' : '#8A8A8A' }}>
                
                  {s.number}
                </span>
                <motion.span
                className="font-display font-medium tracking-[-0.02em]"
                animate={{
                  fontSize: i === index ? 20 : 13,
                  color: i === index ? '#050505' : '#8A8A8A'
                }}
                transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}>
                
                  {s.title}
                </motion.span>
              </button>
            )}
          </div>

          {/* pinned device */}
          <div
            className="relative flex min-w-0 flex-1 items-center justify-center"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}>
            
            <div className="relative" {...hoverProps('EXPLORE')}>
              <button
                type="button"
                onClick={() => onZoom(screen)}
                className="block"
                aria-label={`Zoom into ${screen.title}`}>
                
                <Device type={project.type} domain={project.domain} scale={scale}>
                  <AnimatePresence initial={false} mode="popLayout">
                    <motion.div
                      key={screen.id}
                      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 26, scale: 1.02 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={reduced ? { opacity: 0 } : { opacity: 0, y: -18, scale: 0.995 }}
                      transition={{ duration: reduced ? 0.18 : 0.46, ease: [0.23, 1, 0.32, 1] }}
                      className="absolute inset-0">
                      
                      <ScreenRender slug={project.slug} screenId={screen.id} />
                    </motion.div>
                  </AnimatePresence>
                </Device>
              </button>
              <InteractionNotes screen={screen} />
              {designMode &&
              <div className="rt-meta absolute -top-6 left-0 text-[#00A98C]">
                  {logical.w} × {logical.h} · SCALE {Math.round(scale * 100)}%
                </div>
              }
            </div>

            {/* progress ticks */}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-[6px] sm:hidden">
              {project.screens.map((s, i) =>
              <button
                key={s.id}
                onClick={() => goTo(i)}
                aria-label={`Go to ${s.title}`}
                className="h-[3px] transition-all duration-200 ease-expo"
                style={{ width: i === index ? 22 : 10, background: i === index ? '#050505' : '#DCDCDC' }} />

              )}
            </div>
          </div>

          {/* meta column */}
          <div className="hidden w-[300px] shrink-0 flex-col justify-center border-l border-line px-6 lg:flex">
            <span className="rt-meta text-mid">SCREEN</span>
            <div
              className="mt-2 font-display font-medium tracking-tightest text-ink"
              style={{ fontSize: 66, lineHeight: 0.86 }}>
              
              {screen.number}
              <span className="text-mid">/{String(n).padStart(2, '0')}</span>
            </div>
            <div className="mt-4 font-display text-[24px] font-medium tracking-[-0.03em] text-ink">
              {screen.title}
            </div>

            {screen.why &&
            <div className="mt-8">
                <button
                onClick={() => setShowWhy((v) => !v)}
                {...hoverProps('OPEN')}
                className="rt-meta border border-ink px-3 py-2 transition-colors duration-150 ease-expo hover:bg-ink hover:text-paper"
                aria-expanded={showWhy}>
                
                  WHY THIS UI?
                </button>
                <AnimatePresence>
                  {showWhy &&
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}
                  className="overflow-hidden pt-4 text-[13px] leading-[1.55] text-ink/70">
                  
                      {screen.why}
                    </motion.p>
                }
                </AnimatePresence>
              </div>
            }

            <div className="mt-10 flex items-center gap-2">
              <button
                onClick={() => goTo(index - 1)}
                {...hoverProps('OPEN')}
                disabled={index === 0}
                className="rt-meta border border-line px-3 py-2 transition-colors duration-150 ease-expo hover:border-ink disabled:opacity-30"
                aria-label="Previous screen">
                
                ←
              </button>
              <button
                onClick={() => goTo(index + 1)}
                {...hoverProps('OPEN')}
                disabled={index === n - 1}
                className="rt-meta border border-line px-3 py-2 transition-colors duration-150 ease-expo hover:border-ink disabled:opacity-30"
                aria-label="Next screen">
                
                →
              </button>
              <button
                onClick={() => setFilm((f) => f === 'play' ? 'pause' : 'play')}
                {...hoverProps('PLAY')}
                className="rt-meta ml-2 border border-ink px-3 py-2 transition-colors duration-150 ease-expo hover:bg-ink hover:text-paper">
                
                {film === 'play' ? '[ PAUSE ]' : '[ PLAY EXPERIENCE ]'}
              </button>
              {film !== 'off' &&
              <button
                onClick={() => setFilm('off')}
                className="rt-meta border border-line px-3 py-2 transition-colors duration-150 ease-expo hover:border-ink">
                
                  [ STOP ]
                </button>
              }
            </div>

            <div className="mt-10 border-t border-line pt-4">
              <span className="rt-meta text-mid">
                ← → SCREEN · SPACE FILM · G WALL · ESC EXIT
              </span>
            </div>
          </div>
        </div>

        {/* mobile controls */}
        <div className="flex items-center justify-between border-t border-line px-5 py-3 lg:hidden">
          <div className="flex items-baseline gap-3">
            <span className="font-display text-[22px] font-medium tracking-tightest text-ink">
              {screen.number}
            </span>
            <span className="rt-meta text-mid">{screen.title}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => goTo(index - 1)}
              className="rt-meta border border-line px-3 py-2 disabled:opacity-30"
              disabled={index === 0}
              aria-label="Previous screen">
              
              ←
            </button>
            <button
              onClick={() => goTo(index + 1)}
              className="rt-meta border border-line px-3 py-2 disabled:opacity-30"
              disabled={index === n - 1}
              aria-label="Next screen">
              
              →
            </button>
            <button
              onClick={() => setFilm((f) => f === 'play' ? 'pause' : 'play')}
              className="rt-meta border border-ink px-3 py-2">
              
              {film === 'play' ? 'PAUSE' : 'PLAY'}
            </button>
          </div>
        </div>
      </div>
    </section>);

}