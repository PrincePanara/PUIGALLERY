import React from 'react';
import { GLYPHS, Glyph, ScreenRoot } from '../ui/kit';

const BG = '#F7F8FC';
const INK = '#0E1220';
const BLUE = '#1B3BFF';
const AMBER = '#FFB020';
const LINE = 'rgba(14,18,32,0.09)';

const NAV: [string, string][] = [
['Overview', GLYPHS.grid],
['Exams', GLYPHS.book],
['Questions', GLYPHS.list],
['Students', GLYPHS.user],
['Results', GLYPHS.chart],
['Settings', GLYPHS.cog]];


function Shell({
  active,
  title,
  crumb,
  action,
  children






}: {active: number;title: string;crumb?: string;action?: string;children: React.ReactNode;}) {
  return (
    <ScreenRoot bg={BG} className="flex-row">
      <aside className="flex w-[236px] shrink-0 flex-col bg-white" style={{ borderRight: `1px solid ${LINE}` }}>
        <div className="flex items-center gap-[10px] px-[24px] py-[26px]">
          <div className="flex h-[28px] w-[28px] items-center justify-center rounded-[8px]" style={{ background: BLUE }}>
            <span className="text-[14px] font-semibold text-white">Q</span>
          </div>
          <span className="text-[14px] font-semibold tracking-[-0.02em]" style={{ color: INK }}>
            QUBESO
          </span>
        </div>
        <nav className="px-[12px]">
          {NAV.map(([l, g], i) =>
          <div
            key={l}
            className="mb-[2px] flex items-center gap-[11px] rounded-[9px] px-[12px] py-[10px] text-[13px]"
            style={{
              background: i === active ? 'rgba(27,59,255,0.07)' : 'transparent',
              color: i === active ? BLUE : 'rgba(14,18,32,0.6)',
              fontWeight: i === active ? 600 : 400
            }}>
            
              <Glyph d={g} size={17} />
              {l}
            </div>
          )}
        </nav>
        <div className="mt-auto p-[16px]">
          <div className="rounded-[10px] p-[14px]" style={{ background: '#F1F3FA' }}>
            <div className="text-[10px] tracking-[0.16em]" style={{ color: 'rgba(14,18,32,0.45)' }}>
              SEAT LICENCE
            </div>
            <div className="mt-[6px] text-[13px] font-semibold" style={{ color: INK }}>
              2,400 / 3,000
            </div>
            <div className="mt-[8px] h-[3px] rounded-full" style={{ background: 'rgba(14,18,32,0.1)' }}>
              <div className="h-full w-[80%] rounded-full" style={{ background: BLUE }} />
            </div>
          </div>
        </div>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <header
          className="flex h-[76px] shrink-0 items-center justify-between bg-white px-[34px]"
          style={{ borderBottom: `1px solid ${LINE}` }}>
          
          <div>
            {crumb &&
            <div className="text-[10px] tracking-[0.18em]" style={{ color: 'rgba(14,18,32,0.4)' }}>
                {crumb}
              </div>
            }
            <h1 className="mt-[3px] text-[21px] font-semibold tracking-[-0.03em]" style={{ color: INK }}>
              {title}
            </h1>
          </div>
          <div className="flex items-center gap-[14px]">
            <div
              className="flex h-[38px] w-[260px] items-center gap-[9px] rounded-[9px] px-[12px] text-[12px]"
              style={{ background: '#F1F3FA', color: 'rgba(14,18,32,0.42)' }}>
              
              <Glyph d={GLYPHS.search} size={15} /> Search exams, students…
            </div>
            {action &&
            <button
              className="flex h-[38px] items-center gap-[8px] rounded-[9px] px-[16px] text-[12px] font-semibold text-white"
              style={{ background: BLUE }}>
              
                <Glyph d={GLYPHS.plus} size={15} />
                {action}
              </button>
            }
            <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full text-[12px] font-semibold text-white" style={{ background: INK }}>
              RT
            </div>
          </div>
        </header>
        <div className="min-h-0 flex-1 overflow-hidden p-[34px]">{children}</div>
      </div>
    </ScreenRoot>);

}

