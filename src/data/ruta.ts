/** Paradas del recorrido del tractor. `video` = id del video de TikTok (null = aún no hay enlace). */
export interface Parada {
  lugar: string;
  video: string | null;
}
export const paradas: Parada[] = [
  { lugar: 'Izabal', video: '7622855957969751316' },
  { lugar: 'Nahualá', video: null },
  { lugar: 'Jutiapa', video: null },
  { lugar: 'Baja Verapaz', video: null },
];
