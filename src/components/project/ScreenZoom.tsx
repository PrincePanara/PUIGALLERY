import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Project, Screen } from '../../types/project';
import { ScreenRender } from '../screens/registry';
import { useViewport } from '../../hooks/useViewport';

/** DEVICE → SCREEN → UI → COMPONENT. Zooms past the frame into the interface itself. */
export function ScreenZoom({
  project,
  screen,
  onClose




}: {project: Project | null;screen: Screen | null;onClose: () => void;}) {
  const vp = useViewport();

  useEffect(() => {
    if (!screen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
      }
    };
    window.addEventListener('keydown', onKey);
    document.documentElement.classList.add('rt-noscroll');
    return () => {
      window.removeEventListener('keydown', onKey);
      document.documentElement.classList.remove('rt-noscroll');
    };
  }, [screen, onClose]);

  const open = Boolean(project && screen);
  // the raw screen canvas, without the device frame — this is a UI inspection, not a mockup
  const logical = project?.type === 'mobile' ? { w: 390, h: 844 } : { w: 1440, h: 900 };
  const panel = vp.w > 1024 ? 320 : 0;
  const availW = vp.w - panel - 80;
  const availH = vp.h - 140;
  const scale = Math.min(availW / logical.w, availH / logical.h, project?.type === 'mobile' ? 1.25 : 0.9);

  return (
    <AnimatePresence>
      {open && project && screen &&
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
        className="fixed inset-0 z-[90] flex flex-col bg-ink/97"
        role="dialog"
        aria-label={`${screen.title} UI detail`}>
        
          <div className="flex items-center justify-between border-b border-white/12 px-5 py-4">
            <div className="flex gap-6">
              <span className="rt-meta text-white">UI DETAIL</span>
              <span className="rt-meta text-mid">
                {project.name} · {screen.number} {screen.title}
              </span>
            </div>
            <button onClick={onClose} className="rt-meta text-mid transition-colors duration-150 ease-expo hover:text-white">
              CLOSE ✕ [ESC]
            </button>
          </div>

          <div className="flex min-h-0 flex-1">
            <div className="flex min-w-0 flex-1 items-center justify-center overflow-hidden p-6">
              <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.26, ease: [0.23, 1, 0.32, 1] }}
              style={{
                width: logical.w * scale,
                height: logical.h * scale
              }}
              className="relative overflow-hidden">
              
                <div
                style={{
                  width: logical.w,
                  height: logical.h,
                  transform: `scale(${scale})`,
                  transformOrigin: 'top left'
                }}>
                
                  <div
                  className="overflow-hidden"
                  style={{
                    width: logical.w,
                    height: logical.h,
                    borderRadius: project.type === 'mobile' ? 40 : 8
                  }}>
                  
                    <ScreenRender slug={project.slug} screenId={screen.id} />
                  </div>
                </div>
              </motion.div>
            </div>

            <aside className="hidden w-[320px] shrink-0 flex-col border-l border-white/12 p-6 lg:flex">
              <span className="rt-meta text-mid">{screen.detail?.label ?? 'UI COMPONENTS'}</span>
              <div className="mt-6 space-y-0">
                {(screen.detail?.parts ?? ['LAYOUT', 'TYPE', 'SPACING']).map((p, i) =>
              <motion.div
                key={p}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1], delay: 0.05 + i * 0.04 }}
                className="flex items-center justify-between border-b border-white/10 py-4">
                
                    <span className="font-display text-[17px] font-medium tracking-[-0.02em] text-white">{p}</span>
                    <span className="rt-meta text-mid">{String(i + 1).padStart(2, '0')}</span>
                  </motion.div>
              )}
              </div>
              {screen.why &&
            <div className="mt-8">
                  <span className="rt-meta text-mid">WHY THIS UI?</span>
                  <p className="mt-3 text-[13px] leading-[1.55] text-off">{screen.why}</p>
                </div>
            }
              <div className="mt-auto grid grid-cols-2 gap-y-3 border-t border-white/12 pt-5">
                {[
              ['W', String(logical.w)],
              ['H', String(logical.h)],
              ['ZOOM', `${Math.round(scale * 100)}%`],
              ['TYPE', project.type.toUpperCase()]].
              map(([k, v]) =>
              <div key={k} className="flex gap-2">
                    <span className="rt-meta text-mid">{k}</span>
                    <span className="rt-meta text-white">{v}</span>
                  </div>
              )}
              </div>
            </aside>
          </div>
        </motion.div>
      }
    </AnimatePresence>);

}