"use client";

import { BsGithub, BsDiscord, BsFacebook } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

export default function FooterFb() {
  return (
    // container mx-auto max-w-screen-2xl
    <footer className="min-h-[35vh] w-[100vw] bg-gradient-blue dark:bg-gradient-blue-dark sm:h-[35vh]">
      {/* dark:bg-neutral-900/30 shadow-lg rounded-3xl */}
      <div className="container mx-auto h-full max-w-screen-xl">
        <div className="flex h-full w-full flex-col justify-around px-8 xl:px-4">
          <div className="mt-10 py-4 sm:py-0 md:flex md:justify-between">
            <div className="mb-10 md:mb-0">
              <a href="#" className="flex items-center">
                {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="FlowBite Logo" /> */}
                <span className="self-center whitespace-nowrap text-2xl dark:text-white">
                  Inet Beringer
                </span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                  Media
                </h2>
                <ul className="font-medium text-gray-500 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      News
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Team
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                  Contact
                </h2>
                <ul className="font-medium text-gray-500 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="https://github.com" className="hover:underline ">
                      Github
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Discord
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                  Legal
                </h2>
                <ul className="font-medium text-gray-500 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <hr className="my-6 border-gray-200 dark:border-gray-400/50 sm:mx-auto lg:my-8" /> */}
          <div className="py-4 sm:flex sm:items-center sm:justify-between sm:py-0">
            <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
              © 2023{" "}
              <a href="#" className="hover:underline">
                Inet Beringer™
              </a>
              . All Rights Reserved.
            </span>
            <div className="mt-4 flex space-x-5 sm:mt-0 sm:justify-center">
              <a href="#" className="text-[#0866fb]">
                <BsFacebook />
                <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-[#5865f2]">
                <BsDiscord />
                <span className="sr-only">Discord community</span>
              </a>
              <a href="#" className="text-black dark:text-white">
                <FaXTwitter />
                <span className="sr-only">Twitter page</span>
              </a>
              <a href="#" className="text-black dark:text-white">
                <BsGithub />
                <span className="sr-only">GitHub account</span>
              </a>
              {/* <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
                </svg>
                  <span className="sr-only">Dribbble account</span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
