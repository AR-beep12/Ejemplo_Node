import { torneosStore } from "../models/torneo.model.js";

export const torneosService = {
  async getTorneos() {
    return torneosStore;
  },

  async getTorneosById(id) {
    return torneosStore.find((torneo) => torneo.id === Number(id)) || null;
  },

  async postTorneos(data) {
    const nextId = torneosStore.length
      ? Math.max(...torneosStore.map((torneo) => torneo.id)) + 1
      : 1;

    const nuevoTorneo = {
      id: nextId,
      ...data,
    };

    torneosStore.push(nuevoTorneo);
    return nuevoTorneo;
  },

  async patchTorneos(id, data) {
    const index = torneosStore.findIndex((torneo) => torneo.id === Number(id));

    if (index === -1) {
      return null;
    }

    torneosStore[index] = {
      ...torneosStore[index],
      ...data,
    };

    return torneosStore[index];
  },

  async deleteTorneos(id) {
    const index = torneosStore.findIndex((torneo) => torneo.id === Number(id));

    if (index === -1) {
      return null;
    }

    const [torneoEliminado] = torneosStore.splice(index, 1);
    return torneoEliminado;
  },
};