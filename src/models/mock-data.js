export const personas = [
  {
    id: 1,
    nombre: "Juan Perez",
    edad: 24,
    pos: "Colocador",
    tipo: "jugador",
  },
  {
    id: 2,
    nombre: "Luis Gomez",
    edad: 28,
    pos: "Central",
    tipo: "jugador",
  },
  {
    id: 3,
    nombre: "Carlos Ruiz",
    edad: 31,
    pos: "Central",
    tipo: "arbitro",
  },
  {
    id: 4,
    nombre: "Andres Molina",
    edad: 26,
    pos: "Colocador",
    tipo: "arbitro",
  },
];

export const equipos = [
  {
    id: 1,
    nombre: "Tigres",
  },
  {
    id: 2,
    nombre: "Halcones",
  },
  {
    id: 3,
    nombre: "Panteras",
  },
];

export const equiposPersonas = [
  {
    id: 1,
    id_persona: 1,
    id_equipo: 1,
  },
  {
    id: 2,
    id_persona: 2,
    id_equipo: 1,
  },
  {
    id: 3,
    id_persona: 3,
    id_equipo: 2,
  },
  {
    id: 4,
    id_persona: 4,
    id_equipo: 3,
  },
];

export const partidos = [
  {
    id: 1,
    equipo_A: 1,
    equipo_B: 2,
    puntos_A: 3,
    puntos_B: 1,
    arbitro: 3,
    status: "finalizado",
  },
  {
    id: 2,
    equipo_A: 2,
    equipo_B: 3,
    puntos_A: 2,
    puntos_B: 3,
    arbitro: 4,
    status: "finalizado",
  },
];

export const torneos = [
  {
    id: 1,
    ganador: 1,
    nombre: "Copa Verano 2026",
    status: "activo",
    fecha: "2026-08-01T10:00:00.000Z",
  },
  {
    id: 2,
    ganador: 3,
    nombre: "Liga Interna",
    status: "finalizado",
    fecha: "2026-07-18T18:30:00.000Z",
  },
];

export const partidosTorneos = [
  {
    id: 1,
    id_partido: 1,
    id_torneo: 1,
  },
  {
    id: 2,
    id_partido: 2,
    id_torneo: 2,
  },
];
