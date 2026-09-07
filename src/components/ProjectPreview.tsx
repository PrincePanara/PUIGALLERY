import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import type { Project } from '../types/project';
import { Device } from './mockups/Device';
import { ScreenRender } from './screens/registry';

const SCALES: Record<Project['type'], number> = { mobile: 0.44, web: 0.235, desktop: 0.2 };

/** Floating device that trails the cursor and cycles the project's screens. */
export function ProjectPreview({
  project,
  active,
  reduced




}: {project: Project | null;active: boolean;reduced: boolean;}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 130, damping: 20, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 130, damping: 20, mass: 0.5 });
  const [i, setI] = useState(0);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, [x, y]);

  useEffect(() => {
    if (!active || !project) return;
    setI(0);
    if (reduced) return;
    const id = window.setInterval(() => setI((v) => (v + 1) % project.screens.length), 1100);
    return () => window.clearInterval(id);
  }, [active, project, reduced]);

  const scale = project ? SCALES[project.type] : 0.4;
  const screen = project?.screens[i % (project?.screens.length || 1)];

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-40 hidden lg:block"
      style={{ x: sx, y: sy }}>
      
      <AnimatePresence>
        {active && project && screen &&
        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotate: -1.5 }}
          animate={{ opacity: 1, scale: 1, rotate: project.type === 'mobile' ? -3 : -1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}
          className="-translate-x-1/2 -translate-y-1/2"
          style={{ transformOrigin: 'center' }}>
          
            <div className="relative">
              <Device type={project.type} domain={project.domain} scale={scale} glare>
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div
                  key={screen.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                  className="absolute inset-0">
                  
                    <ScreenRender slug={project.slug} screenId={screen.id} />
                  </motion.div>
                </AnimatePresence>
              </Device>
              <div className="absolute -bottom-6 left-0 flex gap-3">
                <span className="rt-meta text-ink/50">{screen.number}</span>
                <span className="rt-meta text-ink/50">{screen.title}</span>
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </motion.div>);

}