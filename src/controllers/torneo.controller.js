import { torneosService } from "../services/torneo.service.js";

export const getTorneos = async (req, res) => {
  const torneos = await torneosService.getTorneos();
  res.json(torneos);
};

export const getTorneosById = async (req, res) => {
  const { id } = req.params;
  const torneos = await torneosService.getTorneosById(id);
  res.json(torneos);
};

export const postTorneos = async (req, res) => {
    const torneos = await torneosService.postTorneos(req.body);
    res.json(torneos);
};

export const patchTorneos = async (req, res) => {
    const torneos = await torneosService.patchTorneos(req.body);
    res.json(torneos);
};

export const deleteTorneos = async (req, res) => {
    const { id } = req.params;
    const torneos = await torneosService.deleteTorneos(id);
    res.json(torneos);
};