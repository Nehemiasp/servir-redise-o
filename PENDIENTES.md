# Pendientes

Lo que el sitio no puede resolver solo. En el sitio aparecen como marcador `[…]` con borde punteado solo donde la persona lo vería (foto, teléfono, PDF, aviso de privacidad).

## Contenido que el partido debe entregar

- [ ] Logo en vector (SVG, AI o PDF) o PNG con fondo transparente. Hoy se usa una traza del PNG.
- [ ] Foto del Secretario General.
- [ ] Fotos de «Nuestra gente» y del tractor en las comunidades. Con ellas se puede reemplazar el sello del hero por una foto real.
- [ ] Enlaces de los videos de Nahualá, Jutiapa y Baja Verapaz (solo se tiene el de Izabal). Confirmar que «Nahualá» es el municipio (el sitio actual dice «Nahula»).
- [ ] PDF del informe financiero del 1er trimestre 2026 y su peso.
- [ ] Teléfono, WhatsApp, redes sociales. Confirmar la dirección completa (el sitio actual empieza con «Edificio,» sin nombre).
- [ ] Aviso de privacidad para el formulario de propuestas.
- [ ] Textos de «Nuestra gente» confirmados y, si existen, las dos gráficas de campaña que tenía el sitio.

## Decisiones técnicas

- [ ] Elegir el servicio del formulario (Formspree, Web3Forms u otro) y poner su URL en `PUBLIC_FORM_ENDPOINT`. **Hasta entonces el formulario muestra el mensaje de error, no un falso éxito.** Probarlo de punta a punta con el destino real.
- [ ] Dominio y hosting. Con `SITE_URL` se fijan canonical, sitemap y Open Graph.
- [ ] Solo cuando el partido apruebe y publique: `PUBLIC_INDEXABLE=true` y quitar el aviso de «propuesta no oficial» del pie de página (`src/components/Footer.astro`).

## Revisión del partido

- [ ] Confirmar con su equipo legal que el contenido (promesas con montos, etapas de proselitismo y campaña) cumple lo que exige el TSE. Esta propuesta no hace esa revisión.
- [ ] Revisar el público: la ficha parte del supuesto de ciudadanía con peso rural y personas mayores.
