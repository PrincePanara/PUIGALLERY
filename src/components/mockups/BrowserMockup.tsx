import React from 'react';
import { useUI } from '../../contexts/UIContext';

export const BROWSER = { w: 1440, h: 900, chrome: 46, radius: 14 };

export function BrowserMockup({
  children,
  scale = 1,
  domain = 'localhost',
  className = '',
  shadow = true






}: {children: React.ReactNode;scale?: number;domain?: string;className?: string;shadow?: boolean;}) {
  const { designMode } = useUI();
  const outerW = BROWSER.w;
  const outerH = BROWSER.h + BROWSER.chrome;

  return (
    <div className={`relative ${className}`} style={{ width: outerW * scale, height: outerH * scale }}>
      <div style={{ width: outerW, height: outerH, transform: `scale(${scale})`, transformOrigin: 'top left' }}>
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            borderRadius: BROWSER.radius,
            border: '1px solid #DCDCDC',
            background: '#fff',
            boxShadow: shadow ? '0 40px 90px -24px rgba(0,0,0,0.4)' : 'none'
          }}>
          
          <div
            className="flex items-center gap-[16px] px-[16px]"
            style={{ height: BROWSER.chrome, background: '#F1F1EF', borderBottom: '1px solid #DCDCDC' }}>
            
            <div className="flex gap-[7px]">
              {['#FF5F57', '#FEBC2E', '#28C840'].map((c) =>
              <div key={c} className="rounded-full" style={{ width: 11, height: 11, background: c }} />
              )}
            </div>
            <div className="flex items-center gap-[10px] text-[#8A8A8A]">
              <span className="text-[13px]">‹</span>
              <span className="text-[13px]">›</span>
              <span className="text-[12px]">⟳</span>
            </div>
            <div
              className="flex h-[26px] flex-1 items-center gap-[8px] rounded-[6px] px-[10px]"
              style={{ background: '#fff', border: '1px solid #E4E4E1' }}>
              
              <span className="text-[10px] text-[#8A8A8A]">🔒</span>
              <span className="text-[11.5px] text-[#4A4A4A]">{domain}</span>
            </div>
            <div className="rt-meta text-[#A5A5A2]">TAB 01</div>
          </div>
          <div className="relative overflow-hidden" style={{ width: BROWSER.w, height: BROWSER.h }}>
            {children}
            {designMode &&
            <div className="pointer-events-none absolute inset-0">
                <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                  'repeating-linear-gradient(to right, rgba(0,255,209,0.4) 0 1px, transparent 1px 120px)'
                }} />
              
                <div className="absolute left-[10px] top-[10px] rt-meta text-[#00A98C]">
                  12 COLUMN · W {BROWSER.w} · H {BROWSER.h} · GAP 24
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>);

}