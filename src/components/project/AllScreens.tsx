import React, { forwardRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Project, Screen } from '../../types/project';
import { Device, deviceSize } from '../mockups/Device';
import { ScreenRender } from '../screens/registry';
import { useUI } from '../../contexts/UIContext';
import { useViewport } from '../../hooks/useViewport';

export type ViewMode = 'SEQUENCE' | 'GRID' | 'WALL';

const WALL_OFFSETS = [
{ x: 0, y: 0, r: -3, z: 1 },
{ x: 8, y: 14, r: 2.5, z: 3 },
{ x: -6, y: 6, r: -1.5, z: 2 },
{ x: 4, y: 20, r: 3.5, z: 4 },
{ x: -10, y: 10, r: -2.5, z: 2 },
{ x: 6, y: 2, r: 1.5, z: 3 },
{ x: -4, y: 18, r: -3.5, z: 1 },
{ x: 10, y: 8, r: 2, z: 4 }];


export const AllScreens = forwardRef<
  HTMLElement,
  {
    project: Project;
    mode: ViewMode;
    setMode: (m: ViewMode) => void;
    seqIndex: number;
    setSeqIndex: (i: number) => void;
    onZoom: (s: Screen) => void;
  }>(
  function AllScreens({ project, mode, setMode, seqIndex, setSeqIndex, onZoom }, ref) {
    const { hoverProps, reduced } = useUI();
    const vp = useViewport();
    const logical = deviceSize(project.type);
    const mobile = project.type === 'mobile';

    const gridCols = vp.w < 640 ? mobile ? 2 : 1 : vp.w < 1100 ? mobile ? 3 : 2 : mobile ? 4 : 2;
    const gridScale = Math.min(
      (vp.w - (vp.w < 640 ? 40 : 64) - gridCols * 24) / gridCols / logical.w,
      mobile ? 0.5 : 0.34
    );
    const wallScale = mobile ? Math.min(gridScale * 1.06, 0.42) : Math.min(gridScale, 0.3);
    const seqScale = Math.min(
      (vp.w - (vp.w < 640 ? 40 : 220)) / logical.w,
      vp.h * 0.72 / logical.h,
      mobile ? 0.86 : 0.72
    );

    return (
      <section ref={ref} className="w-full bg-off px-5 py-24 sm:px-8 sm:py-36" aria-label="All screens">
      <div className="flex flex-wrap items-end justify-between gap-8 border-b border-line pb-6">
        <h2
            className="font-display font-medium text-ink"
            style={{ fontSize: 'clamp(48px, 10vw, 168px)', lineHeight: 0.82, letterSpacing: '-0.06em' }}>
            
          ALL
          <br />
          SCREENS
        </h2>
        <div className="flex flex-col gap-3">
          <span className="rt-meta text-mid">VIEW MODE</span>
          <div className="flex gap-2">
            {(['SEQUENCE', 'GRID', 'WALL'] as ViewMode[]).map((m) =>
              <button
                key={m}
                onClick={() => setMode(m)}
                {...hoverProps('OPEN')}
                aria-pressed={mode === m}
                className="rt-meta border px-3 py-2 transition-colors duration-150 ease-expo"
                style={{
                  borderColor: mode === m ? '#050505' : '#DCDCDC',
                  background: mode === m ? '#050505' : 'transparent',
                  color: mode === m ? '#F5F5F3' : '#050505'
                }}>
                
                [ {m} ]
              </button>
              )}
          </div>
          <span className="rt-meta text-mid">
            {project.screens.length} SCREENS · {project.type.toUpperCase()}
          </span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {mode === 'GRID' &&
          <motion.div
            key="grid"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.32, ease: [0.23, 1, 0.32, 1] }}
            className="mt-16 grid gap-x-6 gap-y-14"
            style={{ gridTemplateColumns: `repeat(${gridCols}, minmax(0,1fr))` }}>
            
            {project.screens.map((s, i) =>
            <motion.button
              key={s.id}
              onClick={() => onZoom(s)}
              {...hoverProps('EXPLORE')}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1], delay: reduced ? 0 : i * 0.04 }}
              className="flex flex-col items-start"
              aria-label={`Inspect ${s.title}`}>
              
                <Device type={project.type} domain={project.domain} scale={gridScale}>
                  <ScreenRender slug={project.slug} screenId={s.id} />
                </Device>
                <div className="mt-4 flex items-baseline gap-3">
                  <span className="rt-meta text-ink">{s.number}</span>
                  <span className="rt-meta text-mid">{s.title}</span>
                </div>
              </motion.button>
            )}
          </motion.div>
          }

        {mode === 'WALL' &&
          <motion.div
            key="wall"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.23, 1, 0.32, 1] }}
            className="mt-16">
            
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-10 sm:gap-x-10">
              {project.screens.map((s, i) => {
                const o = WALL_OFFSETS[i % WALL_OFFSETS.length];
                return (
                  <motion.button
                    key={s.id}
                    onClick={() => onZoom(s)}
                    {...hoverProps('EXPLORE')}
                    initial={{ opacity: 0, y: 30, rotate: 0 }}
                    whileInView={{ opacity: 1, y: o.y, rotate: reduced ? 0 : o.r }}
                    whileHover={reduced ? {} : { y: o.y - 12, rotate: 0, zIndex: 20 }}
                    viewport={{ once: true, margin: '-6%' }}
                    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1], delay: reduced ? 0 : i * 0.05 }}
                    style={{ x: o.x, zIndex: o.z }}
                    className="relative"
                    aria-label={`Inspect ${s.title}`}>
                    
                    <Device type={project.type} domain={project.domain} scale={wallScale}>
                      <ScreenRender slug={project.slug} screenId={s.id} />
                    </Device>
                    <span className="rt-meta absolute -bottom-5 left-0 text-mid">{s.number}</span>
                  </motion.button>);

              })}
            </div>
          </motion.div>
          }

        {mode === 'SEQUENCE' &&
          <motion.div
            key="sequence"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.32, ease: [0.23, 1, 0.32, 1] }}
            className="mt-16 flex flex-col items-center">
            
            <div className="relative">
              <button onClick={() => onZoom(project.screens[seqIndex])} {...hoverProps('EXPLORE')}>
                <Device type={project.type} domain={project.domain} scale={seqScale}>
                  <AnimatePresence initial={false} mode="popLayout">
                    <motion.div
                      key={project.screens[seqIndex].id}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -18 }}
                      transition={{ duration: reduced ? 0.16 : 0.42, ease: [0.23, 1, 0.32, 1] }}
                      className="absolute inset-0">
                      
                      <ScreenRender slug={project.slug} screenId={project.screens[seqIndex].id} />
                    </motion.div>
                  </AnimatePresence>
                </Device>
              </button>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={() => setSeqIndex((seqIndex - 1 + project.screens.length) % project.screens.length)}
                {...hoverProps('OPEN')}
                className="rt-meta border border-line px-3 py-2 transition-colors duration-150 ease-expo hover:border-ink"
                aria-label="Previous screen">
                
                ←
              </button>
              <span className="rt-meta text-ink">
                {project.screens[seqIndex].number} {project.screens[seqIndex].title}
              </span>
              <button
                onClick={() => setSeqIndex((seqIndex + 1) % project.screens.length)}
                {...hoverProps('OPEN')}
                className="rt-meta border border-line px-3 py-2 transition-colors duration-150 ease-expo hover:border-ink"
                aria-label="Next screen">
                
                →
              </button>
            </div>
          </motion.div>
          }
      </AnimatePresence>
    </section>);

  });