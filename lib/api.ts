export const getData = async () => {
  const API_URL = process.env.API_URL!;
  const res = await fetch(API_URL, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  return res.json();
};
