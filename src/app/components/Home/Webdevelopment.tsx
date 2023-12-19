"use client";

import Image from "next/image";
import img1 from "public/images/webdevelopment-3-bing-ai.png";
import img2 from "public/images/webdevelopment-3-light-bing-ai.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import GeneralStore from "@/app/context/GeneralContext";
import { motion } from "framer-motion";

export default function Webdevelopment() {
  const [darkMode, setDarkMode] = GeneralStore();

  return (
    <section className="container mx-auto max-w-screen-2xl p-4 py-10 dark:bg-blue-600 rounded-3xl m-6">
      <div className="flex flex-col items-center overflow-x-hidden px-4 pb-10 lg:flex-row lg:justify-between lg:px-32">
        <div className="mb-6 mt-8 flex flex-col justify-start lg:items-end">
          <h1
            className="text-center text-4xl font-bold"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Eigene Website?
          </h1>
          <h1
            className="relative text-center text-4xl font-bold xl:left-16"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            Wir helfen dir.
          </h1>
        </div>
        <div className="w-fit" data-aos="fade-left" data-aos-delay="100">
          <Image
            className="h-auto max-w-full rounded-xl"
            src={darkMode ? img1 : img2}
            alt="webdevelopment process"
            width={400}
            height={400}
          />
        </div>
      </div>
      <div
        className="prose mx-auto px-5 text-center text-gray-600 dark:text-white"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          enim earum numquam cum doloribus soluta repellat optio autem
          reiciendis distinctio obcaecati consequatur sint ea natus, ipsa dicta?
          Quam, quaerat amet.
        </p>

        <p className="mt-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
          officia deleniti voluptatibus enim illum aliquid aspernatur quo ipsa
          error magni.
        </p>
      </div>
    </section>
  );
}
