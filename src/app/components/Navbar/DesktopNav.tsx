"use client";

import Link from "next/link";
import { AnimatePresence, motion, useInView } from "framer-motion";
import ModeToggle from "./ModeToggle";
import { useEffect, useRef } from "react";
import clsx from "clsx";
import {
  CommunitySvg,
  DiscordSvg,
  GamingSvg,
  WebdevSvg,
} from "../Svgs/FeaturesFbSvgs";
import Image from "next/image";

export const DesktopNav = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  let right = 0;
  let left = 0;
  if (typeof window !== "undefined") {
    right = window.innerWidth / 2 - 496 / 2;
    left = -window.innerWidth / 2 + 496 / 2;
  }

  return (
    <header
      className={
        "lg:max-w-screen-2x z-10 w-full lg:container lg:mx-auto lg:flex lg:h-screen lg:items-center lg:justify-center"
      }
    >
      <motion.nav
        initial={{ x: "60vw" }}
        animate={{
          x: "15vw",
        }}
        transition={{
          bounce: 0.6,
          type: "spring",
        }}
        className="hidden h-fit items-center lg:flex lg:w-fit lg:flex-col"
        ref={ref}
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
        <div className="relative -right-2 hidden w-full justify-end lg:mt-4 lg:flex">
          <ModeToggle />
        </div>
      </motion.nav>
      <AnimatePresence>
        {!isInView && (
          <motion.nav
            initial={{ y: "-50vh" }}
            animate={{
              y: 0,
            }}
            transition={{
              delay: 0.1,
            }}
            // {scale: 0, transition: {duration: 0.3}}
            exit={{ y: "-50vh" }}
            drag="x"
            dragConstraints={{
              top: 200,
              right: right,
              bottom: 400,
              left: left,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing" }}
            className="fixed border border-gray-200 dark:border-neutral-800 top-0 z-50 mt-4 hidden h-fit cursor-grab items-center rounded-full bg-white p-2 px-4 pl-5 shadow-lg dark:bg-neutral-900 lg:flex lg:w-fit"
          >
            <div className="flex space-x-4">
              <Link
                href="/"
                className="flex items-center space-x-1 text-2xl duration-200 hover:scale-110"
              >
                <div>
                  I
                  <span
                    // style={{ color: "#00319b" }}
                    className="text-blue-600"
                  >
                    NET
                  </span>{" "}
                </div>
                <span className="text-base">BERINGER</span>
              </Link>
              {/* tablet and widescreen */}
              <ul className="flex items-center space-x-4">
                <li className="rounded-lg hover:bg-gray-100 p-1 duration-200 hover:text-white hover:scale-125 dark:hover:bg-neutral-800/50">
                  <Link href="#Webdev">
                    <WebdevSvg />
                  </Link>
                </li>
                <li className="rounded-lg hover:bg-gray-100 p-1 duration-200 hover:text-white hover:scale-125 dark:hover:bg-neutral-800/50">
                  <Link href="#">
                    <DiscordSvg />
                  </Link>
                </li>
                <li className="rounded-lg hover:bg-gray-100 p-1 duration-200 hover:text-white hover:scale-125 dark:hover:bg-neutral-800/50">
                  <Link href="#Webdev">
                    <GamingSvg />
                  </Link>
                </li>
                <li className="rounded-lg hover:bg-gray-100 p-1 duration-200 hover:text-white hover:scale-125 dark:hover:bg-neutral-800/50">
                  <Link href="#Webdev">
                    <CommunitySvg />
                  </Link>
                </li>
                <li className="rounded-lg hover:bg-gray-100 p-1 duration-200 hover:text-white hover:scale-125 dark:hover:bg-neutral-800/50">
                  <Link href="#Webdev">
                    <Image
                      width={24}
                      height={24}
                      alt="information icon"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB1klEQVR4nN1Vy04UURDtzEQ3ghtiTKzbrFzNsPMDHH+AMIRxAxu6qiVOVJQfmJ0xfIYP+B4ekeG1JgQXU3Vd6IZrqvv2YDL9GDphQyV3VdXnVJ16dBDca2v13MNnZF8Dyo4hGRqS3/4NgeSH+jSmFjigLAPJuSFxZQ9QzgxJd3rkgWsAyvYNCO8B8of5dWk9Xbt4pC8k24aYNwF5fxyH/EW/nSbzBByQ/wDKRulHA9cIUd5q7JikSpYM3MTyctqiAW1nTBLJUm6QNivTPMk8x4yXI9cXSz/5luT0xRv3YCJAJyLTvEgWU0IQ9FwTiA88yUpOmbybAozeBzUNiD96Bb5PZodyrE6dlroEIdm2r3KYR2DV+aR/OVMEYMokCoJgLrqaTadJ7J0QPF/99dj3gGtJZCoITGQXCiXS25Kwx7xZlyAk3vIxXwvHVNe/9pgiHxaOabJo6eFyuv63JTA4eucbfJK7aB6ge3OHbCc3KMcgsq+A+K8hvg5jXiwN1oP13z3qa+mFwT3X1MxT8OQKfK5OZ+AaGUmqJx/ohuoS6Qjr02kB5E+Z5pp5Aj7NuR5XEsmSHq6qH45qXilLkWmzdCL0thjko2QZUSwQ/zQk39RX2NB7Y/8ASoqasXwop+0AAAAASUVORK5CYII="
                    />
                  </Link>
                </li>
              </ul>
              <ModeToggle />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
