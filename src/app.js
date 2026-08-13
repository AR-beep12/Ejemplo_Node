import express from "express";
import equiposRoutes from "./routes/equipo.routes.js";
import personasRoutes from "./routes/persona.routes.js";
import torneosRoutes from "./routes/torneo.routes.js";
import jokesRoutes from "./routes/jokes.routes.js"

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
    res.json({ status: "ok" });
});

app.use("/api/equipos", equiposRoutes);
app.use("/api/personas", personasRoutes);
app.use("/api/torneos", torneosRoutes);
app.use("/api/jokes", jokesRoutes);

export default app;