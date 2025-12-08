import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "../components/ThemeProvider"; // 🌙 Theme Provider

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Annapoorna A K",
  description: "Portfolio of M.Tech AI Student - Annapoorna A K",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} dark:bg-black dark:text-white bg-white text-gray-900 transition-colors duration-300 antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="pt-20">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
