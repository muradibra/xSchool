export const getData = async () => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL!, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch");
    return await res.json();
  } catch (error) {
    console.error("API fetch failed:", error);
    return null;
  }
};
