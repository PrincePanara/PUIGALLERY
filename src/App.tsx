import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { UIProvider } from './contexts/UIContext';
import { Experience } from './components/Experience';

interface AppProps {
  /** Skip the terminal boot and land straight in the interface. */
  skipBoot?: boolean;
  /** Start with the grid, spacing and measurement overlay switched on. */
  designMode?: boolean;
}

export function App({ skipBoot = false, designMode = false }: AppProps) {
  useEffect(() => {
    document.documentElement.classList.add('antialiased', 'bg-paper');
  }, []);

  return (
    <HelmetProvider>
      <UIProvider initialDesignMode={designMode}>
        <Experience skipBoot={skipBoot} />
      </UIProvider>
    </HelmetProvider>
  );
}