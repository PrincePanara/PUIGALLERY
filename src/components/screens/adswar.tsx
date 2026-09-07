import React from 'react';
import {
  Avatar,
  Field,
  GLYPHS,
  Glyph,
  HomeIndicator,
  Pill,
  ScreenRoot,
  Sparkline,
  StatusBar,
  TabBar } from
'../ui/kit';

const BG = '#0B0B0F';
const CARD = '#15151B';
const LIME = '#C6FF3D';
const W = 'rgba(255,255,255,';

const tabs = [
{ label: 'HOME', icon: <Glyph d={GLYPHS.home} /> },
{ label: 'FIND', icon: <Glyph d={GLYPHS.search} /> },
{ label: 'BOOST', icon: <Glyph d={GLYPHS.bolt} /> },
{ label: 'YOU', icon: <Glyph d={GLYPHS.user} /> }];


function Mark({ size = 64 }: {size?: number;}) {
  return (
    <div className="flex items-center gap-[10px]">
      <div
        className="flex items-center justify-center"
        style={{ width: size, height: size, background: LIME, borderRadius: size * 0.28 }}>
        
        <span
          className="font-semibold text-[#0B0B0F]"
          style={{ fontSize: size * 0.46, letterSpacing: '-0.06em' }}>
          
          A
        </span>
      </div>
    </div>);

}

export function Splash() {
  return (
    <ScreenRoot bg={BG}>
      <StatusBar dark />
      <div className="flex flex-1 flex-col items-center justify-center gap-[22px]">
        <Mark />
        <div className="text-center">
          <div className="text-[22px] font-semibold tracking-[-0.04em] text-white">ADSWAR</div>
          <div className="mt-[6px] text-[9px] tracking-[0.28em]" style={{ color: W + '0.38)' }}>
            AD SPACE MARKETPLACE
          </div>
        </div>
      </div>
      <div className="px-[40px] pb-[38px]">
        <div className="h-[2px] w-full" style={{ background: W + '0.1)' }}>
          <div className="h-full w-[64%]" style={{ background: LIME }} />
        </div>
      </div>
      <HomeIndicator dark />
    </ScreenRoot>);

}

export function Login() {
  return (
    <ScreenRoot bg={BG}>
      <StatusBar dark />
      <div className="px-[26px] pt-[36px]">
        <Mark size={38} />
        <h1
          className="mt-[34px] text-[34px] font-semibold leading-[0.98] tracking-[-0.05em] text-white">
          
          Sell your
          <br />
          ad space.
        </h1>
        <p className="mt-[12px] max-w-[240px] text-[13px] leading-[1.45]" style={{ color: W + '0.42)' }}>
          Sign in with the email your audience already knows.
        </p>
        <div className="mt-[28px] space-y-[16px]">
          <Field label="EMAIL" value="prince@studio.co" dark focused accent={LIME} />
          <Field label="PASSWORD" value="••••••••••" dark />
        </div>
      </div>
      <div className="mt-auto px-[26px] pb-[16px]">
        <button
          className="flex h-[54px] w-full items-center justify-between rounded-[14px] px-[20px] text-[14px] font-semibold text-[#0B0B0F]"
          style={{ background: LIME }}>
          
          CONTINUE
          <Glyph d={GLYPHS.arrowRight} size={18} />
        </button>
        <p className="mt-[14px] text-center text-[10px]" style={{ color: W + '0.3)' }}>
          NEW HERE? <span style={{ color: LIME }}>CREATE ACCOUNT</span>
        </p>
      </div>
      <HomeIndicator dark />
    </ScreenRoot>);

}

