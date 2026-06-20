import type { Metadata } from "next";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ttFirsNeue, ttHoves } from "./fonts";

export const metadata: Metadata = {
  title: "xSchool",
  description:
    "WM xSchool is a selective learning space for ambitious marketing professionals ready to step into leadership.\r\n\r\nDesigned for those moving from execution to decision-making, our programs — Emerging CMO and Marketing Pro — combine strategic thinking, creative leadership, and real-world application. Built on real business cases and guided by Wemark’s hands-on marketing experience, WM xSchool goes beyond theory to develop practitioners into confident, future-ready leaders.\r\n \r\nThe name of the school reflects both origin and intent: WM signals its connection to Wemark’s strategic and creative ecosystem, while X represents multiple layers of meaning essential to modern leadership. In mathematics, X is the multiplier. In science, the unknown. In leadership, it’s the variable that defines the CxO — a placeholder for evolving responsibility and growth. At WM xSchool, X stands for potential not yet realized — the mindset, skillset, and foresight required to lead in complexity.\r\n \r\nOur slogan, “Find your X”, invites participants to pursue clarity, uncover capabilities, and define their own trajectory. Today, we help marketing leaders grow into CMOs. Tomorrow, the same path will serve future CIOs, CFOs, and beyond — each finding their own X.\r\n \r\nxSchool is not mass education. It is role-specific transformation.\r\nIntentionally niche, deliberately designed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${ttHoves.variable} ${ttFirsNeue.variable}
        h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
