"use client";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setIsDarkMode(savedTheme === "dark");
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="hover:text-primary transition-colors"
      onClick={() => setIsDarkMode((prev) => !prev)}
    >
      {isDarkMode ? "// DARK" : "// LIGHT"}
    </button>
  );
}
