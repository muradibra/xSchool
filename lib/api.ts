export const getData = async () => {
  try {
    const res = await fetch(process.env.API_URL!);
    if (!res.ok) throw new Error("Failed to fetch");
    return await res.json();
  } catch (error) {
    console.error("API fetch failed:", error);
    return null;
  }
};
