import { torneoService } from "../services/torneo.service.js";

export const getTorneos = async (req, res) => {
  const torneos = await torneoService.getTorneos();
  res.json(torneos);
};

export const getTorneosById = async (req, res) => {
  const { id } = req.params;
  const torneos = await torneoService.getTorneosById(id);
  res.json(torneos);
};

export const postTorneos = async (req, res) => {
    const torneos = await torneoService.postTorneos();
    res.json(torneos);
};

export const patchTorneos = async (req, res) => {
    const { id } = req.params;
    const torneos = await torneoService.patchTorneos();
    res.json(torneos);
};

export const deleteTorneos = async (req, res) => {
    const { id } = req.params;
    const torneos = await torneoService.deleteTorneos();
    res.json(torneos);
};