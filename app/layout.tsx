import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Supomelo Studio — Product Design for Startups",
  description: "From seed to scale. Design that helps startups flourish. Supomelo is a product design studio for startups and scale-ups.",
  keywords: ["product design", "startup design", "UX design", "UI design", "design studio"],
  authors: [{ name: "Supomelo Studio" }],
  openGraph: {
    title: "Supomelo Studio — Product Design for Startups",
    description: "From seed to scale. Design that helps startups flourish.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supomelo Studio — Product Design for Startups",
    description: "From seed to scale. Design that helps startups flourish.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
