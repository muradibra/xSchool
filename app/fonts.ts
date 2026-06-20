import localFont from "next/font/local";

export const ttHoves = localFont({
  src: [
    {
      path: "../fonts/TT HOVES/TT Hoves Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/TT HOVES/TT Hoves Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-hoves",
  display: "swap",
});

export const ttFirsNeue = localFont({
  src: [
    {
      path: "../fonts/tt-firs-neue/TT Firs Neue Trial Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/tt-firs-neue/TT Firs Neue Trial Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-first-neue",
  display: "swap",
});
