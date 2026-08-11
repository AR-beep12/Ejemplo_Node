import { equiposService } from "../services/equipo.service.js";

export const getEquipos = async (req, res) => {
  const equipos = await equiposService.getEquipos();
  res.json(equipos);
};

export const getEquiposById = async (req, res) => {
  const { id } = req.params;
  const equipo = await equiposService.getEquiposById(id);
  res.json(equipo);
};

export const postEquipos = async (req, res) => {
    const equipo = await equiposService.postEquipos();
    res.json(equipo);
};

export const patchEquipos = async (req, res) => {
    const { id } = req.params;
    const equipo = await equiposService.patchEquipos();
    res.json(equipo);
};

export const deleteEquipos = async (req, res) => {
    const { id } = req.params;
    const equipo = await equiposService.deleteEquipos();
    res.json(equipo);
};