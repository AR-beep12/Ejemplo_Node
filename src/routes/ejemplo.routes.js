import { Router } from "express";
import { getData } from "../controllers/ejemplo.controller.js";

const router = Router();

router.get("/", getData);

export default router;