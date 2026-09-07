import React from 'react';
import {
  Bars,
  GLYPHS,
  Glyph,
  HomeIndicator,
  Pill,
  Ring,
  ScreenRoot,
  Sparkline,
  StatusBar,
  TabBar } from
'../ui/kit';

const BG = '#061412';
const CARD = '#0C1F1C';
const MINT = '#16C79A';
const W = 'rgba(255,255,255,';

const tabs = [
{ label: 'HOME', icon: <Glyph d={GLYPHS.home} /> },
{ label: 'CARDS', icon: <Glyph d={GLYPHS.wallet} /> },
{ label: 'MOVE', icon: <Glyph d={GLYPHS.arrowRight} /> },
{ label: 'INSIGHT', icon: <Glyph d={GLYPHS.chart} /> }];


export function Overview() {
  return (
    <ScreenRoot bg={BG}>
      <StatusBar dark />
      <div className="px-[26px] pt-[10px]">
        <div className="flex items-center justify-between">
          <span className="text-[9px] tracking-[0.26em]" style={{ color: W + '0.36)' }}>
            SAFE TO SPEND · TODAY
          </span>
          <Glyph d={GLYPHS.bell} size={17} />
        </div>
        <div className="mt-[14px] flex items-end gap-[6px]">
          <span className="text-[22px] font-medium text-white opacity-50">£</span>
          <span className="text-[56px] font-semibold leading-[0.85] tracking-[-0.06em] text-white">
            412
          </span>
          <span className="text-[22px] font-medium text-white opacity-50">.60</span>
        </div>
        <div className="mt-[12px] flex items-center gap-[10px]">
          <Pill bg="rgba(22,199,154,0.14)" fg={MINT}>
            £86 UNDER PLAN
          </Pill>
          <span className="text-[10px]" style={{ color: W + '0.34)' }}>
            9 DAYS LEFT
          </span>
        </div>
      </div>
      <div className="mt-[16px] px-[16px]">
        <Sparkline
          points={[70, 66, 58, 60, 49, 44, 46, 38, 30, 24]}
          color={MINT}
          width={358}
          height={80}
          fill="rgba(22,199,154,0.08)" />
        
      </div>
      <div className="mt-[10px] px-[26px]">
        <div className="text-[9px] tracking-[0.24em]" style={{ color: W + '0.3)' }}>
          ACCOUNTS
        </div>
        <div className="mt-[12px] space-y-[10px]">
          {[
          ['CURRENT', '••4421', '£2,140.20'],
          ['SAVINGS', '••8802', '£11,650.00'],
          ['JOINT', '••1109', '£640.80']].
          map(([a, b, c]) =>
          <div
            key={a}
            className="flex items-center justify-between rounded-[14px] px-[16px] py-[15px]"
            style={{ background: CARD }}>
            
              <div>
                <div className="text-[11px] font-medium tracking-[0.14em] text-white">{a}</div>
                <div className="mt-[3px] text-[10px]" style={{ color: W + '0.34)' }}>
                  {b}
                </div>
              </div>
              <span className="text-[15px] font-semibold text-white">{c}</span>
            </div>
          )}
        </div>
      </div>
      <TabBar items={tabs} active={0} accent={MINT} dark />
      <HomeIndicator dark />
    </ScreenRoot>);

}

export function Accounts() {
  const cards = [
  ['CURRENT', '£2,140.20', '#16C79A', '#04211B'],
  ['SAVINGS', '£11,650.00', '#0C1F1C', '#fff'],
  ['JOINT', '£640.80', '#123', '#fff']];

  return (
    <ScreenRoot bg={BG}>
      <StatusBar dark />
      <div className="px-[26px] pt-[12px]">
        <h1 className="text-[30px] font-semibold tracking-[-0.05em] text-white">Accounts</h1>
      </div>
      <div className="relative mt-[24px] h-[300px] px-[26px]">
        {cards.map(([n, v, bg, fg], i) =>
        <div
          key={n}
          className="absolute left-[26px] right-[26px] rounded-[22px] p-[20px]"
          style={{
            top: i * 88,
            height: 168,
            background: bg,
            border: i ? `1px solid ${W}0.08)` : 'none',
            boxShadow: '0 18px 40px rgba(0,0,0,0.45)',
            zIndex: 3 - i
          }}>
          
            <div className="flex items-start justify-between">
              <span className="text-[10px] tracking-[0.22em]" style={{ color: fg, opacity: 0.6 }}>
                {n}
              </span>
              <div
              className="h-[18px] w-[26px] rounded-[3px]"
              style={{ background: fg, opacity: 0.22 }} />
            
            </div>
            <div className="mt-[14px] text-[26px] font-semibold tracking-[-0.04em]" style={{ color: fg }}>
              {v}
            </div>
          </div>
        )}
      </div>
      <div className="mt-auto px-[26px] pb-[10px]">
        <div className="text-[9px] tracking-[0.24em]" style={{ color: W + '0.3)' }}>
          RECENT · CURRENT
        </div>
        {[
        ['Bricks & Mortar', '−£42.00'],
        ['Salary · Northline', '+£3,120.00']].
        map(([a, b]) =>
        <div
          key={a}
          className="flex items-center justify-between py-[13px]"
          style={{ borderBottom: `1px solid ${W}0.06)` }}>
          
            <span className="text-[13px] text-white">{a}</span>
            <span
            className="text-[13px] font-medium"
            style={{ color: b.startsWith('+') ? MINT : W + '0.75)' }}>
            
              {b}
            </span>
          </div>
        )}
      </div>
      <TabBar items={tabs} active={1} accent={MINT} dark />
      <HomeIndicator dark />
    </ScreenRoot>);

}

