import { personasService } from "../services/persona.service.js";

export const getJugadores = async (req, res) => {
  const personas = await personasService.getJugadores();
  res.json(personas);
};

export const getArbitros = async (req, res) => {
  const personas = await personasService.getArbitros();
  res.json(personas);
};

export const getPersonas = async (req, res) => {
  const personas = await personasService.getJugadores();
  res.json(personas);
};

export const getPersonasById = async (req, res) => {
  const { id } = req.params;
  const persona = await personasService.getPersonasById(id);
  res.json(persona);
};

export const postPersonas = async (req, res) => {
    const persona = await personasService.postPersonas(req.body);
    res.json(persona);
};

export const patchPersonas = async (req, res) => {
    const persona = await personasService.patchPersonas(req.body);
    res.json(persona);
};

export const deletePersonas = async (req, res) => {
    const { id } = req.params;
    const persona = await personasService.deletePersonas(id);
    res.json(persona);
};