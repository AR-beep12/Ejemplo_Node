import { Router } from "express";
import { getRandomJoke } from "../controllers/jokes.controller.js";

const router = Router();

router.get("/random_joke", getRandomJoke);

export default router;