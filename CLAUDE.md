# Estándar Lumacode para diseño y desarrollo web

Versión 1.0, octubre de 2026.

Este documento define el nivel de calidad de todo sitio, landing page o interfaz que sale de Lumacode. No es una plantilla visual: cada proyecto debe tener su propia identidad. Lo que se repite entre proyectos es el criterio, el proceso y el nivel de terminación, no el aspecto.

Úsalo así:

- Colócalo en la raíz de cada proyecto como `CLAUDE.md`, `AGENTS.md` o `.cursorrules`, o pégalo al inicio de la conversación con cualquier herramienta de IA (Claude, v0, Lovable, Cursor).
- Llena la **Ficha del proyecto** (sección 2) antes de pedir el primer diseño.
- Si trabajas con una persona, entrégale este archivo junto con el brief.

---

## 0. Orden de prioridad

Cuando dos instrucciones choquen, gana la de arriba:

1. Lo que el cliente pidió explícitamente en el brief o en la conversación.
2. La identidad de marca del cliente (logo, colores, tipografía, manual).
3. La Ficha del proyecto.
4. Este estándar.
5. Las preferencias o costumbres de quien diseña o de la herramienta de IA.

La identidad visual de Lumacode (cuadrados, círculo bermellón, Schibsted Grotesk) **no se usa en proyectos de clientes**. Es la marca del estudio, no un estilo de la casa.

---

## 1. Reglas de alcance: hacer lo que se pidió

Estas reglas existen porque el error más caro no es un diseño feo, sino uno que no responde a lo que el cliente necesita.

- **Haz exactamente lo solicitado.** Si se pidió una landing de una página, no entregues un sitio de cinco. Si se pidió cambiar el formulario, no rediseñes el hero.
- **No agregues secciones, funciones ni páginas que nadie pidió.** Nada de blog, newsletter, modo oscuro, chat, carrito, testimonios o "preguntas frecuentes" por costumbre. Si crees que algo falta, propónlo aparte; no lo construyas.
- **No inventes datos.** Prohibido crear testimonios, nombres de clientes, logos de empresas, cifras ("+500 clientes felices"), premios, certificaciones, precios o reseñas. Si el contenido real no existe, usa un marcador claro: `[Testimonio real del cliente]`.
- **No cambies lo que ya funciona** fuera del alcance de la tarea: nombres de rutas, textos aprobados, colores de marca, estructura de datos.
- **Si falta información que cambia el resultado, pregunta antes de construir.** Si la falta de información no bloquea, toma la decisión más razonable y anótala en el reporte de entrega (sección 14).
- **Una tarea, un cambio.** Cada entrega dice qué se cambió y qué no se tocó.

---

## 2. Ficha del proyecto

Se llena antes de diseñar. Sin ficha no hay diseño: sin ella, cualquier resultado será genérico.

```markdown
## Ficha del proyecto

- Cliente / marca:
- Qué hace, en una frase:
- Para quién (público principal y lo que busca):
- Trabajo principal de la página (una sola acción: llamar, cotizar, comprar, agendar, registrarse…):
- Páginas o pantallas incluidas:
- Fuera de alcance:
- Contenido disponible (textos, fotos, logo, videos):
- Identidad existente (colores, tipografías, manual):
- Referencias que le gustan al cliente y por qué:
- Lo que el cliente no quiere:
- Tono de voz (tú / usted, formal / cercano):
- Idioma(s):
- Restricciones técnicas (stack, hosting, CMS, integraciones):
- Fecha de entrega:
```

---

## 3. Identidad propia en cada proyecto

Cada proyecto debe poder reconocerse sin ver el logo. La identidad sale del mundo del cliente: su oficio, sus materiales, su público, su vocabulario. Una clínica dental, una constructora y una cafetería no pueden terminar con la misma página y distinto color.

### 3.1 Plan visual antes del código

Antes de escribir código, define un plan corto:

