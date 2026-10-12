# Imágenes

Ninguna foto es real todavía. No se pudo descargar fotografía de stock desde el entorno de trabajo (Unsplash y Pexels no son accesibles), así que cada espacio lleva un **marcador diseñado**: bloque con la proporción final y la descripción de la foto que debe ir. Además, las tres fotos son de personas o de la gente del partido, y el estándar prohíbe presentar stock como real en esos casos.

**Cómo reemplazar un marcador:** copia la foto a `public/img/` con el nombre de la columna «Archivo» (`.webp`, `.avif`, `.jpg` o `.png`) y reconstruye. No hay que tocar código: el componente `src/components/Foto.astro` detecta el archivo. Usa la proporción indicada.

| Archivo | Dónde se usa | Tipo | Fuente | Reemplazar por |
|---|---|---|---|---|
| `secretario` | Inicio, mensaje del Secretario General | Placeholder | n/a | Foto de Carlos Pineda, vertical 4:5 |
| `gente-1` | Inicio, «Nuestra gente» | Placeholder | n/a | Foto real de una familia productora en su parcela, vertical 4:5 |
| `gente-2` | Inicio, «Nuestra gente» | Placeholder | n/a | Foto real de un agricultor en su cultivo, vertical 4:5 |
| `brand/sello.svg` | Encabezado, hero, pie, favicon, Open Graph | Logo del partido (traza vectorial del PNG recibido) | `brand/servir-sello-original.png` | Logo vectorial oficial |

Sugerencia fuera de alcance: una foto horizontal 16:9 del tractor en una comunidad podría sustituir al sello en el hero.
