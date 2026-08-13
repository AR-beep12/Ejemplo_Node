import { joke } from "../services/jokes.service.js";

export const getRandomJoke = async (req, res) => {
    try {
        const chiste = await joke.getRandomJoke();
        return res.json(chiste);
    } catch (error) {
        return res.status(500).json({
            message: error.message || "Error al obtener el chiste",
        });
    }
};