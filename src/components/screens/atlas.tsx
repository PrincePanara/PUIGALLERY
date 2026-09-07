import React from 'react';
import { GLYPHS, Glyph, ScreenRoot } from '../ui/kit';

const BG = '#FAFAF8';
const INK = '#16181D';
const BLUE = '#0057FF';
const LINE = 'rgba(22,24,29,0.1)';

const NAV: [string, string][] = [
['Tokens', GLYPHS.layers],
['Components', GLYPHS.grid],
['Typography', GLYPHS.type],
['Motion', GLYPHS.bolt],
['Export', GLYPHS.arrowRight]];


function Shell({ active, children }: {active: number;children: React.ReactNode;}) {
  return (
    <ScreenRoot bg={BG}>
      <div
        className="flex h-[38px] shrink-0 items-center gap-[16px] px-[16px]"
        style={{ background: '#EFEFEC', borderBottom: `1px solid ${LINE}` }}>
        
        <div className="flex gap-[7px]">
          {['#FF5F57', '#FEBC2E', '#28C840'].map((c) =>
          <div key={c} className="h-[11px] w-[11px] rounded-full" style={{ background: c }} />
          )}
        </div>
        <span className="text-[11px] font-medium tracking-[0.06em]" style={{ color: 'rgba(22,24,29,0.55)' }}>
          ATLAS — northline.system / v4.2.0
        </span>
        <div className="ml-auto flex items-center gap-[12px] text-[10px] tracking-[0.14em]" style={{ color: 'rgba(22,24,29,0.4)' }}>
          <span>SYNCED 12:04</span>
          <span
            className="rounded-[4px] px-[8px] py-[3px] text-[9px] font-semibold"
            style={{ background: 'rgba(0,87,255,0.1)', color: BLUE }}>
            
            4 CHANGES
          </span>
        </div>
      </div>
      <div className="flex min-h-0 flex-1">
        <aside className="flex w-[184px] shrink-0 flex-col px-[12px] pt-[16px]" style={{ borderRight: `1px solid ${LINE}` }}>
          {NAV.map(([l, g], i) =>
          <div
            key={l}
            className="mb-[1px] flex items-center gap-[10px] rounded-[7px] px-[10px] py-[8px] text-[12px]"
            style={{
              background: i === active ? '#fff' : 'transparent',
              border: i === active ? `1px solid ${LINE}` : '1px solid transparent',
              color: i === active ? INK : 'rgba(22,24,29,0.55)',
              fontWeight: i === active ? 600 : 400
            }}>
            
              <span style={{ color: i === active ? BLUE : 'rgba(22,24,29,0.35)' }}>
                <Glyph d={g} size={15} />
              </span>
              {l}
            </div>
          )}
          <div className="mt-auto pb-[16px]">
            <div className="px-[10px] text-[9px] tracking-[0.2em]" style={{ color: 'rgba(22,24,29,0.35)' }}>
              LINKED
            </div>
            <div className="mt-[8px] space-y-[6px] px-[10px] text-[11px]" style={{ color: 'rgba(22,24,29,0.5)' }}>
              <div>iOS · Swift</div>
              <div>Web · CSS vars</div>
              <div>Android · XML</div>
            </div>
          </div>
        </aside>
        <div className="min-w-0 flex-1 overflow-hidden">{children}</div>
      </div>
    </ScreenRoot>);

}

