import { equipospersonasService } from "../services/equipo_persona.service.js";

export const getEquiposPersonas = async (req, res) => {
  const equiposPersonas = await equipospersonasService.getEquiposPersonas();
  res.json(equiposPersonas);
};

export const getEquiposPersonasById = async (req, res) => {
  const { id } = req.params;
  const equiposPersonas = await equipospersonasService.getEquiposPersonasById(id);
  res.json(equiposPersonas);
};

export const postEquiposPersonas = async (req, res) => {
  const equiposPersonas = await equipospersonasService.postEquiposPersonas(req.body);
  res.json(equiposPersonas);
};

export const patchEquiposPersonas = async (req, res) => {
  const { id } = req.params;
  const equiposPersonas = await equipospersonasService.patchEquiposPersonas(id, req.body);
  res.json(equiposPersonas);
};

export const deleteEquiposPersonas = async (req, res) => {
  const { id } = req.params;
  const equiposPersonas = await equipospersonasService.deleteEquiposPersonas(id);
  res.json(equiposPersonas);
};
