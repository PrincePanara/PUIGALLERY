import React from 'react';
import { GLYPHS, Glyph, ScreenRoot } from '../ui/kit';

const SAND = '#F3EDE4';
const INK = '#14110E';
const RUST = '#C8552B';
const LINE = 'rgba(20,17,14,0.12)';

function Nav({ active = 0, dark = false }: {active?: number;dark?: boolean;}) {
  const c = dark ? '#fff' : INK;
  return (
    <header className="flex h-[74px] shrink-0 items-center justify-between px-[54px]" style={{ color: c }}>
      <span className="text-[15px] font-semibold tracking-[0.16em]">OPTICAL</span>
      <nav className="flex gap-[30px] text-[11px] tracking-[0.2em]">
        {['FRAMES', 'FIT', 'LENSES', 'STORES'].map((l, i) =>
        <span key={l} style={{ opacity: i === active ? 1 : 0.5, borderBottom: i === active ? `1px solid ${c}` : 'none', paddingBottom: 3 }}>
            {l}
          </span>
        )}
      </nav>
      <div className="flex items-center gap-[20px] text-[11px] tracking-[0.18em]">
        <span style={{ opacity: 0.6 }}>SEARCH</span>
        <span className="flex items-center gap-[7px]">
          <Glyph d={GLYPHS.bag} size={16} /> 02
        </span>
      </div>
    </header>);

}

function FrameGlyph({ w = 200, color = INK, tint = 'rgba(200,85,43,0.18)' }: {w?: number;color?: string;tint?: string;}) {
  const h = w * 0.36;
  return (
    <svg width={w} height={h} viewBox="0 0 200 72" aria-hidden="true">
      <rect x="6" y="16" width="76" height="44" rx="16" fill={tint} stroke={color} strokeWidth="3" />
      <rect x="118" y="16" width="76" height="44" rx="16" fill={tint} stroke={color} strokeWidth="3" />
      <path d="M82 32h36" stroke={color} strokeWidth="3" />
      <path d="M6 26H0M194 26h6" stroke={color} strokeWidth="3" />
    </svg>);

}

export function Home() {
  return (
    <ScreenRoot bg={SAND}>
      <Nav />
      <div className="relative flex flex-1 items-center px-[54px]">
        <div className="w-[46%]">
          <div className="text-[10px] tracking-[0.3em]" style={{ color: 'rgba(20,17,14,0.45)' }}>
            SS26 · ACETATE SERIES
          </div>
          <h1 className="mt-[18px] text-[92px] font-medium leading-[0.86] tracking-[-0.06em]" style={{ color: INK }}>
            FIT
            <br />
            FIRST.
          </h1>
          <p className="mt-[22px] max-w-[330px] text-[15px] leading-[1.55]" style={{ color: 'rgba(20,17,14,0.6)' }}>
            Every frame listed with real measurements. Choose by face, not by photograph.
          </p>
          <div className="mt-[30px] flex items-center gap-[16px]">
            <button className="h-[48px] rounded-full px-[26px] text-[11px] font-semibold tracking-[0.18em] text-white" style={{ background: INK }}>
              FIND MY FIT
            </button>
            <span className="text-[11px] tracking-[0.18em]" style={{ color: RUST }}>
              SHOP ALL 84 FRAMES ↗
            </span>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div
            className="flex h-[380px] w-[380px] items-center justify-center rounded-full"
            style={{ background: '#E5DCCD' }}>
            
            <div style={{ transform: 'rotate(-8deg)' }}>
              <FrameGlyph w={320} color={INK} tint="rgba(200,85,43,0.22)" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex shrink-0 items-center justify-between px-[54px] py-[22px]" style={{ borderTop: `1px solid ${LINE}` }}>
        {[
        ['MEASURED', 'LENS · BRIDGE · TEMPLE'],
        ['TRY ON', 'CAMERA FIT PREVIEW'],
        ['LENSES', 'FROM ₹1,900'],
        ['RETURNS', '30 DAYS, ANY REASON']].
        map(([k, v]) =>
        <div key={k}>
            <div className="text-[9px] tracking-[0.24em]" style={{ color: 'rgba(20,17,14,0.4)' }}>
              {k}
            </div>
            <div className="mt-[5px] text-[12px]" style={{ color: INK }}>
              {v}
            </div>
          </div>
        )}
      </div>
    </ScreenRoot>);

}

