import { partidosTorneosService } from "../services/partidosTorneos.service.js";

export const getPartidosTorneos = async (_req, res) => {
  const partidosTorneos = await partidosTorneosService.getPartidosTorneos();
  res.json(partidosTorneos);
};

export const getPartidosTorneosById = async (req, res) => {
  const { id } = req.params;
  const partidoTorneo = await partidosTorneosService.getPartidosTorneosById(id);
  res.json(partidoTorneo);
};

export const postPartidosTorneos = async (req, res) => {
  const partidoTorneo = await partidosTorneosService.postPartidosTorneos(req.body);
  res.json(partidoTorneo);
};

export const patchPartidosTorneos = async (req, res) => {
  const { id } = req.params;
  const partidoTorneo = await partidosTorneosService.patchPartidosTorneos(id, req.body);
  res.json(partidoTorneo);
};

export const deletePartidosTorneos = async (req, res) => {
  const { id } = req.params;
  const partidoTorneo = await partidosTorneosService.deletePartidosTorneos(id);
  res.json(partidoTorneo);
};
