"use client";

import clsx from "clsx";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

const SectionWrapper = (children: { children: JSX.Element[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const mouseWheelHandler = useDebouncedCallback(
    (e: React.WheelEvent<HTMLElement>) => {
      let reachedBottom;
      console.log(window.innerHeight, document.documentElement.scrollHeight);
      if (window.innerHeight === document.documentElement.scrollHeight) {
        if (e.deltaY > 0) {
          if (activeIndex + 1 > children.children.length - 1) {
            setActiveIndex(0);
            reachedBottom = false;
            return;
          }
          setActiveIndex((prev) => prev + 1);
          reachedBottom = false;
          return;
        }
        if (activeIndex - 1 < 0) {
          setActiveIndex(children.children.length - 1);
          reachedBottom = false;
          return;
        }
        setActiveIndex((prev) => prev - 1);
      }
      // (
      //   Math.ceil(window.innerHeight + window.scrollY) >=
      //   document.documentElement.scrollHeight
      // ) 
      else {
        reachedBottom = true;
        return;
      }
    },
    100,
  );

  // const increaseIndex = () => {
  //   if (activeIndex + 1 > children.children.length - 1) {
  //     setActiveIndex(0);
  //     return;
  //   }
  //   setActiveIndex((prev) => prev + 1);
  // };

  // const decreaseIndex = () => {
  //   if (activeIndex - 1 < 0) {
  //     setActiveIndex(children.children.length - 1);
  //     return;
  //   }
  //   setActiveIndex((prev) => prev - 1);
  // };

  return (
    <main
      onWheel={(e) => mouseWheelHandler(e)}
      className="relative hidden h-screen w-full lg:flex lg:items-center lg:justify-center p-10"
    >
      <div className="fixed left-[2.5vw] 2xl:left-[5vw] top-[50vh] -translate-x-1/2 -translate-y-1/2 z-50 space-y-6">
        {children.children.map((child, index) => {
          return (
            <h1
              key={index}
              className={clsx("text-xl font-extrabold cursor-pointer hover:scale-150 duration-200", {
                "text-blue-600 scale-150": activeIndex == index,
              })}
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
