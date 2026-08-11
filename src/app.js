import express from "express";
import equipoRoutes from "./routes/equipo.routes.js";

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
    res.json({ status: "ok" });
});

app.use("/api/equipos", equipoRoutes);

export default app;