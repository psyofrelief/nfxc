"use client";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  // Set an initial state with null to delay reading from localStorage until after the component mounts
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if it's the client-side and get the theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      // Default to light mode if no theme is saved
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
      className="hover:text-primary transition-colors"
      onClick={() => setIsDarkMode((prev) => !prev)}
    >
      {isDarkMode ? "// DARK" : "// LIGHT"}
    </button>
  );
}
