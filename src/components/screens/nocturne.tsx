import React from 'react';
import { GLYPHS, Glyph, ScreenRoot } from '../ui/kit';

const BG = '#0B0A0D';
const PANEL = '#131218';
const PINK = '#FF3D71';
const W = 'rgba(255,255,255,';

const NAV: [string, string][] = [
['Discover', GLYPHS.grid],
['Player', GLYPHS.play],
['Playlists', GLYPHS.list],
['Artists', GLYPHS.user],
['Library', GLYPHS.book]];


function Rail({ active }: {active: number;}) {
  return (
    <aside className="flex w-[212px] shrink-0 flex-col px-[20px] pt-[30px]" style={{ borderRight: `1px solid ${W}0.07)` }}>
      <div className="px-[10px] text-[14px] font-semibold tracking-[0.24em] text-white">NOCTURNE</div>
      <div className="mt-[34px]">
        {NAV.map(([l, g], i) =>
        <div
          key={l}
          className="mb-[2px] flex items-center gap-[12px] rounded-[8px] px-[10px] py-[9px] text-[13px]"
          style={{
            color: i === active ? '#fff' : W + '0.45)',
            background: i === active ? W + '0.06)' : 'transparent'
          }}>
          
            <span style={{ color: i === active ? PINK : W + '0.35)' }}>
              <Glyph d={g} size={16} />
            </span>
            {l}
          </div>
        )}
      </div>
      <div className="mt-auto pb-[24px]">
        <div className="px-[10px] text-[9px] tracking-[0.22em]" style={{ color: W + '0.3)' }}>
          ON AIR
        </div>
        <div className="mt-[10px] rounded-[10px] p-[12px]" style={{ background: PANEL }}>
          <div className="flex items-center gap-[8px]">
            <span className="h-[6px] w-[6px] rounded-full" style={{ background: PINK }} />
            <span className="text-[10px] tracking-[0.16em]" style={{ color: PINK }}>
              LIVE · 02:00
            </span>
          </div>
          <div className="mt-[8px] text-[12px] text-white">Night Shift w/ Aiko</div>
        </div>
      </div>
    </aside>);

}

function Art({ size = 120, from, label }: {size?: number;from: string;label: string;}) {
  return (
    <div
      className="relative flex shrink-0 items-end overflow-hidden rounded-[6px] p-[10px]"
      style={{ width: size, height: size, background: from }}
      aria-hidden="true">
      
      <div className="absolute right-[10px] top-[10px] h-[16px] w-[16px] rounded-full" style={{ border: '2px solid rgba(0,0,0,0.35)' }} />
      <span className="text-[9px] font-semibold tracking-[0.18em] text-black/60">{label}</span>
    </div>);

}

export function Discover() {
  return (
    <ScreenRoot bg={BG} className="flex-row">
      <Rail active={0} />
      <div className="min-w-0 flex-1 overflow-hidden px-[38px] pt-[30px]">
        <div className="flex items-baseline justify-between">
          <div>
            <div className="text-[10px] tracking-[0.26em]" style={{ color: W + '0.35)' }}>
              TONIGHT · TUESDAY
            </div>
            <h1 className="mt-[10px] text-[46px] font-semibold leading-[0.94] tracking-[-0.05em] text-white">
              Programmed,
              <br />
              not suggested.
            </h1>
          </div>
          <div className="flex gap-[8px]">
            {['ALL', 'AMBIENT', 'DUB', 'JAZZ'].map((f, i) =>
            <span
              key={f}
              className="rounded-full px-[13px] py-[7px] text-[10px] tracking-[0.14em]"
              style={{
                background: i === 0 ? '#fff' : 'transparent',
                color: i === 0 ? '#000' : W + '0.5)',
                border: i === 0 ? 'none' : `1px solid ${W}0.14)`
              }}>
              
                {f}
              </span>
            )}
          </div>
        </div>
        <div className="mt-[30px]">
          {[
          ['20:00', 'DUSK PROTOCOL', 'MIRA VOSS', '#D8FF52'],
          ['22:00', 'LOW TIDE', 'SEBASTIAN KAI', '#FF9E6B'],
          ['00:00', 'BLUE HOUR', 'AIKO TANAKA', '#8FD3FF'],
          ['02:00', 'NIGHT SHIFT', 'AIKO TANAKA', '#FF3D71']].
          map(([t, n, a, c], i) =>
          <div
            key={n as string}
            className="flex items-center gap-[22px] py-[16px]"
            style={{ borderTop: `1px solid ${W}0.07)`, opacity: i === 3 ? 1 : 0.85 }}>
            
              <span className="w-[54px] font-mono text-[12px]" style={{ color: i === 3 ? PINK : W + '0.4)' }}>
                {t}
              </span>
              <Art size={54} from={c as string} label="" />
              <div className="flex-1">
                <div className="text-[19px] font-medium tracking-[-0.02em] text-white">{n}</div>
                <div className="mt-[3px] text-[10px] tracking-[0.18em]" style={{ color: W + '0.4)' }}>
                  {a}
                </div>
              </div>
              {i === 3 ?
            <span className="text-[10px] font-semibold tracking-[0.18em]" style={{ color: PINK }}>
                  ON AIR ▸
                </span> :

            <span className="text-[10px] tracking-[0.18em]" style={{ color: W + '0.35)' }}>
                  REMIND
                </span>
            }
            </div>
          )}
        </div>
        <div className="mt-[26px] flex gap-[14px]">
          {[
          ['#D8FF52', 'ARCHIVE 041'],
          ['#8FD3FF', 'ARCHIVE 040'],
          ['#FF9E6B', 'ARCHIVE 039'],
          ['#C3B5FF', 'ARCHIVE 038']].
          map(([c, l]) =>
          <div key={l}>
              <Art size={132} from={c} label={l} />
              <div className="mt-[8px] text-[11px] text-white">{l}</div>
              <div className="text-[9px] tracking-[0.16em]" style={{ color: W + '0.35)' }}>
                62 MIN
              </div>
            </div>
          )}
        </div>
      </div>
    </ScreenRoot>);

}

