"use client";

import Image from "next/image";
import React, { ReactNode, useState } from "react";

import imageList from "./imageList";

export default function GalleryTagFb() {
  const [category, setCategory] = useState("all");

  return (
    <div className="mx-auto flex max-w-screen-lg flex-col items-center justify-center">
      <div className="flex flex-wrap items-center justify-center py-4 md:py-8">
        <button
          type="button"
          className="mb-3 mr-3 rounded-full border border-gray-400/50 px-5 py-2.5 text-center text-base font-medium hover:bg-black hover:text-white focus:outline-none focus:ring-4 focus:bg-black focus:ring-gray-400/50 focus:text-white dark:hover:bg-[#101010] dark:hover:text-white dark:focus:ring-gray-400/50 dark:focus:bg-[#101010]"
          onClick={() => setCategory("all")}
        >
          All categories
        </button>
        <button
          type="button"
          className="mb-3 mr-3 rounded-full border border-white px-5 py-2.5 text-center text-base font-medium text-gray-900 hover:border-gray-200 hover:bg-black hover:text-white focus:outline-none focus:ring-4 focus:bg-black focus:ring-gray-400/50 focus:text-white dark:border-gray-900 dark:text-white dark:hover:border-gray-400/50 dark:focus:ring-gray-400/50 dark:focus:bg-[#101010]"
          onClick={() => setCategory("streaming")}
        >
          Streaming
        </button>
        <button
          type="button"
          className="mb-3 mr-3 rounded-full border border-white px-5 py-2.5 text-center text-base font-medium text-gray-900 hover:border-gray-200 hover:bg-black hover:text-white focus:outline-none focus:ring-4 focus:bg-black focus:ring-gray-400/50 focus:text-white dark:border-gray-900 dark:text-white dark:hover:border-gray-400/50 dark:focus:ring-gray-400/50 dark:focus:bg-[#101010]"
          onClick={() => setCategory("gaming")}
        >
          Gaming
        </button>
        <button
          type="button"
          className="mb-3 mr-3 rounded-full border border-white px-5 py-2.5 text-center text-base font-medium text-gray-900 hover:border-gray-200 hover:bg-black hover:text-white focus:outline-none focus:ring-4 focus:bg-black focus:ring-gray-400/50 focus:text-white dark:border-gray-900 dark:text-white dark:hover:border-gray-400/50 dark:focus:ring-gray-400/50 dark:focus:bg-[#101010]"
          onClick={() => setCategory("webcam")}
        >
          Webcams
        </button>
        <button
          type="button"
          className="mb-3 mr-3 rounded-full border border-white px-5 py-2.5 text-center text-base font-medium text-gray-900 hover:border-gray-200 hover:bg-black hover:text-white focus:outline-none focus:ring-4 focus:bg-black focus:ring-gray-400/50 focus:text-white dark:border-gray-900 dark:text-white dark:hover:border-gray-400/50 dark:focus:ring-gray-400/50 dark:focus:bg-[#101010]"
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
                  width={1000}
                  height={1000}
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