export function Catalog() {
  const frames = [
  ['HALDANE', '₹6,400', '#2C2A26', 'ROUND'],
  ['ORIEL', '₹7,200', '#C8552B', 'SQUARE'],
  ['MARLOW', '₹5,800', '#7C6A52', 'AVIATOR'],
  ['PELHAM', '₹8,100', '#1B2A3A', 'CAT EYE'],
  ['SEVERN', '₹6,900', '#5B5F4B', 'ROUND'],
  ['ASHBY', '₹7,600', '#A8452B', 'SQUARE']];

  return (
    <ScreenRoot bg={SAND}>
      <Nav active={0} />
      <div className="flex min-h-0 flex-1">
        <aside className="w-[230px] shrink-0 px-[54px] pt-[10px]">
          {[
          ['FACE SHAPE', ['OVAL', 'ROUND', 'SQUARE', 'HEART']],
          ['WIDTH', ['NARROW', 'REGULAR', 'WIDE']],
          ['MATERIAL', ['ACETATE', 'METAL', 'TITANIUM']]].
          map(([g, items], gi) =>
          <div key={g as string} className="mb-[28px]">
              <div className="text-[9px] tracking-[0.24em]" style={{ color: 'rgba(20,17,14,0.4)' }}>
                {g}
              </div>
              <div className="mt-[12px] space-y-[9px]">
                {(items as string[]).map((it, i) =>
              <div key={it} className="flex items-center gap-[9px]">
                    <div
                  className="h-[12px] w-[12px] rounded-[3px]"
                  style={{
                    background: gi === 0 && i === 1 ? RUST : 'transparent',
                    border: `1.5px solid ${gi === 0 && i === 1 ? RUST : LINE}`
                  }} />
                
                    <span className="text-[12px]" style={{ color: gi === 0 && i === 1 ? INK : 'rgba(20,17,14,0.6)' }}>
                      {it}
                    </span>
                  </div>
              )}
              </div>
            </div>
          )}
        </aside>
        <div className="min-w-0 flex-1 pr-[54px]">
          <div className="flex items-baseline justify-between pb-[16px]" style={{ borderBottom: `1px solid ${LINE}` }}>
            <h1 className="text-[34px] font-medium tracking-[-0.045em]" style={{ color: INK }}>
              Round faces
            </h1>
            <span className="text-[11px] tracking-[0.18em]" style={{ color: 'rgba(20,17,14,0.5)' }}>
              24 FRAMES · SORT: NEW ↓
            </span>
          </div>
          <div className="mt-[26px] grid grid-cols-3 gap-x-[26px] gap-y-[34px]">
            {frames.map(([n, p, c, shape]) =>
            <div key={n as string}>
                <div className="flex h-[150px] items-center justify-center" style={{ background: '#EAE2D6' }}>
                  <FrameGlyph w={180} color={c as string} tint="rgba(20,17,14,0.06)" />
                </div>
                <div className="mt-[12px] flex items-baseline justify-between">
                  <span className="text-[13px] font-medium tracking-[0.06em]" style={{ color: INK }}>
                    {n}
                  </span>
                  <span className="text-[13px]" style={{ color: INK }}>
                    {p}
                  </span>
                </div>
                <div className="mt-[3px] text-[10px] tracking-[0.16em]" style={{ color: 'rgba(20,17,14,0.42)' }}>
                  {shape} · 52-19-145
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </ScreenRoot>);

}

export function Product() {
  return (
    <ScreenRoot bg={SAND}>
      <Nav />
      <div className="flex min-h-0 flex-1">
        <div className="flex w-[58%] flex-col">
          <div className="flex flex-1 items-center justify-center" style={{ background: '#EAE2D6' }}>
            <FrameGlyph w={420} color="#C8552B" tint="rgba(20,17,14,0.07)" />
          </div>
          <div className="flex h-[110px] shrink-0 items-center gap-[12px] px-[40px]">
            {[0, 1, 2, 3].map((i) =>
            <div
              key={i}
              className="flex h-[74px] w-[100px] items-center justify-center"
              style={{ background: '#E5DCCD', border: i === 0 ? `1.5px solid ${INK}` : '1.5px solid transparent' }}>
              
                <FrameGlyph w={72} color="#C8552B" tint="transparent" />
              </div>
            )}
          </div>
        </div>
        <div className="flex-1 px-[46px] pt-[16px]">
          <div className="text-[10px] tracking-[0.26em]" style={{ color: 'rgba(20,17,14,0.45)' }}>
            ACETATE · UNISEX
          </div>
          <h1 className="mt-[12px] text-[52px] font-medium leading-[0.92] tracking-[-0.055em]" style={{ color: INK }}>
            ORIEL
          </h1>
          <div className="mt-[10px] flex items-center gap-[14px]">
            <span className="text-[22px]" style={{ color: INK }}>
              ₹7,200
            </span>
            <span className="text-[11px] tracking-[0.16em]" style={{ color: RUST }}>
              + LENSES FROM ₹1,900
            </span>
          </div>
          <div className="mt-[26px] flex gap-[10px]">
            {['#C8552B', '#2C2A26', '#7C6A52', '#1B2A3A'].map((c, i) =>
            <div
              key={c}
              className="h-[30px] w-[30px] rounded-full"
              style={{ background: c, outline: i === 0 ? `1.5px solid ${INK}` : 'none', outlineOffset: 3 }} />

            )}
          </div>
          <div className="mt-[28px]" style={{ borderTop: `1px solid ${LINE}` }}>
            {[
            ['LENS WIDTH', '52 MM'],
            ['BRIDGE', '19 MM'],
            ['TEMPLE', '145 MM'],
            ['WEIGHT', '28 G']].
            map(([k, v]) =>
            <div key={k} className="flex items-center justify-between py-[13px]" style={{ borderBottom: `1px solid ${LINE}` }}>
                <span className="text-[10px] tracking-[0.2em]" style={{ color: 'rgba(20,17,14,0.45)' }}>
                  {k}
                </span>
                <span className="text-[13px]" style={{ color: INK }}>
                  {v}
                </span>
              </div>
            )}
          </div>
          <div className="mt-[26px] flex gap-[12px]">
            <button className="h-[50px] flex-1 rounded-full text-[11px] font-semibold tracking-[0.18em] text-white" style={{ background: INK }}>
              ADD TO BAG
            </button>
            <button className="h-[50px] rounded-full px-[24px] text-[11px] font-semibold tracking-[0.18em]" style={{ border: `1.5px solid ${INK}`, color: INK }}>
              TRY ON
            </button>
          </div>
        </div>
      </div>
    </ScreenRoot>);

}

export function Tryon() {
  return (
    <ScreenRoot bg="#191512">
      <div className="relative flex-1">
        <div className="absolute inset-0" style={{ background: '#241E19' }}>
          <div
            className="absolute left-1/2 top-1/2 h-[520px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-[200px]"
            style={{ background: '#3A2F26' }} />
          
          <div className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2">
            <FrameGlyph w={330} color="#C8552B" tint="rgba(255,255,255,0.08)" />
          </div>
        </div>
        <div className="relative flex items-center justify-between px-[40px] pt-[30px]">
          <span className="text-[11px] tracking-[0.22em] text-white/70">TRY ON · ORIEL / RUST</span>
          <div className="flex items-center gap-[10px] rounded-full px-[14px] py-[7px]" style={{ background: 'rgba(255,255,255,0.1)' }}>
            <span className="h-[6px] w-[6px] rounded-full" style={{ background: '#5CE28A' }} />
            <span className="text-[10px] tracking-[0.18em] text-white/80">FIT: GOOD · 52 MM</span>
          </div>
          <span className="text-[11px] tracking-[0.22em] text-white/70">CLOSE ✕</span>
        </div>
      </div>
      <div className="shrink-0 px-[40px] pb-[30px]">
        <div className="flex items-center justify-between">
          <div className="flex gap-[10px]">
            {['#C8552B', '#2C2A26', '#7C6A52', '#1B2A3A', '#5B5F4B'].map((c, i) =>
            <div
              key={c}
              className="flex h-[62px] w-[86px] items-center justify-center rounded-[10px]"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: i === 0 ? '1.5px solid #fff' : '1.5px solid rgba(255,255,255,0.1)'
              }}>
              
                <FrameGlyph w={62} color={c} tint="transparent" />
              </div>
            )}
          </div>
          <div className="flex items-center gap-[12px]">
            <button className="h-[46px] rounded-full px-[22px] text-[11px] font-semibold tracking-[0.16em] text-white" style={{ border: '1.5px solid rgba(255,255,255,0.25)' }}>
              CAPTURE
            </button>
            <button className="h-[46px] rounded-full px-[26px] text-[11px] font-semibold tracking-[0.16em]" style={{ background: '#fff', color: INK }}>
              ADD ORIEL · ₹7,200
            </button>
          </div>
        </div>
      </div>
    </ScreenRoot>);

}

