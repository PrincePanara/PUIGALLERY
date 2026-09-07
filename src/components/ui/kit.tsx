import React from 'react';

/**
 * Primitives shared by every rendered product screen.
 * Screens are authored at logical device size (390x844 / 1440x900)
 * and scaled by the device mockups, so px values here are literal.
 */

export function StatusBar({
  dark = false,
  time = '9:41'



}: {dark?: boolean;time?: string;}) {
  const c = dark ? 'rgba(255,255,255,0.92)' : 'rgba(0,0,0,0.88)';
  return (
    <div
      className="flex h-[54px] shrink-0 items-end justify-between px-[26px] pb-[6px]"
      style={{ color: c }}
      aria-hidden="true">
      
      <span className="text-[13px] font-semibold tracking-tight">{time}</span>
      <div className="flex items-center gap-[5px]">
        <div className="flex items-end gap-[2px]">
          {[4, 6, 8, 10].map((h) =>
          <div key={h} style={{ width: 3, height: h, background: c, borderRadius: 1 }} />
          )}
        </div>
        <div
          style={{
            width: 22,
            height: 11,
            border: `1.4px solid ${c}`,
            borderRadius: 3,
            padding: 1.5
          }}>
          
          <div style={{ width: '72%', height: '100%', background: c, borderRadius: 1 }} />
        </div>
      </div>
    </div>);

}

export function HomeIndicator({ dark = false }: {dark?: boolean;}) {
  return (
    <div className="flex h-[26px] shrink-0 items-center justify-center" aria-hidden="true">
      <div
        style={{
          width: 132,
          height: 5,
          borderRadius: 999,
          background: dark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.28)'
        }} />
      
    </div>);

}

export function TabBar({
  items,
  active,
  accent,
  dark = false





}: {items: {label: string;icon: React.ReactNode;}[];active: number;accent: string;dark?: boolean;}) {
  return (
    <div
      className="mt-auto flex shrink-0 items-center justify-between px-[30px] pt-[14px]"
      style={{ borderTop: `1px solid ${dark ? 'rgba(255,255,255,0.09)' : 'rgba(0,0,0,0.07)'}` }}>
      
      {items.map((it, i) =>
      <div key={it.label} className="flex flex-col items-center gap-[6px]">
          <div
          style={{
            color: i === active ? accent : dark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.3)'
          }}>
          
            {it.icon}
          </div>
          <span
          className="text-[9px] font-medium tracking-[0.06em]"
          style={{
            color: i === active ? accent : dark ? 'rgba(255,255,255,0.32)' : 'rgba(0,0,0,0.28)'
          }}>
          
            {it.label}
          </span>
        </div>
      )}
    </div>);

}

export function Sparkline({
  points,
  color,
  width = 260,
  height = 64,
  fill






}: {points: number[];color: string;width?: number;height?: number;fill?: string;}) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const span = max - min || 1;
  const step = width / (points.length - 1);
  const coords = points.map((p, i) => [i * step, height - (p - min) / span * (height - 6) - 3]);
  const d = coords.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} aria-hidden="true">
      {fill &&
      <path d={`${d} L${width},${height} L0,${height} Z`} fill={fill} />
      }
      <path d={d} fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" />
    </svg>);

}

export function Bars({
  values,
  color,
  muted,
  height = 90,
  barWidth = 14,
  gap = 10,
  activeIndex








}: {values: number[];color: string;muted: string;height?: number;barWidth?: number;gap?: number;activeIndex?: number;}) {
  const max = Math.max(...values);
  return (
    <div className="flex items-end" style={{ height, gap }} aria-hidden="true">
      {values.map((v, i) =>
      <div
        key={i}
        style={{
          width: barWidth,
          height: `${v / max * 100}%`,
          background: activeIndex === undefined || activeIndex === i ? color : muted,
          borderRadius: 3
        }} />

      )}
    </div>);

}

