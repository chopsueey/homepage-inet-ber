"use client";

import Image from "next/image";
import React, { ReactNode, useState, useEffect } from "react";

import imageList from "./imageList";

export default function GalleryTagFb() {
  const [category, setCategory] = useState("all");

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden py-10">
      <div>
        <h1 className="text-center text-4xl font-bold">
          Starte durch, mit unserem Equipment.
        </h1>
        {/* <p className="p-5 text-center text-gray-600 dark:text-gray-400 sm:px-20 lg:px-40">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cum ipsam
          porro eveniet, quidem fugiat assumenda harum dolorem exercitationem
          quam?
        </p> */}
      </div>

      <div className="flex flex-wrap items-center justify-center py-4 md:py-8">
        <button
          data-aos="fade-left"
          data-aos-delay="100"
          type="button"
          className="mb-3 mr-3 rounded-full border border-gray-400/50 px-5 py-2.5 text-center text-base font-medium duration-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white focus:outline-none focus:ring-4 focus:ring-gray-200 dark:hover:bg-blue-600 dark:hover:text-white"
          onClick={() => setCategory("all")}
        >
          All categories
        </button>
        <button
          data-aos="fade-left"
          data-aos-delay="200"
          type="button"
          className="mb-3 mr-3 rounded-full border border-gray-400/50 px-5 py-2.5 text-center text-base font-medium duration-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white focus:outline-none focus:ring-4 focus:ring-gray-200 dark:hover:bg-blue-600 dark:hover:text-white"
          onClick={() => setCategory("streaming")}
        >
          Streaming
        </button>
        <button
          data-aos="fade-left"
          data-aos-delay="300"
          type="button"
          className="mb-3 mr-3 rounded-full border border-gray-400/50 px-5 py-2.5 text-center text-base font-medium duration-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white focus:outline-none focus:ring-4 focus:ring-gray-200 dark:hover:bg-blue-600 dark:hover:text-white"
          onClick={() => setCategory("gaming")}
        >
          Gaming
        </button>
        <button
          data-aos="fade-left"
          data-aos-delay="400"
          type="button"
          className="mb-3 mr-3 rounded-full border border-gray-400/50 px-5 py-2.5 text-center text-base font-medium duration-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white focus:outline-none focus:ring-4 focus:ring-gray-200 dark:hover:bg-blue-600 dark:hover:text-white"
          onClick={() => setCategory("webcam")}
        >
          Webcams
        </button>
        <button
          data-aos="fade-left"
          data-aos-delay="500"
          type="button"
          className="mb-3 mr-3 rounded-full border border-gray-400/50 px-5 py-2.5 text-center text-base font-medium duration-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white focus:outline-none focus:ring-4 focus:ring-gray-200 dark:hover:bg-blue-600 dark:hover:text-white"
          onClick={() => setCategory("headphones")}
        >
          Kopfhörer
        </button>
      </div>
      {/* grid grid-cols-2 gap-4 md:grid-cols-3 */}
      {/* flex flex-wrap justify-center items-center */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {imageList
          .filter((image) =>
            category === "all" ? image : image.category === category,
          )
          .map((image) => {
            return (
              <div key={image.id} className="rounded-lg">
                <Image
                  className="rounded-lg shadow-xl"
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={300}
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
