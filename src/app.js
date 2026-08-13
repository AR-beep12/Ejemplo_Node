import express from "express";
import equiposRoutes from "./routes/equipo.routes.js";
import personasRoutes from "./routes/persona.routes.js";
import torneosRoutes from "./routes/torneo.routes.js";
import ejemploRoutes from "./routes/ejemplo.routes.js";

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
    res.json({ status: "ok" });
});

app.use("/api/equipos", equiposRoutes);
app.use("/api/personas", personasRoutes);
app.use("/api/torneos", torneosRoutes);
app.use("/api/ejemplo", ejemploRoutes);

export default app;