export function Home() {
  return (
    <ScreenRoot bg={BG}>
      <StatusBar dark />
      <div className="flex items-center justify-between px-[24px] pt-[8px]">
        <div>
          <div className="text-[9px] tracking-[0.24em]" style={{ color: W + '0.34)' }}>
            LIVE SPEND · MAR
          </div>
        </div>
        <div className="flex items-center gap-[12px]" style={{ color: W + '0.55)' }}>
          <Glyph d={GLYPHS.bell} size={18} />
          <Avatar initials="RT" bg={CARD} fg="#fff" size={30} />
        </div>
      </div>
      <div className="px-[24px] pt-[10px]">
        <div className="flex items-end gap-[8px]">
          <span className="text-[48px] font-semibold leading-[0.9] tracking-[-0.055em] text-white">
            ₹1,84,220
          </span>
        </div>
        <div className="mt-[10px] flex items-center gap-[8px]">
          <Pill bg="rgba(198,255,61,0.14)" fg={LIME}>+18.4% WoW</Pill>
          <span className="text-[10px]" style={{ color: W + '0.34)' }}>
            4 CAMPAIGNS RUNNING
          </span>
        </div>
      </div>
      <div className="mt-[18px] px-[10px]">
        <Sparkline
          points={[12, 18, 15, 26, 22, 34, 30, 44, 52, 47, 61]}
          color={LIME}
          width={370}
          height={92}
          fill="rgba(198,255,61,0.08)" />
        
      </div>
      <div className="mt-[6px] px-[24px]">
        <div className="flex items-center justify-between">
          <span className="text-[10px] tracking-[0.2em]" style={{ color: W + '0.34)' }}>
            CAMPAIGNS
          </span>
          <span className="text-[10px] tracking-[0.2em]" style={{ color: LIME }}>
            ALL
          </span>
        </div>
        <div className="mt-[12px] space-y-[10px]">
          {[
          ['NEWSLETTER · TOP SLOT', '₹64,000', 88, 'LIVE'],
          ['PODCAST · MID ROLL', '₹41,500', 62, 'LIVE'],
          ['YOUTUBE · PRE ROLL', '₹52,720', 44, 'REVIEW']].
          map(([t, v, p, s]) =>
          <div key={t as string} className="rounded-[14px] p-[14px]" style={{ background: CARD }}>
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-medium text-white">{t}</span>
                <span className="text-[13px] font-semibold text-white">{v}</span>
              </div>
              <div className="mt-[10px] flex items-center gap-[10px]">
                <div className="h-[3px] flex-1 rounded-full" style={{ background: W + '0.08)' }}>
                  <div
                  className="h-full rounded-full"
                  style={{ width: `${p}%`, background: s === 'LIVE' ? LIME : '#8A8A8A' }} />
                
                </div>
                <span
                className="text-[9px] tracking-[0.16em]"
                style={{ color: s === 'LIVE' ? LIME : W + '0.4)' }}>
                
                  {s}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
      <TabBar items={tabs} active={0} accent={LIME} dark />
      <HomeIndicator dark />
    </ScreenRoot>);

}

export function Search() {
  return (
    <ScreenRoot bg={BG}>
      <StatusBar dark />
      <div className="px-[24px] pt-[8px]">
        <div
          className="flex h-[48px] items-center gap-[10px] rounded-[12px] px-[14px]"
          style={{ background: CARD, border: `1.5px solid ${LIME}` }}>
          
          <span style={{ color: LIME }}>
            <Glyph d={GLYPHS.search} size={17} />
          </span>
          <span className="text-[14px] text-white">design newsletters</span>
          <span className="ml-[1px] inline-block" style={{ width: 1.5, height: 16, background: LIME }} />
        </div>
        <div className="mt-[12px] flex gap-[8px] overflow-hidden">
          {['ALL', 'NEWSLETTER', 'PODCAST', 'VIDEO', 'X'].map((f, i) =>
          <div
            key={f}
            className="shrink-0 rounded-full px-[13px] py-[7px] text-[10px] font-medium tracking-[0.1em]"
            style={{
              background: i === 1 ? LIME : 'transparent',
              color: i === 1 ? '#0B0B0F' : W + '0.5)',
              border: i === 1 ? 'none' : `1px solid ${W}0.12)`
            }}>
            
              {f}
            </div>
          )}
        </div>
        <div className="mt-[16px] flex items-center justify-between">
          <span className="text-[10px] tracking-[0.2em]" style={{ color: W + '0.34)' }}>
            34 SLOTS
          </span>
          <span className="flex items-center gap-[6px] text-[10px] tracking-[0.16em]" style={{ color: W + '0.5)' }}>
            <Glyph d={GLYPHS.filter} size={14} /> REACH ↓
          </span>
        </div>
      </div>
      <div className="mt-[14px] space-y-[12px] px-[24px]">
        {[
        ['THE FRAME', '42.1K', '₹18,000', '#E8FF3D'],
        ['SLOW PIXELS', '28.6K', '₹11,500', '#3DDCFF'],
        ['TYPE WEEKLY', '19.2K', '₹8,400', '#FF7A3D']].
        map(([n, r, p, c]) =>
        <div key={n as string} className="flex gap-[12px] rounded-[16px] p-[12px]" style={{ background: CARD }}>
            <div
            className="flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-[12px]"
            style={{ background: c as string }}>
            
              <span className="text-[20px] font-semibold text-[#0B0B0F]">{(n as string)[0]}</span>
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <span className="text-[14px] font-semibold text-white">{n}</span>
                <span className="text-[13px] font-semibold" style={{ color: LIME }}>
                  {p}
                </span>
              </div>
              <div className="mt-[4px] text-[10px] tracking-[0.14em]" style={{ color: W + '0.38)' }}>
                {r} SUBSCRIBERS · 3.4% CTR
              </div>
              <div className="mt-[8px] flex gap-[6px]">
                <Pill fg={W + '0.55)'} border={W + '0.14)'}>DESIGN</Pill>
                <Pill fg={W + '0.55)'} border={W + '0.14)'}>WEEKLY</Pill>
              </div>
            </div>
          </div>
        )}
      </div>
      <TabBar items={tabs} active={1} accent={LIME} dark />
      <HomeIndicator dark />
    </ScreenRoot>);

}

export function Details() {
  return (
    <ScreenRoot bg={BG}>
      <div className="relative h-[300px] shrink-0" style={{ background: '#E8FF3D' }}>
        <StatusBar />
        <div className="absolute left-[24px] top-[62px] flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#0B0B0F] text-white">
          <Glyph d="M14 6l-6 6 6 6" size={18} />
        </div>
        <div className="absolute bottom-[26px] left-[24px]">
          <div className="text-[10px] tracking-[0.26em] text-[#0B0B0F] opacity-60">NEWSLETTER · TOP SLOT</div>
          <div className="mt-[6px] text-[38px] font-semibold leading-[0.9] tracking-[-0.05em] text-[#0B0B0F]">
            THE
            <br />
            FRAME
          </div>
        </div>
      </div>
      <div className="px-[24px] pt-[20px]">
        <div className="grid grid-cols-3 gap-[10px]">
          {[
          ['REACH', '42.1K'],
          ['CTR', '3.4%'],
          ['OPEN', '58%']].
          map(([k, v]) =>
          <div key={k} className="rounded-[12px] p-[12px]" style={{ background: CARD }}>
              <div className="text-[9px] tracking-[0.18em]" style={{ color: W + '0.34)' }}>
                {k}
              </div>
              <div className="mt-[6px] text-[19px] font-semibold text-white">{v}</div>
            </div>
          )}
        </div>
        <div className="mt-[18px] text-[10px] tracking-[0.2em]" style={{ color: W + '0.34)' }}>
          AUDIENCE
        </div>
        <div className="mt-[12px] space-y-[10px]">
          {[
          ['PRODUCT DESIGNERS', 46],
          ['ENGINEERS', 31],
          ['FOUNDERS', 23]].
          map(([l, v]) =>
          <div key={l as string} className="flex items-center gap-[12px]">
              <span className="w-[150px] text-[11px]" style={{ color: W + '0.7)' }}>
                {l}
              </span>
              <div className="h-[6px] flex-1 rounded-full" style={{ background: W + '0.07)' }}>
                <div className="h-full rounded-full" style={{ width: `${v}%`, background: LIME }} />
              </div>
              <span className="w-[30px] text-right text-[11px] text-white">{v}%</span>
            </div>
          )}
        </div>
      </div>
      <div
        className="mt-auto flex items-center justify-between px-[24px] py-[16px]"
        style={{ borderTop: `1px solid ${W}0.08)` }}>
        
        <div>
          <div className="text-[9px] tracking-[0.18em]" style={{ color: W + '0.34)' }}>
            PER ISSUE
          </div>
          <div className="text-[22px] font-semibold text-white">₹18,000</div>
        </div>
        <button
          className="flex h-[50px] items-center gap-[10px] rounded-[14px] px-[24px] text-[13px] font-semibold text-[#0B0B0F]"
          style={{ background: LIME }}>
          
          BOOK SLOT
          <Glyph d={GLYPHS.arrowRight} size={16} />
        </button>
      </div>
      <HomeIndicator dark />
    </ScreenRoot>);

}

export function Profile() {
  return (
    <ScreenRoot bg={BG}>
      <StatusBar dark />
      <div className="px-[24px] pt-[20px]">
        <div className="flex items-center gap-[14px]">
          <Avatar initials="PP" bg={LIME} fg="#0B0B0F" size={64} radius={20} />
          <div>
            <div className="text-[20px] font-semibold tracking-[-0.03em] text-white">Prince Panara</div>
            <div className="mt-[3px] text-[10px] tracking-[0.18em]" style={{ color: W + '0.38)' }}>
              CREATOR · VERIFIED
            </div>
          </div>
        </div>
        <div className="mt-[22px] grid grid-cols-3 divide-x" style={{ borderColor: W + '0.08)' }}>
          {[
          ['SLOTS', '12'],
          ['REACH', '89K'],
          ['RATING', '4.9']].
          map(([k, v], i) =>
          <div key={k} className={i === 0 ? 'pr-[14px]' : 'px-[14px]'}>
              <div className="text-[24px] font-semibold text-white">{v}</div>
              <div className="mt-[3px] text-[9px] tracking-[0.18em]" style={{ color: W + '0.34)' }}>
                {k}
              </div>
            </div>
          )}
        </div>
        <div className="mt-[24px] flex gap-[22px]" style={{ borderBottom: `1px solid ${W}0.08)` }}>
          {['SLOTS', 'BOOKINGS', 'PAYOUTS'].map((t, i) =>
          <div
            key={t}
            className="pb-[10px] text-[11px] font-medium tracking-[0.14em]"
            style={{
              color: i === 0 ? '#fff' : W + '0.34)',
              borderBottom: i === 0 ? `2px solid ${LIME}` : 'none'
            }}>
            
              {t}
            </div>
          )}
        </div>
        <div className="mt-[16px] space-y-[10px]">
          {[
          ['THE FRAME', 'NEWSLETTER', '₹18,000'],
          ['SLOW PIXELS', 'PODCAST', '₹11,500'],
          ['TYPE WEEKLY', 'NEWSLETTER', '₹8,400']].
          map(([a, b, c]) =>
          <div
            key={a}
            className="flex items-center justify-between py-[12px]"
            style={{ borderBottom: `1px solid ${W}0.06)` }}>
            
              <div>
                <div className="text-[13px] font-medium text-white">{a}</div>
                <div className="mt-[2px] text-[9px] tracking-[0.16em]" style={{ color: W + '0.34)' }}>
                  {b}
                </div>
              </div>
              <span className="text-[13px] font-semibold" style={{ color: LIME }}>
                {c}
              </span>
            </div>
          )}
        </div>
      </div>
      <TabBar items={tabs} active={3} accent={LIME} dark />
      <HomeIndicator dark />
    </ScreenRoot>);

}

export function Settings() {
  const groups: [string, [string, string][]][] = [
  [
  'ACCOUNT',
  [
  ['Payout method', 'HDFC ••4421'],
  ['Tax details', 'VERIFIED'],
  ['Slot defaults', '3 ACTIVE']]],


  [
  'NOTIFICATIONS',
  [
  ['Booking requests', 'ON'],
  ['Payout alerts', 'ON'],
  ['Weekly digest', 'OFF']]]];



  return (
    <ScreenRoot bg={BG}>
      <StatusBar dark />
      <div className="px-[24px] pt-[14px]">
        <h1 className="text-[32px] font-semibold tracking-[-0.05em] text-white">Settings</h1>
      </div>
      <div className="mt-[22px] px-[24px]">
        {groups.map(([g, rows]) =>
        <div key={g} className="mb-[26px]">
            <div className="text-[9px] tracking-[0.24em]" style={{ color: W + '0.3)' }}>
              {g}
            </div>
            <div className="mt-[10px] overflow-hidden rounded-[14px]" style={{ background: CARD }}>
              {rows.map(([l, v], i) =>
            <div
              key={l}
              className="flex items-center justify-between px-[14px] py-[15px]"
              style={{ borderTop: i ? `1px solid ${W}0.06)` : 'none' }}>
              
                  <span className="text-[13px] text-white">{l}</span>
                  {v === 'ON' || v === 'OFF' ?
              <div
                className="flex h-[22px] w-[38px] items-center rounded-full px-[2px]"
                style={{
                  background: v === 'ON' ? LIME : W + '0.12)',
                  justifyContent: v === 'ON' ? 'flex-end' : 'flex-start'
                }}>
                
                      <div className="h-[18px] w-[18px] rounded-full bg-white" />
                    </div> :

              <span className="text-[11px] tracking-[0.1em]" style={{ color: W + '0.4)' }}>
                      {v}
                    </span>
              }
                </div>
            )}
            </div>
          </div>
        )}
        <div className="text-[12px] font-medium" style={{ color: '#FF5A45' }}>
          Delete account
        </div>
      </div>
      <TabBar items={tabs} active={3} accent={LIME} dark />
      <HomeIndicator dark />
    </ScreenRoot>);

}

export function Success() {
  return (
    <ScreenRoot bg={LIME}>
      <StatusBar />
      <div className="flex flex-1 flex-col items-center justify-center px-[34px] text-center">
        <div className="flex h-[62px] w-[62px] items-center justify-center rounded-full bg-[#0B0B0F] text-[#C6FF3D]">
          <Glyph d={GLYPHS.check} size={26} stroke={2} />
        </div>
        <div className="mt-[24px] text-[34px] font-semibold leading-[0.95] tracking-[-0.05em] text-[#0B0B0F]">
          SLOT
          <br />
          BOOKED
        </div>
        <p className="mt-[12px] max-w-[230px] text-[13px] leading-[1.45] text-[#0B0B0F] opacity-70">
          The Frame · top slot · issue #148, going out 12 March.
        </p>
      </div>
      <div className="px-[24px]">
        <div className="rounded-[16px] bg-[#0B0B0F] p-[16px]">
          {[
          ['SLOT', 'TOP · THE FRAME'],
          ['REACH', '42,100'],
          ['TOTAL PAID', '₹18,000'],
          ['REF', 'ADW-4471-2K']].
          map(([k, v], i) =>
          <div
            key={k}
            className="flex items-center justify-between py-[9px]"
            style={{ borderTop: i ? `1px solid ${W}0.08)` : 'none' }}>
            
              <span className="text-[9px] tracking-[0.2em]" style={{ color: W + '0.4)' }}>
                {k}
              </span>
              <span className="text-[12px] font-medium text-white">{v}</span>
            </div>
          )}
        </div>
      </div>
      <div className="mt-[16px] px-[24px] pb-[16px]">
        <button className="h-[52px] w-full rounded-[14px] bg-[#0B0B0F] text-[13px] font-semibold text-white">
          VIEW CAMPAIGN
        </button>
      </div>
      <HomeIndicator />
    </ScreenRoot>);

}