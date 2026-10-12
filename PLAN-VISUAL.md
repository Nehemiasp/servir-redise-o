# Plan visual: Partido SERVIR

Propuesta visual según el estándar v2 (sección 4). Versión 2: tras la primera revisión, el coordinador pidió una tipografía más sobria (Montserrat) y otra distribución para «¿Qué es SERVIR?». Este plan ya incluye esos cambios.

## Idea en una frase

SERVIR es un partido de campo. Su recorrido real es un tractor que llega a comunidades, así que la página tiene una ruta con paradas reales. El resto es sobrio: Montserrat, bloques rectos y mucho aire. El logo es un círculo: será lo único curvo del sitio.

## Color (6 tokens, sacados del logo y del sitio actual)

| Token | Hex | Papel | Contraste |
|---|---|---|---|
| `--cian-servir` | `#00CCFF` | Superficies grandes (hero, botón principal). Nunca texto sobre claro. | Tinta sobre cian: 9.9:1 |
| `--tinta` | `#051223` | Texto, bordes fuertes, pie de página | Sobre papel: 17.7:1 |
| `--papel` | `#F3F9FC` | Fondo general (blanco frío, no crema) | |
| `--blanco` | `#FFFFFF` | Superficies elevadas y el anillo del sello | |
| `--cian-texto` | `#00607C` | Enlaces y texto de acento sobre claro | Sobre papel: 6.7:1 |
| `--error` | `#B3261E` | Errores del formulario, siempre con texto | Sobre papel: 6.2:1 |

El cian ocupa cerca del 10 % de la pantalla, salvo el hero. No se añade un segundo color de acento: la identidad ya está en el logo.

## Tipografía (1 familia, 3 pesos)

- **Montserrat** en todo el sitio, por indicación del coordinador (quería una letra más sobria, tipo Montserrat o Poppins). Además es la más cercana a la palabra SERVIR del logo.
- Tres pesos: **800** titulares, **600** énfasis, enlaces y botones, **400** cuerpo.
- Escala 1.25 desde 17 px (16 / 17 / 21 / 26 / 33 / 41 / 52 / 65). El titular más grande es de 65 px. Cuerpo de 17 px, líneas de 65 caracteres.
- Archivo variable propio, subconjunto latino, 38 KB, `font-display: swap` y `preload`.
- Montserrat es una elección del coordinador: el estándar v2 la desaconseja «sin motivo» y aquí el motivo es esa instrucción más su parecido con el logo.

## Layout

Retícula de 12 columnas en escritorio y 4 en móvil, espaciado en múltiplos de 8 px, ancho máximo 1200 px. Alineación a la izquierda: el texto manda y el sello del logo acompaña a la derecha, completo.

Radios por jerarquía: bloques de contenido con esquinas rectas, controles con 8 px, y solo el sello es un círculo completo.

### Hero (escritorio 1440 px)

```
┌──────────────────────────────────────────────────────────────────────┐
│ (sello) SERVIR     Programas Recorrido Agenda Propuesta Transparencia [Afiliarme] │
├──────────────────────────────────────────────────────────────────────┤
│  FONDO CIAN #00CCFF                                                  │
│  Partido político por el campo y la gente          ╭───────────╮     │
│  SERVIR ES GUATE.                                  │   sello   │     │
│  Y Guate es SERVIR.                                │  (círculo │     │
│  Trece programas para mujeres, adultos mayores,    │ completo) │     │
│  niñez, jóvenes, productores y migrantes.          ╰───────────╯     │
│  [ Afiliarme en línea ]   Ver los 13 programas                       │
└──────────────────────────────────────────────────────────────────────┘
```

- **Móvil (360 px):** primero el titular y el botón; el sello va debajo, más pequeño, centrado.
- Un solo botón principal por vista (tinta sobre cian en el hero, cian sobre papel en el resto).
- Si llega una foto real del tractor en una comunidad, puede sustituir al sello.

### Sección «¿Qué es SERVIR?» (distribución nueva)

Dos columnas equilibradas, texto de tamaño normal, sin frases gigantes:

```
┌───────────────────────────────┬─────────────────────────────────────┐
│ ¿Qué es SERVIR?               │ ■ SERVIR a la gente                 │
│ Somos un proyecto político... │ ■ SERVIR con transparencia y ef...  │
│ ■ Honestidad y transparencia  │ ■ SERVIR para generar resultados    │
│ ■ Cercanía con la gente       │ ■ SERVIR con responsabilidad y ...  │
│ ■ Resultados, no promesas     │ ■ SERVIR unidos por una mejor Gua.. │
├───────────────────────────────┴─────────────────────────────────────┤
│ SERVIR es trabajar hoy por el país que todos queremos mañana.       │
├──────────────────────────────┬──────────────────────────────────────┤
│ ▔▔▔ Nuestra misión           │ ▔▔▔ Nuestra visión                   │
│ (panel blanco, borde cian)   │ (panel blanco, borde cian)           │
└──────────────────────────────┴──────────────────────────────────────┘
╔═════════════════════════════════════════════════════════════════════╗
║ FRANJA CIAN: Menos burocracia / Más oportunidades │ Menos privile.. ║
╚═════════════════════════════════════════════════════════════════════╝
```

### Sección tipo: los programas

Agrupados por a quién ayudan, sin numeración. Cada programa es un desplegable nativo (`<details>`), sin JavaScript. Cerrado muestra el nombre y el resumen; abierto, las «Condiciones» y los «Beneficios».

