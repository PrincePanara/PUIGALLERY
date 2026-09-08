import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUI } from '../contexts/UIContext';
import { Command, Grid, Mail, Moon, Sun, Menu, X } from 'lucide-react';

export function Nav({
  onHome,
  onGo,
  context
}: {
  onHome: () => void;
  onGo: (id: 'work' | 'contact') => void;
  context?: string;
}) {
  const { hoverProps } = useUI();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  // Scroll effect for dynamic background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll Spy for active section
  useEffect(() => {
    const sections = ['work', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: 'work', label: 'WORK', icon: Grid },
    { id: 'contact', label: 'CONTACT', icon: Mail }
  ] as const;

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1], delay: 0.15 }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 text-ink ${
          scrolled 
            ? 'bg-paper/90 backdrop-blur-xl border-b border-ink/10 py-3 sm:py-4 shadow-[0_4px_30px_rgba(0,0,0,0.03)]' 
            : 'bg-transparent py-5 sm:py-6'
        } px-5 sm:px-8`}
      >
        <div className="flex items-center justify-between">
          
          {/* Left: Brand */}
          <button
            onClick={onHome}
            {...hoverProps('OPEN')}
            className="group flex items-center gap-3 sm:gap-3.5 rt-meta transition-opacity duration-150 ease-expo hover:opacity-80"
          >
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-ink/10 overflow-hidden transition-transform duration-300 ease-out group-hover:scale-105 group-hover:border-ink/20">
              <img src="/LogoP.png" alt="Prince Panara Logo" className="h-full w-full object-cover rounded-full dark:invert transition-transform duration-300 ease-out group-hover:-rotate-12" />
            </div>
            <span className="tracking-widest font-semibold">PRINCE PANARA</span>
          </button>

          {/* Center: Desktop Navigation */}
          <div className="hidden sm:flex items-center gap-1.5 rounded-full p-1 border backdrop-blur-md transition-colors duration-300 bg-ink/5 border-ink/10">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => onGo(item.id)}
                  {...hoverProps('OPEN')}
                  className={`relative flex items-center gap-2.5 rounded-full px-5 py-2.5 rt-meta text-[13px] tracking-widest transition-colors duration-200 ${
                    isActive 
                      ? 'text-paper' 
                      : 'text-ink/70 hover:text-ink'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-ink"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon className="h-3.5 w-3.5" />
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-4">
            {context && (
              <span className="rt-meta hidden sm:inline tracking-widest text-ink/40">
                {context}
              </span>
            )}
            
            <button
              onClick={toggleTheme}
              {...hoverProps('OPEN')}
              className="group flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200 bg-ink/5 border-ink/10 hover:bg-ink/10"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? (
                <Moon className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-12" />
              ) : (
                <Sun className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              {...hoverProps('OPEN')}
              className="sm:hidden flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200 bg-ink/5 border-ink/10 hover:bg-ink/10"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-x-0 top-[76px] z-40 mx-4 rounded-2xl bg-paper/95 dark:bg-ink/95 backdrop-blur-xl border border-ink/10 dark:border-white/10 p-3 shadow-xl sm:hidden"
          >
            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onGo(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex w-full items-center gap-3.5 rounded-xl px-5 py-4 rt-meta tracking-widest transition-colors duration-200 ${
                      isActive 
                        ? 'bg-ink text-paper' 
                        : 'bg-transparent text-ink hover:bg-ink/5'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}