import type { Project } from '../types/project';

export const projects: Project[] = [
{
  id: 1,
  slug: 'adswar',
  name: 'ADSWAR',
  type: 'mobile',
  category: 'MOBILE APP',
  role: 'UI / UX DESIGN',
  year: '2026',
  status: 'COMPLETE',
  line: 'A campaign marketplace where independent creators sell ad space in minutes.',
  accent: '#C6FF3D',
  screens: [
  {
    id: 'splash',
    number: '01',
    title: 'SPLASH',
    why: 'A single mark on black. The first frame sets the contrast the whole product runs on.',
    detail: { label: 'BRAND MARK', parts: ['LOGOTYPE', 'PROGRESS', 'SAFE AREA'] }
  },
  {
    id: 'login',
    number: '02',
    title: 'LOGIN',
    why: 'One field visible at a time so the keyboard never buries the primary action.',
    detail: { label: 'AUTH FORM', parts: ['INPUT', 'FOCUS RING', 'BUTTON', 'LEGAL'] },
    notes: [
    { x: 50, y: 62, kind: 'INTERACTION', body: 'Continue stays pinned above the keyboard.' }]

  },
  {
    id: 'home',
    number: '03',
    title: 'HOME',
    why: 'Spend is the number people open the app for, so it outweighs everything else.',
    detail: { label: 'DASHBOARD', parts: ['BALANCE', 'CHART', 'CAMPAIGN ROW', 'TAB BAR'] },
    notes: [
    { x: 50, y: 24, kind: 'UX DECISION', body: 'Live spend leads. Everything else is support.' },
    { x: 78, y: 58, kind: 'INTERACTION', body: 'Rows expand in place instead of pushing a new view.' }]

  },
  {
    id: 'search',
    number: '04',
    title: 'SEARCH',
    why: 'Filters are the real interface here — they sit above results, never behind a modal.',
    detail: { label: 'SEARCH COMPONENT', parts: ['INPUT', 'FILTER', 'CARD', 'BUTTON', 'NAVIGATION'] },
    notes: [
    { x: 50, y: 20, kind: 'INTERACTION', body: 'Results re-rank as filters change. No apply step.' }]

  },
  {
    id: 'details',
    number: '05',
    title: 'DETAILS',
    why: 'Reach, price and audience are read together, so they share one block.',
    detail: { label: 'LISTING DETAIL', parts: ['MEDIA', 'STATS', 'AUDIENCE', 'CTA BAR'] }
  },
  {
    id: 'profile',
    number: '06',
    title: 'PROFILE',
    why: 'Creator credibility is data, not copy. Numbers do the persuading.',
    detail: { label: 'PROFILE HEADER', parts: ['AVATAR', 'METRICS', 'TABS'] }
  },
  {
    id: 'settings',
    number: '07',
    title: 'SETTINGS',
    why: 'Grouped by how often it is touched, not by how the backend is organised.',
    detail: { label: 'SETTINGS LIST', parts: ['GROUP', 'ROW', 'TOGGLE', 'DESTRUCTIVE'] }
  },
  {
    id: 'success',
    number: '08',
    title: 'SUCCESS',
    why: 'Confirmation carries the receipt, so nobody has to go hunting for it.',
    detail: { label: 'CONFIRMATION', parts: ['STATUS', 'RECEIPT', 'NEXT ACTION'] },
    notes: [
    { x: 50, y: 74, kind: 'UX DECISION', body: 'Receipt is on the success screen, not in an email.' }]

  }]

},
{
  id: 2,
  slug: 'qubeso',
  name: 'QUBESO EXAM PORTAL',
  type: 'web',
  category: 'WEB APPLICATION',
  role: 'UI / UX DESIGN',
  year: '2026',
  status: 'COMPLETE',
  domain: 'qubesoexamportal.com',
  line: 'Exam authoring for institutions that run thousands of candidates a week.',
  accent: '#1B3BFF',
  screens: [
  {
    id: 'login',
    number: '01',
    title: 'LOGIN',
    why: 'Institution first, credentials second — most users belong to one campus forever.',
    detail: { label: 'SIGN IN', parts: ['INSTITUTION', 'INPUT', 'BUTTON'] }
  },
  {
    id: 'dashboard',
    number: '02',
    title: 'DASHBOARD',
    why: 'Live exams sit above everything. An invigilator has one question at 9am.',
    detail: { label: 'OVERVIEW', parts: ['SIDE NAV', 'KPI', 'TABLE', 'STATUS'] },
    notes: [
    { x: 62, y: 26, kind: 'UX DECISION', body: 'Live sessions outrank history in the layout.' }]

  },
  {
    id: 'create',
    number: '03',
    title: 'CREATE EXAM',
    why: 'A four-step spine keeps a long setup legible without hiding what is left.',
    detail: { label: 'STEPPER', parts: ['STEP', 'FORM', 'SUMMARY', 'PRIMARY'] },
    notes: [
    { x: 26, y: 30, kind: 'INTERACTION', body: 'Steps stay clickable — setup is not a funnel.' }]

  },
  {
    id: 'questions',
    number: '04',
    title: 'QUESTIONS',
    why: 'Bank on the left, editor on the right. Authors never lose their place.',
    detail: { label: 'EDITOR', parts: ['BANK', 'CANVAS', 'OPTION', 'SCORING'] }
  },
  {
    id: 'students',
    number: '05',
    title: 'STUDENTS',
    why: 'Dense table, no cards. This screen is scanned, not admired.',
    detail: { label: 'DATA TABLE', parts: ['ROW', 'FILTER', 'BULK ACTION', 'PAGINATION'] }
  },
  {
    id: 'results',
    number: '06',
    title: 'RESULTS',
    why: 'Distribution before individuals, because grading decisions are made on shape.',
    detail: { label: 'ANALYTICS', parts: ['HISTOGRAM', 'SEGMENT', 'EXPORT'] }
  },
  {
    id: 'settings',
    number: '07',
    title: 'SETTINGS',
    why: 'Proctoring rules read as sentences so policy owners can verify them.',
    detail: { label: 'POLICY', parts: ['SECTION', 'TOGGLE', 'HELP'] }
  }]

},
{
  id: 3,
  slug: 'optical',
  name: 'OPTICAL STORE',
  type: 'web',
  category: 'WEB APPLICATION',
  role: 'UI / UX DESIGN',
  year: '2026',
  status: 'COMPLETE',
  domain: 'optical.store',
  line: 'Eyewear commerce built around fit, not around a product grid.',
  accent: '#C8552B',
  screens: [
  {
    id: 'home',
    number: '01',
    title: 'HOME',
    why: 'Editorial opening. The frame is the hero, the type stays out of its way.',
    detail: { label: 'HERO', parts: ['TYPE', 'PRODUCT', 'NAV'] }
  },
  {
    id: 'catalog',
    number: '02',
    title: 'CATALOG',
    why: 'Face shape is the filter people actually think in.',
    detail: { label: 'CATALOG', parts: ['FILTER', 'TILE', 'SORT'] },
    notes: [
    { x: 20, y: 40, kind: 'UX DECISION', body: 'Filters mirror how people describe their face.' }]

  },
  {
    id: 'product',
    number: '03',
    title: 'PRODUCT',
    why: 'Measurements sit beside the buy action — returns start with the wrong width.',
    detail: { label: 'PRODUCT', parts: ['GALLERY', 'SPEC', 'PRICE', 'CTA'] }
  },
  {
    id: 'tryon',
    number: '04',
    title: 'TRY ON',
    why: 'Camera view stays full-bleed; controls float instead of framing it.',
    detail: { label: 'TRY ON', parts: ['VIEWPORT', 'CAROUSEL', 'CAPTURE'] }
  },
  {
    id: 'cart',
    number: '05',
    title: 'CART',
    why: 'Lens choices are editable in the cart, where the price question appears.',
    detail: { label: 'CART', parts: ['LINE ITEM', 'LENS', 'TOTAL'] }
  },
  {
    id: 'checkout',
    number: '06',
    title: 'CHECKOUT',
    why: 'One column, one decision per row, total always visible.',
    detail: { label: 'CHECKOUT', parts: ['ADDRESS', 'PAYMENT', 'SUMMARY'] }
  }]

},
{
  id: 4,
  slug: 'meridian',
  name: 'MERIDIAN',
  type: 'mobile',
  category: 'MOBILE APP',
  role: 'UI / UX + DESIGN SYSTEM',
  year: '2025',
  status: 'COMPLETE',
  domain: 'meridian.bank',
  line: 'A banking app that answers "can I afford this" before it shows a balance.',
  accent: '#16C79A',
  screens: [
  {
    id: 'overview',
    number: '01',
    title: 'OVERVIEW',
    why: 'Safe-to-spend, not balance. It is the number that changes behaviour.',
    detail: { label: 'OVERVIEW', parts: ['HEADLINE FIGURE', 'TREND', 'ACCOUNT ROW'] },
    notes: [
    { x: 50, y: 28, kind: 'UX DECISION', body: 'Safe-to-spend replaces raw balance as the hero.' }]

  },
  {
    id: 'accounts',
    number: '02',
    title: 'ACCOUNTS',
    why: 'Accounts stack like physical cards so switching feels like handling them.',
    detail: { label: 'ACCOUNT STACK', parts: ['CARD', 'STACK', 'BALANCE'] }
  },
  {
    id: 'transfer',
    number: '03',
    title: 'TRANSFER',
    why: 'Amount is typed on a keypad, not a text field. Muscle memory wins.',
    detail: { label: 'TRANSFER', parts: ['AMOUNT', 'KEYPAD', 'RECIPIENT'] },
    notes: [
    { x: 50, y: 68, kind: 'INTERACTION', body: 'Keypad is fixed; the amount scales to fit.' }]

  },
  {
    id: 'card',
    number: '04',
    title: 'CARD',
    why: 'Freeze is one tap from the card itself, where panic looks for it.',
    detail: { label: 'CARD CONTROLS', parts: ['CARD ART', 'FREEZE', 'LIMITS'] }
  },
  {
    id: 'insights',
    number: '05',
    title: 'INSIGHTS',
    why: 'Categories are ranked by change, not by size. Change is the story.',
    detail: { label: 'INSIGHTS', parts: ['BAR CHART', 'CATEGORY', 'DELTA'] }
  },
  {
    id: 'confirm',
    number: '06',
    title: 'CONFIRM',
    why: 'A held button instead of a dialog. Deliberate, and reversible until release.',
    detail: { label: 'CONFIRM', parts: ['SUMMARY', 'HOLD BUTTON', 'FEE'] }
  }]

},
{
  id: 5,
  slug: 'atlas',
  name: 'ATLAS',
  type: 'desktop',
  category: 'DESKTOP APPLICATION',
  role: 'PRODUCT DESIGN + SYSTEM',
  year: '2025',
  status: 'COMPLETE',
  line: 'A desktop tool where design tokens are edited as code and previewed as product.',
  accent: '#0057FF',
  screens: [
  {
    id: 'tokens',
    number: '01',
    title: 'TOKENS',
    why: 'Token, value and live preview on one line. No round trip to check a colour.',
    detail: { label: 'TOKEN TABLE', parts: ['SWATCH', 'ALIAS', 'VALUE', 'USAGE'] },
    notes: [
    { x: 72, y: 40, kind: 'INTERACTION', body: 'Edits repaint the preview panel instantly.' }]

  },
  {
    id: 'components',
    number: '02',
    title: 'COMPONENTS',
    why: 'Variants are laid out as a matrix — coverage gaps become visible.',
    detail: { label: 'VARIANT MATRIX', parts: ['AXIS', 'CELL', 'STATE'] }
  },
  {
    id: 'typography',
    number: '03',
    title: 'TYPOGRAPHY',
    why: 'The scale is shown at true size. Ratios are meaningless in the abstract.',
    detail: { label: 'TYPE SCALE', parts: ['STEP', 'METRIC', 'SPECIMEN'] }
  },
  {
    id: 'motion',
    number: '04',
    title: 'MOTION',
    why: 'Curves are editable and replayable, so duration is felt before it ships.',
    detail: { label: 'MOTION EDITOR', parts: ['CURVE', 'DURATION', 'REPLAY'] }
  },
  {
    id: 'export',
    number: '05',
    title: 'EXPORT',
    why: 'Diff before publish. Nobody should ship a token change blind.',
    detail: { label: 'EXPORT', parts: ['TARGET', 'DIFF', 'PUBLISH'] }
  }]

},
{
  id: 6,
  slug: 'ferro',
  name: 'FERRO',
  type: 'mobile',
  category: 'MOBILE APP',
  role: 'UI / UX + MOTION',
  year: '2025',
  status: 'COMPLETE',
  line: 'Strength training for people who train alone and count in kilos.',
  accent: '#FF4D2E',
  screens: [
  {
    id: 'today',
    number: '01',
    title: 'TODAY',
    why: 'One session, one action. The app has no opinion until you start.',
    detail: { label: 'TODAY', parts: ['SESSION CARD', 'READINESS', 'START'] }
  },
  {
    id: 'workout',
    number: '02',
    title: 'WORKOUT',
    why: 'Set logging is thumb-sized and never leaves the screen.',
    detail: { label: 'SET LOGGER', parts: ['SET ROW', 'STEPPER', 'REST'] },
    notes: [
    { x: 50, y: 80, kind: 'INTERACTION', body: 'Logging a set starts rest automatically.' }]

  },
  {
    id: 'timer',
    number: '03',
    title: 'REST',
    why: 'Rest takes the whole screen because that is all you are doing.',
    detail: { label: 'REST TIMER', parts: ['RING', 'TIME', 'SKIP'] }
  },
  {
    id: 'progress',
    number: '04',
    title: 'PROGRESS',
    why: 'Volume per week, per lift. Progress is a slope, not a number.',
    detail: { label: 'PROGRESS', parts: ['CHART', 'LIFT ROW', 'PR'] }
  },
  {
    id: 'profile',
    number: '05',
    title: 'PROFILE',
    why: 'Streak sits with the data it comes from, not in a trophy case.',
    detail: { label: 'PROFILE', parts: ['HEADER', 'STREAK', 'HISTORY'] }
  }]

},
{
  id: 7,
  slug: 'nocturne',
  name: 'NOCTURNE',
  type: 'web',
  category: 'WEB APPLICATION',
  role: 'UI / UX + INTERACTION',
  year: '2024',
  status: 'COMPLETE',
  domain: 'nocturne.fm',
  line: 'A late-night listening room for a small independent label.',
  accent: '#FF3D71',
  screens: [
  {
    id: 'discover',
    number: '01',
    title: 'DISCOVER',
    why: 'Programmed like a schedule, not a recommendation feed.',
    detail: { label: 'DISCOVER', parts: ['SLOT', 'ARTWORK', 'NOW PLAYING'] }
  },
  {
    id: 'player',
    number: '02',
    title: 'PLAYER',
    why: 'Waveform is the scrubber. Position and texture in one control.',
    detail: { label: 'PLAYER', parts: ['WAVEFORM', 'TRANSPORT', 'QUEUE'] },
    notes: [
    { x: 50, y: 58, kind: 'INTERACTION', body: 'Scrub on the waveform; the queue never moves.' }]

  },
  {
    id: 'playlist',
    number: '03',
    title: 'PLAYLIST',
    why: 'Track rows carry duration and key — the label works in both.',
    detail: { label: 'TRACK LIST', parts: ['ROW', 'DURATION', 'KEY'] }
  },
  {
    id: 'artist',
    number: '04',
    title: 'ARTIST',
    why: 'Releases first, biography last. Nobody comes here to read.',
    detail: { label: 'ARTIST', parts: ['HEADER', 'RELEASE GRID', 'BIO'] }
  },
  {
    id: 'library',
    number: '05',
    title: 'LIBRARY',
    why: 'A dense index. Saved music is searched, not browsed.',
    detail: { label: 'LIBRARY', parts: ['INDEX', 'SORT', 'ROW'] }
  }]

}];


export const totals = {
  projects: projects.length,
  screens: projects.reduce((n, p) => n + p.screens.length, 0),
  products: 9
};

export function projectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}