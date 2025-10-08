export const getMeditationsList = async () => {
  try {
    const res = await fetch("https://satori-api-dngv.onrender.com");
    const data = await res.json();
    return data;
  } catch (e) {
    console.error("Error fetching meditations:", e);
    return [];
  }
};
