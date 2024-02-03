"use client";

import FeaturesFb from "../flowbite-react/FeaturesFb";
import { motion, useInView } from "framer-motion";

export default function Service() {
  // const ref = useRef(null);
  // const isInView = useInView(ref);

  // const animationVariants = {
  //   hidden: { scale: 0 },
  //   visible: { scale: 1, transition: { duration: 0.3, ease: "easeInOut" } },
  // };
  return (
    <motion.section
    id="Service"
      // initial="hidden"
      // animate={isInView ? "visible" : "hidden"}
      // variants={animationVariants}
      className="container mx-auto scroll-mt-20 max-w-screen-2xl rounded-3xl shadow-lg dark:bg-neutral-900/30"
      // ref={ref}
    >
      <div className="flex flex-col items-center border-gray-300 p-4 text-center dark:border-gray-400/50">
        <p className="p-10 text-lg font-bold text-blue-600">
          Webentwicklung. Gameserver. Custom&nbsp;Bots.
        </p>
        <h1 className="mb-16 mt-2 text-5xl font-bold lg:text-8xl">
          Wir machen es.
        </h1>
        {/* <p className="max-w-3xl text-xl text-gray-600 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          adipisci molestias, aut est voluptas voluptates? Maiores enim iusto
          numquam aliquam!
        </p> */}
      </div>

      <FeaturesFb />
    </motion.section>
  );
}
