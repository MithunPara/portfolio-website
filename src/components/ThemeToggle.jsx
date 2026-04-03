"use client";

import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import { cn } from "@/lib/utils";

const ThemeToggle = ({ className = "" }) => {
  const [mounted, setMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }

    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={cn(
        "inline-flex items-center justify-center rounded-full p-2",
        "border border-border bg-white/5",
        "transition-colors duration-300 hover:bg-secondary/15 hover:text-accent",
        className
      )}
    >
      {isDarkMode ? (
        <FaSun className="h-5 w-5 text-yellow-300" />
      ) : (
        <FaMoon className="h-5 w-5 text-slate-700" />
      )}
    </button>
  );
};

export default ThemeToggle;