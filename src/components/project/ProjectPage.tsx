import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import type { Project, Screen } from '../../types/project';
import { projects } from '../../data/projects';
import { ScreenViewer } from './ScreenViewer';
import { AllScreens, type ViewMode } from './AllScreens';
import { ProjectDNA } from './ProjectDNA';
import { ProjectOutro } from './ProjectOutro';
import { ScreenZoom } from './ScreenZoom';
import { SEO } from '../SEO';

export function ProjectPage({
  project,
  onExit,
  onOpenProject,
  onScreenSeen





}: {project: Project;onExit: () => void;onOpenProject: (p: Project) => void;onScreenSeen: (key: string) => void;}) {
  const [index, setIndex] = useState(0);
  const [mode, setMode] = useState<ViewMode>('GRID');
  const [seqIndex, setSeqIndex] = useState(0);
  const [zoom, setZoom] = useState<Screen | null>(() => {
    if (typeof window !== 'undefined') {
      const sId = new URLSearchParams(window.location.search).get('screen');
      if (sId) return project.screens.find(sc => sc.id === sId) || null;
    }
    return null;
  });
  const allRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIndex(0);
    setSeqIndex(0);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [project.slug]);

  useEffect(() => {
    const s = project.screens[index];
    if (s) onScreenSeen(`${project.slug}/${s.id}`);
  }, [index, project, onScreenSeen]);

  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      const state = e.state;
      if (state?.level === 'screen') {
        const s = project.screens.find(sc => sc.id === state.screenId);
        setZoom(s || null);
      } else {
        setZoom(null);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [project.screens]);

  const handleZoom = useCallback((screen: Screen | null) => {
    if (screen) {
      window.history.pushState({ level: 'screen', slug: project.slug, screenId: screen.id }, '', `?project=${project.slug}&screen=${screen.id}`);
      setZoom(screen);
    } else {
      if (window.history.state?.level === 'screen') {
        window.history.back();
      } else {
        setZoom(null);
        window.history.pushState({ level: 'project', slug: project.slug }, '', `?project=${project.slug}`);
      }
    }
  }, [project.slug]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !zoom) onExit();
      if (e.key.toLowerCase() === 'g') {
        setMode('WALL');
        allRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onExit, zoom]);

  const nextProject = projects[(projects.findIndex((p) => p.slug === project.slug) + 1) % projects.length];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}
      className="w-full bg-paper">
      
      <SEO 
        title={project.seoTitle || `${project.name} — ${project.category} by Prince Panara`}
        description={project.seoDescription || project.line}
        image={project.ogImage}
        url={`/projects/${project.slug}`}
        type="article"
        schema={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://princepanara.com"
          },{
            "@type": "ListItem",
            "position": 2,
            "name": "Work",
            "item": "https://princepanara.com/#work"
          },{
            "@type": "ListItem",
            "position": 3,
            "name": project.name,
            "item": `https://princepanara.com/projects/${project.slug}`
          }]
        }}
      />

      {/* header — minimal, then straight into the product */}
      <header className="w-full px-5 pb-14 pt-28 sm:px-8 sm:pb-20 sm:pt-32">
        <div className="flex items-baseline justify-between border-b border-line pb-5">
          <span className="rt-meta text-mid">
            PROJECT {String(project.id).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </span>
          <button
            onClick={onExit}
            className="rt-meta text-mid transition-colors duration-150 ease-expo hover:text-ink">
            
            CLOSE PROJECT ✕
          </button>
        </div>
        <h1
          className="mt-10 font-display font-medium text-ink"
          style={{ fontSize: 'clamp(52px, 12vw, 210px)', lineHeight: 0.82, letterSpacing: '-0.06em' }}>
          
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.72, ease: [0.23, 1, 0.32, 1], delay: 0.08 }}>
              
              {project.name}
            </motion.span>
          </span>
        </h1>
        <div className="mt-8 flex flex-wrap gap-x-10 gap-y-2">
          <span className="rt-meta text-mid">{project.category}</span>
          <span className="rt-meta text-mid">{project.role}</span>
          <span className="rt-meta text-mid">{project.year}</span>
          {project.domain && <span className="rt-meta text-mid">{project.domain}</span>}
        </div>
      </header>

      <ScreenViewer project={project} index={index} setIndex={setIndex} onZoom={handleZoom} />

      <AllScreens
        ref={allRef}
        project={project}
        mode={mode}
        setMode={setMode}
        seqIndex={seqIndex}
        setSeqIndex={setSeqIndex}
        onZoom={handleZoom} />
      

      <ProjectDNA project={project} />

      <ProjectOutro project={project} next={nextProject} onNext={onOpenProject} onIndex={onExit} />

      <ScreenZoom project={project} screen={zoom} onClose={() => handleZoom(null)} />
    </motion.main>);

}