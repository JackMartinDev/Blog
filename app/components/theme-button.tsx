"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <Image
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAABCAQAAAAGVCQYAAAADElEQVR42mNkoDIAAACiAAIfFnU0AAAAAElFTkSuQmCC"
        width={40}
        height={40}
        sizes="40x40"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    );

  if (resolvedTheme === "dark") {
    return (
      <button
        onClick={() => setTheme("light")}
        className="rounded-full hover:bg-slate-100 p-2 transition-colors dark:text-white dark:hover:bg-slate-800 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium h-10 w-10"
      >
        {sunIcon}
      </button>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <button
        onClick={() => setTheme("dark")}
        className="rounded-full hover:bg-slate-100 p-2 transition-colors dark:text-white dark:hover:bg-slate-800 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium h-10 w-10"
      >
        {moonIcon}
      </button>
    );
  }
};

export default ThemeButton;

const sunIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 scale-0 dark:scale-100 absolute rotate-90 transition-all dark:rotate-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    width="24"
    height="24"
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
    className="w-6 h-6 scale-100 dark:scale-0 absolute rotate-0 transition-all dark:-rotate-90"
    fill="none"
    stroke="currentColor"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
  </svg>
);
