"use client";

import Image from "next/image";
import img1 from "public/images/server-deployment-3-bing-ai.png";
import img2 from "public/images/server-deployment-3-light-bing-ai.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import GeneralStore from "@/app/context/GeneralContext";

export default function ServerDeploy() {
  const [darkMode, setDarkMode] = GeneralStore();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: false,
    });
  }, []);

  return (
    <>
      <div className="flex flex-col px-5 py-10 sm:px-20 lg:flex-row lg:justify-between lg:px-28">
        <div className="w-fit" data-aos="fade-left" data-aos-delay="200">
          <Image
            className="h-auto max-w-full rounded-2xl"
            src={darkMode ? img1 : img2}
            alt="webdevelopment process"
            width={400}
            height={400}
          />
        </div>
        <div
          className="mb-6 mt-8 flex flex-col items-end justify-start"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <h1
            className="text-center text-4xl font-bold"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Auch noch eigener Server?
          </h1>
          <h1
            className="relative text-center text-4xl font-bold lg:left-16"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            Kein Problem.
          </h1>
        </div>
      </div>
      <div
        className="px-5 sm:px-20 lg:px-40 text-gray-600 dark:text-gray-400"
        data-aos="fade-up"
        data-aos-delay="200"
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
    </>
  );
}
