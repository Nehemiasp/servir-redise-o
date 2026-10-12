import type { APIRoute } from 'astro';

const rutas = ['/', '/agenda', '/propuesta', '/transparencia'];

export const GET: APIRoute = ({ site }) => {
  const base = site!.href.replace(/\/$/, '');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${rutas
    .map((r) => `  <url><loc>${base}${r === '/' ? '/' : r}</loc></url>`)
    .join('\n')}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
