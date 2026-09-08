import type { Project } from '../types/project';

export const projects: Project[] = [

  {
    id: 100,
    slug: 'moment-rooms',
    name: 'MOMENT ROOMS',
    type: 'mobile',
    domain: 'momentrooms.app',
    category: 'MOBILE APPLICATION',
    role: 'PRODUCT DESIGN',
    year: '2026',
    status: 'LIVE',
    line: 'A seamless mobile app for capturing and organizing moments in shared spaces.',
    accent: '#000000',
    screens: [
      {
        id: 'home',
        number: '01',
        title: 'HOME SCREEN',
        image: '/moment-rooms/Home Screen 1.png',
        why: 'Central hub for accessing recent rooms and capturing new moments.',
        detail: { label: 'HOME', parts: ['HUB', 'ROOMS', 'CAPTURE'] },
        notes: []
      },
      {
        id: 'create-room',
        number: '02',
        title: 'CREATE ROOM',
        image: '/moment-rooms/Create Room screen 2.png',
        why: 'Streamlined creation flow for generating a new collaborative space.',
        detail: { label: 'CREATE', parts: ['FLOW', 'INPUT', 'START'] },
        notes: []
      },
      {
        id: 'room',
        number: '03',
        title: 'ROOM SCREEN',
        image: '/moment-rooms/ROOM SCREEN 3.png',
        why: 'The active room view displaying shared memories and live captures.',
        detail: { label: 'ROOM', parts: ['FEED', 'SHARED', 'LIVE'] },
        notes: []
      },
      {
        id: 'room-details',
        number: '04',
        title: 'ROOM DETAILS',
        image: '/moment-rooms/Room details screen 4.png',
        why: 'Detailed view of room settings, participants, and metadata.',
        detail: { label: 'DETAILS', parts: ['SETTINGS', 'PEOPLE', 'META'] },
        notes: []
      },
      {
        id: 'camera',
        number: '05',
        title: 'CAMERA SCREEN',
        image: '/moment-rooms/Camera screen 5.png',
        why: 'In-app camera interface optimized for quick moment capture.',
        detail: { label: 'CAMERA', parts: ['CAPTURE', 'LENS', 'SNAP'] },
        notes: []
      },
      {
        id: 'creating',
        number: '06',
        title: 'CREATING MOMENT',
        image: '/moment-rooms/creating screen 6.png',
        why: 'Loading state during media processing and room generation.',
        detail: { label: 'PROCESSING', parts: ['LOADING', 'STATE', 'SYNC'] },
        notes: []
      },
      {
        id: 'generating',
        number: '07',
        title: 'GENERATING SCREEN',
        image: '/moment-rooms/genreting screen 7.png',
        why: 'Finalizing the room creation with engaging progress indicators.',
        detail: { label: 'PROGRESS', parts: ['FINALIZING', 'UI', 'ANIMATION'] },
        notes: []
      }
    ]
  },

  {
    id: 99,
    slug: 'empella',
    name: 'EMPELLA',
    type: 'web',
    domain: 'empella.com',
    category: 'WEB APPLICATION',
    role: 'PRODUCT DESIGN',
    year: '2026',
    status: 'LIVE',
    line: 'Operational dashboard and scheduling platform for logistics management.',
    accent: '#18181B',
    screens: [
      {
        id: 'login',
        number: '01',
        title: 'LOGIN PAGE',
        image: '/empella-export/Login page 1.png',
        why: 'Secure authentication portal for the Empella dashboard.',
        detail: { label: 'LOGIN', parts: ['AUTH', 'PORTAL', 'SECURE'] },
        notes: []
      },
      {
        id: 'dashboard',
        number: '02',
        title: 'DASHBOARD',
        image: '/empella-export/Dashbord 2.png',
        why: 'High-level overview of daily operations and metrics.',
        detail: { label: 'OVERVIEW', parts: ['METRICS', 'DATA', 'STATUS'] },
        notes: []
      },
      {
        id: 'check-list',
        number: '03',
        title: 'CHECK LIST',
        image: '/empella-export/Check List Screen 3.png',
        why: 'Operational task management and checklist interface.',
        detail: { label: 'TASKS', parts: ['LIST', 'TODO', 'MANAGE'] },
        notes: []
      },
      {
        id: 'vessel-schedule',
        number: '04',
        title: 'VESSEL SCHEDULE',
        image: '/empella-export/Vessel Schedule Screen 4.png',
        why: 'Tracking and scheduling for active vessel routes.',
        detail: { label: 'SCHEDULE', parts: ['VESSEL', 'TIME', 'TRACK'] },
        notes: []
      },
      {
        id: 'add-schedule',
        number: '05',
        title: 'ADD NEW SCHEDULE',
        image: '/empella-export/Add New schedule screen 5.png',
        why: 'Input interface for generating new vessel schedules.',
        detail: { label: 'NEW SCHEDULE', parts: ['INPUT', 'FORM', 'DATA'] },
        notes: []
      },
      {
        id: 'company-list',
        number: '06',
        title: 'COMPANY LIST',
        image: '/empella-export/Company List Screen 6.png',
        why: 'Directory of registered companies and partners.',
        detail: { label: 'COMPANIES', parts: ['LIST', 'DIRECTORY', 'PARTNER'] },
        notes: []
      },
      {
        id: 'add-company',
        number: '07',
        title: 'ADD COMPANY',
        image: '/empella-export/Add Company Screen 7.png',
        why: 'Streamlined form for onboarding new companies.',
        detail: { label: 'ONBOARDING', parts: ['FORM', 'NEW', 'COMPANY'] },
        notes: []
      },
      {
        id: 'product-list',
        number: '08',
        title: 'PRODUCT LIST',
        image: '/empella-export/Product List Screen 8.png',
        why: 'Inventory management and product directory.',
        detail: { label: 'INVENTORY', parts: ['PRODUCTS', 'LIST', 'STOCK'] },
        notes: []
      },
      {
        id: 'add-product',
        number: '09',
        title: 'ADD NEW PRODUCT',
        image: '/empella-export/Add New Product Screen 9.png',
        why: 'Interface for adding new products into the inventory system.',
        detail: { label: 'NEW PRODUCT', parts: ['FORM', 'ITEM', 'ADD'] },
        notes: []
      },
      {
        id: 'daily-news',
        number: '10',
        title: 'DAILY NEWS',
        image: '/empella-export/Daily News Screen 10.png',
        why: 'Internal news and daily updates feed.',
        detail: { label: 'NEWS', parts: ['FEED', 'UPDATES', 'DAILY'] },
        notes: []
      },
      {
        id: 'add-news',
        number: '11',
        title: 'ADD NEWS',
        image: '/empella-export/Add News Screen 11.png',
        why: 'Publishing tool for the daily news feed.',
        detail: { label: 'PUBLISH', parts: ['POST', 'NEWS', 'CREATE'] },
        notes: []
      },
      {
        id: 'category-list',
        number: '12',
        title: 'CATEGORY LIST',
        image: '/empella-export/Category List Screen 12.png',
        why: 'Management interface for product categories.',
        detail: { label: 'CATEGORIES', parts: ['LIST', 'ORGANIZE', 'MANAGE'] },
        notes: []
      },
      {
        id: 'add-category',
        number: '13',
        title: 'ADD CATEGORY',
        image: '/empella-export/Add Category Screen 13.png',
        why: 'Form for generating new product categorizations.',
        detail: { label: 'NEW CATEGORY', parts: ['FORM', 'ADD', 'TYPE'] },
        notes: []
      }
    ]
  },
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
        image: '/Screens/adswar/splash.png',
        why: 'A single mark on black. The first frame sets the contrast the whole product runs on.',
        detail: { label: 'BRAND MARK', parts: ['LOGOTYPE', 'PROGRESS', 'SAFE AREA'] }
      },
      {
        id: 'login',
        number: '02',
        title: 'LOGIN',
        image: '/Screens/adswar/login.png',
        why: 'One field visible at a time so the keyboard never buries the primary action.',
        detail: { label: 'AUTH FORM', parts: ['INPUT', 'FOCUS RING', 'BUTTON', 'LEGAL'] },
        notes: [
          { x: 50, y: 62, kind: 'INTERACTION', body: 'Continue stays pinned above the keyboard.' }]

      },
      {
        id: 'home',
        number: '03',
        title: 'HOME',
        image: '/Screens/adswar/home.png',
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
        image: '/Screens/adswar/search.png',
        why: 'Filters are the real interface here — they sit above results, never behind a modal.',
        detail: { label: 'SEARCH COMPONENT', parts: ['INPUT', 'FILTER', 'CARD', 'BUTTON', 'NAVIGATION'] },
        notes: [
          { x: 50, y: 20, kind: 'INTERACTION', body: 'Results re-rank as filters change. No apply step.' }]

      },
      {
        id: 'details',
        number: '05',
        title: 'DETAILS',
        image: '/Screens/adswar/details.png',
        why: 'Reach, price and audience are read together, so they share one block.',
        detail: { label: 'LISTING DETAIL', parts: ['MEDIA', 'STATS', 'AUDIENCE', 'CTA BAR'] }
      },
      {
        id: 'profile',
        number: '06',
        title: 'PROFILE',
        image: '/Screens/adswar/profile.png',
        why: 'Creator credibility is data, not copy. Numbers do the persuading.',
        detail: { label: 'PROFILE HEADER', parts: ['AVATAR', 'METRICS', 'TABS'] }
      },
      {
        id: 'settings',
        number: '07',
        title: 'SETTINGS',
        image: '/Screens/adswar/settings.png',
        why: 'Grouped by how often it is touched, not by how the backend is organised.',
        detail: { label: 'SETTINGS LIST', parts: ['GROUP', 'ROW', 'TOGGLE', 'DESTRUCTIVE'] }
      },
      {
        id: 'success',
        number: '08',
        title: 'SUCCESS',
        image: '/Screens/adswar/success.png',
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
        image: '/Screens/qubeso/login.png',
        why: 'Institution first, credentials second — most users belong to one campus forever.',
        detail: { label: 'SIGN IN', parts: ['INSTITUTION', 'INPUT', 'BUTTON'] }
      },
      {
        id: 'dashboard',
        number: '02',
        title: 'DASHBOARD',
        image: '/Screens/qubeso/dashboard.png',
        why: 'Live exams sit above everything. An invigilator has one question at 9am.',
        detail: { label: 'OVERVIEW', parts: ['SIDE NAV', 'KPI', 'TABLE', 'STATUS'] },
        notes: [
          { x: 62, y: 26, kind: 'UX DECISION', body: 'Live sessions outrank history in the layout.' }]

      },
      {
        id: 'create',
        number: '03',
        title: 'CREATE EXAM',
        image: '/Screens/qubeso/create.png',
        why: 'A four-step spine keeps a long setup legible without hiding what is left.',
        detail: { label: 'STEPPER', parts: ['STEP', 'FORM', 'SUMMARY', 'PRIMARY'] },
        notes: [
          { x: 26, y: 30, kind: 'INTERACTION', body: 'Steps stay clickable — setup is not a funnel.' }]

      },
      {
        id: 'questions',
        number: '04',
        title: 'QUESTIONS',
        image: '/Screens/qubeso/questions.png',
        why: 'Bank on the left, editor on the right. Authors never lose their place.',
        detail: { label: 'EDITOR', parts: ['BANK', 'CANVAS', 'OPTION', 'SCORING'] }
      },
      {
        id: 'students',
        number: '05',
        title: 'STUDENTS',
        image: '/Screens/qubeso/students.png',
        why: 'Dense table, no cards. This screen is scanned, not admired.',
        detail: { label: 'DATA TABLE', parts: ['ROW', 'FILTER', 'BULK ACTION', 'PAGINATION'] }
      },
      {
        id: 'results',
        number: '06',
        title: 'RESULTS',
        image: '/Screens/qubeso/results.png',
        why: 'Distribution before individuals, because grading decisions are made on shape.',
        detail: { label: 'ANALYTICS', parts: ['HISTOGRAM', 'SEGMENT', 'EXPORT'] }
      },
      {
        id: 'settings',
        number: '07',
        title: 'SETTINGS',
        image: '/Screens/qubeso/settings.png',
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
        image: '/Screens/optical/home.png',
        why: 'Editorial opening. The frame is the hero, the type stays out of its way.',
        detail: { label: 'HERO', parts: ['TYPE', 'PRODUCT', 'NAV'] }
      },
      {
        id: 'catalog',
        number: '02',
        title: 'CATALOG',
        image: '/Screens/optical/catalog.png',
        why: 'Face shape is the filter people actually think in.',
        detail: { label: 'CATALOG', parts: ['FILTER', 'TILE', 'SORT'] },
        notes: [
          { x: 20, y: 40, kind: 'UX DECISION', body: 'Filters mirror how people describe their face.' }]

      },
      {
        id: 'product',
        number: '03',
        title: 'PRODUCT',
        image: '/Screens/optical/product.png',
        why: 'Measurements sit beside the buy action — returns start with the wrong width.',
        detail: { label: 'PRODUCT', parts: ['GALLERY', 'SPEC', 'PRICE', 'CTA'] }
      },
      {
        id: 'tryon',
        number: '04',
        title: 'TRY ON',
        image: '/Screens/optical/tryon.png',
        why: 'Camera view stays full-bleed; controls float instead of framing it.',
        detail: { label: 'TRY ON', parts: ['VIEWPORT', 'CAROUSEL', 'CAPTURE'] }
      },
      {
        id: 'cart',
        number: '05',
        title: 'CART',
        image: '/Screens/optical/cart.png',
        why: 'Lens choices are editable in the cart, where the price question appears.',
        detail: { label: 'CART', parts: ['LINE ITEM', 'LENS', 'TOTAL'] }
      },
      {
        id: 'checkout',
        number: '06',
        title: 'CHECKOUT',
        image: '/Screens/optical/checkout.png',
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
        image: '/Screens/meridian/overview.png',
        why: 'Safe-to-spend, not balance. It is the number that changes behaviour.',
        detail: { label: 'OVERVIEW', parts: ['HEADLINE FIGURE', 'TREND', 'ACCOUNT ROW'] },
        notes: [
          { x: 50, y: 28, kind: 'UX DECISION', body: 'Safe-to-spend replaces raw balance as the hero.' }]

      },
      {
        id: 'accounts',
        number: '02',
        title: 'ACCOUNTS',
        image: '/Screens/meridian/accounts.png',
        why: 'Accounts stack like physical cards so switching feels like handling them.',
        detail: { label: 'ACCOUNT STACK', parts: ['CARD', 'STACK', 'BALANCE'] }
      },
      {
        id: 'transfer',
        number: '03',
        title: 'TRANSFER',
        image: '/Screens/meridian/transfer.png',
        why: 'Amount is typed on a keypad, not a text field. Muscle memory wins.',
        detail: { label: 'TRANSFER', parts: ['AMOUNT', 'KEYPAD', 'RECIPIENT'] },
        notes: [
          { x: 50, y: 68, kind: 'INTERACTION', body: 'Keypad is fixed; the amount scales to fit.' }]

      },
      {
        id: 'card',
        number: '04',
        title: 'CARD',
        image: '/Screens/meridian/card.png',
        why: 'Freeze is one tap from the card itself, where panic looks for it.',
        detail: { label: 'CARD CONTROLS', parts: ['CARD ART', 'FREEZE', 'LIMITS'] }
      },
      {
        id: 'insights',
        number: '05',
        title: 'INSIGHTS',
        image: '/Screens/meridian/insights.png',
        why: 'Categories are ranked by change, not by size. Change is the story.',
        detail: { label: 'INSIGHTS', parts: ['BAR CHART', 'CATEGORY', 'DELTA'] }
      },
      {
        id: 'confirm',
        number: '06',
        title: 'CONFIRM',
        image: '/Screens/meridian/confirm.png',
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
        image: '/Screens/atlas/tokens.png',
        why: 'Token, value and live preview on one line. No round trip to check a colour.',
        detail: { label: 'TOKEN TABLE', parts: ['SWATCH', 'ALIAS', 'VALUE', 'USAGE'] },
        notes: [
          { x: 72, y: 40, kind: 'INTERACTION', body: 'Edits repaint the preview panel instantly.' }]

      },
      {
        id: 'components',
        number: '02',
        title: 'COMPONENTS',
        image: '/Screens/atlas/components.png',
        why: 'Variants are laid out as a matrix — coverage gaps become visible.',
        detail: { label: 'VARIANT MATRIX', parts: ['AXIS', 'CELL', 'STATE'] }
      },
      {
        id: 'typography',
        number: '03',
        title: 'TYPOGRAPHY',
        image: '/Screens/atlas/typography.png',
        why: 'The scale is shown at true size. Ratios are meaningless in the abstract.',
        detail: { label: 'TYPE SCALE', parts: ['STEP', 'METRIC', 'SPECIMEN'] }
      },
      {
        id: 'motion',
        number: '04',
        title: 'MOTION',
        image: '/Screens/atlas/motion.png',
        why: 'Curves are editable and replayable, so duration is felt before it ships.',
        detail: { label: 'MOTION EDITOR', parts: ['CURVE', 'DURATION', 'REPLAY'] }
      },
      {
        id: 'export',
        number: '05',
        title: 'EXPORT',
        image: '/Screens/atlas/export.png',
        why: 'Diff before publish. Nobody should ship a token change blind.',
        detail: { label: 'EXPORT', parts: ['TARGET', 'DIFF', 'PUBLISH'] }
      }]

  },
];


export const totals = {
  projects: projects.length,
  screens: projects.reduce((n, p) => n + p.screens.length, 0),
  products: 9
};

export function projectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}