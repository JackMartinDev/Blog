"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import MoonIcon from "@/app/components/icons/moon-icon";
import SunIcon from "@/app/components/icons/sun-icon";

const ThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const handleThemeChange = () => {
    if (resolvedTheme === "dark") setTheme("light");
    else setTheme("dark");
  };

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

  return (
    <button
      onClick={handleThemeChange}
      className="rounded-full hover:bg-slate-100 p-2 transition-colors dark:text-white dark:hover:bg-slate-800 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium h-10 w-10"
      title="Toggle theme"
    >
      <SunIcon />
      <MoonIcon />
    </button>
  );
};

export default ThemeButton;