- **Color:** 4 a 6 colores con nombre y hex, y el papel de cada uno (fondo, texto, acento, superficie, línea, estado).
- **Tipografía:** una o dos familias, con su papel. Si son dos, que se distingan claramente.
- **Layout:** la idea de composición en una frase y un esquema ASCII del hero y de una sección tipo. Define la alineación (izquierda, centrada, asimétrica) y por qué.
- **El elemento memorable:** una sola cosa que hará que esta página se recuerde (una tipografía protagonista, una fotografía, una interacción, una forma de presentar el producto). Todo lo demás se mantiene sobrio.
- **Principios:** dos o tres frases sobre qué hace única a esta página.

### 3.2 Prueba de lo genérico

Revisa el plan con esta pregunta: *¿llegaría a este mismo diseño si el cliente fuera de otro rubro?* Si la respuesta es sí en cualquier punto (color, tipografía, hero, estructura), ese punto es un valor por defecto y no una decisión. Cámbialo y anota por qué.

### 3.3 El hero

El hero muestra lo más característico del cliente en la forma que mejor le sirve: el producto real, una foto propia, una demostración, un titular fuerte o una interacción. "Número grande + etiqueta + degradado" o "titular + subtítulo + dos botones + ilustración 3D" solo se usan si de verdad son la mejor opción para este cliente.

---

## 4. Señales de "hecho con IA" que se evitan

Son legítimas solo si el brief las pide. Si el brief deja libre la decisión, no se gasta en ninguna de estas.

**Visuales**

- Fondo crema cálido (cerca de `#F4F1EA`) con serif de alto contraste y acento terracota (cerca de `#D97757`).
- Fondo casi negro con un único acento verde ácido, bermellón o violeta neón.
- Degradado violeta a azul, manchas de color difuminadas ("blobs") y glassmorphism como decoración.
- Todo dividido en tarjetas idénticas con el mismo radio, la misma sombra gris suave y el mismo ícono arriba.
- Fila de tres tarjetas "característica + ícono + texto corto" como solución automática para cualquier contenido.
- Ilustraciones 3D genéricas, personas de stock sonriendo frente a una laptop, íconos con brillos (✨).
- Inter, Poppins o Montserrat elegidas sin motivo, solo porque están a mano.
- Monoespaciada para etiquetas pequeñas sin que el contenido sea técnico.
- Animación de aparecer y subir en cada sección, y efecto hover en cada tarjeta.

**Tipográficas y de estructura**

- Una sola palabra del titular en otro color, cursiva o subrayada.
- Etiqueta pequeña en MAYÚSCULAS espaciadas encima de cada título.
- Numeración 01 / 02 / 03 en contenido que no es una secuencia.
- Cadenas de metadatos unidas con puntos medios ("Diseño · Código · Estrategia") como adorno.
- Flecha "→" pegada al final de cada botón y cada enlace.
- Emojis como íconos o en títulos.

**De texto**

- "Eleva tu marca", "Lleva tu negocio al siguiente nivel", "Desbloquea tu potencial", "Soluciones innovadoras", "Transformamos ideas en realidad", "Tu socio de confianza".
- Titulares que podrían ser de cualquier empresa. Si cambias el nombre del cliente por otro y el texto sigue funcionando, el texto está vacío.
- Tres adjetivos seguidos ("rápido, seguro y escalable").
- Lorem ipsum en una entrega.

---

## 5. Tipografía

