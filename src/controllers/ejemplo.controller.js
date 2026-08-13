import { ejemploService } from "../services/ejemplo.service.js";

export const getData = async (req, res) => {
  const data = await ejemploService.getData();
  res.json(data);
};