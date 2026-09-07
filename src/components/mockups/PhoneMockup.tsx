import React from 'react';
import { useUI } from '../../contexts/UIContext';

export const PHONE = { w: 390, h: 844, bezel: 11, radius: 52 };

export function PhoneMockup({
  children,
  scale = 1,
  glare = true,
  className = '',
  shadow = true






}: {children: React.ReactNode;scale?: number;glare?: boolean;className?: string;shadow?: boolean;}) {
  const { designMode } = useUI();
  const outerW = PHONE.w + PHONE.bezel * 2;
  const outerH = PHONE.h + PHONE.bezel * 2;

  return (
    <div
      className={`relative ${className}`}
      style={{ width: outerW * scale, height: outerH * scale }}>
      
      <div
        style={{
          width: outerW,
          height: outerH,
          transform: `scale(${scale})`,
          transformOrigin: 'top left'
        }}>
        
        {/* outer band */}
        <div
          className="relative h-full w-full"
          style={{
            borderRadius: PHONE.radius,
            background: 'linear-gradient(160deg,#3A3A3E 0%,#0A0A0C 38%,#17171A 62%,#000 100%)',
            padding: PHONE.bezel,
            boxShadow: shadow ?
            '0 40px 90px -20px rgba(0,0,0,0.55), 0 2px 0 rgba(255,255,255,0.06) inset' :
            'none'
          }}>
          
          <div
            className="relative overflow-hidden bg-black"
            style={{ width: PHONE.w, height: PHONE.h, borderRadius: PHONE.radius - PHONE.bezel }}>
            
            {children}
            {/* dynamic island */}
            <div
              className="pointer-events-none absolute left-1/2 top-[11px] -translate-x-1/2"
              style={{ width: 112, height: 30, borderRadius: 999, background: '#000' }}>
              
              <div
                className="absolute right-[10px] top-1/2 -translate-y-1/2 rounded-full"
                style={{ width: 9, height: 9, background: '#0E1418', boxShadow: 'inset 0 0 3px rgba(120,180,255,0.5)' }} />
              
            </div>
            {glare &&
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                'linear-gradient(118deg, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.05) 22%, rgba(255,255,255,0) 42%)'
              }} />

            }
            {designMode &&
            <div className="pointer-events-none absolute inset-0">
                <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                  'repeating-linear-gradient(to right, rgba(0,255,209,0.5) 0 1px, transparent 1px 32.5px)'
                }} />
              
                <div className="absolute left-[8px] top-[60px] rt-meta text-[#00FFD1]">W {PHONE.w}</div>
                <div className="absolute left-[8px] top-[74px] rt-meta text-[#00FFD1]">H {PHONE.h}</div>
                <div className="absolute left-[8px] top-[88px] rt-meta text-[#00FFD1]">R {PHONE.radius - PHONE.bezel}</div>
              </div>
            }
          </div>
        </div>
        {/* side buttons */}
        <div
          className="absolute -left-[2px] top-[150px] w-[3px] rounded-l-sm"
          style={{ height: 58, background: '#2A2A2E' }} />
        
        <div
          className="absolute -left-[2px] top-[224px] w-[3px] rounded-l-sm"
          style={{ height: 58, background: '#2A2A2E' }} />
        
        <div
          className="absolute -right-[2px] top-[196px] w-[3px] rounded-r-sm"
          style={{ height: 92, background: '#2A2A2E' }} />
        
      </div>
    </div>);

}