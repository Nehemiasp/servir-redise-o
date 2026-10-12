/** Datos de contacto y enlaces del sitio. `null` = dato real pendiente (no se muestra como dato). */
export const SITE = {
  nombre: 'SERVIR',
  nombreLargo: 'Partido SERVIR',
  lema: 'Servir es Guate y Guate es Servir',
  afiliacionUrl: 'https://autoafiliacion.servirgt.org/',
  correo: 'info@servirgt.org',
  telefono: null as string | null,
  whatsapp: null as string | null, // solo dígitos con código de país, ej. 502XXXXXXXX
  direccion: '15 Avenida, Colonia Vista Hermosa, Zona 15, Ciudad de Guatemala',
  redes: [] as { nombre: string; url: string }[],
  mensajeOriginalUrl:
    'https://partidoservir.com/__l5e/assets-v1/b1eb0ce1-715f-457d-a7da-4f3b0d28c289/mensaje-secretario-general.jpeg',
  formEndpoint: (import.meta.env.PUBLIC_FORM_ENDPOINT as string | undefined) ?? '',
  indexable: import.meta.env.PUBLIC_INDEXABLE === 'true',
};

export const NAV = [
  { href: '/#programas', texto: 'Programas' },
  { href: '/#recorrido', texto: 'Recorrido' },
  { href: '/agenda', texto: 'Agenda' },
  { href: '/propuesta', texto: 'Tu propuesta' },
  { href: '/transparencia', texto: 'Transparencia' },
];