export function Login() {
  return (
    <ScreenRoot bg="#fff" className="flex-row">
      <div className="flex w-[54%] flex-col justify-between p-[64px]" style={{ background: INK }}>
        <div className="flex items-center gap-[10px]">
          <div className="flex h-[30px] w-[30px] items-center justify-center rounded-[9px]" style={{ background: BLUE }}>
            <span className="text-[15px] font-semibold text-white">Q</span>
          </div>
          <span className="text-[15px] font-semibold tracking-[0.02em] text-white">QUBESO</span>
        </div>
        <div>
          <h2 className="text-[56px] font-semibold leading-[0.96] tracking-[-0.055em] text-white">
            Examinations,
            <br />
            run properly.
          </h2>
          <p className="mt-[20px] max-w-[380px] text-[15px] leading-[1.5] text-white/55">
            Authoring, invigilation and results for 40 institutions.
          </p>
        </div>
        <div className="flex gap-[40px]">
          {[
          ['INSTITUTIONS', '40'],
          ['EXAMS / WEEK', '1,280'],
          ['UPTIME', '99.98%']].
          map(([k, v]) =>
          <div key={k}>
              <div className="text-[22px] font-semibold text-white">{v}</div>
              <div className="mt-[4px] text-[9px] tracking-[0.2em] text-white/40">{k}</div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="w-[352px]">
          <div className="text-[10px] tracking-[0.2em]" style={{ color: 'rgba(14,18,32,0.4)' }}>
            SIGN IN
          </div>
          <h1 className="mt-[10px] text-[30px] font-semibold tracking-[-0.04em]" style={{ color: INK }}>
            Welcome back
          </h1>
          <div className="mt-[28px] space-y-[16px]">
            <div>
              <div className="mb-[7px] text-[10px] font-medium tracking-[0.14em]" style={{ color: 'rgba(14,18,32,0.45)' }}>
                INSTITUTION
              </div>
              <div
                className="flex h-[46px] items-center justify-between rounded-[9px] px-[13px] text-[13px]"
                style={{ border: `1.5px solid ${LINE}`, color: INK }}>
                
                Northline Institute of Technology
                <Glyph d="M6 9l6 6 6-6" size={16} />
              </div>
            </div>
            <div>
              <div className="mb-[7px] text-[10px] font-medium tracking-[0.14em]" style={{ color: 'rgba(14,18,32,0.45)' }}>
                STAFF ID
              </div>
              <div
                className="flex h-[46px] items-center rounded-[9px] px-[13px] text-[13px]"
                style={{ border: `1.5px solid ${BLUE}`, color: INK }}>
                
                NIT-40219
                <span className="ml-[2px] inline-block" style={{ width: 1.5, height: 16, background: BLUE }} />
              </div>
            </div>
            <div>
              <div className="mb-[7px] text-[10px] font-medium tracking-[0.14em]" style={{ color: 'rgba(14,18,32,0.45)' }}>
                PASSWORD
              </div>
              <div
                className="flex h-[46px] items-center rounded-[9px] px-[13px] text-[13px]"
                style={{ border: `1.5px solid ${LINE}`, color: 'rgba(14,18,32,0.5)' }}>
                
                ••••••••••••
              </div>
            </div>
          </div>
          <button
            className="mt-[24px] h-[46px] w-full rounded-[9px] text-[13px] font-semibold text-white"
            style={{ background: BLUE }}>
            
            SIGN IN
          </button>
          <div className="mt-[16px] text-center text-[11px]" style={{ color: 'rgba(14,18,32,0.4)' }}>
            Trouble signing in? Contact your exam controller.
          </div>
        </div>
      </div>
    </ScreenRoot>);

}

export function Dashboard() {
  return (
    <Shell active={0} title="Overview" crumb="NORTHLINE INSTITUTE" action="NEW EXAM">
      <div className="flex items-center gap-[10px]">
        <span className="flex h-[7px] w-[7px] rounded-full" style={{ background: '#12B76A' }} />
        <span className="text-[11px] font-semibold tracking-[0.16em]" style={{ color: INK }}>
          3 EXAMS LIVE NOW
        </span>
      </div>
      <div className="mt-[14px] grid grid-cols-3 gap-[14px]">
        {[
        ['DATA STRUCTURES · SEM 4', '412 / 430 ONLINE', '48 MIN LEFT', 74],
        ['MICROECONOMICS · SEM 2', '286 / 300 ONLINE', '1H 12M LEFT', 42],
        ['THERMODYNAMICS · SEM 6', '198 / 210 ONLINE', '22 MIN LEFT', 88]].
        map(([t, s, r, p]) =>
        <div key={t as string} className="rounded-[12px] bg-white p-[18px]" style={{ border: `1px solid ${LINE}` }}>
            <div className="text-[13px] font-semibold tracking-[-0.01em]" style={{ color: INK }}>
              {t}
            </div>
            <div className="mt-[10px] flex items-baseline justify-between">
              <span className="text-[11px]" style={{ color: 'rgba(14,18,32,0.5)' }}>
                {s}
              </span>
              <span className="text-[11px] font-semibold" style={{ color: AMBER }}>
                {r}
              </span>
            </div>
            <div className="mt-[10px] h-[4px] rounded-full" style={{ background: 'rgba(14,18,32,0.08)' }}>
              <div className="h-full rounded-full" style={{ width: `${p}%`, background: BLUE }} />
            </div>
          </div>
        )}
      </div>
      <div className="mt-[26px] grid grid-cols-4 gap-[14px]">
        {[
        ['CANDIDATES TODAY', '1,842'],
        ['SUBMISSIONS', '1,206'],
        ['FLAGGED SESSIONS', '07'],
        ['AVG. SCORE', '68.4%']].
        map(([k, v]) =>
        <div key={k} className="rounded-[12px] bg-white p-[18px]" style={{ border: `1px solid ${LINE}` }}>
            <div className="text-[9px] tracking-[0.2em]" style={{ color: 'rgba(14,18,32,0.4)' }}>
              {k}
            </div>
            <div className="mt-[8px] text-[26px] font-semibold tracking-[-0.04em]" style={{ color: INK }}>
              {v}
            </div>
          </div>
        )}
      </div>
      <div className="mt-[26px] rounded-[12px] bg-white" style={{ border: `1px solid ${LINE}` }}>
        <div className="flex items-center justify-between px-[18px] py-[14px]" style={{ borderBottom: `1px solid ${LINE}` }}>
          <span className="text-[11px] font-semibold tracking-[0.16em]" style={{ color: INK }}>
            SCHEDULED
          </span>
          <span className="text-[11px]" style={{ color: BLUE }}>
            VIEW ALL
          </span>
        </div>
        {[
        ['Operating Systems', 'SEM 5 · 340 CANDIDATES', 'TOMORROW 09:00', 'READY'],
        ['Business Statistics', 'SEM 3 · 280 CANDIDATES', 'TOMORROW 14:00', 'DRAFT'],
        ['Organic Chemistry', 'SEM 4 · 190 CANDIDATES', 'FRI 09:00', 'READY']].
        map(([a, b, c, d], i) =>
        <div
          key={a}
          className="flex items-center px-[18px] py-[14px]"
          style={{ borderTop: i ? `1px solid ${LINE}` : 'none' }}>
          
            <div className="w-[280px]">
              <div className="text-[13px] font-medium" style={{ color: INK }}>
                {a}
              </div>
              <div className="mt-[2px] text-[10px] tracking-[0.14em]" style={{ color: 'rgba(14,18,32,0.42)' }}>
                {b}
              </div>
            </div>
            <div className="flex-1 text-[12px]" style={{ color: 'rgba(14,18,32,0.6)' }}>
              {c}
            </div>
            <span
            className="rounded-full px-[10px] py-[4px] text-[9px] font-semibold tracking-[0.14em]"
            style={{
              background: d === 'READY' ? 'rgba(18,183,106,0.1)' : 'rgba(255,176,32,0.14)',
              color: d === 'READY' ? '#0B8A4F' : '#9A6600'
            }}>
            
              {d}
            </span>
          </div>
        )}
      </div>
    </Shell>);

}

export function Create() {
  const steps = ['Basics', 'Questions', 'Candidates', 'Proctoring'];
  return (
    <Shell active={1} title="Create exam" crumb="EXAMS / NEW">
      <div className="flex gap-[34px]">
        <div className="w-[220px] shrink-0">
          {steps.map((s, i) =>
          <div key={s} className="flex gap-[13px]">
              <div className="flex flex-col items-center">
                <div
                className="flex h-[26px] w-[26px] items-center justify-center rounded-full text-[11px] font-semibold"
                style={{
                  background: i <= 1 ? BLUE : '#fff',
                  color: i <= 1 ? '#fff' : 'rgba(14,18,32,0.4)',
                  border: i <= 1 ? 'none' : `1.5px solid ${LINE}`
                }}>
                
                  {i < 1 ? '✓' : i + 1}
                </div>
                {i < steps.length - 1 &&
              <div className="my-[4px] w-[1.5px] flex-1" style={{ background: i < 1 ? BLUE : LINE }} />
              }
              </div>
              <div className="pb-[26px]">
                <div
                className="text-[13px]"
                style={{ color: i <= 1 ? INK : 'rgba(14,18,32,0.45)', fontWeight: i === 1 ? 600 : 400 }}>
                
                  {s}
                </div>
                <div className="mt-[3px] text-[10px] tracking-[0.12em]" style={{ color: 'rgba(14,18,32,0.35)' }}>
                  {i === 0 ? 'COMPLETE' : i === 1 ? 'IN PROGRESS' : 'PENDING'}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex-1 rounded-[12px] bg-white p-[26px]" style={{ border: `1px solid ${LINE}` }}>
          <div className="text-[15px] font-semibold" style={{ color: INK }}>
            Question set
          </div>
          <div className="mt-[18px] grid grid-cols-3 gap-[12px]">
            {[
            ['SECTION A', 'MCQ · 40 Q', '40 MARKS', true],
            ['SECTION B', 'SHORT · 8 Q', '40 MARKS', false],
            ['SECTION C', 'LONG · 2 Q', '20 MARKS', false]].
            map(([a, b, c, sel]) =>
            <div
              key={a as string}
              className="rounded-[10px] p-[16px]"
              style={{
                border: `1.5px solid ${sel ? BLUE : LINE}`,
                background: sel ? 'rgba(27,59,255,0.04)' : '#fff'
              }}>
              
                <div className="text-[10px] tracking-[0.18em]" style={{ color: sel ? BLUE : 'rgba(14,18,32,0.4)' }}>
                  {a}
                </div>
                <div className="mt-[10px] text-[15px] font-semibold" style={{ color: INK }}>
                  {b}
                </div>
                <div className="mt-[4px] text-[11px]" style={{ color: 'rgba(14,18,32,0.45)' }}>
                  {c}
                </div>
              </div>
            )}
          </div>
          <div className="mt-[24px] grid grid-cols-2 gap-[16px]">
            {[
            ['DURATION', '120 MINUTES'],
            ['NEGATIVE MARKING', '−0.25 PER WRONG'],
            ['SHUFFLE QUESTIONS', 'ENABLED'],
            ['ATTEMPTS', 'SINGLE']].
            map(([k, v]) =>
            <div key={k}>
                <div className="mb-[7px] text-[10px] font-medium tracking-[0.14em]" style={{ color: 'rgba(14,18,32,0.45)' }}>
                  {k}
                </div>
                <div
                className="flex h-[44px] items-center justify-between rounded-[9px] px-[13px] text-[13px]"
                style={{ border: `1.5px solid ${LINE}`, color: INK }}>
                
                  {v}
                  <Glyph d="M6 9l6 6 6-6" size={15} />
                </div>
              </div>
            )}
          </div>
          <div className="mt-[26px] flex items-center justify-between pt-[18px]" style={{ borderTop: `1px solid ${LINE}` }}>
            <span className="text-[11px]" style={{ color: 'rgba(14,18,32,0.45)' }}>
              50 QUESTIONS · 100 MARKS · AUTOSAVED 12:04
            </span>
            <div className="flex gap-[10px]">
              <button className="h-[40px] rounded-[9px] px-[16px] text-[12px] font-medium" style={{ border: `1.5px solid ${LINE}`, color: INK }}>
                BACK
              </button>
              <button className="h-[40px] rounded-[9px] px-[20px] text-[12px] font-semibold text-white" style={{ background: BLUE }}>
                CONTINUE
              </button>
            </div>
          </div>
        </div>
      </div>
    </Shell>);

}

export function Questions() {
  return (
    <Shell active={2} title="Question bank" crumb="DATA STRUCTURES · SECTION A">
      <div className="flex h-full gap-[16px]">
        <div className="w-[300px] shrink-0 overflow-hidden rounded-[12px] bg-white" style={{ border: `1px solid ${LINE}` }}>
          <div className="flex items-center justify-between px-[14px] py-[12px]" style={{ borderBottom: `1px solid ${LINE}` }}>
            <span className="text-[10px] font-semibold tracking-[0.16em]" style={{ color: INK }}>
              40 QUESTIONS
            </span>
            <Glyph d={GLYPHS.filter} size={15} />
          </div>
          {[
          ['Q01', 'Time complexity of binary search', 'MCQ', false],
          ['Q02', 'Balanced BST rotations', 'MCQ', true],
          ['Q03', 'Hash collision strategies', 'MCQ', false],
          ['Q04', 'Graph traversal order', 'MCQ', false],
          ['Q05', 'Heap extract-min cost', 'MCQ', false],
          ['Q06', 'Stack vs queue semantics', 'MCQ', false]].
          map(([n, t, k, sel]) =>
          <div
            key={n as string}
            className="px-[14px] py-[13px]"
            style={{
              background: sel ? 'rgba(27,59,255,0.05)' : 'transparent',
              borderTop: `1px solid ${LINE}`,
              borderLeft: sel ? `2px solid ${BLUE}` : '2px solid transparent'
            }}>
            
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px]" style={{ color: 'rgba(14,18,32,0.4)' }}>
                  {n}
                </span>
                <span className="text-[9px] tracking-[0.14em]" style={{ color: 'rgba(14,18,32,0.4)' }}>
                  {k}
                </span>
              </div>
              <div className="mt-[5px] text-[12px]" style={{ color: INK }}>
                {t}
              </div>
            </div>
          )}
        </div>
        <div className="flex-1 rounded-[12px] bg-white p-[26px]" style={{ border: `1px solid ${LINE}` }}>
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px]" style={{ color: 'rgba(14,18,32,0.45)' }}>
              Q02 · MULTIPLE CHOICE
            </span>
            <div className="flex gap-[8px]">
              <span className="rounded-full px-[10px] py-[4px] text-[9px] font-semibold tracking-[0.14em]" style={{ background: 'rgba(27,59,255,0.08)', color: BLUE }}>
                1 MARK
              </span>
              <span className="rounded-full px-[10px] py-[4px] text-[9px] font-semibold tracking-[0.14em]" style={{ background: 'rgba(255,176,32,0.14)', color: '#9A6600' }}>
                MEDIUM
              </span>
            </div>
          </div>
          <div className="mt-[16px] text-[19px] font-medium leading-[1.35] tracking-[-0.01em]" style={{ color: INK }}>
            After inserting keys 10, 20, 30 in ascending order into an empty AVL tree, which rotation restores balance?
          </div>
          <div className="mt-[22px] space-y-[10px]">
            {[
            ['A', 'Single left rotation', true],
            ['B', 'Single right rotation', false],
            ['C', 'Left-right rotation', false],
            ['D', 'No rotation required', false]].
            map(([l, t, correct]) =>
            <div
              key={l as string}
              className="flex items-center gap-[13px] rounded-[10px] px-[15px] py-[14px]"
              style={{
                border: `1.5px solid ${correct ? '#12B76A' : LINE}`,
                background: correct ? 'rgba(18,183,106,0.05)' : '#fff'
              }}>
              
                <div
                className="flex h-[24px] w-[24px] items-center justify-center rounded-full text-[11px] font-semibold"
                style={{
                  background: correct ? '#12B76A' : 'rgba(14,18,32,0.06)',
                  color: correct ? '#fff' : 'rgba(14,18,32,0.5)'
                }}>
                
                  {l}
                </div>
                <span className="text-[14px]" style={{ color: INK }}>
                  {t}
                </span>
                {correct &&
              <span className="ml-auto text-[9px] font-semibold tracking-[0.16em]" style={{ color: '#0B8A4F' }}>
                    CORRECT
                  </span>
              }
              </div>
            )}
          </div>
          <div className="mt-[24px] flex items-center justify-between pt-[18px]" style={{ borderTop: `1px solid ${LINE}` }}>
            <span className="text-[11px]" style={{ color: 'rgba(14,18,32,0.4)' }}>
              TAGS · TREES · BALANCING
            </span>
            <button className="h-[38px] rounded-[9px] px-[18px] text-[12px] font-semibold text-white" style={{ background: BLUE }}>
              SAVE QUESTION
            </button>
          </div>
        </div>
      </div>
    </Shell>);

}

export function Students() {
  const rows = [
  ['NIT-2201', 'Aarav Kulkarni', 'SEM 4 · CSE', 'SUBMITTED', '78 / 100', '—'],
  ['NIT-2204', 'Diya Sharma', 'SEM 4 · CSE', 'IN PROGRESS', '—', '48 MIN'],
  ['NIT-2209', 'Ishaan Rao', 'SEM 4 · CSE', 'FLAGGED', '—', '48 MIN'],
  ['NIT-2213', 'Meher Nanda', 'SEM 4 · CSE', 'SUBMITTED', '91 / 100', '—'],
  ['NIT-2218', 'Rohan Iyer', 'SEM 4 · CSE', 'SUBMITTED', '64 / 100', '—'],
  ['NIT-2224', 'Sana Qureshi', 'SEM 4 · CSE', 'IN PROGRESS', '—', '48 MIN'],
  ['NIT-2231', 'Vivan Bose', 'SEM 4 · CSE', 'NOT STARTED', '—', '—']];

  const color = (s: string) =>
  s === 'FLAGGED' ? '#D92D20' : s === 'SUBMITTED' ? '#0B8A4F' : s === 'IN PROGRESS' ? BLUE : 'rgba(14,18,32,0.4)';
  return (
    <Shell active={3} title="Candidates" crumb="DATA STRUCTURES · SEM 4">
      <div className="flex items-center justify-between">
        <div className="flex gap-[8px]">
          {['ALL 430', 'SUBMITTED 412', 'IN PROGRESS 11', 'FLAGGED 07'].map((f, i) =>
          <div
            key={f}
            className="rounded-[8px] px-[13px] py-[8px] text-[11px] font-medium tracking-[0.08em]"
            style={{
              background: i === 0 ? INK : '#fff',
              color: i === 0 ? '#fff' : 'rgba(14,18,32,0.55)',
              border: i === 0 ? 'none' : `1px solid ${LINE}`
            }}>
            
              {f}
            </div>
          )}
        </div>
        <div className="flex items-center gap-[10px]">
          <span className="text-[11px]" style={{ color: 'rgba(14,18,32,0.45)' }}>
            3 SELECTED
          </span>
          <button className="h-[34px] rounded-[8px] px-[14px] text-[11px] font-semibold" style={{ border: `1.5px solid ${LINE}`, color: INK }}>
            EXTEND TIME
          </button>
          <button className="h-[34px] rounded-[8px] px-[14px] text-[11px] font-semibold text-white" style={{ background: INK }}>
            EXPORT CSV
          </button>
        </div>
      </div>
      <div className="mt-[16px] overflow-hidden rounded-[12px] bg-white" style={{ border: `1px solid ${LINE}` }}>
        <div
          className="grid px-[18px] py-[11px] text-[9px] tracking-[0.18em]"
          style={{ gridTemplateColumns: '110px 1fr 160px 130px 110px 90px', color: 'rgba(14,18,32,0.42)', borderBottom: `1px solid ${LINE}` }}>
          
          <span>ROLL</span>
          <span>NAME</span>
          <span>COHORT</span>
          <span>STATUS</span>
          <span>SCORE</span>
          <span>REMAINING</span>
        </div>
        {rows.map((r, i) =>
        <div
          key={r[0]}
          className="grid items-center px-[18px] py-[13px] text-[12px]"
          style={{
            gridTemplateColumns: '110px 1fr 160px 130px 110px 90px',
            borderTop: i ? `1px solid ${LINE}` : 'none',
            background: i < 3 ? 'rgba(27,59,255,0.02)' : '#fff'
          }}>
          
            <span className="font-mono text-[11px]" style={{ color: 'rgba(14,18,32,0.5)' }}>
              {r[0]}
            </span>
            <span className="font-medium" style={{ color: INK }}>
              {r[1]}
            </span>
            <span style={{ color: 'rgba(14,18,32,0.5)' }}>{r[2]}</span>
            <span className="text-[10px] font-semibold tracking-[0.12em]" style={{ color: color(r[3]) }}>
              {r[3]}
            </span>
            <span className="font-medium" style={{ color: INK }}>
              {r[4]}
            </span>
            <span style={{ color: 'rgba(14,18,32,0.5)' }}>{r[5]}</span>
          </div>
        )}
        <div className="flex items-center justify-between px-[18px] py-[12px]" style={{ borderTop: `1px solid ${LINE}` }}>
          <span className="text-[11px]" style={{ color: 'rgba(14,18,32,0.42)' }}>
            SHOWING 1–7 OF 430
          </span>
          <div className="flex gap-[6px]">
            {['1', '2', '3', '…', '62'].map((p, i) =>
            <div
              key={p}
              className="flex h-[26px] w-[26px] items-center justify-center rounded-[6px] text-[11px]"
              style={{
                background: i === 0 ? INK : 'transparent',
                color: i === 0 ? '#fff' : 'rgba(14,18,32,0.5)',
                border: i === 0 ? 'none' : `1px solid ${LINE}`
              }}>
              
                {p}
              </div>
            )}
          </div>
        </div>
      </div>
    </Shell>);

}

export function Results() {
  const dist = [4, 9, 18, 34, 52, 68, 86, 72, 44, 22, 10];
  const max = Math.max(...dist);
  return (
    <Shell active={4} title="Results" crumb="DATA STRUCTURES · SEM 4 · 430 CANDIDATES">
      <div className="grid grid-cols-[1fr_300px] gap-[16px]">
        <div className="rounded-[12px] bg-white p-[24px]" style={{ border: `1px solid ${LINE}` }}>
          <div className="flex items-baseline justify-between">
            <span className="text-[11px] font-semibold tracking-[0.16em]" style={{ color: INK }}>
              SCORE DISTRIBUTION
            </span>
            <span className="text-[10px] tracking-[0.14em]" style={{ color: 'rgba(14,18,32,0.4)' }}>
              MEAN 68.4 · MEDIAN 71
            </span>
          </div>
          <div className="mt-[22px] flex h-[190px] items-end gap-[10px]">
            {dist.map((d, i) =>
            <div key={i} className="flex flex-1 flex-col items-center gap-[8px]">
                <div
                className="w-full rounded-t-[3px]"
                style={{ height: `${d / max * 170}px`, background: i === 6 ? BLUE : 'rgba(27,59,255,0.22)' }} />
              
                <span className="text-[9px]" style={{ color: 'rgba(14,18,32,0.4)' }}>
                  {i * 10}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="space-y-[12px]">
          {[
          ['PASS RATE', '86.2%'],
          ['TOP DECILE', '92+'],
          ['HARDEST QUESTION', 'Q17 · 22%']].
          map(([k, v]) =>
          <div key={k} className="rounded-[12px] bg-white p-[18px]" style={{ border: `1px solid ${LINE}` }}>
              <div className="text-[9px] tracking-[0.2em]" style={{ color: 'rgba(14,18,32,0.42)' }}>
                {k}
              </div>
              <div className="mt-[8px] text-[24px] font-semibold tracking-[-0.04em]" style={{ color: INK }}>
                {v}
              </div>
            </div>
          )}
          <button className="h-[42px] w-full rounded-[9px] text-[12px] font-semibold text-white" style={{ background: INK }}>
            PUBLISH RESULTS
          </button>
        </div>
      </div>
      <div className="mt-[16px] rounded-[12px] bg-white" style={{ border: `1px solid ${LINE}` }}>
        <div className="px-[18px] py-[13px] text-[10px] font-semibold tracking-[0.18em]" style={{ color: INK, borderBottom: `1px solid ${LINE}` }}>
          BY COHORT
        </div>
        {[
        ['CSE · A', '72.1', 91],
        ['CSE · B', '66.8', 84],
        ['CSE · C', '61.4', 78]].
        map(([n, avg, pass], i) =>
        <div key={n as string} className="flex items-center gap-[18px] px-[18px] py-[14px]" style={{ borderTop: i ? `1px solid ${LINE}` : 'none' }}>
            <span className="w-[90px] text-[12px] font-medium" style={{ color: INK }}>
              {n}
            </span>
            <div className="h-[6px] flex-1 rounded-full" style={{ background: 'rgba(14,18,32,0.07)' }}>
              <div className="h-full rounded-full" style={{ width: `${pass}%`, background: BLUE }} />
            </div>
            <span className="w-[70px] text-right text-[12px]" style={{ color: 'rgba(14,18,32,0.55)' }}>
              AVG {avg}
            </span>
            <span className="w-[70px] text-right text-[12px] font-medium" style={{ color: INK }}>
              {pass}% PASS
            </span>
          </div>
        )}
      </div>
    </Shell>);

}

export function Settings() {
  return (
    <Shell active={5} title="Proctoring policy" crumb="SETTINGS">
      <div className="max-w-[720px] rounded-[12px] bg-white p-[26px]" style={{ border: `1px solid ${LINE}` }}>
        {[
        ['Lock the browser for the full duration of every exam.', true],
        ['Flag a session when the candidate leaves the tab twice.', true],
        ['Record webcam stills every 60 seconds.', true],
        ['Allow a supervisor to grant 10 extra minutes.', false],
        ['End the session automatically when time expires.', true]].
        map(([t, on], i) =>
        <div
          key={t as string}
          className="flex items-start justify-between gap-[24px] py-[18px]"
          style={{ borderTop: i ? `1px solid ${LINE}` : 'none' }}>
          
            <div>
              <div className="text-[14px] leading-[1.4]" style={{ color: INK }}>
                {t}
              </div>
              <div className="mt-[5px] text-[11px]" style={{ color: 'rgba(14,18,32,0.42)' }}>
                Applies to all exams in this institution unless overridden.
              </div>
            </div>
            <div
            className="mt-[2px] flex h-[24px] w-[42px] shrink-0 items-center rounded-full px-[2px]"
            style={{ background: on ? BLUE : 'rgba(14,18,32,0.14)', justifyContent: on ? 'flex-end' : 'flex-start' }}>
            
              <div className="h-[20px] w-[20px] rounded-full bg-white" />
            </div>
          </div>
        )}
        <div className="mt-[10px] flex items-center justify-between pt-[18px]" style={{ borderTop: `1px solid ${LINE}` }}>
          <span className="text-[11px]" style={{ color: 'rgba(14,18,32,0.42)' }}>
            LAST CHANGED 04 MAR BY R. TUNGA
          </span>
          <button className="h-[38px] rounded-[9px] px-[18px] text-[12px] font-semibold text-white" style={{ background: BLUE }}>
            SAVE POLICY
          </button>
        </div>
      </div>
    </Shell>);

}