'use client'

import { useEffect, useState } from "react";
import GeneralStore from "@/app/context/GeneralContext";

import AOS from "aos";
import "aos/dist/aos.css";
import { MdModeNight } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const ModeToggle = () => {
  const [darkMode, setDarkMode] = GeneralStore();
  // const [darkMode, setDarkMode] = useState(false);

  

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
      mirror: false,
    });
    if (localStorage.theme === "light") setDarkMode(false);

    if (!localStorage.theme) {
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, [darkMode]);
  return (
    <button
            className="w-fit rounded-full p-2 hover:bg-gray-300 dark:hover:bg-gray-600/50 duration-200"
            onClick={toggleDarkMode}
          >
            {darkMode ? (
              <span className="text-xl text-white">
                <MdOutlineLightMode />
              </span>
            ) : (
              <span className="text-xl text-black">
                <MdModeNight />
              </span>
            )}
          </button>
  )
}

export default ModeToggle