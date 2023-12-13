"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

const SectionWrapper = (children: { children: JSX.Element[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const mouseWheelHandler = useDebouncedCallback(
    async (e: React.WheelEvent<HTMLElement>) => {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("done");
        }, 25);
      });

      if (e.deltaY > 0 && localStorage.getItem("reachedTop") === "true") {
        localStorage.setItem("reachedTop", "false");
      }
      if (e.deltaY < 0 && localStorage.getItem("reachedBottom") === "true") {
        localStorage.setItem("reachedBottom", "false");
      }

      if (!(window.innerHeight === document.documentElement.scrollHeight)) {
        if (e.deltaY > 0 && localStorage.getItem("reachedBottom") === "true") {
          if (activeIndex + 1 > children.children.length - 1) {
            setActiveIndex(0);
            localStorage.setItem("reachedBottom", "false");
            localStorage.setItem("reachedTop", "false");

            return;
          }
          setActiveIndex((prev) => prev + 1);
          localStorage.setItem("reachedBottom", "false");
          localStorage.setItem("reachedTop", "false");

          return;
        }

        if (localStorage.getItem("reachedTop") === "true") {
          if (activeIndex - 1 < 0) {
            setActiveIndex(children.children.length - 1);
            localStorage.setItem("reachedBottom", "false");
            localStorage.setItem("reachedTop", "false");

            return;
          }
          setActiveIndex((prev) => prev - 1);
          localStorage.setItem("reachedBottom", "false");
          localStorage.setItem("reachedTop", "false");
          return;
        }

        if (window.scrollY === 0) {
          localStorage.setItem("reachedTop", "true");
          return;
        }
        if (
          window.scrollY ===
          document.documentElement.scrollHeight - window.innerHeight
        )
          localStorage.setItem("reachedBottom", "true");
        return;
      }

      if (window.innerHeight === document.documentElement.scrollHeight) {
        if (e.deltaY > 0) {
          if (activeIndex + 1 > children.children.length - 1) {
            setActiveIndex(0);
            localStorage.setItem("reachedBottom", "false");
            localStorage.setItem("reachedTop", "false");

            return;
          }
          setActiveIndex((prev) => prev + 1);
          localStorage.setItem("reachedBottom", "false");
          localStorage.setItem("reachedTop", "false");

          return;
        }
        if (activeIndex - 1 < 0) {
          setActiveIndex(children.children.length - 1);
          localStorage.setItem("reachedBottom", "false");
          localStorage.setItem("reachedTop", "false");

          return;
        }
        setActiveIndex((prev) => prev - 1);
        localStorage.setItem("reachedBottom", "false");
        localStorage.setItem("reachedTop", "false");
      }

    },
    150,
  );

  return (
    <main
      onWheel={(e) => mouseWheelHandler(e)}
      className="relative hidden min-h-screen w-screen p-10 lg:flex lg:items-center lg:justify-center"
    >
      <div className="fixed left-[2.5vw] top-[50vh] z-50 -translate-x-1/2 -translate-y-1/2 space-y-6 2xl:left-[5vw]">
        {children.children.map((child, index) => {
          return (
            <h1
              key={index}
              className={clsx(
                "cursor-pointer text-xl font-extrabold duration-200 hover:scale-150",
                {
                  "scale-150 text-blue-600": activeIndex === index,
                },
                // {
                //   "scale-125 text-red-600": activeIndex + 1 === index && localStorage.getItem("reachedBottom") === "true",
                // },
                // {
                //   "scale-125 text-red-600": activeIndex - 1 === index && localStorage.getItem("reachedTop") === "true",
                // }
              )}
              onClick={() => setActiveIndex(index)}
            >
              {index}
            </h1>
          );
        })}
      </div>
      {children.children[activeIndex]}
    </main>
  );
};

export default SectionWrapper;
