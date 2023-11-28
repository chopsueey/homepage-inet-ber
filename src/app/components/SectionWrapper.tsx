"use client";

import clsx from "clsx";
import { useState } from "react";

const SectionWrapper = (children: { children: JSX.Element[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const mouseWheelHandler = (e: React.WheelEvent<HTMLElement>) => {
    if (e.deltaY > 0) {
      if (activeIndex + 1 > children.children.length - 1) {
        setActiveIndex(0);
        return;
      }
      setActiveIndex((prev) => prev + 1);
      return;
    }
    if (activeIndex - 1 < 0) {
      setActiveIndex(children.children.length - 1);
      return;
    }
    setActiveIndex((prev) => prev - 1);
  };

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
      className="relative hidden h-screen w-full lg:block"
    >
      <div className="fixed left-[10vw] top-[50vh] -translate-x-1/2 -translate-y-1/2">
        {children.children.map((child, index) => {
          return (
            <h1
              key={index}
              className={clsx("", {
                "text-blue-500": activeIndex == index,
              })}
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
