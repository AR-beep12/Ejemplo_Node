import { equiposStore } from "../models/equipo.model.js";

export const equiposService = {
  async getEquipos() {
    return equiposStore;
  },

  async getEquiposById(id) {
    return equiposStore.find((equipo) => equipo.id === Number(id)) || null;
  },

  async postEquipos(data) {
    const nextId = equiposStore.length
      ? Math.max(...equiposStore.map((equipo) => equipo.id)) + 1
      : 1;

    const nuevoEquipo = {
      id: nextId,
      ...data,
    };

    equiposStore.push(nuevoEquipo);
    return nuevoEquipo;
  },

  async patchEquipos(id, data) {
    const index = equiposStore.findIndex((equipo) => equipo.id === Number(id));

    if (index === -1) {
      return null;
    }

    equiposStore[index] = {
      ...equiposStore[index],
      ...data,
    };

    return equiposStore[index];
  },

  async deleteEquipos(id) {
    const index = equiposStore.findIndex((equipo) => equipo.id === Number(id));

    if (index === -1) {
      return null;
    }

    const [equipoEliminado] = equiposStore.splice(index, 1);
    return equipoEliminado;
  },
};