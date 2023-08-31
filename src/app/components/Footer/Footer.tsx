import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex min-h-[30vh] items-center justify-center border-t-2">
      <nav className="flex justify-center">
        <ul className="flex flex-wrap justify-center px-4">
          <li className="mx-2">
            <Link href="#" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li className="mx-2">
            <Link href="#" className="hover:text-gray-400">
              Store
            </Link>
          </li>
          <li className="mx-2">
            <Link href="#" className="hover:text-gray-400">
              Community
            </Link>
          </li>
          <li className="mx-2">
            <Link href="#" className="hover:text-gray-400">
              Games
            </Link>
          </li>
          <li className="mx-2">
            <Link href="#" className="hover:text-gray-400">
              News
            </Link>
          </li>
          <li className="mx-2">
            <Link href="#" className="hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
