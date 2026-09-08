const fs = require('fs');

const projectsPath = 'src/data/projects.ts';
let content = fs.readFileSync(projectsPath, 'utf8');

const empellaProject = `
  {
    id: 99,
    slug: 'empella',
    name: 'EMPELLA',
    type: 'web',
    domain: 'empella.com',
    category: 'WEB APPLICATION',
    role: 'PRODUCT DESIGN',
    year: '2026',
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
  },`;

content = content.replace('export const projects: Project[] = [', 'export const projects: Project[] = [\n' + empellaProject);

// Also update totals
// Number of projects + 1
content = content.replace('projects: 7,', 'projects: 8,');
// Number of screens + 13
let screensMatch = content.match(/screens: (\d+),/);
if (screensMatch) {
  let screens = parseInt(screensMatch[1]) + 13;
  content = content.replace(screensMatch[0], `screens: ${screens},`);
}

fs.writeFileSync(projectsPath, content);
console.log('Successfully updated projects.ts');
