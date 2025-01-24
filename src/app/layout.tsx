import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import Header from "./header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Steffen Grøn Andersen | Portfolio",
  description: "Showcasing my creativity and competences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <footer className="h-[190px] bg-gray-100">Footer</footer>
      </body>
    </html>
  );
}