- Máximo dos familias. Una sola bien elegida suele bastar.
- Elige por el carácter del cliente, no por costumbre. Verifica la licencia para uso web (Google Fonts, Fontshare o licencia comprada por el cliente).
- Escala tipográfica definida con tokens (por ejemplo, razón 1.2 a 1.333) y respetada en todo el proyecto. Nada de tamaños sueltos.
- Cuerpo de texto entre 16 y 18 px en escritorio, nunca menos de 16 px en móvil.
- Largo de línea entre 45 y 75 caracteres (`max-width: 65ch` como referencia).
- Interlineado: 1.4 a 1.6 en cuerpo; 1.0 a 1.2 en titulares grandes.
- Pesos con intención: no más de tres por proyecto.
- Titulares en tipo oración ("Diseño que vende"), no en Tipo Título ("Diseño Que Vende").
- En español: signos de apertura (¿ ¡), tildes completas, comillas consistentes, sin palabras cortadas por guiones automáticos en titulares.
- Carga: `font-display: swap`, solo los pesos usados, subconjunto latino, `preload` de la fuente principal.

---

## 6. Color

- Paleta de 4 a 6 colores como tokens con nombre (`--color-fondo`, `--color-texto`, `--color-acento`…). Nunca hex sueltos en componentes.
- Contraste mínimo WCAG AA: 4.5:1 para texto normal, 3:1 para texto grande (24 px o más, o 19 px en negrita) y para bordes de campos e íconos funcionales.
- El acento es escaso: alrededor del 10 % de la pantalla. Si todo resalta, nada resalta.
- Colores de estado (error, éxito, aviso) definidos y accesibles, sin depender solo del color: acompáñalos de texto o ícono.
- Respeta los colores de marca del cliente. Si un color de marca no pasa contraste como texto, úsalo en superficies grandes y define una variante accesible para texto.
- Modo oscuro solo si se pidió.

---

## 7. Layout y espaciado

- Escala de espaciado en múltiplos de 4 u 8 px, como tokens.
- Una retícula definida (por ejemplo, 12 columnas en escritorio, 4 en móvil) y ancho máximo de contenido.
- El espacio comunica: más espacio entre secciones que dentro de ellas; elementos relacionados, juntos.
- Radios de borde según jerarquía, no uno para todo. Decide si el proyecto usa esquinas rectas, suaves o redondas, y por qué.
- Sombras solo cuando algo realmente está por encima de otra cosa (menús, modales).
- Probar siempre en 360, 768, 1024 y 1440 px. Sin scroll horizontal en ningún ancho.
- En móvil no se "encoge" el escritorio: se reordena según lo que la persona necesita primero.
- Las líneas, bordes, numeraciones y etiquetas comunican estructura real del contenido; si no informan nada, sobran.

---

## 8. Imágenes e íconos

- Prioridad: fotos reales del cliente > fotografía de stock elegida con cuidado > ilustración a medida. Nunca imágenes generadas por IA salvo que el cliente lo pida y lo apruebe.
- Un solo set de íconos en todo el proyecto, con el mismo grosor de trazo y estilo (por ejemplo, Lucide, Phosphor o Tabler).
- Toda imagen con `alt` descriptivo; las decorativas con `alt=""`.
- Formatos AVIF o WebP, tamaños responsivos (`srcset`/`sizes`), `width` y `height` declarados para evitar saltos de contenido.
- Carga diferida (`loading="lazy"`) en todo lo que no aparece en la primera pantalla; la imagen principal del hero sin lazy y con prioridad alta.
- Logos de clientes o socios solo si el cliente los autorizó.

---

## 9. Movimiento

- Una sola secuencia orquestada por página (por ejemplo, la entrada del hero) pesa más que muchos efectos sueltos.
- La animación que responde a una acción (abrir, expandir, confirmar, enviar) es bienvenida si muestra qué cambió.
- Duraciones de 150 a 300 ms en interfaz; curvas de salida suaves (`ease-out`). Nada que haga esperar a la persona.
- Respeta `prefers-reduced-motion`: sin movimiento no esencial cuando está activo.
- Sin parallax, carruseles automáticos ni cursores personalizados salvo que el brief lo justifique.

---

## 10. Escritura y microcopy

Las palabras son parte del diseño. Cada texto hace un solo trabajo.

