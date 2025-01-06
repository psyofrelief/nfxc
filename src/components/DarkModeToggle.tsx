"use client";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode !== null) {
      if (isDarkMode) {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }
  }, [isDarkMode]);

  // If state is null, return nothing to avoid rendering mismatch on SSR
  if (isDarkMode === null) {
    return null;
  }

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
