import { equiposPersonasStore } from "../models/equipoPersona.model.js";

export const equipospersonasService = {
  async getEquiposPersonas() {
    return equiposPersonasStore;
  },

  async getEquiposPersonasById(id) {
    return equiposPersonasStore.find((relacion) => relacion.id === Number(id)) || null;
  },

  async postEquiposPersonas(data) {
    const nextId = equiposPersonasStore.length
      ? Math.max(...equiposPersonasStore.map((relacion) => relacion.id)) + 1
      : 1;

    const nuevaRelacion = {
      id: nextId,
      ...data,
    };

    equiposPersonasStore.push(nuevaRelacion);
    return nuevaRelacion;
  },

  async patchEquiposPersonas(id, data) {
    const index = equiposPersonasStore.findIndex((relacion) => relacion.id === Number(id));

    if (index === -1) {
      return null;
    }

    equiposPersonasStore[index] = {
      ...equiposPersonasStore[index],
      ...data,
    };

    return equiposPersonasStore[index];
  },

  async deleteEquiposPersonas(id) {
    const index = equiposPersonasStore.findIndex((relacion) => relacion.id === Number(id));

    if (index === -1) {
      return null;
    }

    const [relacionEliminada] = equiposPersonasStore.splice(index, 1);
    return relacionEliminada;
  },
};