import { partidosTorneosStore } from "../models/partidosTorneos.model.js";

export const partidosTorneosService = {
  async getPartidosTorneos() {
    return partidosTorneosStore;
  },

  async getPartidosTorneosById(id) {
    return partidosTorneosStore.find((item) => item.id === Number(id)) || null;
  },

  async postPartidosTorneos(data) {
    const nextId = partidosTorneosStore.length
      ? Math.max(...partidosTorneosStore.map((item) => item.id)) + 1
      : 1;

    const nuevoPartidoTorneo = {
      id: nextId,
      ...data,
    };

    partidosTorneosStore.push(nuevoPartidoTorneo);
    return nuevoPartidoTorneo;
  },

  async patchPartidosTorneos(id, data) {
    const index = partidosTorneosStore.findIndex((item) => item.id === Number(id));

    if (index === -1) {
      return null;
    }

    partidosTorneosStore[index] = {
      ...partidosTorneosStore[index],
      ...data,
    };

    return partidosTorneosStore[index];
  },

  async deletePartidosTorneos(id) {
    const index = partidosTorneosStore.findIndex((item) => item.id === Number(id));

    if (index === -1) {
      return null;
    }

    const [deletedPartidoTorneo] = partidosTorneosStore.splice(index, 1);
    return deletedPartidoTorneo;
  },
};