```
┌────────────────────────────────────────────────────────────────┐
│ Mujeres y familias            ▸ Apoyo económico a la mujer     │
│ (título de grupo,               Apoyo económico directo a ...  │
│  columnas 1 a 4)              ───────────────────────────────  │
│                               ▾ Guarderías infantiles          │
│                                 Condiciones                    │
│                                  • Inscripción del niño o ...  │
│                                 Beneficios                     │
│                                  • Espacio seguro de cuidado   │
│                               ───────────────────────────────  │
│                               ▸ Calidad de vida y núcleo ...   │
│                               ▸ Rescate de familias en pobreza │
└────────────────────────────────────────────────────────────────┘
```

Grupos propuestos:

- **Mujeres y familias:** apoyo a la mujer, guarderías, calidad de vida y núcleo familiar, rescate de familias en pobreza.
- **Adultos mayores y personas con discapacidad:** dignificación.
- **Jóvenes:** jóvenes con futuro.
- **Campo y alimentación:** pequeños productores, granos básicos, canasta básica.
- **Vivienda y trabajo:** vivienda, empleados de restaurantes, conductores.
- **Migrantes:** dignificación y valoración.

## El elemento memorable: la ruta del tractor

Una línea continua con paradas reales: Izabal, Nahualá, Jutiapa, Baja Verapaz, y los eventos de San Marcos en la Agenda. Cada parada tiene el nombre del lugar en tipografía grande, la fecha si existe y un enlace al video. Es la jugada propia del partido, y usa la línea solo donde comunica una estructura real (lugares visitados).

```
  Recorrido del tractor
  ●────────────●────────────●────────────●─────
  Izabal       Nahualá      Jutiapa      Baja Verapaz
  Ver video    Ver video    Ver video    Ver video
```

En móvil la ruta pasa a vertical, con las paradas apiladas. Los videos de TikTok no se cargan hasta que la persona los pide: ahorra datos móviles.

## Orden del Inicio

1. Hero (acción: afiliarse).
2. Mensaje del Secretario General (estático; marcador de foto 4:5 hasta que llegue).
3. ¿Qué es SERVIR? (con misión y visión) y la franja «Menos… / Más…».
4. Programas.
5. Ruta del tractor.
6. Nuestra gente (cita y 2 marcadores de foto 4:5).
7. Tu propuesta (invitación breve que lleva a la página).
8. Afíliate (repetición del llamado, con aviso de que sale a `autoafiliacion.servirgt.org`).
9. Contacto y pie de página.

## Las otras páginas

- **Agenda:** próximos eventos arriba. Si no hay, el estado vacío invita a actuar en vez de decir «vuelve pronto». Eventos pasados en la misma línea de ruta, con el texto completo desplegable.
- **Tu propuesta:** título concreto, los tres pasos del partido (comparte, analizamos, impulsamos, sí es una secuencia real) y un formulario corto con etiquetas visibles: propuesta, departamento y municipio, nombre (opcional), correo o teléfono (opcional, para responderte). Botón «Enviar mi propuesta». Confirmación «Recibimos tu propuesta». Errores que dicen qué pasó y cómo resolverlo.
- **Transparencia:** pestañas por etapa («Proselitismo, por trimestre» y «Campaña, por mes»), años en orden descendente, cada informe con «Ver PDF» y «Descargar PDF (peso)». Los datos viven en un archivo JSON para agregar informes sin tocar código.
- **404:** diseñada, con salida al Inicio.

## Movimiento

Una sola secuencia: el sello del hero entra con un escalado de 250 ms con `ease-out`. Los desplegables de programas se abren con transición corta. Todo respeta `prefers-reduced-motion`. Sin parallax, sin carruseles automáticos, sin animación al hacer scroll.

## Prueba de lo genérico (sección 4.2)

| Punto | ¿Funcionaría para otro rubro? | Decisión |
|---|---|---|
| Color | El cian es del logo; no es un valor por defecto. | Se mantiene. |
| Tipografía | Montserrat es una elección común y sirve para cualquier rubro. | Se acepta: la pidió el coordinador, y la identidad la dan el cian, el sello y la ruta, no la letra. |
| Hero | «Titular + subtítulo + dos botones + ilustración» sí es genérico. | Se mantiene sobrio: el lema del partido y su sello real. Una foto real del tractor lo mejoraría. |
| Estructura | Grilla de tarjetas iguales para los programas: genérica. | Se sustituye por lista agrupada y desplegable. |
| «¿Qué es SERVIR?» | Frases gigantes en lista: efectista y desequilibrada. | Se sustituye por dos columnas, misión y visión en paneles, y franja aparte. |
| Línea de ruta | Solo aplica a un partido con recorrido en tractor. | Es el elemento memorable. |

## Señales de «hecho con IA» que se eliminan del sitio actual

Fondo con degradado y manchas difuminadas, etiqueta pequeña en mayúsculas encima de cada título, programas numerados del 01 al 13, tarjetas idénticas con ícono arriba, emoji en el titular, viñetas ✓, flecha en cada botón, efecto de subir al aparecer y hover en cada tarjeta.

## Rendimiento y SEO previstos

- Astro estático, sin framework en el cliente. JavaScript solo para el menú móvil, las pestañas de transparencia y el envío del formulario.
- Meta: LCP menor a 2.5 s en móvil, página inicial por debajo de 300 KB sin videos.
- `lang="es"`, un solo `h1` por página, título de 50 a 60 caracteres, descripción de 140 a 160, imagen Open Graph de 1200 × 630, favicon desde el sello, `sitemap.xml`, `robots.txt`, URL canónica.