- Escribe desde lo que la persona entiende y necesita, no desde cómo funciona el sistema.
- Concreto antes que ingenioso. "Instalamos paneles solares en casas y negocios" gana a "Energía que transforma tu futuro".
- Voz activa y verbos claros. Un botón dice lo que pasa al presionarlo: "Pedir cotización", no "Enviar"; "Agendar visita", no "Más información".
- La misma acción se llama igual en todo el flujo: si el botón dice "Reservar", la confirmación dice "Reserva confirmada".
- Errores: qué pasó y cómo resolverlo, sin disculpas ni vaguedades. "Escribe un correo válido, por ejemplo nombre@empresa.com".
- Estados vacíos: invitan a actuar. "Aún no tienes proyectos. Crea el primero".
- Define al inicio si se trata de tú o de usted, y mantenlo.
- Sin relleno: si una frase se puede quitar sin perder nada, se quita.

| Evitar | Preferir |
|---|---|
| Soluciones innovadoras para tu negocio | Contabilidad mensual para pequeñas empresas |
| Eleva tu experiencia | Reserva tu mesa en menos de un minuto |
| Enviar | Enviar solicitud |
| Ocurrió un error | No pudimos enviar el formulario. Revisa tu conexión e inténtalo de nuevo |
| Haz clic aquí | Descargar el catálogo (PDF, 2 MB) |

---

## 11. Componentes, estados y formularios

Todo elemento interactivo tiene sus estados diseñados, no solo el estado normal:

- Normal, hover, foco visible (`:focus-visible`), presionado, deshabilitado.
- Cargando, éxito, error y vacío donde aplique.

Botones:

- Una acción principal por vista. Las secundarias se ven secundarias.
- Área táctil de al menos 44 × 44 px en móvil.

Formularios:

- Etiqueta visible en cada campo; el placeholder no reemplaza a la etiqueta.
- Pide solo lo necesario. Cada campo extra cuesta conversiones.
- Tipos de input correctos (`email`, `tel`, `number`) y `autocomplete`.
- Validación al salir del campo o al enviar, con el mensaje junto al campo.
- Confirmación clara después de enviar, y el formulario debe funcionar de verdad (destino configurado y probado).

---

## 12. Accesibilidad (mínimo obligatorio)

- HTML semántico: `header`, `nav`, `main`, `section`, `footer`, `button` para acciones, `a` para navegación.
- Un solo `h1` por página y títulos en orden, sin saltos de nivel.
- `lang="es"` (o el idioma correspondiente) en el documento.
- Todo se puede usar con teclado, en un orden lógico, con foco siempre visible.
- Contraste según la sección 6.
- ARIA solo cuando el HTML nativo no alcanza.
- Videos con subtítulos o transcripción si tienen voz.
- Enlace "Saltar al contenido" en sitios con navegación larga.

---

## 13. Calidad técnica

**Rendimiento** (medido con Lighthouse o PageSpeed en móvil):

- LCP menor a 2.5 s, INP menor a 200 ms, CLS menor a 0.1.
- JavaScript solo donde aporta. Una landing no necesita un framework pesado si HTML y CSS bastan.
- Sin dependencias que no se usan.

**SEO básico:**

- `title` único (50 a 60 caracteres) y `meta description` (140 a 160) por página.
- Etiquetas Open Graph con imagen de 1200 × 630 px.
- Favicon e ícono para dispositivos, `sitemap.xml`, `robots.txt`, URL canónica.
- Página 404 diseñada, con salida de vuelta al sitio.

**Código:**

- Tokens de diseño como variables CSS (o el tema del framework) usados en todo el proyecto. Sin valores mágicos repetidos.
- Componentes reutilizables y nombres claros. Sin estilos en línea dispersos.
- Sin errores ni advertencias en la consola. Sin enlaces rotos.
- Textos fuera del código cuando el sitio es multilingüe o editable.
- Analítica, cookies o rastreo solo si se pidieron; con aviso de consentimiento cuando corresponda.

---

## 14. Proceso de trabajo

