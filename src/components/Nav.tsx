import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useUI } from '../contexts/UIContext';

export function Nav({
  onHome,
  onGo,
  context




}: {onHome: () => void;onGo: (id: 'work' | 'contact') => void;context?: string;}) {
  const { hoverProps } = useUI();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1], delay: 0.15 }}
      className="fixed left-0 right-0 top-0 z-50 mix-blend-difference">
      
      <div className="flex items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
        <button
          onClick={onHome}
          {...hoverProps('OPEN')}
          className="rt-meta text-white transition-opacity duration-150 ease-expo hover:opacity-60">
          
          PRINCE PANARA
        </button>
        <div className="flex items-center gap-5 sm:gap-8">
          {context && <span className="rt-meta hidden text-white/50 sm:inline">{context}</span>}
          {(['work', 'contact'] as const).map((id) =>
          <button
            key={id}
            onClick={() => onGo(id)}
            {...hoverProps('OPEN')}
            className="rt-meta text-white transition-opacity duration-150 ease-expo hover:opacity-60">
            
              {id.toUpperCase()}
            </button>
          )}
          <button
            onClick={toggleTheme}
            {...hoverProps('OPEN')}
            className="rt-meta text-white transition-opacity duration-150 ease-expo hover:opacity-60 ml-4">
            {theme === 'light' ? 'DARK' : 'LIGHT'}
          </button>
        </div>
      </div>
    </motion.header>);

}