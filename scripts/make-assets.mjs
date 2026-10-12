// Genera favicon, ícono de iPhone e imagen Open Graph (1200 × 630) a partir del sello vectorial.
// Uso: npm run assets   (necesita Chromium; ver CHROMIUM_PATH)
import { chromium } from 'playwright-core';
import { readFileSync, writeFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const raiz = resolve(import.meta.dirname, '..');
const pub = (p) => join(raiz, 'public', p);
const sello = readFileSync(pub('brand/sello.svg'), 'utf8');
const fuenteTitulo = `file://${pub('fonts/archivo-800.woff2')}`;
const fuenteCuerpo = `file://${pub('fonts/atkinson-700.woff2')}`;
const selloUri = `data:image/svg+xml;base64,${Buffer.from(sello).toString('base64')}`;

const navegador = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  args: ['--no-sandbox'],
});
const dir = mkdtempSync(join(tmpdir(), 'servir-'));

async function captura(html, ancho, alto, salida, transparente = false) {
  const archivo = join(dir, 'p.html');
  writeFileSync(archivo, html);
  const p = await navegador.newPage({ viewport: { width: ancho, height: alto } });
  await p.goto(`file://${archivo}`);
  await p.evaluate(() => document.fonts.ready);
  await p.screenshot({ path: salida, omitBackground: transparente });
  await p.close();
}

const solo = (px, fondo) => `<!doctype html><body style="margin:0;background:${fondo};display:grid;place-items:center;width:${px}px;height:${px}px"><img src="${selloUri}" width="${px}" height="${px}"></body>`;
await captura(solo(32, 'transparent'), 32, 32, pub('favicon-32.png'), true);
await captura(solo(180, '#ffffff'), 180, 180, pub('apple-touch-icon.png'));

const og = `<!doctype html><meta charset="utf-8"><style>
@font-face{font-family:A;src:url(${fuenteTitulo})}
@font-face{font-family:B;src:url(${fuenteCuerpo})}
body{margin:0;width:1200px;height:630px;background:#00ccff;color:#051223;overflow:hidden;position:relative}
.t{position:absolute;left:72px;top:96px;width:700px}
.k{font:700 32px B;margin:0 0 20px}
h1{font:800 112px/0.95 A;margin:0;text-transform:uppercase;letter-spacing:-1px}
.y{font:800 48px/1.1 A;margin:28px 0 0}
img{position:absolute;right:-150px;bottom:-120px;width:600px}
</style><div class="t"><p class="k">Partido político por el campo y la gente</p><h1>Servir es<br>Guate.</h1><p class="y">Y Guate es SERVIR.</p></div><img src="${selloUri}">`;
await captura(og, 1200, 630, pub('og.png'));
await navegador.close();
console.log('listo: favicon-32.png, apple-touch-icon.png, og.png');