1. **Ficha:** completar la sección 2. Si faltan datos que cambian el resultado, preguntar.
2. **Plan visual:** proponer el plan de la sección 3.1 y pasarlo por la prueba de lo genérico (3.2). Ajustar antes de construir.
3. **Contenido real primero:** estructurar con los textos e imágenes reales o con marcadores claros. No diseñar alrededor de lorem ipsum.
4. **Construir por secciones**, revisando cada una contra la ficha.
5. **Autocrítica con capturas** en 360, 768 y 1440 px. Preguntar: ¿qué sobra?, ¿qué parece plantilla?, ¿qué no responde al brief? Quitar un adorno antes de entregar.
6. **Checklist de entrega** (sección 15).
7. **Reporte de entrega** con este formato:

```markdown
## Entrega

- Qué se hizo:
- Qué no se tocó:
- Decisiones tomadas sin confirmación (y por qué):
- Marcadores pendientes de contenido real:
- Cómo probarlo:
- Siguiente paso sugerido (si hay uno):
```

---

## 15. Checklist de entrega

Nada se entrega con una casilla sin marcar, salvo que el reporte explique por qué.

**Alcance**
- [ ] Hace lo que se pidió y nada que no se pidió.
- [ ] No hay datos inventados (testimonios, cifras, logos, reseñas).
- [ ] Los marcadores pendientes están listados en el reporte.

**Identidad**
- [ ] El plan visual pasó la prueba de lo genérico.
- [ ] Hay un elemento memorable y el resto es sobrio.
- [ ] Ninguna de las señales de la sección 4 aparece sin que el brief la pida.
- [ ] Respeta la marca del cliente.

**Diseño**
- [ ] Escala tipográfica, de espaciado y de color aplicada con tokens.
- [ ] Largo de línea y jerarquía correctos.
- [ ] Todos los estados interactivos diseñados.
- [ ] Revisado en 360, 768, 1024 y 1440 px, sin scroll horizontal.

**Texto**
- [ ] Sin frases genéricas ni relleno.
- [ ] Botones con verbos que dicen lo que pasa.
- [ ] Ortografía, tildes y signos revisados.

**Accesibilidad**
- [ ] Contraste AA, foco visible, navegación con teclado.
- [ ] Un `h1`, títulos en orden, `alt` en imágenes, `lang` definido.
- [ ] `prefers-reduced-motion` respetado.

**Técnica**
- [ ] LCP < 2.5 s, INP < 200 ms, CLS < 0.1 en móvil.
- [ ] `title`, descripción, Open Graph, favicon, 404.
- [ ] Formularios probados de punta a punta.
- [ ] Consola limpia, sin enlaces rotos.

---

## 16. Instrucción final para herramientas de IA

Antes de responder, lee la Ficha del proyecto y este estándar. Si la ficha está vacía, pide la información mínima: qué hace el cliente, para quién, y cuál es la acción principal de la página. Si recibes una tarea concreta, limítate a esa tarea. Al terminar, entrega el reporte de la sección 14. Si algo de este estándar contradice lo que el cliente pidió, gana el cliente y lo dices en el reporte.

---

# Proyecto: Partido SERVIR (Guatemala)

Todo lo que sigue es específico de este proyecto. Lo anterior es el estándar y no se edita.

## Ficha del proyecto

