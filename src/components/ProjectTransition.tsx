import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Project } from '../types/project';
import { Device, deviceSize } from './mockups/Device';
import { ScreenRender } from './screens/registry';
import { useViewport } from '../hooks/useViewport';

/**
 * SIGNATURE: the project becomes the device.
 * The hovered preview grows out of its position on the index and fills the viewport.
 */
export function ProjectTransition({
  active,
  project,
  origin,
  reduced





}: {active: boolean;project: Project | null;origin: {x: number;y: number;} | null;reduced: boolean;}) {
  const vp = useViewport();
  const logical = project ? deviceSize(project.type) : { w: 390, h: 844 };
  const base = Math.min((vp.w - 80) / logical.w, (vp.h - 120) / logical.h, project?.type === 'mobile' ? 0.9 : 0.8);

  return (
    <AnimatePresence>
      {active && project &&
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
        className="pointer-events-none fixed inset-0 z-[85] bg-paper"
        aria-hidden="true">
        
          <motion.div
          className="absolute left-0 top-0"
          initial={{
            x: origin?.x ?? vp.w / 2,
            y: origin?.y ?? vp.h / 2,
            scale: reduced ? 0.9 : 0.34,
            opacity: reduced ? 1 : 0.9
          }}
          animate={{ x: vp.w / 2, y: vp.h / 2, scale: 1, opacity: 1 }}
          transition={{ duration: reduced ? 0.2 : 0.62, ease: [0.23, 1, 0.32, 1] }}>
          
            <div className="-translate-x-1/2 -translate-y-1/2">
              <Device type={project.type} domain={project.domain} scale={base}>
                <ScreenRender slug={project.slug} screenId={project.screens[0].id} />
              </Device>
            </div>
          </motion.div>

          <div className="absolute inset-x-0 bottom-6 flex justify-center">
            <motion.span
            className="rt-meta text-mid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.12, duration: 0.2 }}>
            
              OPENING {project.name} · {project.screens.length} SCREENS
            </motion.span>
          </div>
        </motion.div>
      }
    </AnimatePresence>);

}