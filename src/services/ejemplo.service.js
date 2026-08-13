export const ejemploService = {
  async getData() {
  try {
    const response = await fetch("https://meowfacts.herokuapp.com/",);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
  
};