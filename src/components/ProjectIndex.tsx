import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../types/project';
import { projects } from '../data/projects';
import { useUI } from '../contexts/UIContext';
import { ProjectPreview } from './ProjectPreview';
import { Device } from './mockups/Device';
import { ScreenRender } from './screens/registry';

function Row({
  project,
  index,
  hovered,
  onHover,
  onOpen






}: {project: Project;index: number;hovered: boolean;onHover: (i: number | null) => void;onOpen: (p: Project, origin: DOMRect) => void;}) {
  const { hoverProps, reduced } = useUI();
  const ref = useRef<HTMLButtonElement>(null);
  const [mag, setMag] = useState({ x: 0, y: 0 });

  return (
    <motion.button
      ref={ref}
      type="button"
      onMouseEnter={() => {
        onHover(index);
        hoverProps('VIEW').onMouseEnter();
      }}
      onMouseLeave={() => {
        onHover(null);
        setMag({ x: 0, y: 0 });
        hoverProps('VIEW').onMouseLeave();
      }}
      onMouseMove={(e) => {
        if (reduced) return;
        const r = e.currentTarget.getBoundingClientRect();
        setMag({
          x: ((e.clientX - r.left) / r.width - 0.5) * 14,
          y: ((e.clientY - r.top) / r.height - 0.5) * 8
        });
      }}
      onClick={() => {
        const r = ref.current?.getBoundingClientRect();
        if (r) onOpen(project, r);
      }}
      className="group relative block w-full border-t border-line py-7 text-left sm:py-10"
      aria-label={`Open ${project.name}`}>
      
      <div className="flex items-start gap-4 sm:items-center sm:gap-10">
        <motion.span
          className="rt-meta shrink-0 tabular-nums text-mid"
          animate={{
            fontSize: hovered && !reduced ? 22 : 10,
            color: hovered ? '#050505' : '#8A8A8A',
            letterSpacing: hovered ? '-0.02em' : '0.18em'
          }}
          transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
          style={{ width: 46, lineHeight: 1 }}>
          
          {String(project.id).padStart(2, '0')}
        </motion.span>

        <motion.span
          className="min-w-0 flex-1"
          animate={{ x: hovered && !reduced ? mag.x : 0, y: hovered && !reduced ? mag.y : 0 }}
          transition={{ type: 'spring', stiffness: 220, damping: 26 }}>
          
          <span
            className="block font-display font-medium leading-[0.92] tracking-tightest text-ink"
            style={{ fontSize: 'clamp(34px, 6.4vw, 92px)' }}>
            
            {project.name}
          </span>
          <span className="mt-3 flex flex-wrap gap-x-6 gap-y-1">
            <span className="rt-meta text-mid">{project.category}</span>
            <span className="rt-meta text-mid">{project.role}</span>
            <span className="rt-meta text-mid">{project.year}</span>
            <motion.span
              className="rt-meta text-ink/70"
              initial={false}
              animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -6 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}>
              
              {project.screens.length} SCREENS · {project.type.toUpperCase()}
            </motion.span>
          </span>
        </motion.span>

        {/* compact preview for touch / small screens */}
        <span className="shrink-0 lg:hidden">
          <Device
            type={project.type}
            domain={project.domain}
            scale={project.type === 'mobile' ? 0.12 : 0.058}
            shadow={false}
            glare={false}>
            
            <ScreenRender slug={project.slug} screenId={project.screens[0].id} />
          </Device>
        </span>

        <motion.span
          className="rt-meta hidden shrink-0 items-center gap-2 text-ink sm:flex"
          initial={false}
          animate={{ opacity: hovered ? 1 : 0.25, x: hovered ? 0 : 8 }}
          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}>
          
          OPEN ↗
        </motion.span>
      </div>
    </motion.button>);

}

export function ProjectIndex({
  onOpen


}: {onOpen: (p: Project, origin: DOMRect) => void;}) {
  const [hovered, setHovered] = useState<number | null>(null);
  const { reduced } = useUI();

  return (
    <section id="work" className="w-full bg-paper px-5 pb-16 sm:px-8 sm:pb-24">
      <div className="flex items-baseline justify-between pb-6">
        <span className="rt-meta text-mid">PROJECT INDEX</span>
        <span className="rt-meta text-mid">
          {hovered === null ? 'HOVER A PROJECT' : `PROJECT ${String(hovered + 1).padStart(2, '0')} / 0${projects.length}`}
        </span>
      </div>

      {projects.map((p, i) =>
      <Row
        key={p.slug}
        project={p}
        index={i}
        hovered={hovered === i}
        onHover={setHovered}
        onOpen={onOpen} />

      )}
      <div className="border-t border-line" />

      <ProjectPreview
        project={hovered === null ? null : projects[hovered]}
        active={hovered !== null}
        reduced={reduced} />
      
    </section>);

}