export function Transfer() {
  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', '⌫'];
  return (
    <ScreenRoot bg={BG}>
      <StatusBar dark />
      <div className="px-[26px] pt-[10px]">
        <div className="flex items-center justify-between">
          <Glyph d="M14 6l-6 6 6 6" size={19} />
          <span className="text-[10px] tracking-[0.22em]" style={{ color: W + '0.4)' }}>
            SEND MONEY
          </span>
          <div className="w-[19px]" />
        </div>
      </div>
      <div className="mt-[26px] flex flex-col items-center">
        <div
          className="flex h-[46px] items-center gap-[10px] rounded-full px-[8px] pr-[16px]"
          style={{ background: CARD }}>
          
          <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full" style={{ background: MINT }}>
            <span className="text-[12px] font-semibold text-[#04211B]">JM</span>
          </div>
          <span className="text-[13px] text-white">Jonah Mehta</span>
          <span className="text-[10px]" style={{ color: W + '0.35)' }}>
            ••8841
          </span>
        </div>
        <div className="mt-[30px] flex items-start gap-[4px]">
          <span className="mt-[10px] text-[26px] font-medium text-white opacity-45">£</span>
          <span className="text-[68px] font-semibold leading-[0.85] tracking-[-0.06em] text-white">240</span>
          <span className="mt-[10px] inline-block" style={{ width: 2, height: 54, background: MINT }} />
        </div>
        <div className="mt-[14px] text-[10px] tracking-[0.18em]" style={{ color: W + '0.34)' }}>
          ARRIVES INSTANTLY · NO FEE
        </div>
      </div>
      <div className="mt-auto px-[24px]">
        <div className="grid grid-cols-3 gap-y-[6px]">
          {keys.map((k) =>
          <div
            key={k}
            className="flex h-[62px] items-center justify-center text-[24px] font-medium text-white">
            
              {k}
            </div>
          )}
        </div>
        <button
          className="mt-[10px] mb-[12px] h-[54px] w-full rounded-[16px] text-[13px] font-semibold text-[#04211B]"
          style={{ background: MINT }}>
          
          REVIEW TRANSFER
        </button>
      </div>
      <HomeIndicator dark />
    </ScreenRoot>);

}

export function Card() {
  return (
    <ScreenRoot bg={BG}>
      <StatusBar dark />
      <div className="px-[26px] pt-[12px]">
        <h1 className="text-[30px] font-semibold tracking-[-0.05em] text-white">Card</h1>
      </div>
      <div className="mt-[22px] px-[26px]">
        <div
          className="rounded-[22px] p-[22px]"
          style={{ background: MINT, boxShadow: '0 22px 44px rgba(22,199,154,0.18)' }}>
          
          <div className="flex items-start justify-between">
            <span className="text-[11px] font-semibold tracking-[0.24em] text-[#04211B]">MERIDIAN</span>
            <span className="text-[10px] tracking-[0.18em] text-[#04211B] opacity-60">DEBIT</span>
          </div>
          <div className="mt-[42px] font-mono text-[17px] tracking-[0.16em] text-[#04211B]">
            4421 •••• •••• 8802
          </div>
          <div className="mt-[16px] flex items-end justify-between">
            <div>
              <div className="text-[8px] tracking-[0.2em] text-[#04211B] opacity-55">HOLDER</div>
              <div className="text-[12px] font-medium text-[#04211B]">P. PANARA</div>
            </div>
            <div className="text-[12px] font-medium text-[#04211B]">09 / 29</div>
          </div>
        </div>
      </div>
      <div className="mt-[20px] grid grid-cols-2 gap-[10px] px-[26px]">
        {[
        ['FREEZE CARD', GLYPHS.bolt, true],
        ['CARD PIN', GLYPHS.cog, false]].
        map(([l, g, primary]) =>
        <div
          key={l as string}
          className="flex flex-col gap-[16px] rounded-[16px] p-[16px]"
          style={{
            background: primary ? '#1C1207' : CARD,
            border: primary ? '1px solid rgba(255,178,32,0.35)' : 'none'
          }}>
          
            <span style={{ color: primary ? '#FFB020' : MINT }}>
              <Glyph d={g as string} size={20} />
            </span>
            <span className="text-[11px] font-medium tracking-[0.12em] text-white">{l}</span>
          </div>
        )}
      </div>
      <div className="mt-[20px] px-[26px]">
        <div className="text-[9px] tracking-[0.24em]" style={{ color: W + '0.3)' }}>
          LIMITS
        </div>
        {[
        ['Monthly spend', '£1,240 / £2,000', 62],
        ['ATM withdrawals', '£180 / £500', 36]].
        map(([l, v, p]) =>
        <div key={l as string} className="mt-[14px]">
            <div className="flex items-center justify-between">
              <span className="text-[12px] text-white">{l}</span>
              <span className="text-[11px]" style={{ color: W + '0.45)' }}>
                {v}
              </span>
            </div>
            <div className="mt-[8px] h-[4px] rounded-full" style={{ background: W + '0.08)' }}>
              <div className="h-full rounded-full" style={{ width: `${p}%`, background: MINT }} />
            </div>
          </div>
        )}
      </div>
      <TabBar items={tabs} active={1} accent={MINT} dark />
      <HomeIndicator dark />
    </ScreenRoot>);

}

