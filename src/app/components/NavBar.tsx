"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css"; // You can use CSS modules for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Logo</Link>
      </div>
      <button
        className={`${styles.menuButton + " lg:hidden"}`}
        onClick={toggleMenu}
      >
        {isOpen ? "open" : "closed"}
      </button>
      {/* mobile menu */}
      <ul
        className={`${styles.menu + " lg:hidden bg-slate-600 h-screen"} ${isOpen ? styles.open : ""}`}
      >
        <li className="w-fit">
          <Link href="/about" onClick={() => setIsOpen(!isOpen)}>About</Link>
        </li>
        <li className="w-fit">
          <Link href="/contact" onClick={() => setIsOpen(!isOpen)}>Contact</Link>
        </li>
      </ul>
      {/* tablet and widescreen */}
      <ul className="hidden lg:flex space-x-2">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
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