export function Ring({
  value,
  color,
  track,
  size = 92,
  thickness = 8,
  children







}: {value: number;color: string;track: string;size?: number;thickness?: number;children?: React.ReactNode;}) {
  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} aria-hidden="true">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={track} strokeWidth={thickness} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={thickness}
          strokeLinecap="round"
          strokeDasharray={`${value / 100 * c} ${c}`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`} />
        
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">{children}</div>
    </div>);

}

export function Avatar({
  initials,
  bg,
  fg = '#fff',
  size = 36,
  radius






}: {initials: string;bg: string;fg?: string;size?: number;radius?: number;}) {
  return (
    <div
      className="flex shrink-0 items-center justify-center font-semibold"
      style={{
        width: size,
        height: size,
        background: bg,
        color: fg,
        borderRadius: radius ?? size / 2,
        fontSize: size * 0.36
      }}
      aria-hidden="true">
      
      {initials}
    </div>);

}

export function Pill({
  children,
  bg,
  fg,
  border





}: {children: React.ReactNode;bg?: string;fg: string;border?: string;}) {
  return (
    <span
      className="inline-flex items-center rounded-full px-[10px] py-[5px] text-[10px] font-medium tracking-[0.08em]"
      style={{ background: bg, color: fg, border: border ? `1px solid ${border}` : undefined }}>
      
      {children}
    </span>);

}

export function Field({
  label,
  value,
  dark = false,
  focused,
  accent






}: {label: string;value: string;dark?: boolean;focused?: boolean;accent?: string;}) {
  return (
    <label className="block">
      <span
        className="mb-[8px] block text-[10px] font-medium tracking-[0.14em]"
        style={{ color: dark ? 'rgba(255,255,255,0.42)' : 'rgba(0,0,0,0.42)' }}>
        
        {label}
      </span>
      <div
        className="flex h-[48px] items-center rounded-[10px] px-[14px] text-[14px]"
        style={{
          background: dark ? 'rgba(255,255,255,0.05)' : '#fff',
          border: `1.5px solid ${
          focused ? accent ?? '#000' : dark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)'}`,

          color: dark ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.82)'
        }}>
        
        {value}
        {focused &&
        <span
          className="ml-[2px] inline-block"
          style={{ width: 1.5, height: 17, background: accent ?? '#000' }} />

        }
      </div>
    </label>);

}

export function ScreenRoot({
  bg,
  children,
  className = ''




}: {bg: string;children: React.ReactNode;className?: string;}) {
  // direction comes from the caller when it needs a row layout (side navs)
  const dir = className.includes('flex-row') ? '' : 'flex-col';
  return (
    <div className={`flex h-full w-full overflow-hidden ${dir} ${className}`} style={{ background: bg }}>
      {children}
    </div>);

}

/* Minimal inline glyphs — the product screens need icons that are not
   all the same weight from the same set as the portfolio shell. */
export function Glyph({ d, size = 20, stroke = 1.6 }: {d: string;size?: number;stroke?: number;}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={d}
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round" />
      
    </svg>);

}

export const GLYPHS = {
  home: 'M4 10.5 12 4l8 6.5V20H4z',
  search: 'M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14ZM20 20l-4-4',
  spark: 'M12 3v4M12 17v4M3 12h4M17 12h4M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3',
  user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21c1.5-3.5 4.5-5 8-5s6.5 1.5 8 5',
  bag: 'M6 8h12l-1 12H7L6 8ZM9 8V6a3 3 0 0 1 6 0v2',
  chart: 'M4 20V9M10 20V4M16 20v-8M22 20H2',
  wallet: 'M3 8h18v11H3zM3 8l2-4h14l2 4M16 13h3',
  play: 'M8 5l11 7-11 7V5Z',
  heart: 'M12 20s-8-4.5-8-10a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.5-8 10-8 10Z',
  grid: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
  bolt: 'M13 2 5 14h6l-1 8 8-12h-6l1-8Z',
  check: 'M5 13l4 4L19 7',
  arrowRight: 'M5 12h14M13 6l6 6-6 6',
  bell: 'M6 16V10a6 6 0 1 1 12 0v6l2 3H4l2-3ZM10 22h4',
  cog: 'M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2',
  filter: 'M3 6h18M6 12h12M10 18h4',
  clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 7v5l3 2',
  plus: 'M12 5v14M5 12h14',
  layers: 'M12 3l9 5-9 5-9-5 9-5ZM3 13l9 5 9-5',
  type: 'M5 6h14M12 6v13M9 19h6',
  book: 'M4 5h7v15H4zM13 5h7v15h-7z',
  list: 'M4 7h16M4 12h16M4 17h10'
};