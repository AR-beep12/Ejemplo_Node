import { Router } from "express";
import {
  getEquiposPersonas,
  getEquiposPersonasById,
  postEquiposPersonas,
  patchEquiposPersonas,
  deleteEquiposPersonas,
} from "../controllers/equipo_persona.controller.js";

const router = Router();

router.get("/", getEquiposPersonas);
router.post("/", postEquiposPersonas);
router.get("/:id", getEquiposPersonasById);
router.patch("/:id", patchEquiposPersonas);
router.delete("/:id", deleteEquiposPersonas);

export default router;