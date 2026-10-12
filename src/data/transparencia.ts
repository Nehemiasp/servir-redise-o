export type Etapa = 'proselitismo' | 'campana';
export interface Informe {
  etapa: Etapa;
  anio: number;
  /** «1er trimestre» o el mes, según la etapa. */
  periodo: string;
  titulo: string;
  /** Ruta o URL del PDF. null = el PDF aún no se ha entregado. */
  pdf: string | null;
  /** Peso del PDF para mostrarlo en el botón, ej. «2 MB». */
  peso?: string;
}

export const informes: Informe[] = [
  {
    etapa: 'proselitismo',
    anio: 2026,
    periodo: '1er trimestre',
    titulo: 'Informe financiero, 1er trimestre 2026',
    pdf: null,
  },
];

export function porAnio(etapa: Etapa) {
  const lista = informes.filter((i) => i.etapa === etapa);
  const anios = [...new Set(lista.map((i) => i.anio))].sort((a, b) => b - a);
  return anios.map((anio) => ({ anio, informes: lista.filter((i) => i.anio === anio) }));
}