export function Tokens() {
  const rows: [string, string, string, string][] = [
  ['color.bg.canvas', '#FAFAF8', 'FAFAF8', '128 USES'],
  ['color.bg.surface', '#FFFFFF', 'FFFFFF', '94 USES'],
  ['color.text.primary', '#16181D', '16181D', '212 USES'],
  ['color.text.muted', '#6B7078', '6B7078', '88 USES'],
  ['color.accent.default', '#0057FF', '0057FF', '46 USES'],
  ['color.accent.pressed', '#0042C4', '0042C4', '12 USES'],
  ['color.status.warning', '#E8A100', 'E8A100', '9 USES']];

  return (
    <Shell active={0}>
      <div className="flex h-full">
        <div className="min-w-0 flex-1 p-[26px]">
          <div className="flex items-baseline justify-between">
            <div>
              <h1 className="text-[22px] font-semibold tracking-[-0.03em]" style={{ color: INK }}>
                Colour tokens
              </h1>
              <div className="mt-[4px] text-[10px] tracking-[0.16em]" style={{ color: 'rgba(22,24,29,0.4)' }}>
                42 TOKENS · 7 SHOWN · GROUP: SEMANTIC
              </div>
            </div>
            <div className="flex gap-[8px]">
              {['SEMANTIC', 'PRIMITIVE', 'COMPONENT'].map((t, i) =>
              <span
                key={t}
                className="rounded-[6px] px-[11px] py-[6px] text-[10px] font-medium tracking-[0.1em]"
                style={{
                  background: i === 0 ? INK : '#fff',
                  color: i === 0 ? '#fff' : 'rgba(22,24,29,0.55)',
                  border: i === 0 ? 'none' : `1px solid ${LINE}`
                }}>
                
                  {t}
                </span>
              )}
            </div>
          </div>
          <div className="mt-[20px] overflow-hidden rounded-[10px] bg-white" style={{ border: `1px solid ${LINE}` }}>
            <div
              className="grid px-[16px] py-[10px] text-[9px] tracking-[0.18em]"
              style={{ gridTemplateColumns: '38px 1fr 120px 110px', color: 'rgba(22,24,29,0.4)', borderBottom: `1px solid ${LINE}` }}>
              
              <span />
              <span>TOKEN</span>
              <span>VALUE</span>
              <span>USAGE</span>
            </div>
            {rows.map((r, i) =>
            <div
              key={r[0]}
              className="grid items-center px-[16px] py-[11px] text-[12px]"
              style={{
                gridTemplateColumns: '38px 1fr 120px 110px',
                borderTop: i ? `1px solid ${LINE}` : 'none',
                background: i === 4 ? 'rgba(0,87,255,0.03)' : '#fff'
              }}>
              
                <div className="h-[20px] w-[20px] rounded-[5px]" style={{ background: r[1], border: `1px solid ${LINE}` }} />
                <span className="font-mono text-[11px]" style={{ color: INK }}>
                  {r[0]}
                </span>
                <span className="font-mono text-[11px]" style={{ color: 'rgba(22,24,29,0.6)' }}>
                  {r[2]}
                </span>
                <span className="text-[10px] tracking-[0.12em]" style={{ color: 'rgba(22,24,29,0.42)' }}>
                  {r[3]}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="w-[320px] shrink-0 p-[20px]" style={{ borderLeft: `1px solid ${LINE}`, background: '#fff' }}>
          <div className="text-[9px] tracking-[0.2em]" style={{ color: 'rgba(22,24,29,0.4)' }}>
            LIVE PREVIEW
          </div>
          <div className="mt-[14px] rounded-[10px] p-[16px]" style={{ border: `1px solid ${LINE}` }}>
            <div className="text-[13px] font-semibold" style={{ color: INK }}>
              Publish release
            </div>
            <div className="mt-[6px] text-[11px] leading-[1.5]" style={{ color: '#6B7078' }}>
              Four tokens changed since v4.1.8.
            </div>
            <div className="mt-[14px] flex gap-[8px]">
              <button className="h-[32px] flex-1 rounded-[7px] text-[11px] font-semibold text-white" style={{ background: BLUE }}>
                Publish
              </button>
              <button className="h-[32px] rounded-[7px] px-[12px] text-[11px] font-medium" style={{ border: `1px solid ${LINE}`, color: INK }}>
                Diff
              </button>
            </div>
          </div>
          <div className="mt-[20px] text-[9px] tracking-[0.2em]" style={{ color: 'rgba(22,24,29,0.4)' }}>
            EDITING · COLOR.ACCENT.DEFAULT
          </div>
          <div className="mt-[12px] h-[92px] rounded-[8px]" style={{ background: BLUE }} />
          <div className="mt-[12px] space-y-[8px] font-mono text-[11px]" style={{ color: 'rgba(22,24,29,0.65)' }}>
            {[
            ['HEX', '#0057FF'],
            ['HSL', '218 100% 50%'],
            ['CONTRAST', '4.9 : 1 AA']].
            map(([k, v]) =>
            <div key={k} className="flex items-center justify-between">
                <span style={{ color: 'rgba(22,24,29,0.4)' }}>{k}</span>
                <span>{v}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Shell>);

}

export function Components() {
  const sizes = ['SM', 'MD', 'LG'];
  const variants = ['PRIMARY', 'SECONDARY', 'GHOST', 'DANGER'];
  const bgFor = (v: string) =>
  v === 'PRIMARY' ? BLUE : v === 'DANGER' ? '#D92D20' : v === 'SECONDARY' ? '#fff' : 'transparent';
  const fgFor = (v: string) => v === 'PRIMARY' || v === 'DANGER' ? '#fff' : INK;
  return (
    <Shell active={1}>
      <div className="p-[26px]">
        <div className="flex items-baseline justify-between">
          <div>
            <h1 className="text-[22px] font-semibold tracking-[-0.03em]" style={{ color: INK }}>
              Button
            </h1>
            <div className="mt-[4px] text-[10px] tracking-[0.16em]" style={{ color: 'rgba(22,24,29,0.4)' }}>
              12 VARIANTS · 4 STATES · 1 GAP FOUND
            </div>
          </div>
          <span className="rounded-[6px] px-[10px] py-[6px] text-[10px] font-semibold tracking-[0.12em]" style={{ background: 'rgba(232,161,0,0.14)', color: '#8A6000' }}>
            GHOST · LG MISSING
          </span>
        </div>
        <div className="mt-[22px] overflow-hidden rounded-[10px] bg-white" style={{ border: `1px solid ${LINE}` }}>
          <div className="grid" style={{ gridTemplateColumns: '130px repeat(3, 1fr)' }}>
            <div className="px-[16px] py-[11px] text-[9px] tracking-[0.18em]" style={{ color: 'rgba(22,24,29,0.4)', borderBottom: `1px solid ${LINE}` }}>
              VARIANT / SIZE
            </div>
            {sizes.map((s) =>
            <div
              key={s}
              className="px-[16px] py-[11px] text-[9px] tracking-[0.18em]"
              style={{ color: 'rgba(22,24,29,0.4)', borderBottom: `1px solid ${LINE}`, borderLeft: `1px solid ${LINE}` }}>
              
                {s}
              </div>
            )}
            {variants.map((v) =>
            <React.Fragment key={v}>
                <div className="flex items-center px-[16px] py-[18px] text-[11px] font-medium tracking-[0.1em]" style={{ color: INK, borderBottom: `1px solid ${LINE}` }}>
                  {v}
                </div>
                {sizes.map((s) => {
                const missing = v === 'GHOST' && s === 'LG';
                const h = s === 'SM' ? 28 : s === 'MD' ? 34 : 42;
                return (
                  <div
                    key={s}
                    className="flex items-center px-[16px] py-[18px]"
                    style={{ borderBottom: `1px solid ${LINE}`, borderLeft: `1px solid ${LINE}` }}>
                    
                      {missing ?
                    <div
                      className="flex items-center justify-center rounded-[7px] px-[16px] text-[10px] tracking-[0.14em]"
                      style={{ height: h, border: '1.5px dashed rgba(232,161,0,0.6)', color: '#8A6000' }}>
                      
                          NOT DEFINED
                        </div> :

                    <div
                      className="flex items-center justify-center rounded-[7px] px-[16px] text-[11px] font-semibold"
                      style={{
                        height: h,
                        background: bgFor(v),
                        color: fgFor(v),
                        border: v === 'SECONDARY' || v === 'GHOST' ? `1.5px solid ${v === 'GHOST' ? 'transparent' : LINE}` : 'none'
                      }}>
                      
                          Button
                        </div>
                    }
                    </div>);

              })}
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </Shell>);

}

export function Typography() {
  const steps: [string, number, string][] = [
  ['display / 01', 56, '-0.055em'],
  ['display / 02', 40, '-0.045em'],
  ['heading / 01', 28, '-0.03em'],
  ['heading / 02', 20, '-0.02em'],
  ['body / 01', 15, '0'],
  ['caption', 12, '0.02em']];

  return (
    <Shell active={2}>
      <div className="p-[26px]">
        <h1 className="text-[22px] font-semibold tracking-[-0.03em]" style={{ color: INK }}>
          Type scale
        </h1>
        <div className="mt-[4px] text-[10px] tracking-[0.16em]" style={{ color: 'rgba(22,24,29,0.4)' }}>
          RATIO 1.25 · BASE 15 PX · INTER TIGHT
        </div>
        <div className="mt-[20px] overflow-hidden rounded-[10px] bg-white" style={{ border: `1px solid ${LINE}` }}>
          {steps.map(([name, size, ls], i) =>
          <div
            key={name}
            className="flex items-center gap-[24px] px-[20px] py-[16px]"
            style={{ borderTop: i ? `1px solid ${LINE}` : 'none' }}>
            
              <span className="w-[110px] shrink-0 font-mono text-[11px]" style={{ color: 'rgba(22,24,29,0.45)' }}>
                {name}
              </span>
              <span
              className="flex-1 truncate font-semibold"
              style={{ fontSize: size, letterSpacing: ls, color: INK, lineHeight: 1.05 }}>
              
                Interfaces meant to be used
              </span>
              <span className="w-[150px] shrink-0 text-right font-mono text-[11px]" style={{ color: 'rgba(22,24,29,0.45)' }}>
                {size}/{Math.round(size * 1.25)} · {ls}
              </span>
            </div>
          )}
        </div>
      </div>
    </Shell>);

}

export function Motion() {
  return (
    <Shell active={3}>
      <div className="flex h-full">
        <div className="min-w-0 flex-1 p-[26px]">
          <h1 className="text-[22px] font-semibold tracking-[-0.03em]" style={{ color: INK }}>
            Motion · standard exit
          </h1>
          <div className="mt-[4px] text-[10px] tracking-[0.16em]" style={{ color: 'rgba(22,24,29,0.4)' }}>
            CUBIC-BEZIER(0.23, 1, 0.32, 1) · 220 MS
          </div>
          <div className="mt-[20px] rounded-[10px] bg-white p-[22px]" style={{ border: `1px solid ${LINE}` }}>
            <svg width="440" height="240" viewBox="0 0 440 240" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) =>
              <line key={i} x1="0" y1={i * 60} x2="440" y2={i * 60} stroke={LINE} strokeWidth="1" />
              )}
              {[0, 1, 2, 3, 4].map((i) =>
              <line key={i} x1={i * 110} y1="0" x2={i * 110} y2="240" stroke={LINE} strokeWidth="1" />
              )}
              <path d="M0,240 C101,0 141,0 440,0" fill="none" stroke={BLUE} strokeWidth="2.5" />
              <circle cx="101" cy="0" r="5" fill={BLUE} />
              <circle cx="141" cy="0" r="5" fill="#fff" stroke={BLUE} strokeWidth="2.5" />
              <line x1="0" y1="240" x2="101" y2="0" stroke={BLUE} strokeWidth="1" strokeDasharray="3 3" />
              <line x1="440" y1="0" x2="141" y2="0" stroke={BLUE} strokeWidth="1" strokeDasharray="3 3" />
            </svg>
          </div>
        </div>
        <div className="w-[300px] shrink-0 p-[20px]" style={{ borderLeft: `1px solid ${LINE}`, background: '#fff' }}>
          <div className="text-[9px] tracking-[0.2em]" style={{ color: 'rgba(22,24,29,0.4)' }}>
            REPLAY
          </div>
          <div className="mt-[12px] flex h-[92px] items-center rounded-[8px] px-[12px]" style={{ background: '#F2F3F6' }}>
            <div className="h-[44px] w-[44px] rounded-[10px]" style={{ background: BLUE }} />
            <div className="mx-[10px] h-[1px] flex-1" style={{ background: LINE }} />
            <div className="h-[44px] w-[44px] rounded-[10px]" style={{ background: 'rgba(0,87,255,0.18)' }} />
          </div>
          <div className="mt-[18px] space-y-[12px]">
            {[
            ['DURATION', '220 MS'],
            ['DELAY', '0 MS'],
            ['STAGGER', '40 MS'],
            ['REDUCED', 'FADE ONLY']].
            map(([k, v]) =>
            <div key={k}>
                <div className="flex items-center justify-between font-mono text-[11px]">
                  <span style={{ color: 'rgba(22,24,29,0.42)' }}>{k}</span>
                  <span style={{ color: INK }}>{v}</span>
                </div>
                <div className="mt-[7px] h-[3px] rounded-full" style={{ background: 'rgba(22,24,29,0.09)' }}>
                  <div className="h-full rounded-full" style={{ width: k === 'DURATION' ? '44%' : k === 'STAGGER' ? '18%' : '8%', background: BLUE }} />
                </div>
              </div>
            )}
          </div>
          <button className="mt-[22px] h-[36px] w-full rounded-[7px] text-[11px] font-semibold text-white" style={{ background: INK }}>
            PLAY TRANSITION
          </button>
        </div>
      </div>
    </Shell>);

}

export function Export() {
  return (
    <Shell active={4}>
      <div className="p-[26px]">
        <h1 className="text-[22px] font-semibold tracking-[-0.03em]" style={{ color: INK }}>
          Export · v4.2.0
        </h1>
        <div className="mt-[4px] text-[10px] tracking-[0.16em]" style={{ color: 'rgba(22,24,29,0.4)' }}>
          4 CHANGES · 3 TARGETS · REVIEW BEFORE PUBLISH
        </div>
        <div className="mt-[20px] grid grid-cols-3 gap-[12px]">
          {[
          ['WEB · CSS VARS', 'READY', true],
          ['iOS · SWIFT', 'READY', true],
          ['ANDROID · XML', 'NEEDS REVIEW', false]].
          map(([t, s, ok]) =>
          <div key={t as string} className="rounded-[10px] bg-white p-[16px]" style={{ border: `1px solid ${LINE}` }}>
              <div className="text-[11px] font-semibold tracking-[0.1em]" style={{ color: INK }}>
                {t}
              </div>
              <div className="mt-[10px] flex items-center gap-[8px]">
                <span className="h-[7px] w-[7px] rounded-full" style={{ background: ok ? '#12B76A' : '#E8A100' }} />
                <span className="text-[10px] tracking-[0.14em]" style={{ color: ok ? '#0B8A4F' : '#8A6000' }}>
                  {s}
                </span>
              </div>
            </div>
          )}
        </div>
        <div className="mt-[20px] overflow-hidden rounded-[10px]" style={{ border: `1px solid ${LINE}`, background: '#14161B' }}>
          <div className="flex items-center justify-between px-[16px] py-[10px]" style={{ borderBottom: '1px solid rgba(255,255,255,0.09)' }}>
            <span className="font-mono text-[11px] text-white/60">tokens.css</span>
            <span className="font-mono text-[10px] text-white/35">+3 −1</span>
          </div>
          <div className="p-[16px] font-mono text-[11.5px] leading-[1.85]">
            {[
            ['  --color-bg-canvas: #FAFAF8;', 'dim'],
            ['- --color-accent-default: #0B4FE0;', 'del'],
            ['+ --color-accent-default: #0057FF;', 'add'],
            ['+ --color-accent-pressed: #0042C4;', 'add'],
            ['+ --radius-control: 7px;', 'add'],
            ['  --duration-standard: 220ms;', 'dim']].
            map(([l, k]) =>
            <div
              key={l}
              style={{
                color: k === 'add' ? '#7DE39B' : k === 'del' ? '#FF8A80' : 'rgba(255,255,255,0.45)',
                background: k === 'add' ? 'rgba(125,227,155,0.07)' : k === 'del' ? 'rgba(255,138,128,0.07)' : 'transparent'
              }}>
              
                {l}
              </div>
            )}
          </div>
        </div>
        <div className="mt-[18px] flex items-center justify-between">
          <span className="text-[11px]" style={{ color: 'rgba(22,24,29,0.45)' }}>
            Publishing notifies 14 consumers.
          </span>
          <div className="flex gap-[10px]">
            <button className="h-[38px] rounded-[8px] px-[16px] text-[11px] font-semibold" style={{ border: `1px solid ${LINE}`, color: INK }}>
              DRY RUN
            </button>
            <button className="h-[38px] rounded-[8px] px-[20px] text-[11px] font-semibold text-white" style={{ background: BLUE }}>
              PUBLISH v4.2.0
            </button>
          </div>
        </div>
      </div>
    </Shell>);

}