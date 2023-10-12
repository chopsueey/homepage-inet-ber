"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { RiMenu4Line } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";
import { MdModeNight } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import GeneralStore from "@/app/context/GeneralContext";

const Navbar = () => {
  const [darkMode, setDarkMode] = GeneralStore();
  const [isOpen, setIsOpen] = useState(false);
  // const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
    if (!localStorage.theme) {
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, [darkMode]);

  return (
    <header className="fixed z-10 w-full shadow-md backdrop-blur-sm dark:shadow-gray-400/50">
      <nav className="mx-auto flex h-[66px] w-full max-w-screen-2xl items-center justify-between p-2 px-6 lg:px-14">
        <div className="flex space-x-10">
          <Link href="/" className="text-2xl">
            Inet Beringer
          </Link>
          {/* tablet and widescreen */}
          <ul className="hidden items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 lg:flex">
            <li className="hover:text-black dark:hover:text-white">
              <Link href="/about">Webentwicklung</Link>
            </li>
            <li className="hover:text-black dark:hover:text-white">
              <Link href="/contact">Server</Link>
            </li>
            <li className="hover:text-black dark:hover:text-white">
              <Link href="/contact">Bots</Link>
            </li>
            <li className="hover:text-black dark:hover:text-white">
              <Link href="/contact">Gaming</Link>
            </li>
            <li className="hover:text-black dark:hover:text-white">
              <Link href="/contact">Community</Link>
            </li>
            <li className="hover:text-black dark:hover:text-white">
              <Link href="/contact">Über uns</Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <button
            className="w-fit rounded-full p-2 hover:bg-gray-300 dark:hover:bg-gray-600/50"
            onClick={toggleDarkMode}
          >
            {darkMode ? (
              <span className="text-xl text-white dark:text-white/90 hover:dark:text-white">
                <MdOutlineLightMode />
              </span>
            ) : (
              <span className="text-xl text-gray-700 hover:text-black">
                <MdModeNight />
              </span>
            )}
          </button>
        </div>
        <button className="cursor-pointer lg:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <span className="text-2xl">
              <VscChromeClose />
            </span>
          ) : (
            <span className="text-3xl">
              <RiMenu4Line />
            </span>
          )}
        </button>
        {/* mobile menu */}
        <ul
          className={`${
            styles.mobileMenu
          } absolute -right-full top-[68px] h-screen w-full list-none justify-between bg-white p-8 text-gray-600 ease-in dark:bg-black dark:text-gray-400 lg:hidden ${
            isOpen ? " right-0 flex lg:hidden" : "hidden"
          }`}
        >
          <div className="w-fit space-y-6">
            <li className="hover:text-black dark:hover:text-white">
              <Link href="/about" onClick={() => setIsOpen(!isOpen)}>
                Webentwicklung
              </Link>
            </li>
            <li className="hover:text-black dark:hover:text-white">
              <Link href="/contact" onClick={() => setIsOpen(!isOpen)}>
                Server
              </Link>
            </li>
            <li className="hover:text-black dark:hover:text-white">
              <Link href="/contact" onClick={() => setIsOpen(!isOpen)}>
                Bots
              </Link>
            </li>
            <li className="hover:text-black dark:hover:text-white">
              <Link href="/contact" onClick={() => setIsOpen(!isOpen)}>
                Gaming
              </Link>
            </li>
            <li className="hover:text-black dark:hover:text-white">
              <Link href="/contact" onClick={() => setIsOpen(!isOpen)}>
                Community
              </Link>
            </li>
            <li className="hover:text-black dark:hover:text-white">
              <Link href="/contact" onClick={() => setIsOpen(!isOpen)}>
                Über uns
              </Link>
            </li>
          </div>
          <div>
            <button
              className="w-fit rounded-full p-2 hover:bg-gray-300 dark:hover:bg-gray-600/50"
              onClick={toggleDarkMode}
            >
              {darkMode ? (
                <span className="text-xl text-white dark:text-white/90 hover:dark:text-white">
                  <MdOutlineLightMode />
                </span>
              ) : (
                <span className="text-xl text-gray-700 hover:text-black">
                  <MdModeNight />
                </span>
              )}
            </button>
          </div>
          {/* <button
            className="w-fit rounded-full border border-gray-500 p-1 hover:bg-slate-200 dark:hover:bg-gray-900"
            onClick={toggleDarkMode}
          >
            {darkMode ? (
              <span className="text-xl text-yellow-300 hover:text-yellow-200">
                <MdOutlineLightMode />
              </span>
            ) : (
              <span className="text-xl">
                <MdModeNight />
              </span>
            )}
          </button> */}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

// import Link from "next/link";

// export default function Navbar() {
//     return  (
//         <nav className="flex justify-around text-white">
//             <ul className="flex space-x-2">
//                 <Link href={'/'}>home</Link>
//                 <Link href={'/about'}>about</Link>
//                 <Link href={'/contact'}>contact</Link>
//             </ul>
//         </nav>
//     )
// }
