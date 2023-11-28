"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { RiMenu4Line } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";
import { MdModeNight } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import GeneralStore from "@/app/context/GeneralContext";
import { motion } from "framer-motion";

const NavbarTwo = () => {
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
    if (localStorage.theme === "light") setDarkMode(false);

    if (!localStorage.theme) {
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, [darkMode]);

  return (
    // shadow-md backdrop-blur-sm dark:shadow-gray-400/50
    // <motion.div
    // animate={{
    //   translateX: "-70%",
    //   transition: {
    //     duration: 0.7,
    //     ease: 'easeInOut',
    //     type: "spring"
    //   },
    // }}>
    <header className="w-full lg:max-w-screen-2x lg:container z-10 lg:mx-auto flex h-screen lg:items-end lg:justify-end">
      {/* bottom-[35%] right-[-100%] */}
      <motion.nav
        animate={{
          translateX: "-100vw",
          transition: {
            duration: 0.7,
            type: "spring",
          },
        }}
        className="bottom-[35vh] right-[-100vw] hidden h-fit w-full items-center justify-between p-2 px-6 lg:relative lg:flex lg:w-fit lg:flex-col lg:px-14"
      >
        <div className="flex space-x-10 lg:flex-col">
          <Link href="/" className="text-4xl lg:text-6xl">
            I<span style={{ color: "#00319b" }}>NET</span>{" "}
            <span className="text-2xl">BERINGER</span>
          </Link>
          {/* tablet and widescreen */}
          <ul className="mt-10 hidden flex-col items-end space-y-8 text-lg text-gray-600 dark:text-gray-400 lg:flex">
            <li>
              <Link
                className="link-effect relative hover:text-black dark:hover:dark:text-gray-400"
                href="#Webdev"
              >
                Webentwicklung
              </Link>
            </li>
            {/* <li className="hover:text-black dark:hover:text-white">
              <Link href="/contact">Server</Link>
            </li> */}
            <li>
              <Link
                className="link-effect relative hover:text-black dark:hover:dark:text-gray-400"
                href="#CustomBots"
              >
                Custom Bots
              </Link>
            </li>
            <li>
              <Link
                className="link-effect relative hover:text-black dark:hover:dark:text-gray-400"
                href="#Equipment"
              >
                Equipment
              </Link>
            </li>
            <li>
              <Link
                className="link-effect relative hover:text-black dark:hover:dark:text-gray-400"
                href="#Community"
              >
                Community
              </Link>
            </li>
            <li>
              <Link
                className="link-effect relative hover:text-black dark:hover:dark:text-gray-400"
                href="#"
              >
                Über uns
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden w-full justify-end lg:flex">
          <button
            className="relative -right-2 mt-4 w-fit rounded-full p-2 hover:bg-gray-300 dark:hover:bg-gray-600/50"
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
        
      </motion.nav>
      {/* mobile menu */}
      <nav className="flex h-fit w-full items-center justify-between p-2 px-6 lg:relative lg:hidden lg:w-fit lg:flex-col lg:px-14">
      <Link href="/" className="text-4xl lg:text-6xl">
            I<span style={{ color: "#00319b" }}>NET</span>{" "}
            <span className="text-2xl">BERINGER</span>
          </Link>
        <ul
          className={`${
            styles.mobileMenu
          } absolute -right-full top-[68px] h-screen w-full list-none justify-between p-8 text-gray-600 ease-in dark:text-gray-400 lg:hidden ${
            isOpen ? " right-0 flex lg:hidden" : "hidden"
          }`}
        >
          <div className="w-fit space-y-6">
            <li className="hover:text-black dark:hover:text-white">
              <Link href="#Webdev" onClick={() => setIsOpen(!isOpen)}>
                Webentwicklung
              </Link>
            </li>
            {/* <li className="hover:text-black dark:hover:text-white">
              <Link href="/contact" onClick={() => setIsOpen(!isOpen)}>
                Server
              </Link>
            </li> */}
            <li className="hover:text-black dark:hover:text-white">
              <Link href="#CustomBots" onClick={() => setIsOpen(!isOpen)}>
                Custom Bots
              </Link>
            </li>
            <li className="hover:text-black dark:hover:text-white">
              <Link href="#Equipment" onClick={() => setIsOpen(!isOpen)}>
                Equipment
              </Link>
            </li>
            <li className="hover:text-black dark:hover:text-white">
              <Link href="#Community" onClick={() => setIsOpen(!isOpen)}>
                Community
              </Link>
            </li>
            <li className="hover:text-black dark:hover:text-white">
              <Link href="#" onClick={() => setIsOpen(!isOpen)}>
                Über uns
              </Link>
            </li>
          </div>
          <div>
            <button
              className="relative bottom-1.5 w-fit rounded-full p-2 hover:bg-gray-300 dark:hover:bg-gray-600/50"
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
      </nav>
    </header>
    // </motion.div>
  );
};

export default NavbarTwo;
