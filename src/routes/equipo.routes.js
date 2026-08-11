import { Router } from "express";
import { getEquipos } from "../controllers/equipo.controller.js";

const router = Router();

router.get("/", getEquipos);


export default router;