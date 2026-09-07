import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects } from '../data/projects';
import type { Project } from '../types/project';
import { useUI } from '../contexts/UIContext';

export function ProjectNavigator({
  current,
  onSelect,
  onHome




}: {current: Project | null;onSelect: (p: Project) => void;onHome: () => void;}) {
  const [open, setOpen] = useState(false);
  const { hoverProps } = useUI();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const index = current ? projects.findIndex((p) => p.slug === current.slug) + 1 : 0;

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        {...hoverProps('OPEN')}
        aria-expanded={open}
        className="fixed bottom-4 right-4 z-[70] flex items-center gap-3 border border-mid/50 px-3 py-2 text-off transition-colors duration-150 ease-expo hover:border-off"
        style={{ background: 'rgba(5,5,5,0.72)', backdropFilter: 'blur(6px)' }}>
        
        <span className="rt-meta tabular-nums">
          {String(index).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
        </span>
        <span className="rt-meta text-mid">{open ? 'CLOSE' : 'PROJECTS'}</span>
      </button>

      <AnimatePresence>
        {open &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
          className="fixed inset-0 z-[69] flex items-end justify-end bg-ink/60 p-4"
          onClick={() => setOpen(false)}>
          
            <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.99 }}
            transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="mb-12 w-full max-w-[420px] border border-mid/40 bg-ink"
            role="menu"
            aria-label="Projects">
            
              <div className="flex items-center justify-between border-b border-white/12 px-4 py-3">
                <span className="rt-meta text-white">PROJECTS</span>
                <span className="rt-meta text-mid">SELECT TO OPEN</span>
              </div>
              {projects.map((p) => {
              const active = current?.slug === p.slug;
              return (
                <button
                  key={p.slug}
                  role="menuitem"
                  onClick={() => {
                    setOpen(false);
                    onSelect(p);
                  }}
                  className="flex w-full items-center gap-4 border-b border-white/8 px-4 py-3 text-left transition-colors duration-150 ease-expo hover:bg-white hover:text-ink"
                  style={{ background: active ? 'rgba(255,255,255,0.08)' : undefined }}>
                  
                    <span className="rt-meta w-6 shrink-0 text-mid">{String(p.id).padStart(2, '0')}</span>
                    <span className="flex-1 truncate font-display text-[16px] font-medium tracking-[-0.02em] text-current">
                      {p.name}
                    </span>
                    <span className="rt-meta shrink-0 text-mid">{p.type.toUpperCase()}</span>
                  </button>);

            })}
              <button
              onClick={() => {
                setOpen(false);
                onHome();
              }}
              className="flex w-full items-center justify-between px-4 py-3 text-left transition-colors duration-150 ease-expo hover:bg-white hover:text-ink">
              
                <span className="rt-meta">← BACK TO INDEX</span>
                <span className="rt-meta text-mid">ESC</span>
              </button>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
    </>);

}