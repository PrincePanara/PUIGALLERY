import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import projects data safely by extracting it from the compiled/source file.
// Since it's a TS file, we'll read it as string and parse basic JSON or use regex.
// Wait, compiling the TS file is tricky in a raw Node script, we can read the raw TS using a regex to extract slugs and titles.
const projectsContent = fs.readFileSync(path.join(__dirname, '../src/data/projects.ts'), 'utf-8');

const projects = [];
const slugRegex = /slug:\s*'([^']+)'/g;
let match;
const slugs = [];
while ((match = slugRegex.exec(projectsContent)) !== null) {
  slugs.push(match[1]);
}

for (const slug of slugs) {
  const blockRegex = new RegExp(`slug:\\s*'${slug}'[\\s\\S]*?seoTitle:\\s*'([^']+)'[\\s\\S]*?seoDescription:\\s*'([^']+)'`, 'm');
  const bMatch = blockRegex.exec(projectsContent);
  if (bMatch) {
    projects.push({
      slug,
      seoTitle: bMatch[1],
      seoDescription: bMatch[2]
    });
  } else {
    projects.push({
      slug,
      seoTitle: `Prince Panara — UI/UX & Product Designer`,
      seoDescription: `Project by Prince Panara`
    });
  }
}

const siteUrl = 'https://princepanara.com';
const distDir = path.join(__dirname, '../dist');

// 1. Generate Sitemap
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <priority>1.0</priority>
    <changefreq>weekly</changefreq>
  </url>
  <url>
    <loc>${siteUrl}/about</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${siteUrl}/work</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${siteUrl}/contact</loc>
    <priority>0.7</priority>
  </url>
  ${projects.map(p => `
  <url>
    <loc>${siteUrl}/projects/${p.slug}</loc>
    <priority>0.8</priority>
    <changefreq>monthly</changefreq>
  </url>`).join('')}
</urlset>`;

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap.trim());
console.log('Generated sitemap.xml');

// 2. Generate robots.txt
const robots = `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /private/

Sitemap: ${siteUrl}/sitemap.xml`;

fs.writeFileSync(path.join(distDir, 'robots.txt'), robots);
console.log('Generated robots.txt');

// 3. Generate Static HTML Shells for SPAs OpenGraph
// This reads the base index.html built by Vite, and injects specific meta tags.
const baseHtmlPath = path.join(distDir, 'index.html');
if (fs.existsSync(baseHtmlPath)) {
  const baseHtml = fs.readFileSync(baseHtmlPath, 'utf-8');

  // Ensure projects dir exists
  const projectsDir = path.join(distDir, 'projects');
  if (!fs.existsSync(projectsDir)) fs.mkdirSync(projectsDir);

  for (const p of projects) {
    const pDir = path.join(projectsDir, p.slug);
    if (!fs.existsSync(pDir)) fs.mkdirSync(pDir);

    const ogImage = `${siteUrl}/og/${p.slug}.jpg`;
    const metaTags = `
    <title>${p.seoTitle}</title>
    <meta name="description" content="${p.seoDescription}" />
    <link rel="canonical" href="${siteUrl}/projects/${p.slug}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${siteUrl}/projects/${p.slug}" />
    <meta property="og:title" content="${p.seoTitle}" />
    <meta property="og:description" content="${p.seoDescription}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:site_name" content="Prince Panara" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${siteUrl}/projects/${p.slug}" />
    <meta name="twitter:title" content="${p.seoTitle}" />
    <meta name="twitter:description" content="${p.seoDescription}" />
    <meta name="twitter:image" content="${ogImage}" />
    `;

    // Inject before </head>
    const newHtml = baseHtml.replace('</head>', `${metaTags}</head>`);
    fs.writeFileSync(path.join(pDir, 'index.html'), newHtml);
  }
  console.log('Generated static HTML shells for OpenGraph.');
} else {
  console.log('dist/index.html not found, skipping HTML shell generation.');
}