export function Cart() {
  return (
    <ScreenRoot bg={SAND}>
      <Nav />
      <div className="flex min-h-0 flex-1 px-[54px]">
        <div className="flex-1 pr-[46px]">
          <h1 className="text-[40px] font-medium tracking-[-0.05em]" style={{ color: INK }}>
            Bag · 02
          </h1>
          <div className="mt-[24px]">
            {[
            ['ORIEL', 'RUST · 52-19-145', '₹7,200', 'BLUE LIGHT · ₹1,900'],
            ['HALDANE', 'BLACK · 50-20-140', '₹6,400', 'PRESCRIPTION · ₹3,400']].
            map(([n, spec, p, lens]) =>
            <div key={n as string} className="flex gap-[22px] py-[24px]" style={{ borderTop: `1px solid ${LINE}` }}>
                <div className="flex h-[100px] w-[140px] shrink-0 items-center justify-center" style={{ background: '#EAE2D6' }}>
                  <FrameGlyph w={110} color={INK} tint="rgba(200,85,43,0.16)" />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between">
                    <span className="text-[18px] font-medium tracking-[0.04em]" style={{ color: INK }}>
                      {n}
                    </span>
                    <span className="text-[16px]" style={{ color: INK }}>
                      {p}
                    </span>
                  </div>
                  <div className="mt-[4px] text-[11px] tracking-[0.16em]" style={{ color: 'rgba(20,17,14,0.45)' }}>
                    {spec}
                  </div>
                  <div
                  className="mt-[14px] flex items-center justify-between rounded-[10px] px-[14px] py-[11px]"
                  style={{ background: '#EAE2D6' }}>
                  
                    <span className="text-[11px] tracking-[0.14em]" style={{ color: INK }}>
                      LENS · {lens}
                    </span>
                    <span className="text-[11px] tracking-[0.16em]" style={{ color: RUST }}>
                      CHANGE
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-[320px] shrink-0 pt-[10px]">
          <div className="p-[24px]" style={{ background: '#EAE2D6' }}>
            <div className="text-[9px] tracking-[0.24em]" style={{ color: 'rgba(20,17,14,0.45)' }}>
              SUMMARY
            </div>
            {[
            ['FRAMES', '₹13,600'],
            ['LENSES', '₹5,300'],
            ['SHIPPING', 'FREE']].
            map(([k, v]) =>
            <div key={k} className="mt-[14px] flex items-center justify-between">
                <span className="text-[11px] tracking-[0.14em]" style={{ color: 'rgba(20,17,14,0.55)' }}>
                  {k}
                </span>
                <span className="text-[13px]" style={{ color: INK }}>
                  {v}
                </span>
              </div>
            )}
            <div className="mt-[20px] flex items-baseline justify-between pt-[16px]" style={{ borderTop: `1px solid ${LINE}` }}>
              <span className="text-[11px] tracking-[0.2em]" style={{ color: INK }}>
                TOTAL
              </span>
              <span className="text-[26px] font-medium tracking-[-0.03em]" style={{ color: INK }}>
                ₹18,900
              </span>
            </div>
            <button className="mt-[20px] h-[50px] w-full rounded-full text-[11px] font-semibold tracking-[0.18em] text-white" style={{ background: INK }}>
              CHECKOUT
            </button>
            <div className="mt-[14px] text-[10px] leading-[1.6] tracking-[0.1em]" style={{ color: 'rgba(20,17,14,0.45)' }}>
              30-DAY RETURNS. LENSES FITTED IN OUR OWN LAB.
            </div>
          </div>
        </div>
      </div>
    </ScreenRoot>);

}

export function Checkout() {
  return (
    <ScreenRoot bg={SAND}>
      <Nav />
      <div className="flex min-h-0 flex-1 justify-center px-[54px]">
        <div className="w-[560px]">
          <div className="flex items-center gap-[10px] text-[10px] tracking-[0.22em]" style={{ color: 'rgba(20,17,14,0.45)' }}>
            <span style={{ color: INK }}>BAG</span> ── <span style={{ color: INK }}>DETAILS</span> ── <span>PAYMENT</span>
          </div>
          <h1 className="mt-[16px] text-[40px] font-medium tracking-[-0.05em]" style={{ color: INK }}>
            Where should
            <br />
            these go?
          </h1>
          <div className="mt-[28px] space-y-[14px]">
            {[
            ['FULL NAME', 'Prince Panara', false],
            ['ADDRESS', '14 Ballygunge Place, Kolkata 700019', true],
            ['PHONE', '+91 98300 44210', false]].
            map(([k, v, focus]) =>
            <div key={k as string}>
                <div className="mb-[7px] text-[9px] tracking-[0.22em]" style={{ color: 'rgba(20,17,14,0.45)' }}>
                  {k}
                </div>
                <div
                className="flex h-[48px] items-center px-[15px] text-[14px]"
                style={{ background: '#fff', border: `1.5px solid ${focus ? INK : 'transparent'}`, color: INK }}>
                
                  {v}
                  {focus && <span className="ml-[2px] inline-block" style={{ width: 1.5, height: 17, background: INK }} />}
                </div>
              </div>
            )}
          </div>
          <div className="mt-[26px] text-[9px] tracking-[0.22em]" style={{ color: 'rgba(20,17,14,0.45)' }}>
            PAYMENT
          </div>
          <div className="mt-[12px] grid grid-cols-3 gap-[10px]">
            {['CARD', 'UPI', 'PAY LATER'].map((m, i) =>
            <div
              key={m}
              className="flex h-[46px] items-center justify-center text-[11px] font-medium tracking-[0.16em]"
              style={{
                background: i === 1 ? INK : '#fff',
                color: i === 1 ? '#fff' : 'rgba(20,17,14,0.6)'
              }}>
              
                {m}
              </div>
            )}
          </div>
          <div className="mt-[26px] flex items-center justify-between py-[18px]" style={{ borderTop: `1px solid ${LINE}`, borderBottom: `1px solid ${LINE}` }}>
            <span className="text-[11px] tracking-[0.2em]" style={{ color: 'rgba(20,17,14,0.5)' }}>
              TOTAL · 2 FRAMES + LENSES
            </span>
            <span className="text-[26px] font-medium tracking-[-0.03em]" style={{ color: INK }}>
              ₹18,900
            </span>
          </div>
          <button className="mt-[20px] h-[52px] w-full rounded-full text-[11px] font-semibold tracking-[0.2em] text-white" style={{ background: RUST }}>
            PAY ₹18,900
          </button>
        </div>
      </div>
    </ScreenRoot>);

}