export function Insights() {
  return (
    <ScreenRoot bg={BG}>
      <StatusBar dark />
      <div className="px-[26px] pt-[12px]">
        <h1 className="text-[30px] font-semibold tracking-[-0.05em] text-white">Insights</h1>
        <div className="mt-[6px] text-[10px] tracking-[0.2em]" style={{ color: W + '0.34)' }}>
          RANKED BY CHANGE · MARCH
        </div>
      </div>
      <div className="mt-[22px] flex justify-center">
        <Bars
          values={[42, 58, 36, 74, 51, 88, 62]}
          color={MINT}
          muted="rgba(255,255,255,0.1)"
          height={110}
          barWidth={26}
          gap={14}
          activeIndex={5} />
        
      </div>
      <div className="mt-[8px] flex justify-center gap-[14px]">
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) =>
        <span
          key={i}
          className="w-[26px] text-center text-[9px] tracking-[0.1em]"
          style={{ color: i === 5 ? MINT : W + '0.3)' }}>
          
            {d}
          </span>
        )}
      </div>
      <div className="mt-[24px] px-[26px]">
        {[
        ['EATING OUT', '£184', '+42%', '#FF7A5A'],
        ['TRANSPORT', '£96', '+18%', '#FFB020'],
        ['GROCERIES', '£210', '−6%', MINT],
        ['SUBSCRIPTIONS', '£54', '0%', '#8A8A8A']].
        map(([n, v, d, c]) =>
        <div
          key={n as string}
          className="flex items-center gap-[14px] py-[14px]"
          style={{ borderBottom: `1px solid ${W}0.06)` }}>
          
            <div className="h-[8px] w-[8px] rounded-full" style={{ background: c as string }} />
            <span className="flex-1 text-[12px] font-medium tracking-[0.1em] text-white">{n}</span>
            <span className="text-[12px]" style={{ color: c as string }}>
              {d}
            </span>
            <span className="w-[52px] text-right text-[14px] font-semibold text-white">{v}</span>
          </div>
        )}
      </div>
      <TabBar items={tabs} active={3} accent={MINT} dark />
      <HomeIndicator dark />
    </ScreenRoot>);

}

export function Confirm() {
  return (
    <ScreenRoot bg={BG}>
      <StatusBar dark />
      <div className="flex flex-1 flex-col items-center justify-center px-[30px]">
        <Ring value={68} color={MINT} track="rgba(255,255,255,0.08)" size={128} thickness={4}>
          <span className="text-[30px] font-semibold tracking-[-0.04em] text-white">£240</span>
          <span className="mt-[2px] text-[9px] tracking-[0.2em]" style={{ color: W + '0.4)' }}>
            TO JONAH M.
          </span>
        </Ring>
        <div className="mt-[30px] w-full rounded-[16px] p-[16px]" style={{ background: CARD }}>
          {[
          ['FROM', 'CURRENT ••4421'],
          ['ARRIVES', 'INSTANTLY'],
          ['FEE', 'NONE']].
          map(([k, v], i) =>
          <div
            key={k}
            className="flex items-center justify-between py-[10px]"
            style={{ borderTop: i ? `1px solid ${W}0.06)` : 'none' }}>
            
              <span className="text-[9px] tracking-[0.2em]" style={{ color: W + '0.36)' }}>
                {k}
              </span>
              <span className="text-[12px] font-medium text-white">{v}</span>
            </div>
          )}
        </div>
      </div>
      <div className="px-[26px] pb-[14px]">
        <div
          className="relative flex h-[56px] items-center justify-center overflow-hidden rounded-[16px]"
          style={{ background: 'rgba(22,199,154,0.16)' }}>
          
          <div className="absolute inset-y-0 left-0 w-[58%]" style={{ background: MINT }} />
          <span className="relative text-[12px] font-semibold tracking-[0.16em] text-[#04211B]">
            HOLD TO SEND
          </span>
        </div>
        <div className="mt-[10px] text-center text-[9px] tracking-[0.2em]" style={{ color: W + '0.3)' }}>
          RELEASE TO CANCEL
        </div>
      </div>
      <HomeIndicator dark />
    </ScreenRoot>);

}