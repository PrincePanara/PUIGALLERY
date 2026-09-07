import React from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../../types/project';

export function ProjectDNA({ project }: {project: Project;}) {
  const rows: [string, string][] = [
  ['TYPE', project.type.toUpperCase()],
  ['ROLE', project.role],
  ['SCREENS', String(project.screens.length).padStart(2, '0')],
  ['YEAR', project.year],
  ['STATUS', project.status]];


  return (
    <section className="w-full bg-paper px-5 py-24 sm:px-8 sm:py-36">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr]">
        <div>
          <span className="rt-meta text-mid">PROJECT DNA</span>
          <div className="mt-10">
            {rows.map(([k, v], i) =>
            <motion.div
              key={k}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1], delay: i * 0.04 }}
              className="flex items-center justify-between border-t border-line py-4">
              
                <span className="rt-meta text-mid">{k}</span>
                <span className="rt-meta text-ink">{v}</span>
              </motion.div>
            )}
            <div className="border-t border-line" />
          </div>
        </div>
        <div className="flex items-end">
          <p
            className="font-display font-medium tracking-[-0.04em] text-ink"
            style={{ fontSize: 'clamp(24px, 3.2vw, 42px)', lineHeight: 1.05 }}>
            
            {project.line}
          </p>
        </div>
      </div>
    </section>);

}