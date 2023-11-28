"use client";

import Image from "next/image";
import React, { ReactNode, useState, useEffect } from "react";

import imageList from "./imageList";
import AOS from "aos";
import "aos/dist/aos.css";

export default function GalleryTagFb() {
  const [category, setCategory] = useState("all");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: false,
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden">
      <div className="mb-6 mt-24">
        <h1 className="text-center text-4xl font-bold">
          Starte durch, mit unserem Equipment.
        </h1>
        <p className="p-5 text-center text-gray-600 dark:text-gray-400 sm:px-20 lg:px-40">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cum ipsam
          porro eveniet, quidem fugiat assumenda harum dolorem exercitationem
          quam?
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center py-4 md:py-8">
        <button
          data-aos="fade-left"
          data-aos-delay="100"
          type="button"
          className="mb-3 mr-3 rounded-full border border-gray-400/50 px-5 py-2.5 text-center text-base font-medium hover:bg-black hover:text-white focus:bg-black focus:text-white focus:outline-none focus:ring-4 focus:ring-gray-400/50 dark:hover:bg-[#101010] dark:hover:text-white dark:focus:bg-[#101010] dark:focus:ring-gray-400/50"
          onClick={() => setCategory("all")}
        >
          All categories
        </button>
        <button
          data-aos="fade-left"
          data-aos-delay="200"
          type="button"
          className="mb-3 mr-3 rounded-full border border-white px-5 py-2.5 text-center text-base font-medium text-gray-900 hover:border-gray-200 hover:bg-black hover:text-white focus:bg-black focus:text-white focus:outline-none focus:ring-4 focus:ring-gray-400/50 dark:border-gray-800 dark:text-white dark:hover:border-gray-400/50 dark:focus:bg-[#101010] dark:focus:ring-gray-400/50"
          onClick={() => setCategory("streaming")}
        >
          Streaming
        </button>
        <button
          data-aos="fade-left"
          data-aos-delay="300"
          type="button"
          className="mb-3 mr-3 rounded-full border border-white px-5 py-2.5 text-center text-base font-medium text-gray-800 hover:border-gray-200 hover:bg-black hover:text-white focus:bg-black focus:text-white focus:outline-none focus:ring-4 focus:ring-gray-400/50 dark:border-gray-800 dark:text-white dark:hover:border-gray-400/50 dark:focus:bg-[#101010] dark:focus:ring-gray-400/50"
          onClick={() => setCategory("gaming")}
        >
          Gaming
        </button>
        <button
          data-aos="fade-left"
          data-aos-delay="400"
          type="button"
          className="mb-3 mr-3 rounded-full border border-white px-5 py-2.5 text-center text-base font-medium text-gray-800 hover:border-gray-200 hover:bg-black hover:text-white focus:bg-black focus:text-white focus:outline-none focus:ring-4 focus:ring-gray-400/50 dark:border-gray-800 dark:text-white dark:hover:border-gray-400/50 dark:focus:bg-[#101010] dark:focus:ring-gray-400/50"
          onClick={() => setCategory("webcam")}
        >
          Webcams
        </button>
        <button
          data-aos="fade-left"
          data-aos-delay="500"
          type="button"
          className="mb-3 mr-3 rounded-full border border-white px-5 py-2.5 text-center text-base font-medium text-gray-800 hover:border-gray-200 hover:bg-black hover:text-white focus:bg-black focus:text-white focus:outline-none focus:ring-4 focus:ring-gray-400/50 dark:border-gray-800 dark:text-white dark:hover:border-gray-400/50 dark:focus:bg-[#101010] dark:focus:ring-gray-400/50"
          onClick={() => setCategory("headphones")}
        >
          Kopfhörer
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {imageList
          .filter((image) =>
            category === "all" ? image : image.category === category,
          )
          .map((image) => {
            return (
              <div key={image.id} className="rounded-lg shadow-lg">
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={400}
                />
              </div>
            );
          })}
        {/* <div className="rounded-lg shadow-lg">
          <Image
            className="h-auto max-w-full rounded-lg"
            src={img1}
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="rounded-lg shadow-lg">
          <Image
            className="h-auto max-w-full rounded-lg"
            src={img2}
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="rounded-lg shadow-lg">
          <Image
            className="h-auto max-w-full rounded-lg"
            src={img3}
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="rounded-lg shadow-lg">
          <Image
            className="h-auto max-w-full rounded-lg"
            src={img3}
            alt=""
            width={300}
            height={300}
          />
        </div> */}
      </div>
    </div>
  );
}
