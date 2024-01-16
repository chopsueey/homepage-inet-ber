import Link from "next/link";
import { CommunitySvg, DiscordSvg, GamingSvg, ServerDeploySvg, ShopSvg, WebdevSvg } from "../Svgs/FeaturesFbSvgs";
export default function FeaturesFb() {
  const serviceContent = [
    {
      heading: "Webentwicklung",
      text: "Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.",
      icon: <WebdevSvg />,
    },
    {
      heading: "Server Deployment",
      text: "Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.",
      icon: <ServerDeploySvg />,
    },
    {
      heading: "Custom Bots",
      text: "Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.",
      icon: <DiscordSvg />,
    },
    {
      heading: "Gaming und Streaming",
      text: "Audit-proof software built for critical financial operations like month-end close and quarterly budgeting.",
      icon: <GamingSvg/>,
    },
    {
      heading: "Community",
      text: "Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration.",
      icon: <CommunitySvg />,
    },
    {
      heading: "Shop einbindung",
      text: "Keep your company’s lights on with customizable, iterative, and structured workflows built for all efficient teams and individuals.",
      icon: <ShopSvg />,
    },
  ];

  return (
    <div className="mx-auto max-w-screen-xl px-4 pb-8 sm:pb-16 lg:px-6">
      {/* <div className="my-10 flex justify-center lg:mb-16">
          <h2 className="text-center text-4xl tracking-tight text-gray-900 dark:text-white font-bold">
            Unsere Dienstleistungen
          </h2>
         

        </div> */}
      <div className="md:grid md:grid-cols-2 md:gap-8 md:space-y-0 lg:grid-cols-3 lg:gap-6">
        {serviceContent.map((service, index) => (
          <Link href={"#"} key={index} className="h-fit w-fit">
            <div className="m-2 mx-1 rounded-xl bg-transparent p-4 shadow-lg duration-200 hover:bg-gray-100 dark:border dark:border-neutral-800 dark:hover:border-blue-600 dark:hover:bg-[#101010] md:m-0 lg:hover:scale-105">
              {/* <div className="bg-primary-100 dark:bg-primary-900 mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12">
              </div> */}
              <div className="flex space-x-3 items-center mb-2">
                {service.icon}
                <h3 className="text-xl font-bold dark:text-white">
                  {service.heading}
                </h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400">{service.text}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