- **Cliente / marca:** Partido SERVIR, Guatemala. Es una propuesta de mejora del sitio existente (partidoservir.com). El partido no la encargó, así que no se publica ni se presenta como sitio oficial.
- **Qué hace, en una frase:** partido político guatemalteco «por el campo y la gente» que propone 13 programas sociales y productivos y busca afiliados.
- **Para quién (público principal y lo que busca):** *supuesto, por confirmar.* Ciudadanía guatemalteca, con peso en el área rural y en personas mayores: quiere saber si un programa le toca, cómo afiliarse y cómo participar. También afiliados, dirigentes y prensa, que buscan agenda y transparencia.
- **Trabajo principal de la página:** afiliarse. El botón lleva al portal externo `https://autoafiliacion.servirgt.org/`.
- **Páginas o pantallas incluidas:** Inicio, Agenda, Tu propuesta (se crea desde cero, no existía el HTML de referencia), Transparencia y 404.
- **Fuera de alcance:** el portal de autoafiliación (es externo), blog o noticias, modo oscuro, otros idiomas, analítica, chat, donaciones, CMS o backend, publicación en un dominio.
- **Contenido disponible:**
  - Textos del Inicio, la Agenda y Transparencia (HTML guardado del sitio actual).
  - Logo en PNG de 500 × 500 con fondo negro. No hay vector ni versión transparente.
  - Condiciones y beneficios de 4 de los 13 programas (capturas del sitio actual).
  - Resumen de los 13 programas.
  - 4 videos de TikTok y la lista de eventos pasados.
  - **No disponible:** fotos (Secretario General, «Nuestra gente», tractor en comunidades), miniaturas de los videos, el PDF del informe financiero, condiciones y beneficios de los programas 5 a 13, aviso de privacidad, teléfono, WhatsApp, dirección y redes reales.
- **Identidad existente:** logo-sello en círculo cian `#00CCFF` con anillo blanco, tractor y palabra SERVIR en negro, más «Afíliate» en letra manuscrita con subrayado cian. El sitio actual usa tinta azul muy oscura `#051223`, títulos en grotesca muy pesada y cuerpo en humanista (inferido de capturas, sin confirmar). No hay manual de marca.
- **Referencias que le gustan al cliente y por qué:** ninguna dada.
- **Lo que el cliente no quiere:** sin datos.
- **Tono de voz:** tú, cercano y directo. El sitio actual ya tutea («Afíliate», «Comparte tu idea»).
- **Idioma(s):** español de Guatemala.
- **Restricciones técnicas:** ninguna dada. El sitio actual está hecho con Lovable (React). Se propone Astro estático con CSS con tokens y JavaScript mínimo, por rendimiento en datos móviles. El destino del formulario de propuestas está pendiente.
- **Fecha de entrega:** sin fecha.

## Decisiones tomadas por el usuario en la conversación

- Acción principal: afiliarse.
- Alcance: las 4 páginas actuales.
- Cifras «33K+ afiliados», «23 distritos» y «100% compromiso»: se quitan (no tienen respaldo).
- La página «Tu propuesta» la redacta y diseña Claude.

## Decisiones tomadas sin confirmación

1. Los 13 programas se agrupan por a quién ayudan (el sitio actual los numera del 01 al 13, y no son una secuencia). Textos intactos.
2. Se unifica el lema repetido 5 veces («Menos burocracia, más oportunidades…»): aparece una sola vez.
3. Se reemplaza el carrusel automático del hero por contenido estático. El mensaje del Secretario General pasa a ser una sección propia.
4. Se corrige «tracktor» por «tractor» y «Nahula» por «Nahualá» (por confirmar el segundo).
5. Se quita la analítica del sitio actual (el estándar la permite solo si se pide).
6. Titulares en tipo oración. Solo SERVIR y el lema del hero van en mayúsculas.
7. Se elimina el emoji de la bandera y las viñetas con ✓.
8. WhatsApp: el botón flotante solo aparece cuando haya un número real.

## Marcadores pendientes de contenido real

- [ ] Logo en vector o PNG transparente.
- [ ] Foto del Secretario General y fotos de «Nuestra gente».
- [ ] Miniaturas de los videos, o fotos del tractor en cada comunidad.
- [ ] Condiciones y beneficios de los programas 5 a 13.
- [ ] PDF del informe del 1er trimestre 2026 (y su peso).
- [ ] Teléfono, WhatsApp, dirección y redes sociales.
- [ ] Destino del formulario «Tu propuesta» y aviso de privacidad.
- [ ] Confirmar que el contenido cumple lo que exige el TSE (el equipo legal del partido).
