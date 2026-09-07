import React from 'react';

export function Footer() {
  return (
    <footer className="w-full bg-ink px-5 py-10 sm:px-8">
      <div className="flex flex-col gap-6 border-b border-white/12 pb-8 sm:flex-row sm:items-end sm:justify-between">
        <div
          className="font-display font-medium text-white"
          style={{ fontSize: 'clamp(30px, 5.4vw, 74px)', lineHeight: 0.86, letterSpacing: '-0.05em' }}>
          
          PRINCE PANARA
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-2">
          <span className="rt-meta text-mid">UI / UX / PRODUCT</span>
          <span className="rt-meta text-mid">WEB / MOBILE</span>
          <span className="rt-meta text-mid">© 2026</span>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <span className="rt-meta text-white/30">DESIGNED AND BUILT IN KOLKATA</span>
        <span className="rt-meta text-white/30">TYPE HELLO ANYWHERE</span>
      </div>
    </footer>);

}