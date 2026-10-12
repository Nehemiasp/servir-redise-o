## Entrega

- **Qué se hizo:** sitio estático de 5 páginas (Inicio, Agenda, Tu propuesta, Transparencia y 404) con la identidad del logo (cian `#00CCFF` y tinta `#051223`), los 13 programas con sus condiciones y beneficios, formulario de propuestas con validación, pestañas de transparencia, video bajo demanda, SEO (título, descripción, Open Graph, favicon, sitemap, robots) e imagen Open Graph.
- **Qué no se tocó:** nada fuera del alcance. No se publicó ni se conectó a ningún dominio. El portal de afiliación sigue siendo el externo `autoafiliacion.servirgt.org`. No se añadió blog, modo oscuro, chat, donaciones ni analítica.
- **Decisiones tomadas sin confirmación (y por qué):**
  1. Los programas se agrupan por a quién ayudan (6 grupos) y se quita la numeración 01 a 13, porque no son una secuencia. Los textos no se cambiaron. El programa 9 conserva su rótulo «A nivel institucional» en lugar de «Condiciones».
  2. Se quitan «33K+ afiliados», «23 distritos» y «100% compromiso» (decidido por el usuario).
  3. El carrusel automático del hero se reemplaza por contenido estático; el mensaje del Secretario General pasa a ser su propia sección.
  4. La ruta del tractor reúne las 4 paradas de los videos del sitio actual. Se corrigió «tracktor» por «tractor» y «Nahula» por «Nahualá» (por confirmar).
  5. El logo se usa como traza vectorial del PNG recibido, porque no hay vector. El formulario incluye «Vivo fuera de Guatemala» entre los departamentos (hay un programa para migrantes).
  6. «Valores» (Honestidad y transparencia, Cercanía con la gente, Resultados, no promesas) quedan como lista breve en «¿Qué es SERVIR?» y no como franja aparte.
  7. Se quitó la analítica del sitio original. El botón flotante de WhatsApp no se incluye hasta que haya un número real.
  8. El sitio lleva `noindex`, `robots.txt` que bloquea buscadores y un aviso de «propuesta no oficial» en el pie, porque no es del partido.
  9. El título del informe pasa a «Informe financiero, 1er trimestre 2026» (tipo oración) y la Agenda lleva el título «Agenda de SERVIR», porque la página original solo tenía «Próximos eventos».
  10. La página «Tu propuesta» se redactó desde cero con los textos del partido en la página de inicio y sus tres pasos.
- **Marcadores pendientes de contenido real:** ver `PENDIENTES.md`.
- **Cómo probarlo:** `npm install && npm run build && npm run preview` y abrir http://localhost:4321. Comprobaciones hechas: sin desborde horizontal a 360, 768, 1024 y 1440 px; auditoría axe (WCAG 2.1 AA y buenas prácticas) sin violaciones en las 5 páginas; consola limpia; un solo `h1` por página; 23 pruebas de interacción (menú, programas, video, pestañas con teclado, formulario con validación y envío simulado). En móvil con 4G lenta y CPU a 1/4 de velocidad: LCP de 0.6 a 0.7 s, CLS entre 0 y 0.07, unos 50 KB transferidos por página. Se midió con Chromium local, no con PageSpeed.
- **Lo que NO está verificado:** el formulario con un destino real (no existe todavía); Lighthouse/PageSpeed en un hosting real; el video de TikTok dentro del diálogo (el entorno de pruebas no tiene salida a TikTok); lectura con un lector de pantalla.
- **Siguiente paso sugerido:** conseguir el logo vectorial y 2 o 3 fotos reales. Con una foto del tractor en una comunidad, el hero gana mucho.
