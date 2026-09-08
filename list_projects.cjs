const fs = require('fs');
const content = fs.readFileSync('src/data/projects.ts', 'utf8');

// Match project slugs and ids
const matches = [...content.matchAll(/id:\s*(\d+),\s*slug:\s*'([^']+)'/g)];
console.log('Projects found:');
matches.forEach(m => console.log(`ID: ${m[1]}, Slug: ${m[2]}`));
