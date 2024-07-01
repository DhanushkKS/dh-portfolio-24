"use client";
import { BsMoon, BsSun } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

type Theme = "light" | "dark";
export const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem]
      bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-70
      shadow-2xl flex rounded-full items-center justify-center hover:scale-110 active:scale-105 transition-all dark:bg-gray-950"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
};
