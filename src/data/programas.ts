export interface Programa {
  slug: string;
  titulo: string;
  resumen: string;
  /** Rótulo de la primera lista (casi siempre «Condiciones»). */
  rotuloCondiciones?: string;
  condiciones: string[];
  beneficios: string[];
}
export interface GrupoProgramas {
  slug: string;
  titulo: string;
  programas: Programa[];
}

export const grupos: GrupoProgramas[] = [
  {
    slug: 'mujeres-familias',
    titulo: 'Mujeres y familias',
    programas: [
      {
        slug: 'apoyo-economico-mujer',
        titulo: 'Apoyo económico a la mujer',
        resumen:
          'Apoyo económico directo a mujeres solteras, amas de casa y mujeres en extrema pobreza para reducir la dependencia y abrir oportunidades reales.',
        condiciones: ['Mujer soltera', 'Mujer en extrema pobreza', 'Ama de casa', 'Capacitación'],
        beneficios: [
          'Beneficio económico mensual (medio salario mínimo)',
          'Capacitación y tecnificación',
          'Oportunidades de empleo',
        ],
      },
      {
        slug: 'guarderias-infantiles',
        titulo: 'Guarderías infantiles',
        resumen:
          'Sistema nacional de guarderías que garantiza espacios seguros y educativos para la primera infancia.',
        condiciones: [
          'Inscripción del niño o niña al programa',
          'Compromiso de responsabilidad productiva de los padres',
        ],
        beneficios: [
          'Espacio seguro de cuidado',
          'Estimulación y educación temprana certificada',
          'Alimentación escolar',
        ],
      },
      {
        slug: 'calidad-de-vida-nucleo-familiar',
        titulo: 'Calidad de vida y fortalecimiento del núcleo familiar',
        resumen: 'Impulso de condiciones para lograr armonía entre el trabajo y la vida familiar.',
        condiciones: ['Pertenecer a un núcleo familiar', 'Contar con un trabajo'],
        beneficios: [
          'Horarios flexibles',
          'Trabajos por resultados',
          'Talleres de fortalecimiento de lazos familiares',
        ],
      },
      {
        slug: 'rescate-de-familias',
        titulo: 'Rescate de familias en pobreza y extrema pobreza',
        resumen:
          'Seguridad alimentaria y protección social básica vía Tarjeta Ciudadana Digital, transparente y trazable.',
        condiciones: [
          'Hogares en pobreza o pobreza extrema',
          'Identificación del jefe o jefa de hogar',
          'Residencia comprobada en el territorio nacional',
          'Registro socioeconómico validado por el Estado',
          'Aceptar seguimiento social básico',
        ],
        beneficios: [
          'Seguridad alimentaria garantizada',
          'Apoyo económico directo vía Tarjeta Ciudadana Digital',
          'Transparencia y trazabilidad total',
          'Fin del clientelismo',
          'Cobertura nacional',
        ],
      },
    ],
  },
  {
    slug: 'adultos-mayores',
    titulo: 'Adultos mayores',
    programas: [
      {
        slug: 'adulto-mayor-y-discapacidad',
        titulo: 'Dignificación del adulto mayor y personas con discapacidad',
        resumen: 'Apoyo directo a adultos mayores y personas con discapacidad para garantizar una vida digna.',
        condiciones: ['65 años o más', 'Discapacidad diagnosticada'],
        beneficios: [
          'Beneficio económico mensual (medio salario mínimo) entregado directamente al beneficiario',
        ],
      },
    ],
  },
  {
    slug: 'jovenes',
    titulo: 'Jóvenes',
    programas: [
      {
        slug: 'jovenes-con-futuro',
        titulo: 'Jóvenes con futuro',
        resumen:
          'Desarrollo integral que combina formación técnica, disciplina y apoyo económico hasta la absorción laboral.',
        condiciones: [
          'Entre 18 y 25 años',
          'Nacionalidad guatemalteca',
          'Firma de carta de compromiso',
          'Aprobación de módulos formativos',
        ],
        beneficios: [
          'Salario mínimo durante la capacitación',
          'Apoyo público/privado por 6 meses hasta la contratación',
          'Bolsa de empleo exclusiva',
          'Acceso a créditos',
        ],
      },
    ],
  },
  {
    slug: 'campo-y-alimentacion',
    titulo: 'Campo y alimentación',
    programas: [
      {
        slug: 'pequenos-productores',
        titulo: 'Fortalecimiento a pequeños productores',
        resumen:
          'Convertimos a los pequeños productores en actores competitivos y exportadores integrados a cadenas de valor.',
        condiciones: [
          'Ser pequeño productor agrícola activo',
          'Participar en capacitaciones y asistencia técnica',
          'Cumplir buenas prácticas y estándares de calidad',
        ],
        beneficios: [
          'Insumos agrícolas gratuitos',
          'Transferencia de tecnología',
          'Financiamiento con tasas preferenciales',
          'Asistencia técnica',
          'Apertura de mercados',
        ],
      },
      {
        slug: 'granos-basicos',
        titulo: 'Granos básicos asegurados',
        resumen:
          'Aumentamos en 60% la producción de frijol, maíz y arroz para garantizar seguridad alimentaria y comercialización.',
        condiciones: [
          'Ser pequeño productor',
          'Aplicar mejoras productivas y técnicas',
          'Participar en el acompañamiento técnico',
        ],
        beneficios: [
          'Incremento del 60% en producción',
          'Insumos y asistencia productiva',
          'Mejores prácticas agrícolas',
          'Comercialización familiar',
          'Seguridad alimentaria garantizada',
        ],
      },
      {
        slug: 'canasta-basica',
        titulo: 'Reducción del costo de la canasta básica',
        resumen: 'Eliminamos barreras arancelarias y no arancelarias para reducir el costo de vida.',
        rotuloCondiciones: 'A nivel institucional',
        condiciones: [
          'Eliminación o reducción de aranceles',
          'Facilitación de importaciones y distribución',
          'Mayor competencia en el mercado',
        ],
        beneficios: [
          'Reducción directa de precios',
          'Mayor oferta de productos',
          'Alivio inmediato al presupuesto familiar',
          'Protección del consumo básico',
        ],
      },
    ],
  },
  {
    slug: 'vivienda-y-trabajo',
    titulo: 'Vivienda y trabajo',
    programas: [
      {
        slug: 'vivienda-digna',
        titulo: 'Vivienda digna',
        resumen: 'Acceso a vivienda propia con créditos accesibles, tasas preferenciales y respaldo del Estado.',
        condiciones: [
          'No contar con vivienda propia',
          'Ser mayor de edad',
          'Tener ingreso comprobable',
          'Adquirir vivienda dentro de proyectos autorizados',
        ],
        beneficios: [
          'Crédito con tasa preferencial',
          'Garantía parcial del Estado',
          'Enganche fraccionado y ahorro programado',
          'Vivienda formal y planificada',
          'Licencias ágiles',
        ],
      },
      {
        slug: 'empleados-de-restaurantes',
        titulo: 'Empleados del sector restaurantes',
        resumen:
          'Dignificamos al sector restaurantes con salario justo, protección de la propina y seguridad social.',
        condiciones: [
          'Cumplimiento del Código de Buenas Prácticas',
          'Pago de salario conforme a ley',
          'Entrega íntegra y transparente de propinas',
          'Horarios justos y ambientes laborales seguros',
          'Inscripción obligatoria a Seguridad Social',
        ],
        beneficios: [
          'Propina protegida y libre de impuestos',
          'Sin comisiones por propina electrónica',
          'Salario justo garantizado',
          'Acceso a Seguridad Social',
          'Fiscalización transparente',
        ],
      },
      {
        slug: 'profesionalizacion-de-conductores',
        titulo: 'Profesionalización de conductores',
        resumen:
          'Certificación obligatoria y capacitación internacional para conductores de transporte público y pesado.',
        condiciones: [
          'Ser conductor de transporte público o pesado',
          'Licencia vigente según categoría',
          'Inscripción en el Registro Nacional de Conductores Certificados',
          'Participar y aprobar capacitaciones obligatorias',
        ],
        beneficios: [
          'Certificación profesional',
          'Más oportunidades de empleo',
          'Capacitación avanzada en seguridad vial',
          'Mejores condiciones laborales',
          'Patrullas de emergencia y grúas gratuitas',
          'Zonas de descanso seguras',
        ],
      },
    ],
  },
  {
    slug: 'migrantes',
    titulo: 'Migrantes',
    programas: [
      {
        slug: 'migrantes',
        titulo: 'Dignificación y valoración a nuestros migrantes',
        resumen:
          'Integramos plenamente a los migrantes guatemaltecos a la vida política, económica y social del país.',
        condiciones: [
          'Ser migrante guatemalteco en el exterior o retornado',
          'Contar con documentación de identidad',
          'Vínculo familiar o comunitario con Guatemala',
          'Interés en participar en programas',
        ],
        beneficios: [
          'Participación electoral facilitada',
          'Red integral de asistencia (legal, emocional y humanitaria)',
          'Asesoría financiera para remesas productivas',
          'Reinserción digna de retornados',
          'Fortalecimiento de identidad para hijos de migrantes',
        ],
      },
    ],
  },
];

export const totalProgramas = grupos.reduce((n, g) => n + g.programas.length, 0);
