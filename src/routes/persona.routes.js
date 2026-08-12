import { Router } from "express";
import { getJugadores, getArbitros, postPersonas, getPersonasById, patchPersonas, deletePersonas } from "../controllers/persona.controller.js";

const router = Router();

router.get("/jugadores", getJugadores);
router.get("/arbitros", getArbitros);
router.post("/", postPersonas);
router.get("/:id", getPersonasById);
router.patch("/:id", patchPersonas);
router.delete("/:id", deletePersonas);

export default router;