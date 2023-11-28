'use client'

import FeaturesFb from "../flowbite-react/FeaturesFb";
import { motion } from "framer-motion";

export default function Service() {
  return (
    
      <motion.section  animate={{
        scale: [0, 1],
        transition: {
          duration: 0.5,
          ease: 'easeInOut',
        },
      }} className="container mx-auto max-w-screen-2xl">
        <div className="flex flex-col items-center border-gray-300 p-4 py-20 text-center dark:border-gray-400/50 lg:py-44">
          <p className="text-md p-10 text-gray-600 dark:text-gray-400">
            Webentwicklung. Gameserver. Custom&nbsp;Bots.
          </p>
          <h1 className="mb-16 mt-2 text-5xl font-extrabold lg:text-8xl">
            Wir machen es.
          </h1>
          <p className="max-w-3xl text-xl text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            adipisci molestias, aut est voluptas voluptates? Maiores enim iusto
            numquam aliquam!
          </p>
        </div>

        <div className="flex flex-col">
          {/* <div>
        <h1 className="text-center text-4xl">Webentwicklung</h1>
        </div>
        <div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
        enim earum numquam cum doloribus soluta repellat optio autem
        reiciendis distinctio obcaecati consequatur sint ea natus, ipsa dicta?
        Quam, quaerat amet.
        </p>
      </div> */}
          <FeaturesFb />
        </div>
      </motion.section>
  );
}