function Wave({ active = 0.42 }: {active?: number;}) {
  const bars = Array.from({ length: 96 }, (_, i) => 12 + Math.abs(Math.sin(i * 0.42) * 34) + i % 7 * 2);
  return (
    <div className="flex h-[86px] items-center gap-[2px]" aria-hidden="true">
      {bars.map((h, i) =>
      <div
        key={i}
        style={{
          width: 3,
          height: h,
          borderRadius: 2,
          background: i / bars.length < active ? PINK : 'rgba(255,255,255,0.16)'
        }} />

      )}
    </div>);

}

export function Player() {
  return (
    <ScreenRoot bg={BG} className="flex-row">
      <Rail active={1} />
      <div className="flex min-w-0 flex-1 flex-col px-[38px] pt-[30px]">
        <div className="flex gap-[30px]">
          <Art size={216} from="#FF3D71" label="NIGHT SHIFT" />
          <div className="flex flex-1 flex-col justify-end">
            <div className="text-[10px] tracking-[0.26em]" style={{ color: PINK }}>
              NOW PLAYING · LIVE
            </div>
            <h1 className="mt-[10px] text-[54px] font-semibold leading-[0.9] tracking-[-0.055em] text-white">
              NIGHT SHIFT
            </h1>
            <div className="mt-[10px] flex items-center gap-[16px] text-[12px]" style={{ color: W + '0.5)' }}>
              <span>AIKO TANAKA</span>
              <span>·</span>
              <span>NOCTURNE SESSIONS 041</span>
              <span>·</span>
              <span>122 BPM · A MIN</span>
            </div>
          </div>
        </div>
        <div className="mt-[34px]">
          <Wave />
          <div className="mt-[10px] flex items-center justify-between font-mono text-[11px]" style={{ color: W + '0.4)' }}>
            <span>26:14</span>
            <span>62:00</span>
          </div>
        </div>
        <div className="mt-[22px] flex items-center gap-[24px]">
          <div className="flex items-center gap-[16px]" style={{ color: W + '0.6)' }}>
            <Glyph d="M19 5v14M15 12l-9 7V5l9 7" size={20} />
            <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full" style={{ background: '#fff', color: '#000' }}>
              <Glyph d="M8 5h3v14H8zM13 5h3v14h-3z" size={20} stroke={2} />
            </div>
            <Glyph d="M5 5v14M9 12l9-7v14l-9-7" size={20} />
          </div>
          <div className="ml-auto flex items-center gap-[14px]" style={{ color: W + '0.45)' }}>
            <Glyph d={GLYPHS.heart} size={18} />
            <Glyph d={GLYPHS.list} size={18} />
            <div className="flex items-center gap-[8px]">
              <Glyph d="M4 9v6h4l5 4V5L8 9H4Z" size={18} />
              <div className="h-[3px] w-[80px] rounded-full" style={{ background: W + '0.14)' }}>
                <div className="h-full w-[62%] rounded-full bg-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-auto pb-[26px]">
          <div className="text-[9px] tracking-[0.24em]" style={{ color: W + '0.3)' }}>
            UP NEXT
          </div>
          <div className="mt-[10px] flex gap-[10px]">
            {[
            ['LOW TIDE', 'SEBASTIAN KAI'],
            ['BLUE HOUR', 'AIKO TANAKA'],
            ['DUSK PROTOCOL', 'MIRA VOSS']].
            map(([n, a]) =>
            <div key={n} className="flex-1 rounded-[10px] p-[13px]" style={{ background: PANEL }}>
                <div className="text-[12px] font-medium text-white">{n}</div>
                <div className="mt-[3px] text-[9px] tracking-[0.16em]" style={{ color: W + '0.4)' }}>
                  {a}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </ScreenRoot>);

}

export function Playlist() {
  const tracks = [
  ['01', 'Ferrite', 'Mira Voss', '6:12', 'A MIN'],
  ['02', 'Halide', 'Sebastian Kai', '5:48', 'D MIN'],
  ['03', 'Low Tide', 'Aiko Tanaka', '7:04', 'F MAJ'],
  ['04', 'Sable', 'Mira Voss', '4:36', 'G MIN'],
  ['05', 'Undertow', 'Kito Sano', '8:22', 'C MIN'],
  ['06', 'Blue Hour', 'Aiko Tanaka', '6:58', 'A MIN']];

  return (
    <ScreenRoot bg={BG} className="flex-row">
      <Rail active={2} />
      <div className="min-w-0 flex-1 px-[38px] pt-[30px]">
        <div className="flex gap-[26px]">
          <Art size={168} from="#8FD3FF" label="AFTER HOURS" />
          <div className="flex flex-col justify-end">
            <div className="text-[10px] tracking-[0.26em]" style={{ color: W + '0.4)' }}>
              PLAYLIST · LABEL CURATED
            </div>
            <h1 className="mt-[10px] text-[48px] font-semibold leading-[0.92] tracking-[-0.055em] text-white">
              AFTER HOURS
            </h1>
            <div className="mt-[10px] text-[12px]" style={{ color: W + '0.5)' }}>
              24 TRACKS · 2H 48M · UPDATED FRIDAYS
            </div>
          </div>
          <div className="ml-auto flex items-end gap-[10px]">
            <button className="flex h-[46px] items-center gap-[10px] rounded-full px-[22px] text-[11px] font-semibold tracking-[0.16em]" style={{ background: PINK, color: '#150407' }}>
              <Glyph d={GLYPHS.play} size={15} /> PLAY ALL
            </button>
          </div>
        </div>
        <div className="mt-[30px]">
          <div
            className="grid px-[6px] pb-[10px] text-[9px] tracking-[0.2em]"
            style={{ gridTemplateColumns: '46px 1fr 220px 90px 80px', color: W + '0.32)', borderBottom: `1px solid ${W}0.07)` }}>
            
            <span>#</span>
            <span>TITLE</span>
            <span>ARTIST</span>
            <span>KEY</span>
            <span className="text-right">TIME</span>
          </div>
          {tracks.map((t, i) =>
          <div
            key={t[0]}
            className="grid items-center px-[6px] py-[14px] text-[13px]"
            style={{
              gridTemplateColumns: '46px 1fr 220px 90px 80px',
              borderBottom: `1px solid ${W}0.05)`,
              background: i === 2 ? W + '0.04)' : 'transparent'
            }}>
            
              <span className="font-mono text-[11px]" style={{ color: i === 2 ? PINK : W + '0.35)' }}>
                {t[0]}
              </span>
              <span className="font-medium text-white">{t[1]}</span>
              <span style={{ color: W + '0.5)' }}>{t[2]}</span>
              <span className="font-mono text-[11px]" style={{ color: W + '0.4)' }}>
                {t[4]}
              </span>
              <span className="text-right font-mono text-[11px]" style={{ color: W + '0.5)' }}>
                {t[3]}
              </span>
            </div>
          )}
        </div>
      </div>
    </ScreenRoot>);

}

export function Artist() {
  return (
    <ScreenRoot bg={BG} className="flex-row">
      <Rail active={3} />
      <div className="min-w-0 flex-1 px-[38px] pt-[30px]">
        <div className="flex items-end gap-[26px]">
          <div className="h-[150px] w-[150px] rounded-full" style={{ background: '#FF9E6B' }} />
          <div>
            <div className="text-[10px] tracking-[0.26em]" style={{ color: W + '0.4)' }}>
              ARTIST · TOKYO
            </div>
            <h1 className="mt-[8px] text-[62px] font-semibold leading-[0.88] tracking-[-0.06em] text-white">
              AIKO TANAKA
            </h1>
            <div className="mt-[10px] flex gap-[26px] text-[11px] tracking-[0.16em]" style={{ color: W + '0.45)' }}>
              <span>08 RELEASES</span>
              <span>41 SESSIONS</span>
              <span>SINCE 2019</span>
            </div>
          </div>
        </div>
        <div className="mt-[32px] text-[9px] tracking-[0.24em]" style={{ color: W + '0.3)' }}>
          RELEASES
        </div>
        <div className="mt-[14px] grid grid-cols-4 gap-[16px]">
          {[
          ['#FF3D71', 'NIGHT SHIFT', '2026'],
          ['#8FD3FF', 'BLUE HOUR', '2025'],
          ['#D8FF52', 'FERRITE', '2024'],
          ['#C3B5FF', 'SABLE', '2023']].
          map(([c, n, y]) =>
          <div key={n}>
              <Art size={190} from={c} label={n} />
              <div className="mt-[10px] text-[13px] font-medium text-white">{n}</div>
              <div className="mt-[2px] text-[9px] tracking-[0.18em]" style={{ color: W + '0.35)' }}>
                LP · {y}
              </div>
            </div>
          )}
        </div>
        <div className="mt-[26px] max-w-[520px] text-[13px] leading-[1.6]" style={{ color: W + '0.45)' }}>
          Resident since the first broadcast. Records at night, mixes in one take.
        </div>
      </div>
    </ScreenRoot>);

}

export function Library() {
  const rows = [
  ['ALBUM', 'Night Shift', 'Aiko Tanaka', '2026', '62:00'],
  ['SESSION', 'Nocturne 041', 'Various', '2026', '58:14'],
  ['ALBUM', 'Halide', 'Sebastian Kai', '2025', '44:20'],
  ['TRACK', 'Undertow', 'Kito Sano', '2025', '8:22'],
  ['ALBUM', 'Blue Hour', 'Aiko Tanaka', '2025', '51:06'],
  ['SESSION', 'Nocturne 038', 'Various', '2024', '60:00'],
  ['TRACK', 'Ferrite', 'Mira Voss', '2024', '6:12'],
  ['ALBUM', 'Sable', 'Mira Voss', '2023', '39:48']];

  return (
    <ScreenRoot bg={BG} className="flex-row">
      <Rail active={4} />
      <div className="min-w-0 flex-1 px-[38px] pt-[30px]">
        <div className="flex items-baseline justify-between">
          <h1 className="text-[40px] font-semibold tracking-[-0.05em] text-white">Library</h1>
          <div className="flex items-center gap-[14px]">
            <div
              className="flex h-[36px] w-[240px] items-center gap-[9px] rounded-[8px] px-[12px] text-[12px]"
              style={{ background: PANEL, color: W + '0.4)' }}>
              
              <Glyph d={GLYPHS.search} size={15} /> Search 412 items
            </div>
            <span className="text-[10px] tracking-[0.18em]" style={{ color: W + '0.45)' }}>
              SORT: ADDED ↓
            </span>
          </div>
        </div>
        <div className="mt-[24px]">
          <div
            className="grid pb-[10px] text-[9px] tracking-[0.2em]"
            style={{ gridTemplateColumns: '110px 1fr 220px 80px 80px', color: W + '0.32)', borderBottom: `1px solid ${W}0.07)` }}>
            
            <span>TYPE</span>
            <span>TITLE</span>
            <span>ARTIST</span>
            <span>YEAR</span>
            <span className="text-right">LENGTH</span>
          </div>
          {rows.map((r, i) =>
          <div
            key={r[1]}
            className="grid items-center py-[13px] text-[13px]"
            style={{ gridTemplateColumns: '110px 1fr 220px 80px 80px', borderBottom: `1px solid ${W}0.05)` }}>
            
              <span
              className="w-fit rounded-full px-[8px] py-[3px] text-[8px] font-semibold tracking-[0.16em]"
              style={{
                background: r[0] === 'ALBUM' ? 'rgba(255,61,113,0.14)' : W + '0.07)',
                color: r[0] === 'ALBUM' ? PINK : W + '0.5)'
              }}>
              
                {r[0]}
              </span>
              <span className="font-medium text-white">{r[1]}</span>
              <span style={{ color: W + '0.5)' }}>{r[2]}</span>
              <span className="font-mono text-[11px]" style={{ color: W + '0.4)' }}>
                {r[3]}
              </span>
              <span className="text-right font-mono text-[11px]" style={{ color: W + '0.45)' }}>
                {r[4]}
              </span>
            </div>
          )}
        </div>
      </div>
    </ScreenRoot>);

}