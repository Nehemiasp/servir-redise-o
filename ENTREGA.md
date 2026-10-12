## Entrega (versión 2)

**Actualización:** se agregaron las dos gráficas de campaña que entregó el coordinador a «Nuestra gente», en dos columnas con el texto de la sección arriba. Los marcadores de esa sección desaparecen; queda solo el del Secretario General. Las gráficas llevan texto y logo dentro de la imagen y parecen generadas con IA; se usan como material del partido (ver `IMAGENES.md`).

Segunda entrega, tras la revisión del coordinador: tipografía más sobria, nueva distribución de «¿Qué es SERVIR?», y el sitio ajustado al estándar v2 (marcadores de imagen diseñados, `IMAGENES.md`, ficha con supuestos).

- **Qué se hizo:**
  - Tipografía: Montserrat en todo el sitio, 3 pesos (400, 600, 800). Titulares más pequeños y sobrios (máximo 65 px).
  - «¿Qué es SERVIR?» rehecha: dos columnas equilibradas con texto normal; misión y visión en dos paneles; franja cian aparte para «Menos… / Más…».
  - Hero: el sello del logo se muestra completo a la derecha (ya no cortado por el borde).
  - Imágenes: un marcador diseñado (Secretario General) con su proporción final y la descripción de la foto, y las dos gráficas de campaña en «Nuestra gente». Se reemplazan copiando un archivo a `public/img/`, sin tocar código.
  - Documentos: `CLAUDE.md` ahora trae el estándar v2 y la ficha; `IMAGENES.md` nuevo; `PLAN-VISUAL.md` y `PENDIENTES.md` actualizados.
- **Qué no se tocó:** el contenido de los 13 programas, Agenda, Transparencia, formulario, rutas y datos. No se publicó nada.
- **Decisiones tomadas y por qué:**
  1. Montserrat porque el coordinador la pidió (gana sobre el estándar) y se parece a la palabra SERVIR del logo.
  2. Una sola familia en vez de dos: con 3 pesos alcanza y se ve más sobrio.
  3. Marcadores en lugar de stock: Unsplash y Pexels no son accesibles desde el entorno, y las 3 fotos son de personas del partido, que no deben ser stock.
  4. La franja «Menos… / Más…» sale de «¿Qué es SERVIR?» para que esa sección respire; el contenido no cambió.
  5. Los títulos de página de las 4 páginas siguen en tipo oración.
- **Supuestos que el cliente debe confirmar:**
  - Público: ciudadanía con peso rural y personas mayores.
  - Agrupación de los 13 programas por a quién ayudan (6 grupos).
  - «Nahualá» es el municipio (el sitio original dice «Nahula»).
  - La dirección sin la palabra «Edificio,» (el original no traía el nombre del edificio).
  - Se quitaron las cifras «33K+ afiliados», «23 distritos», «100% compromiso» y la analítica del sitio original.
  - El sitio lleva `noindex` y un aviso de «propuesta no oficial» en el pie.
- **Textos propuestos que el cliente debe validar:** subtítulo del hero («Trece programas para…»), introducción de Programas, «Recorrido del tractor» y «El tractor llegó a…», textos de «Tu propuesta» (los tres pasos y la cita son del partido; etiquetas, ayudas, errores y confirmación son míos), estados vacíos de Agenda y Transparencia, títulos y descripciones SEO, y el aviso del pie.
- **Imágenes de stock y placeholders por reemplazar:** ver `IMAGENES.md` (1 placeholder, 2 gráficas del partido, 0 stock).
- **Marcadores de datos pendientes:** `[Teléfono]`, `[PDF del informe]`, `[Aviso de privacidad del partido]`. WhatsApp y redes no se muestran hasta que haya datos. Detalle en `PENDIENTES.md`.
- **Checklist: casillas sin cumplir y por qué:**
  - Imágenes: «ningún hueco vacío» se cumple con marcadores diseñados, pero no hay fotos reales ni stock (sin acceso a los sitios de stock).
  - Rendimiento: LCP, CLS y peso medidos en Chromium local con 4G lenta y CPU lenta simuladas, no con PageSpeed en un hosting real; INP no medido.
  - El formulario no se probó con un destino real (no existe todavía). Sin destino muestra un error, nunca un falso éxito.
  - El video de TikTok dentro del diálogo no se probó (sin salida a TikTok desde el entorno).
- **Cómo probarlo:** `npm install && npm run build && npm run preview` y abrir http://localhost:4321. Resultado de las comprobaciones: sin desborde horizontal a 360, 768, 1024 y 1440 px; auditoría axe (WCAG 2.1 AA y buenas prácticas) sin violaciones en las 5 páginas; consola limpia; un solo `h1` por página; 23 pruebas de interacción pasadas; títulos de 50 a 59 caracteres y descripciones de 142 a 148.
- **Sugerencias fuera de alcance (no construidas):**
  - Una foto 16:9 del tractor en una comunidad como protagonista del hero.
  - Una foto por cada parada del recorrido.
  - Una versión del sitio en idiomas mayas, si el partido quiere llegar a más comunidades.
