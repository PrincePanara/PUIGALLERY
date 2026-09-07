import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

export type CursorLabel = null | 'VIEW' | 'EXPLORE' | 'DRAG' | 'OPEN' | 'CLOSE' | 'PLAY';

interface UIState {
  cursor: CursorLabel;
  setCursor: (l: CursorLabel) => void;
  hoverProps: (l: CursorLabel) => {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  };
  designMode: boolean;
  setDesignMode: (v: boolean) => void;
  pointerFine: boolean;
  reduced: boolean;
}

const UIContext = createContext<UIState | null>(null);

export function UIProvider({
  children,
  initialDesignMode = false



}: {children: React.ReactNode;initialDesignMode?: boolean;}) {
  const [cursor, setCursor] = useState<CursorLabel>(null);
  const [designMode, setDesignMode] = useState(initialDesignMode);
  const prefersReduced = useReducedMotion();

  const pointerFine = useMemo(
    () => typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches,
    []
  );

  const hoverProps = useCallback(
    (l: CursorLabel) => ({
      onMouseEnter: () => setCursor(l),
      onMouseLeave: () => setCursor(null)
    }),
    []
  );

  const value = useMemo(
    () => ({
      cursor,
      setCursor,
      hoverProps,
      designMode,
      setDesignMode,
      pointerFine,
      reduced: Boolean(prefersReduced)
    }),
    [cursor, hoverProps, designMode, pointerFine, prefersReduced]
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUI() {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error('useUI must be used inside UIProvider');
  return ctx;
}