# SERVIR: propuesta de rediseño

Propuesta de rediseño de partidoservir.com. **No es el sitio oficial** y no está publicada: mientras `PUBLIC_INDEXABLE` no sea `true`, el sitio lleva `noindex` y `robots.txt` bloquea a los buscadores.

Astro estático, sin framework en el navegador. Reglas de diseño: `CLAUDE.md` (estándar + ficha). Decisiones visuales: `PLAN-VISUAL.md`. Reporte de la entrega: `ENTREGA.md`. Lo que falta: `PENDIENTES.md`.

```bash
npm install
npm run dev       # desarrollo en http://localhost:4321
npm run build     # genera dist/
npm run preview   # sirve dist/
npm run assets    # regenera favicon, ícono de iPhone e imagen Open Graph (necesita Chromium)
```

## Dónde se edita cada cosa

| Qué | Dónde |
|---|---|
| Colores, tipografía, espaciado, radios | `src/styles/tokens.css` (única fuente) |
| Estilos de componentes y páginas | `src/styles/global.css` |
| Los 13 programas (grupos, condiciones, beneficios) | `src/data/programas.ts` |
| Paradas del recorrido del tractor y sus videos | `src/data/ruta.ts` (`video` = id del video de TikTok) |
| Eventos de la agenda | `src/data/agenda.ts` |
| Informes de transparencia y sus PDF | `src/data/transparencia.ts` (poner el PDF en `public/informes/` y su ruta en `pdf`) |
| Correo, teléfono, WhatsApp, redes, dirección | `src/config.ts` (`null` = pendiente; no se muestra como dato) |
| Destino del formulario «Tu propuesta» | `PUBLIC_FORM_ENDPOINT` (ver `.env.example`) |

La Agenda separa «próximos» y «pasados» al construir el sitio: para que un evento pase de una lista a otra hay que volver a construir.

## Logo

`public/brand/sello.svg` es una **traza vectorial** del PNG de 500 × 500 que se recibió (`brand/servir-sello-original.png`). Se genera con `python3 scripts/trace-seal.py` (necesita `pillow`, `numpy` y `potracer`). Hay que reemplazarla por el logo vectorial oficial en cuanto el partido lo entregue.

## Fuentes

Archivo 800 (ancho 112) y Atkinson Hyperlegible Next 400 y 700, en `public/fonts/` como instancias estáticas del subconjunto latino (39 KB en total). Ambas con licencia SIL OFL.
