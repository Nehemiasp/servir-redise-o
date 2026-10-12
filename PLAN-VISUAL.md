# Plan visual: Partido SERVIR

Paso 2 del proceso (sección 14 del estándar). Nada se construye hasta que se apruebe o se ajuste este plan.

## Idea en una frase

SERVIR es un partido de campo. Su recorrido real es un tractor que llega a comunidades, así que la página se organiza como esa ruta y no como una plantilla política. El logo es un círculo: será lo único curvo del sitio.

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

## Tipografía (2 familias, 3 pesos)

- **Archivo 800** para titulares y el lema. Tiene eje de ancho, y en ancho extendido se parece a la palabra SERVIR del logo.
- **Atkinson Hyperlegible 400 y 700** para el cuerpo. Se diseñó para baja visión. Tiene sentido aquí por el público: personas mayores y lectura en pantallas pequeñas al sol.
- Escala 1.25 desde 18 px (18 / 22 / 28 / 35 / 44 / 55 / 69), con tamaños fluidos en el hero. Cuerpo nunca menos de 18 px. Líneas de 65 caracteres.
- La letra manuscrita de «Afíliate» queda solo en el logo, no se reutiliza.
- Archivos WOFF2 propios, subconjunto latino, `font-display: swap`.

## Layout

Retícula de 12 columnas en escritorio y 4 en móvil, espaciado en múltiplos de 8 px, ancho máximo 1200 px. Alineación a la izquierda y asimétrica: el texto manda y el sello se corta por el borde.

Radios por jerarquía: bloques de contenido con esquinas rectas, controles con 8 px, y solo el sello es un círculo completo.

### Hero (escritorio 1440 px)

```
┌──────────────────────────────────────────────────────────────────────┐
│ (sello)SERVIR   Programas  Recorrido  Agenda  Propuesta  Transparencia   [Afiliarme] │
├──────────────────────────────────────────────────────────────────────┤
│  FONDO CIAN #00CCFF                                                  │
│                                                                      │
│  Partido político por el campo y la gente                            │
│                                                   ╭───────────╮      │
│  SERVIR ES                                      ╭─┤  sello    │      │
│  GUATE.                                         │ │  círculo  │      │
│  Y Guate es SERVIR.                             │ │  grande   │      │
│                                                 ╰─┤  (cortado │      │
│  Trece programas para mujeres, adultos mayores,   │  por el   │      │
│  niñez, jóvenes y productores.                    │  borde)   │      │
│                                                   ╰───────────╯      │
│  [ Afiliarme en línea ]    Ver los 13 programas                      │
└──────────────────────────────────────────────────────────────────────┘
```

- **Móvil (360 px):** primero el titular y el botón «Afiliarme en línea»; el sello va debajo, más pequeño. El botón principal queda visible sin bajar.
- Un solo botón principal por vista (tinta sobre cian en el hero, cian sobre papel en el resto). «Ver los 13 programas» es un enlace secundario.
- Si llega una foto real del tractor en una comunidad, sustituye al sello como protagonista del hero.

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
2. Mensaje del Secretario General (estático, con su foto cuando llegue).
3. Qué es SERVIR, misión y visión, y el lema «Menos… / Más…» una sola vez.
4. Programas.
5. Ruta del tractor.
6. Tu propuesta (invitación breve que lleva a la página).
7. Afíliate (repetición del llamado, con aviso de que sale a `autoafiliacion.servirgt.org`).
8. Contacto y pie de página.

## Las otras páginas

- **Agenda:** próximos eventos arriba. Si no hay, el estado vacío invita a actuar en vez de decir «vuelve pronto». Eventos pasados en la misma línea de ruta, con el texto completo desplegable.
- **Tu propuesta:** título concreto, los tres pasos del partido (comparte, analizamos, impulsamos, sí es una secuencia real) y un formulario corto con etiquetas visibles: propuesta, departamento y municipio, nombre (opcional), correo o teléfono (opcional, para responderte). Botón «Enviar mi propuesta». Confirmación «Recibimos tu propuesta». Errores que dicen qué pasó y cómo resolverlo.
- **Transparencia:** pestañas por etapa («Proselitismo, por trimestre» y «Campaña, por mes»), años en orden descendente, cada informe con «Ver PDF» y «Descargar PDF (peso)». Los datos viven en un archivo JSON para agregar informes sin tocar código.
- **404:** diseñada, con salida al Inicio.

## Movimiento

Una sola secuencia: el sello del hero entra con un escalado de 250 ms con `ease-out`. Los desplegables de programas se abren con transición corta. Todo respeta `prefers-reduced-motion`. Sin parallax, sin carruseles automáticos, sin animación al hacer scroll.

## Prueba de lo genérico (sección 3.2)

| Punto | ¿Funcionaría para otro rubro? | Decisión |
|---|---|---|
| Color | El cian es del logo; no es un valor por defecto. | Se mantiene. |
| Tipografía | Archivo + Atkinson las elegí por el logo y por legibilidad, no por costumbre. | Se mantiene. |
| Hero | «Titular + subtítulo + dos botones + ilustración» sí es genérico. | Se sustituye por lema enorme + sello cortado, y por una foto real cuando llegue. |
| Estructura | Grilla de tarjetas iguales para los programas: genérica. | Se sustituye por lista agrupada y desplegable. |
| Línea de ruta | Solo aplica a un partido con recorrido en tractor. | Es el elemento memorable. |

## Señales de «hecho con IA» que se eliminan del sitio actual

Fondo con degradado y manchas difuminadas, etiqueta pequeña en mayúsculas encima de cada título, programas numerados del 01 al 13, tarjetas idénticas con ícono arriba, emoji en el titular, viñetas ✓, flecha en cada botón, efecto de subir al aparecer y hover en cada tarjeta.

## Rendimiento y SEO previstos

- Astro estático, sin framework en el cliente. JavaScript solo para el menú móvil, las pestañas de transparencia y el envío del formulario.
- Meta: LCP menor a 2.5 s en móvil, página inicial por debajo de 300 KB sin videos.
- `lang="es"`, un solo `h1` por página, título de 50 a 60 caracteres, descripción de 140 a 160, imagen Open Graph de 1200 × 630, favicon desde el sello, `sitemap.xml`, `robots.txt`, URL canónica.
