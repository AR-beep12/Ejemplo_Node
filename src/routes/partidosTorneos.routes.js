import { Router } from "express";
import {
  getPartidosTorneos,
  getPartidosTorneosById,
  postPartidosTorneos,
  patchPartidosTorneos,
  deletePartidosTorneos,
} from "../controllers/partidosTorneos.controller.js";

const router = Router();

router.get("/", getPartidosTorneos);
router.post("/", postPartidosTorneos);
router.get("/:id", getPartidosTorneosById);
router.patch("/:id", patchPartidosTorneos);
router.delete("/:id", deletePartidosTorneos);

export default router;
