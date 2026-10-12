export interface Evento {
  titulo: string;
  /** ISO con zona horaria de Guatemala (UTC-6). */
  fecha: string;
  lugar: string;
  descripcion: string;
}

export const eventos: Evento[] = [
  {
    titulo: 'Jornada de Formación y Capacitación Política',
    fecha: '2026-06-19T09:00:00-06:00',
    lugar: 'San Marcos, San Marcos (Altiplano)',
    descripcion: `Jornada de Formación y Capacitación Política dirigida a afiliados, dirigentes, líderes comunitarios y bases partidarias de SERVIR, orientada al fortalecimiento de las capacidades de organización, participación y liderazgo político en el ámbito local y nacional.

Durante la actividad se desarrollarán contenidos relacionados con la Ley Electoral y de Partidos Políticos (LEPP), la estructura y funcionamiento de las organizaciones políticas, los derechos y deberes de los afiliados, la participación ciudadana, la fiscalización democrática y los principios éticos que deben guiar la acción política.

La capacitación busca fortalecer el compromiso de nuestras bases con los valores democráticos, la transparencia, el servicio a la población y la construcción de propuestas que respondan a las necesidades de las comunidades. Asimismo, promueve la formación de liderazgos responsables y preparados para contribuir al desarrollo integral de Guatemala desde los principios y objetivos del partido SERVIR.

Esta jornada constituye un espacio de aprendizaje, intercambio de experiencias y fortalecimiento organizativo para consolidar una participación política activa, informada y comprometida con el bienestar común.`,
  },
  {
    titulo: 'Jornada de Capacitación San Marcos',
    fecha: '2026-06-18T08:00:00-06:00',
    lugar: 'San Marcos, San Marcos, Guatemala',
    descripcion:
      'Jornada de capacitación y formación política en San Marcos, para el fortalecimiento del conocimiento de nuestras bases municipales',
  },
];

const fmt = new Intl.DateTimeFormat('es-GT', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
  hour12: true,
  timeZone: 'America/Guatemala',
});
export const formatearFecha = (iso: string) => fmt.format(new Date(iso)).replace('a. m.', 'a. m.').replace('p. m.', 'p. m.');

/** Se separa en el build. Para actualizar «próximos/pasados» hay que volver a construir el sitio. */
export function separarEventos(ahora = new Date()) {
  const ordenados = [...eventos].sort((a, b) => +new Date(a.fecha) - +new Date(b.fecha));
  return {
    proximos: ordenados.filter((e) => new Date(e.fecha) >= ahora),
    pasados: ordenados.filter((e) => new Date(e.fecha) < ahora).reverse(),
  };
}
