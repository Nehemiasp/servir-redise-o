# Imágenes

Hay dos imágenes del propio partido (gráficas de campaña) y un marcador pendiente.

**Nota sobre las dos gráficas:** son piezas de campaña que el coordinador entregó (las mismas que usa el sitio actual). Llevan texto y logo dentro de la imagen y parecen generadas con IA, no son fotografías documentales. Se usan como material del partido, con `alt` que describe su contenido y el texto que traen. Si el partido consigue fotos reales, conviene reemplazarlas; el texto de la sección ya está escrito aparte, así que no se pierde nada.

Ninguna *foto* real está cargada todavía. No se pudo descargar fotografía de stock desde el entorno de trabajo (Unsplash y Pexels no son accesibles), así que cada espacio lleva un **marcador diseñado**: bloque con la proporción final y la descripción de la foto que debe ir. Además, las tres fotos son de personas o de la gente del partido, y el estándar prohíbe presentar stock como real en esos casos.

**Cómo reemplazar un marcador o una imagen:** copia la foto a `public/img/` con el nombre de la columna «Archivo» (`.webp`, `.avif`, `.jpg` o `.png`) y reconstruye. Si existe además `nombre-600.webp`, se usa como versión liviana para pantallas chicas. No hay que tocar código: el componente `src/components/Foto.astro` detecta el archivo. Usa la proporción indicada.

| Archivo | Dónde se usa | Tipo | Fuente | Reemplazar por |
|---|---|---|---|---|
| `secretario` | Inicio, mensaje del Secretario General | Placeholder | n/a | Foto de Carlos Pineda, vertical 4:5 |
| `gente-1.webp` (+ `gente-1-600.webp`) | Inicio, «Nuestra gente» | Material del partido (gráfica de campaña, agricultor sembrando maíz) | Entregada por el coordinador | Foto real de un agricultor, 1:1 |
| `gente-2.webp` (+ `gente-2-600.webp`) | Inicio, «Nuestra gente» | Material del partido (gráfica de campaña, familias de distintas edades) | Entregada por el coordinador | Foto real de familias, 1:1 |
| `brand/sello.svg` | Encabezado, hero, pie, favicon, Open Graph | Logo del partido (traza vectorial del PNG recibido) | `brand/servir-sello-original.png` | Logo vectorial oficial |

Sugerencia fuera de alcance: una foto horizontal 16:9 del tractor en una comunidad podría sustituir al sello en el hero.
