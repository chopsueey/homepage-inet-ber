import Link from "next/link";
export default function FeaturesFb() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 pb-8 sm:pb-16 lg:px-6">
      {/* <div className="my-10 flex justify-center lg:mb-16">
          <h2 className="text-center text-4xl tracking-tight text-gray-900 dark:text-white font-bold">
            Unsere Dienstleistungen
          </h2>
         
        </div> */}
      <div className="space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3 lg:gap-6">
        <div>
          <Link href={"#"}>
            <div className="rounded-xl border-[1px] border-blue-600 bg-transparent p-4 shadow-lg duration-200 hover:bg-gray-100 dark:hover:bg-[#101010] hover:scale-105">
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
            <div className="rounded-xl border-[1px] border-blue-600 bg-transparent p-4 shadow-lg duration-200 hover:bg-gray-100 dark:hover:bg-[#101010] hover:scale-105">
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

        <div>
          <Link href={"#"}>
            <div className="rounded-xl border-[1px] border-blue-600 bg-transparent p-4 shadow-lg duration-200 hover:bg-gray-100 dark:hover:bg-[#101010] hover:scale-105">
              {/* <div className="bg-primary-100 dark:bg-primary-900 mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12">
              
            </div> */}
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                <span>Custom Bots</span>
                {/* <span className="text-[#5865f2]">Custom Bots</span> */}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Auto-assign tasks, send Slack messages, and much more. Now power
                up with hundreds of new templates to help you get started.
              </p>
            </div>
          </Link>
        </div>

        <div>
          <Link href={"#"}>
            <div className="rounded-xl border-[1px] border-blue-600 bg-transparent p-4 shadow-lg duration-200 hover:bg-gray-100 dark:hover:bg-[#101010] hover:scale-105">
              {/* <div className="bg-primary-100 dark:bg-primary-900 mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12">
              
            </div> */}
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Gaming- und Streamingequipment
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
            <div className="rounded-xl border-[1px] border-blue-600 bg-transparent p-4 shadow-lg duration-200 hover:bg-gray-100 dark:hover:bg-[#101010] hover:scale-105">
              {/* <div className="bg-primary-100 dark:bg-primary-900 mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12">
              
            </div> */}
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Community
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Craft beautiful, delightful experiences for both marketing and
                product with real cross-company collaboration.
              </p>
            </div>
          </Link>
        </div>
        <div className="rounded-xl border-[1px] border-blue-600 bg-transparent p-4 shadow-lg duration-200 hover:bg-gray-100 dark:hover:bg-[#101010] hover:scale-105">
          <Link href={"#"}>
            {/* <div className="bg-primary-100 dark:bg-primary-900 mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12">
             
            </div> */}
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Shop einbindung
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Keep your company’s lights on with customizable, iterative, and
              structured workflows built for all efficient teams and individual.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
