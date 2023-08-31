"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css"; // You can use CSS modules for styling
import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";

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
      <button className={`${styles.menuButton}`} onClick={toggleMenu}>
        {isOpen ? (
          <span className="text-2xl">
            <TfiClose />
          </span>
        ) : (
          <span className="text-3xl">
            <CiMenuBurger />
          </span>
        )}
      </button>
      {/* mobile menu */}
      <ul className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
        <li>
          <Link href="/about" onClick={() => setIsOpen(!isOpen)}>
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" onClick={() => setIsOpen(!isOpen)}>
            Contact
          </Link>
        </li>
      </ul>
      {/* tablet and widescreen */}
      <ul className={styles.nonMobileMenu}>
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
