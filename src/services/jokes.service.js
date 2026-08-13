export const joke = {
    async getRandomJoke() {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke/");

        if (!response.ok) {
            throw new Error("No se pudo obtener el chiste");
        }

        const data = await response.json();
        return data;
    },
};