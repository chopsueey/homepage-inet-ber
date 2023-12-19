'use client'

import { useState } from "react";
import styles from "./Navbar.module.css";
import { RiMenu4Line } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";
import Link from "next/link";
import ModeToggle from "./ModeToggle";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="flex h-fit w-full items-center justify-between p-2 px-6 lg:relative lg:hidden lg:w-fit lg:flex-col lg:px-14">
      <Link href="/" className="text-4xl lg:text-6xl">
        I
        <span
          // style={{ color: "#00319b" }}
          className="text-blue-600"
        >
          NET
        </span>{" "}
        <span className="text-2xl">BERINGER</span>
      </Link>
      <ul
        className={`${
          styles.mobileMenu
        } absolute  -right-full top-[68px] z-50 h-screen w-full list-none justify-between bg-white dark:bg-black p-8 text-gray-600 ease-in dark:text-gray-400 lg:hidden ${
          isOpen ? " right-0 flex lg:hidden" : "hidden"
        }`}
      >
        <div className="w-fit space-y-6">
          <li className="text-black dark:text-white">
            <Link href="#Webdev">Webentwicklung</Link>
          </li>
          {/* <li className="hover:text-black dark:hover:text-white duration-200">
              <Link href="/contact">
                Server
              </Link>
            </li> */}
          <li className="text-black dark:text-white">
            <Link href="#CustomBots">Custom Bots</Link>
          </li>
          <li className="text-black dark:text-white">
            <Link href="#Equipment">Equipment</Link>
          </li>
          <li className="text-black dark:text-white">
            <Link href="#Community">Community</Link>
          </li>
          <li className="text-black dark:text-white">
            <Link href="#">Über uns</Link>
          </li>
        </div>
        <div>
          <ModeToggle />
        </div>
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
  );
};

export default MobileMenu;
