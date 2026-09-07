import React from 'react';
import { useUI } from '../../contexts/UIContext';

export const DESKTOP = { w: 1440, h: 900, bezel: 16, radius: 12, stand: 74 };

export function DesktopMockup({
  children,
  scale = 1,
  className = '',
  shadow = true





}: {children: React.ReactNode;scale?: number;className?: string;shadow?: boolean;}) {
  const { designMode } = useUI();
  const outerW = DESKTOP.w + DESKTOP.bezel * 2;
  const outerH = DESKTOP.h + DESKTOP.bezel * 2 + DESKTOP.stand;

  return (
    <div className={`relative ${className}`} style={{ width: outerW * scale, height: outerH * scale }}>
      <div style={{ width: outerW, height: outerH, transform: `scale(${scale})`, transformOrigin: 'top left' }}>
        <div
          className="relative"
          style={{
            width: outerW,
            height: DESKTOP.h + DESKTOP.bezel * 2,
            borderRadius: DESKTOP.radius + 6,
            padding: DESKTOP.bezel,
            background: 'linear-gradient(170deg,#2B2B2F 0%,#121214 55%,#08080A 100%)',
            boxShadow: shadow ? '0 50px 100px -28px rgba(0,0,0,0.55)' : 'none'
          }}>
          
          <div
            className="relative overflow-hidden bg-black"
            style={{ width: DESKTOP.w, height: DESKTOP.h, borderRadius: DESKTOP.radius }}>
            
            {children}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                'linear-gradient(112deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.03) 26%, rgba(255,255,255,0) 46%)'
              }} />
            
            {designMode &&
            <div className="pointer-events-none absolute inset-0">
                <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                  'repeating-linear-gradient(to right, rgba(0,255,209,0.35) 0 1px, transparent 1px 120px)'
                }} />
              
                <div className="absolute left-[12px] top-[12px] rt-meta text-[#00A98C]">
                  W {DESKTOP.w} · H {DESKTOP.h} · GAP 24
                </div>
              </div>
            }
          </div>
        </div>
        {/* stand */}
        <div className="relative flex flex-col items-center">
          <div style={{ width: 132, height: DESKTOP.stand - 16, background: 'linear-gradient(180deg,#212124,#151517)' }} />
          <div
            style={{
              width: 320,
              height: 12,
              borderRadius: 999,
              background: 'linear-gradient(180deg,#2A2A2E,#101012)'
            }} />
          
        </div>
      </div>
    </div>);

}