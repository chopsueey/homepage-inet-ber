"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { RiMenu4Line } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";
import { MdModeNight } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  
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
    localStorage.theme === "dark" ? setDarkMode(true) : setDarkMode(false);
  }, []);

  return (
    <nav className="fixed flex h-[44px] w-full items-center justify-between bg-white p-2 shadow-md dark:bg-black dark:shadow-sm dark:shadow-white">
      <div className="text-xl">
        <Link href="/">Inet Beringer</Link>
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
        } absolute -right-full top-[45px] h-screen w-full list-none flex-col border-t-red-200 bg-white p-3 ease-in dark:bg-black lg:hidden ${
          isOpen ? " right-0 flex lg:hidden" : "hidden"
        }`}
      >
        <li>
          <Link href="/about" onClick={() => setIsOpen(!isOpen)}>
            Webentwicklung{" "}
          </Link>
        </li>
        <li>
          <Link href="/contact" onClick={() => setIsOpen(!isOpen)}>
            Server
          </Link>
        </li>
        <li>
          <Link href="/contact" onClick={() => setIsOpen(!isOpen)}>
            Bots
          </Link>
        </li>
        <li>
          <Link href="/contact" onClick={() => setIsOpen(!isOpen)}>
            Community
          </Link>
        </li>
        <li>
          <Link href="/contact" onClick={() => setIsOpen(!isOpen)}>
            Über uns
          </Link>
        </li>
        <button
          className="w-fit rounded-full border border-gray-500 px-4 py-2 hover:bg-slate-200 dark:hover:bg-gray-900"
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <span className="text-yellow-300">
              <MdOutlineLightMode />
            </span>
          ) : (
            <MdModeNight />
          )}
        </button>
      </ul>
      {/* tablet and widescreen */}
      <ul className="hidden items-center space-x-2 lg:flex">
        <li>
          <Link href="/about">Webentwicklung</Link>
        </li>
        <li>
          <Link href="/contact">Server</Link>
        </li>
        <li>
          <Link href="/contact">Bots</Link>
        </li>
        <li>
          <Link href="/contact">Gaming</Link>
        </li>
        <li>
          <Link href="/contact">Community</Link>
        </li>
        <li>
          <Link href="/contact">Über uns</Link>
        </li>
        <button
          className="w-fit rounded-full border border-gray-500 px-4 py-2 hover:bg-slate-200 dark:hover:bg-gray-900"
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <span className="text-yellow-300">
              <MdOutlineLightMode />
            </span>
          ) : (
            <MdModeNight />
          )}
        </button>
      </ul>
    </nav>
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
