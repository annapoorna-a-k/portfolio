"use client";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="w-full fixed top-0 left-0 backdrop-blur-lg shadow-sm py-4 px-8 flex justify-between items-center z-50 dark:bg-black/70 bg-white/60">
      <h2 className="text-xl font-bold dark:text-white">Annapoorna</h2>

      <div className="flex gap-6 items-center">
        <a href="#about" className="hover:text-blue-500 dark:text-gray-300">About</a>
        <a href="#skills" className="hover:text-blue-500 dark:text-gray-300">Skills</a>
        <a href="#projects" className="hover:text-blue-500 dark:text-gray-300">Projects</a>
        <a href="#contact" className="hover:text-blue-500 dark:text-gray-300">Contact</a>

        {/* Toggle */}
        <button
          onClick={toggleTheme}
          className="px-3 py-1 rounded-lg bg-gray-200 dark:bg-gray-800 text-sm dark:text-white"
        >
          {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}
