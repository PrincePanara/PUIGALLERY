import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Project } from '../types/project';
import { projects } from '../data/projects';
import { useUI } from '../contexts/UIContext';
import { TerminalIntro } from './TerminalIntro';
import { BootTransition } from './BootTransition';
import { Nav } from './Nav';
import { Hero } from './Hero';
import { SelectedWork } from './SelectedWork';
import { ProjectIndex } from './ProjectIndex';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { FinalTerminal } from './FinalTerminal';
import { EasterEgg } from './EasterEgg';
import { DesignModeOverlay, DesignModeToggle } from './DesignMode';
import { ProjectNavigator } from './ProjectNavigator';
import { ProjectTransition } from './ProjectTransition';
import { ProjectPage } from './project/ProjectPage';

type Phase = 'boot' | 'reveal' | 'site' | 'exit';

export function Experience({ skipBoot = false }: {skipBoot?: boolean;}) {
  const { reduced } = useUI();
  const [phase, setPhase] = useState<Phase>(skipBoot ? 'site' : 'boot');
  const [project, setProject] = useState<Project | null>(() => {
    if (typeof window !== 'undefined') {
      const pSlug = new URLSearchParams(window.location.search).get('project');
      if (pSlug) return projects.find(p => p.slug === pSlug) || null;
    }
    return null;
  });
  const [pending, setPending] = useState<{project: Project;origin: {x: number;y: number;};} | null>(null);
  const [screensExplored, setScreensExplored] = useState(0);
  const timers = useRef<number[]>([]);
  const seen = useRef(new Set<string>());

  const onScreenSeen = useCallback((key: string) => {
    if (seen.current.has(key)) return;
    seen.current.add(key);
    setScreensExplored(seen.current.size);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && !window.history.state) {
      const params = new URLSearchParams(window.location.search);
      const pSlug = params.get('project');
      const sId = params.get('screen');
      if (sId && pSlug) {
        window.history.replaceState({ level: 'screen', slug: pSlug, screenId: sId }, '', window.location.search);
      } else if (pSlug) {
        window.history.replaceState({ level: 'project', slug: pSlug }, '', window.location.search);
      } else {
        window.history.replaceState({ level: 'home' }, '', window.location.pathname);
      }
    }

    const handlePopState = (e: PopStateEvent) => {
      const state = e.state;
      if (state?.level === 'project' || state?.level === 'screen') {
        const p = projects.find(pr => pr.slug === state.slug);
        if (p) {
          setProject(p);
          // If we popped, we want to immediately restore the scroll pos if needed, but smooth scrolling can be left out.
        }
      } else {
        setProject(null);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => {
      timers.current.forEach(window.clearTimeout);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const enter = useCallback(() => {
    setPhase('reveal');
    const t = window.setTimeout(() => setPhase('site'), reduced ? 240 : 900);
    timers.current.push(t);
  }, [reduced]);

  // ESC anywhere in the boot terminal skips it
  useEffect(() => {
    if (phase !== 'boot') return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') enter();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [phase, enter]);

  const openProject = useCallback(
    (p: Project, origin?: DOMRect) => {
      if (typeof window !== 'undefined' && window.history.state?.slug !== p.slug) {
        window.history.pushState({ level: 'project', slug: p.slug }, '', `?project=${p.slug}`);
      }
      const o = origin ?
      { x: origin.left + origin.width / 2, y: origin.top + origin.height / 2 } :
      { x: window.innerWidth / 2, y: window.innerHeight / 2 };
      setPending({ project: p, origin: o });
      const t1 = window.setTimeout(() => {
        setProject(p);
        window.scrollTo({ top: 0, behavior: 'auto' });
      }, reduced ? 120 : 520);
      const t2 = window.setTimeout(() => setPending(null), reduced ? 220 : 780);
      timers.current.push(t1, t2);
    },
    [reduced]
  );

  const closeProject = useCallback(() => {
    if (typeof window !== 'undefined' && window.history.state?.level !== 'home') {
      window.history.pushState({ level: 'home' }, '', window.location.pathname);
    }
    setProject(null);
    const t = window.setTimeout(() => {
      document.getElementById('work')?.scrollIntoView({ behavior: 'auto', block: 'start' });
    }, 30);
    timers.current.push(t);
  }, []);

  const goTo = useCallback(
    (id: 'work' | 'contact') => {
      const scroll = () =>
      document.getElementById(id)?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
      if (project) {
        setProject(null);
        const t = window.setTimeout(scroll, 60);
        timers.current.push(t);
      } else {
        scroll();
      }
    },
    [project, reduced]
  );

  const home = useCallback(() => {
    if (typeof window !== 'undefined' && window.history.state?.level !== 'home') {
      window.history.pushState({ level: 'home' }, '', window.location.pathname);
    }
    setProject(null);
    setPhase('site');
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  }, [reduced]);

  return (
    <div className="w-full bg-paper">
      <EasterEgg />
      <DesignModeOverlay />

      <AnimatePresence>
        {phase === 'boot' &&
        <motion.div
          key="boot"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="fixed inset-0 z-[92]">
          
            <TerminalIntro onEnter={enter} reduced={reduced} />
          </motion.div>
        }
      </AnimatePresence>

      {phase === 'reveal' && <BootTransition reduced={reduced} />}

      {phase !== 'boot' &&
      <>
          <Nav
          onHome={home}
          onGo={goTo}
          context={project ? `${project.name} · ${project.screens.length} SCREENS` : 'INDEX'} />
        

          <AnimatePresence mode="wait">
            {project ?
          <ProjectPage
            key={project.slug}
            project={project}
            onExit={closeProject}
            onOpenProject={(p) => openProject(p)}
            onScreenSeen={onScreenSeen} /> :


          <motion.main
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}
            className="w-full">
            
                <Hero />
                <SelectedWork />
                <ProjectIndex onOpen={(p, origin) => openProject(p, origin)} />
                <Contact onExit={() => setPhase('exit')} />
                <Footer />
              </motion.main>
          }
          </AnimatePresence>

          <DesignModeToggle />
          <ProjectNavigator current={project} onSelect={(p) => openProject(p)} onHome={home} />
        </>
      }

      <ProjectTransition
        active={Boolean(pending)}
        project={pending?.project ?? null}
        origin={pending?.origin ?? null}
        reduced={reduced} />
      

      <AnimatePresence>
        {phase === 'exit' &&
        <FinalTerminal
          key="exit"
          screensExplored={screensExplored || 0}
          reduced={reduced}
          onReturn={home} />

        }
      </AnimatePresence>
    </div>);

}