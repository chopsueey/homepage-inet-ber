"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Robot from "../../animation/Robot.js";

export default function CustomBots() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: false,
    });
  }, []);

  return (
    <div className="mx-auto mb-6 mt-24 flex max-w-screen-lg flex-col items-center justify-center">
      <div>
        <h1 className="px-4 text-center text-4xl font-bold">
          Wir programmieren dir maßgeschneiderte Bots.
        </h1>
      </div>
      <div
        className="py-20"
        data-aos="zoom-in"
        data-aos-delay="400"
        data-aos-anchor-placement="top-bottom"
      >
        <h1 className="pb-4 text-center text-3xl font-bold italic text-gray-600 dark:text-gray-400">
          &laquo; Beep Boop. &raquo;
        </h1>
        <div className="flex justify-center">
          <Robot />
        </div>
      </div>

      <div>
        <p className="p-5 text-center text-gray-600 dark:text-gray-400 sm:px-20 lg:px-40">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cum ipsam
          porro eveniet, quidem fugiat assumenda harum dolorem exercitationem
          quam?
        </p>
      </div>
    </div>
  );
}
