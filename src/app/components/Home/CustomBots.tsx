"use client";

import Robot from "../../animation/Robot.js";

export default function CustomBots() {

  return (
    <section className="max-w-screen-2xl container mx-auto p-4 py-10 dark:bg-neutral-900/50 shadow-lg rounded-3xl my-8">
      <div className="mx-auto flex max-w-screen-lg flex-col items-center justify-center overflow-hidden">
        <div>
          <h1
            style={{ wordBreak: "break-word" }}
            className="px-4 text-center text-4xl font-bold"
          >
            Wir programmieren dir maßgeschneiderte Bots.
          </h1>
        </div>
        <div
          className="py-20"
          data-aos="zoom-in"
          data-aos-anchor-placement="top-bottom"
        >
          <h1 className="pb-4 text-center text-3xl font-bold italic text-gray-600 dark:text-gray-400">
          &raquo; Beep Boop &laquo;
          </h1>
          <div className="flex justify-center">
            <Robot />
          </div>
        </div>

        <div>
          <p className="p-5 text-center text-gray-600 dark:text-gray-400 sm:px-20 lg:px-40">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cum
            ipsam porro eveniet, quidem fugiat assumenda harum dolorem
            exercitationem quam?
          </p>
        </div>
      </div>
    </section>
  );
}
