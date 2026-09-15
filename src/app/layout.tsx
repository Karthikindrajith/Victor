import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Velankanni Shrine Basilica",
  description:
    "A place of faith, hope and devotion. Explore the history, spirituality, news and community of Velankanni.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}