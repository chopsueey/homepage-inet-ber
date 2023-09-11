import Link from "next/link";
export default function FeaturesFb() {
  return (
    <section className="bg-white dark:bg-black">
      <div className="mx-auto max-w-screen-xl px-4 pb-8 sm:pb-16 lg:px-6">
        <div className="my-10 flex justify-center lg:mb-16">
          <h2 className="text-center text-4xl tracking-tight text-gray-900 dark:text-white">
            Unsere Dienstleistungen
          </h2>
          {/* <p className="text-gray-500 dark:text-gray-400 sm:text-xl">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p> */}
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
          <div>
            <Link href={"#"}>
              <div className="rounded-xl border-[1px] border-gray-300 bg-transparent p-4 shadow-lg hover:border-gray-700 dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-[#101010]">
                {/* <div className="bg-primary-100 dark:bg-primary-900 mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12">
              </div> */}
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  Webentwicklung
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Plan it, create it, launch it. Collaborate seamlessly with all
                  the organization and hit your marketing goals every month with
                  our marketing plan.
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href={"#"}>
              <div className="rounded-xl border-[1px] border-gray-300 bg-transparent p-4 shadow-lg hover:border-gray-700 dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-[#101010]">
                {/* <div className="bg-primary-100 dark:bg-primary-900 mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12">
                
              </div> */}
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  Server Deployment
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Protect your organization, devices and stay compliant with our
                  structured workflows and custom permissions made for you.
                </p>
              </div>
            </Link>
            <div></div>
          </div>
          <Link href={"#"}>
            <div className="rounded-xl border-[1px] border-gray-300 bg-transparent p-4 shadow-lg hover:border-gray-700 dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-[#101010]">
              {/* <div className="bg-primary-100 dark:bg-primary-900 mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12">
             
            </div> */}
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Shop einbindung
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Keep your company’s lights on with customizable, iterative, and
                structured workflows built for all efficient teams and
                individual.
              </p>
            </div>
          </Link>
          <div>
            <Link href={"#"}>
              <div className="rounded-xl border-[1px] border-gray-300 bg-transparent p-4 shadow-lg hover:border-gray-700 dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-[#101010]">
                {/* <div className="bg-primary-100 dark:bg-primary-900 mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12">
              
            </div> */}
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  Custom Discord Bots
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Auto-assign tasks, send Slack messages, and much more. Now
                  power up with hundreds of new templates to help you get
                  started.
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href={"#"}>
              <div className="rounded-xl border-[1px] border-gray-300 bg-transparent p-4 shadow-lg hover:border-gray-700 dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-[#101010]">
                {/* <div className="bg-primary-100 dark:bg-primary-900 mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12">
              
            </div> */}
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  Streaming Equipment
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Audit-proof software built for critical financial operations
                  like month-end close and quarterly budgeting.
                </p>
              </div>
            </Link>
          </div>

          <div>
            <Link href={"#"}>
              <div className="rounded-xl border-[1px] border-gray-300 bg-transparent p-4 shadow-lg hover:border-gray-700 dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-[#101010]">
                {/* <div className="bg-primary-100 dark:bg-primary-900 mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12">
              
            </div> */}
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  Gaming Hardware
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Craft beautiful, delightful experiences for both marketing and
                  product with real cross-company collaboration.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
