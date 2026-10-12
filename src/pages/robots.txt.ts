import type { APIRoute } from 'astro';
import { SITE } from '../config';

export const GET: APIRoute = ({ site }) => {
  const base = site!.href.replace(/\/$/, '');
  // Mientras sea una propuesta no oficial, se pide a los buscadores que no la indexen.
  const cuerpo = SITE.indexable
    ? `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`
    : `User-agent: *\nDisallow: /\n`;
  return new Response(cuerpo, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
