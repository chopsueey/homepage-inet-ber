'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import ModeToggle from './ModeToggle'

export const DesktopNav = () => {
  return (
    <>
    <motion.nav
        initial={{ x: "50vw" }}
        animate={{
          x: -200,
        }}
        transition={{
          bounce: 0.6,
          type: "spring",
        }}
        className="hidden h-fit items-center lg:flex lg:w-fit lg:flex-col"
      >
        <div className="flex space-x-10 lg:flex-col">
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
          {/* tablet and widescreen */}
          <ul className="mt-10 hidden flex-col items-end space-y-8 text-lg text-gray-600 dark:text-gray-400 lg:flex">
            <li>
              <Link
                className="link-effect relative duration-200 hover:text-black dark:hover:text-white"
                href="#Webdev"
              >
                Webentwicklung
              </Link>
            </li>
            {/* <li className="hover:text-black dark:hover:text-white duration-200">
              <Link href="/contact">Server</Link>
            </li> */}
            <li>
              <Link
                className="link-effect relative duration-200 hover:text-black dark:hover:text-white"
                href="#CustomBots"
              >
                Custom Bots
              </Link>
            </li>
            <li>
              <Link
                className="link-effect relative duration-200 hover:text-black dark:hover:text-white"
                href="#Equipment"
              >
                Equipment
              </Link>
            </li>
            <li>
              <Link
                className="link-effect relative duration-200 hover:text-black dark:hover:text-white"
                href="#Community"
              >
                Community
              </Link>
            </li>
            <li>
              <Link
                className="link-effect relative duration-200 hover:text-black dark:hover:text-white"
                href="#"
              >
                Über uns
              </Link>
            </li>
          </ul>
        </div>
        <div className="relative hidden w-full justify-end lg:flex">
          <ModeToggle />
        </div>
      </motion.nav>
      </>
  )
}
