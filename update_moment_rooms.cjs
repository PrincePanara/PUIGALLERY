const fs = require('fs');

const projectsPath = 'src/data/projects.ts';
let content = fs.readFileSync(projectsPath, 'utf8');

const newProject = `
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
  },`;

content = content.replace('export const projects: Project[] = [', 'export const projects: Project[] = [\n' + newProject);

// Also update totals
// Number of projects + 1
content = content.replace('projects: 8,', 'projects: 9,');
// Number of screens + 7
let screensMatch = content.match(/screens: (\d+),/);
if (screensMatch) {
  let screens = parseInt(screensMatch[1]) + 7;
  content = content.replace(screensMatch[0], `screens: ${screens},`);
}

fs.writeFileSync(projectsPath, content);
console.log('Successfully updated projects.ts');
