import { Router } from "express";
import { getEquipos, postEquipos, getEquiposById, patchEquipos, deleteEquipos } from "../controllers/equipo.controller.js";

const router = Router();

router.get("/", getEquipos);
router.post("/", postEquipos);
router.get("/:id", getEquiposById);
router.patch("/:id", patchEquipos);
router.delete("/:id", deleteEquipos);

export default router;