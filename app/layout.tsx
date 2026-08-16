import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Анна Миро — HR generalist",
  description: "Нахожу сильных людей, строю понятные процессы и помогаю командам быстрее приходить к результату.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
