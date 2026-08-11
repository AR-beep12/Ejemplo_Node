import { Router } from "express";
import { getTorneos, postTorneos, getTorneosById, patchTorneos, deleteTorneos } from "../controllers/torneo.controller.js";

const router = Router();

router.get("/", getTorneos);
router.post("/", postTorneos);
router.get("/:id", getTorneosById);
router.patch("/:id", patchTorneos);
router.delete("/:id", deleteTorneos);

export default router;