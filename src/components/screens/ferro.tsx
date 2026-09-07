import React from 'react';
import {
  Bars,
  GLYPHS,
  Glyph,
  HomeIndicator,
  Ring,
  ScreenRoot,
  StatusBar,
  TabBar } from
'../ui/kit';

const BG = '#F4F3F1';
const INK = '#101010';
const RED = '#FF4D2E';

const tabs = [
{ label: 'TODAY', icon: <Glyph d={GLYPHS.bolt} /> },
{ label: 'PLAN', icon: <Glyph d={GLYPHS.list} /> },
{ label: 'STATS', icon: <Glyph d={GLYPHS.chart} /> },
{ label: 'YOU', icon: <Glyph d={GLYPHS.user} /> }];


export function Today() {
  return (
    <ScreenRoot bg={BG}>
      <StatusBar />
      <div className="px-[26px] pt-[8px]">
        <div className="flex items-baseline justify-between">
          <span className="text-[10px] tracking-[0.24em] text-black/40">MON · WEEK 06</span>
          <span className="text-[10px] tracking-[0.24em]" style={{ color: RED }}>
            DAY 34 STREAK
          </span>
        </div>
        <h1 className="mt-[16px] text-[40px] font-semibold leading-[0.92] tracking-[-0.055em]" style={{ color: INK }}>
          PUSH
          <br />
          DAY.
        </h1>
      </div>
      <div className="mt-[22px] px-[26px]">
        <div className="rounded-[20px] p-[20px]" style={{ background: INK }}>
          <div className="flex items-start justify-between">
            <div>
              <div className="text-[9px] tracking-[0.22em] text-white/45">SESSION 12</div>
              <div className="mt-[8px] text-[22px] font-semibold tracking-[-0.03em] text-white">
                Bench · Press · Dips
              </div>
            </div>
            <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full" style={{ background: RED }}>
              <Glyph d={GLYPHS.play} size={16} />
            </div>
          </div>
          <div className="mt-[22px] flex gap-[26px]">
            {[
            ['EXERCISES', '05'],
            ['SETS', '18'],
            ['EST.', '52 MIN']].
            map(([k, v]) =>
            <div key={k}>
                <div className="text-[8px] tracking-[0.2em] text-white/40">{k}</div>
                <div className="mt-[4px] text-[16px] font-semibold text-white">{v}</div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mt-[20px] px-[26px]">
        <div className="text-[9px] tracking-[0.24em] text-black/35">READINESS</div>
        <div className="mt-[12px] flex items-center gap-[18px]">
          <Ring value={78} color={RED} track="rgba(0,0,0,0.08)" size={78} thickness={7}>
            <span className="text-[19px] font-semibold" style={{ color: INK }}>
              78
            </span>
          </Ring>
          <div className="flex-1 space-y-[10px]">
            {[
            ['SLEEP', '7H 20M'],
            ['LOAD', 'MODERATE'],
            ['LAST PUSH', '4 DAYS']].
            map(([k, v]) =>
            <div className="flex items-center gap-3 border-l border-white/5 pl-3">
              <div className="h-6 w-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500" />
              <div className="text-[13px] font-medium text-white">
              Prince Panara
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
      <TabBar items={tabs} active={0} accent={RED} />
      <HomeIndicator />
    </ScreenRoot>);

}

export function Workout() {
  return (
    <ScreenRoot bg={BG}>
      <StatusBar />
      <div className="flex items-center justify-between px-[26px] pt-[8px]">
        <Glyph d="M6 6l12 12M18 6L6 18" size={18} />
        <span className="text-[10px] tracking-[0.22em] text-black/40">EXERCISE 02 / 05</span>
        <span className="text-[12px] font-mono font-medium" style={{ color: RED }}>
          18:42
        </span>
      </div>
      <div className="mt-[18px] px-[26px]">
        <h2 className="text-[30px] font-semibold leading-[0.95] tracking-[-0.05em]" style={{ color: INK }}>
          INCLINE
          <br />
          BENCH
        </h2>
        <div className="mt-[8px] text-[10px] tracking-[0.2em] text-black/40">TARGET 4 × 8 · RPE 8</div>
      </div>
      <div className="mt-[20px] px-[26px]">
        {[
        ['01', '60 KG', '8', true],
        ['02', '65 KG', '8', true],
        ['03', '65 KG', '—', false],
        ['04', '70 KG', '—', false]].
        map(([s, kg, reps, done]) =>
        <div
          key={s as string}
          className="flex items-center gap-[14px] rounded-[12px] px-[14px] py-[13px]"
          style={{
            background: done ? '#fff' : 'transparent',
            border: done ? '1px solid rgba(0,0,0,0.06)' : '1px dashed rgba(0,0,0,0.14)',
            marginBottom: 8
          }}>
          
            <span className="w-[22px] text-[11px] font-mono text-black/35">{s}</span>
            <span className="flex-1 text-[16px] font-semibold tracking-[-0.02em]" style={{ color: INK }}>
              {kg}
            </span>
            <span className="w-[40px] text-[16px] font-semibold" style={{ color: done ? INK : 'rgba(0,0,0,0.2)' }}>
              {reps}
            </span>
            <div
            className="flex h-[26px] w-[26px] items-center justify-center rounded-full"
            style={{ background: done ? RED : 'rgba(0,0,0,0.06)', color: done ? '#fff' : 'rgba(0,0,0,0.3)' }}>
            
              <Glyph d={GLYPHS.check} size={14} stroke={2.2} />
            </div>
          </div>
        )}
      </div>
      <div className="mt-auto px-[26px] pb-[14px]">
        <div className="flex gap-[10px]">
          <div className="flex h-[54px] flex-1 items-center justify-between rounded-[14px] bg-white px-[16px]" style={{ border: '1px solid rgba(0,0,0,0.07)' }}>
            <Glyph d="M5 12h14" size={18} />
            <span className="text-[17px] font-semibold" style={{ color: INK }}>
              65 KG
            </span>
            <Glyph d={GLYPHS.plus} size={18} />
          </div>
          <button
            className="h-[54px] rounded-[14px] px-[24px] text-[12px] font-semibold tracking-[0.12em] text-white"
            style={{ background: RED }}>
            
            LOG SET
          </button>
        </div>
      </div>
      <HomeIndicator />
    </ScreenRoot>);

}

export function Timer() {
  return (
    <ScreenRoot bg={INK}>
      <StatusBar dark />
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="text-[9px] tracking-[0.3em] text-white/40">REST · SET 02 DONE</div>
        <div className="relative mt-[26px]">
          <Ring value={62} color={RED} track="rgba(255,255,255,0.09)" size={228} thickness={3}>
            <span className="text-[66px] font-semibold leading-none tracking-[-0.06em] text-white">1:12</span>
            <span className="mt-[8px] text-[9px] tracking-[0.24em] text-white/40">OF 2:00</span>
          </Ring>
        </div>
        <div className="mt-[34px] flex items-center gap-[10px]">
          {['−15S', '+15S'].map((l) =>
          <div
            key={l}
            className="rounded-full px-[18px] py-[10px] text-[11px] font-medium tracking-[0.14em] text-white"
            style={{ border: '1px solid rgba(255,255,255,0.16)' }}>
            
              {l}
            </div>
          )}
        </div>
      </div>
      <div className="px-[26px] pb-[16px]">
        <div className="mb-[14px] flex items-center justify-between text-[10px] tracking-[0.18em] text-white/35">
          <span>NEXT · 65 KG × 8</span>
          <span>03 / 04</span>
        </div>
        <button
          className="h-[54px] w-full rounded-[14px] text-[12px] font-semibold tracking-[0.14em] text-white"
          style={{ background: RED }}>
          
          SKIP REST
        </button>
      </div>
      <HomeIndicator dark />
    </ScreenRoot>);

}

export function Progress() {
  return (
    <ScreenRoot bg={BG}>
      <StatusBar />
      <div className="px-[26px] pt-[10px]">
        <h1 className="text-[32px] font-semibold tracking-[-0.055em]" style={{ color: INK }}>
          Progress
        </h1>
        <div className="mt-[6px] text-[10px] tracking-[0.2em] text-black/40">WEEKLY VOLUME · KG</div>
      </div>
      <div className="mt-[20px] px-[26px]">
        <div className="rounded-[18px] bg-white p-[18px]" style={{ border: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="flex items-end justify-between">
            <div>
              <div className="text-[30px] font-semibold tracking-[-0.045em]" style={{ color: INK }}>
                24,860
              </div>
              <div className="mt-[3px] text-[10px] tracking-[0.16em]" style={{ color: RED }}>
                +11% VS LAST WEEK
              </div>
            </div>
            <Bars
              values={[38, 44, 40, 52, 48, 61, 58]}
              color={RED}
              muted="rgba(0,0,0,0.08)"
              height={62}
              barWidth={10}
              gap={7} />
            
          </div>
        </div>
      </div>
      <div className="mt-[22px] px-[26px]">
        <div className="text-[9px] tracking-[0.24em] text-black/35">LIFTS</div>
        {[
        ['BENCH PRESS', '82.5 KG', 'PR'],
        ['SQUAT', '140 KG', '+5'],
        ['DEADLIFT', '175 KG', '+2.5'],
        ['OVERHEAD', '55 KG', '—']].
        map(([n, v, d]) =>
        <div key={n as string} className="flex items-center gap-[12px] border-b border-black/8 py-[15px]">
            <span className="flex-1 text-[13px] font-medium tracking-[0.06em]" style={{ color: INK }}>
              {n}
            </span>
            <span className="text-[15px] font-semibold" style={{ color: INK }}>
              {v}
            </span>
            <span
            className="w-[38px] rounded-full text-center text-[9px] font-semibold tracking-[0.08em]"
            style={{
              color: d === 'PR' ? '#fff' : 'rgba(0,0,0,0.4)',
              background: d === 'PR' ? RED : 'transparent',
              padding: d === 'PR' ? '4px 0' : 0
            }}>
            
              {d}
            </span>
          </div>
        )}
      </div>
      <TabBar items={tabs} active={2} accent={RED} />
      <HomeIndicator />
    </ScreenRoot>);

}

export function Profile() {
  return (
    <ScreenRoot bg={BG}>
      <StatusBar />
      <div className="px-[26px] pt-[14px]">
        <div className="flex items-center gap-[14px]">
          <div
            className="flex h-[58px] w-[58px] items-center justify-center rounded-[18px] text-[20px] font-semibold text-white"
            style={{ background: INK }}>
            
            RT
          </div>
          <div>
            <div className="text-[20px] font-semibold tracking-[-0.035em]" style={{ color: INK }}>
              Rana Tunga
            </div>
            <div className="mt-[2px] text-[10px] tracking-[0.18em] text-black/40">INTERMEDIATE · 84 KG</div>
          </div>
        </div>
      </div>
      <div className="mt-[22px] px-[26px]">
        <div
          className="flex items-center justify-between rounded-[18px] p-[18px]"
          style={{ background: RED }}>
          
          <div>
            <div className="text-[9px] tracking-[0.22em] text-white/70">CURRENT STREAK</div>
            <div className="mt-[6px] text-[34px] font-semibold leading-none tracking-[-0.05em] text-white">
              34 DAYS
            </div>
          </div>
          <div className="grid grid-cols-7 gap-[3px]">
            {Array.from({ length: 28 }).map((_, i) =>
            <div
              key={i}
              className="h-[8px] w-[8px] rounded-[2px]"
              style={{ background: i % 7 === 6 ? 'rgba(255,255,255,0.3)' : '#fff' }} />

            )}
          </div>
        </div>
      </div>
      <div className="mt-[22px] px-[26px]">
        <div className="text-[9px] tracking-[0.24em] text-black/35">HISTORY</div>
        {[
        ['PUSH DAY', 'MON · 52 MIN', '18 SETS'],
        ['PULL DAY', 'SAT · 48 MIN', '16 SETS'],
        ['LEGS', 'THU · 61 MIN', '20 SETS']].
        map(([a, b, c]) =>
        <div key={a as string} className="flex items-center justify-between border-b border-black/8 py-[14px]">
            <div>
              <div className="text-[13px] font-medium" style={{ color: INK }}>
                {a}
              </div>
              <div className="mt-[2px] text-[10px] tracking-[0.14em] text-black/40">{b}</div>
            </div>
            <span className="text-[11px] tracking-[0.12em] text-black/50">{c}</span>
          </div>
        )}
      </div>
      <TabBar items={tabs} active={3} accent={RED} />
      <HomeIndicator />
    </ScreenRoot>);

}