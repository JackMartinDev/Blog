"use client";
import React, { useEffect, useState } from "react";

const ThemeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    setIsDarkMode(prefersDarkMode);
    document.documentElement.classList.toggle("dark", prefersDarkMode);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.documentElement.classList.toggle("dark", newMode);
      return newMode;
    });
  };
  return (
    <>
      <button
        onClick={toggleTheme}
        className="rounded-full hover:bg-slate-100 p-2 transition-colors dark:text-white dark:hover:bg-slate-800 scale-0 dark:scale-100"
      >
        {sunIcon}
      </button>
      <button
        onClick={toggleTheme}
        className="rounded-full hover:bg-slate-100 p-2 transition-colors dark:text-white dark:hover:bg-slate-800 scale-100 dark:scale-0"
      >
        {moonIcon}
      </button>
    </>
  );
};

export default ThemeButton;

const sunIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-6 h-6"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4V2M12 22v-2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M22 12h-2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
    />
  </svg>
);

const moonIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
  </svg>
);
