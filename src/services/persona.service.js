import { personasStore } from "../models/persona.model.js";

export const personasService = {
  async getJugadores() {
    return personasStore.filter((persona) => persona.tipo === "jugador");
  },

  async getArbitros() {
    return personasStore.filter((persona) => persona.tipo === "arbitro");
  },

  async getPersonasById(id) {
    return personasStore.find((persona) => persona.id === Number(id)) || null;
  },

  async postPersonas(data) {
    const nextId = personasStore.length
      ? Math.max(...personasStore.map((persona) => persona.id)) + 1
      : 1;

    const nuevaPersona = {
      id: nextId,
      ...data,
    };

    personasStore.push(nuevaPersona);
    return nuevaPersona;
  },

  async patchPersonas(id, data) {
    const index = personasStore.findIndex((persona) => persona.id === Number(id));

    if (index === -1) {
      return null;
    }

    personasStore[index] = {
      ...personasStore[index],
      ...data,
    };

    return personasStore[index];
  },

  async deletePersonas(id) {
    const index = personasStore.findIndex((persona) => persona.id === Number(id));

    if (index === -1) {
      return null;
    }

    const [personaEliminada] = personasStore.splice(index, 1);
    return personaEliminada;
  },
};