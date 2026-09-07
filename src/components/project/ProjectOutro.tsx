import React from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../../types/project';
import { Device } from '../mockups/Device';
import { ScreenRender } from '../screens/registry';
import { useUI } from '../../contexts/UIContext';

export function ProjectOutro({
  project,
  next,
  onNext,
  onIndex





}: {project: Project;next: Project;onNext: (p: Project) => void;onIndex: () => void;}) {
  const { hoverProps } = useUI();

  return (
    <section className="w-full bg-ink px-5 py-28 sm:px-8 sm:py-40">
      <div className="border-b border-white/12 pb-16 sm:pb-24">
        <span className="rt-meta text-mid">END OF PROJECT</span>
        <h2
          className="mt-8 font-display font-medium text-white"
          style={{ fontSize: 'clamp(52px, 11vw, 180px)', lineHeight: 0.82, letterSpacing: '-0.06em' }}>
          
          {['PROJECT', 'COMPLETE'].map((w, i) =>
          <span key={w} className="block overflow-hidden">
              <motion.span
              className="block"
              initial={{ y: '105%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: '-15%' }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: i * 0.06 }}>
              
                {w}
              </motion.span>
            </span>
          )}
        </h2>
        <div className="mt-8 flex flex-wrap gap-x-10 gap-y-2">
          <span className="rt-meta text-mid">
            {String(project.screens.length).padStart(2, '0')} SCREENS EXPLORED
          </span>
          <span className="rt-meta text-mid">{project.role}</span>
          <span className="rt-meta text-mid">{project.year}</span>
        </div>
      </div>

      <button
        onClick={() => onNext(next)}
        {...hoverProps('VIEW')}
        className="group mt-16 flex w-full flex-col gap-10 text-left sm:mt-24 sm:flex-row sm:items-center sm:justify-between">
        
        <div>
          <span className="rt-meta text-mid">NEXT EXPERIENCE</span>
          <div
            className="mt-5 font-display font-medium text-white transition-transform duration-300 ease-expo group-hover:translate-x-2"
            style={{ fontSize: 'clamp(46px, 9vw, 140px)', lineHeight: 0.86, letterSpacing: '-0.055em' }}>
            
            {next.name}
          </div>
          <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2">
            <span className="rt-meta text-mid">{next.category}</span>
            <span className="rt-meta text-mid">{next.role}</span>
            <span className="rt-meta text-mid">{next.screens.length} SCREENS</span>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="shrink-0 transition-transform duration-300 ease-expo group-hover:-translate-y-2">
          
          <Device
            type={next.type}
            domain={next.domain}
            scale={next.type === 'mobile' ? 0.3 : 0.16}>
            
            <ScreenRender slug={next.slug} screenId={next.screens[0].id} />
          </Device>
        </motion.div>
      </button>

      <div className="mt-20 flex items-center justify-between border-t border-white/12 pt-6">
        <button
          onClick={onIndex}
          {...hoverProps('OPEN')}
          className="rt-meta text-white transition-opacity duration-150 ease-expo hover:opacity-60">
          
          ← BACK TO INDEX
        </button>
        <span className="rt-meta text-mid">PRESS ESC TO EXIT PROJECT</span>
      </div>
    </section>);

}