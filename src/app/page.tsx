import CustomBots from "./components/Home/CustomBots";
import DiscordCommunity from "./components/Home/DiscordCommunity";
import GamingHardware from "./components/Home/GamingHardware";
import ServerDeploy from "./components/Home/ServerDeploy";
import Service from "./components/Home/Service";
import Webdevelopment from "./components/Home/Webdevelopment";
import Equipment from "./components/Home/Equipment";
import NavbarTwo from "./components/Navbar/NavbarTwo";
import SectionWrapper from "./components/SectionWrapper";
import FooterFb from "./components/flowbite-react/FooterFb";

export default function Home() {
  return (
    <>
      <SectionWrapper>
        <NavbarTwo />

        <Service />
        {/* <section id="Webdev" className="absolute left-0 w-full border-b-[1px] border-gray-300 p-4 dark:border-gray-400/50"></section> */}

        <Webdevelopment />

        <ServerDeploy />
        {/* <section id="CustomBots" className="absolute left-0 w-full border-b-[1px] border-gray-300 p-4 dark:border-gray-400/50"></section> */}

        <CustomBots />
        {/* <section id="Equipment" className="absolute left-0 w-full border-b-[1px] border-gray-300 p-4 dark:border-gray-400/50"></section> */}

        <Equipment />
        {/* <section id="Community" className="absolute left-0 w-full border-b-[1px] border-gray-300 p-4 dark:border-gray-400/50"></section> */}

        <DiscordCommunity />
        {/* <section className="min-h-screen p-4">
        <GamingHardware />
      </section> */}
        <FooterFb />
      </SectionWrapper>

      <main className="block lg:hidden">
        <NavbarTwo />

        <Service />
        {/* <section id="Webdev" className="absolute left-0 w-full border-b-[1px] border-gray-300 p-4 dark:border-gray-400/50"></section> */}

        <Webdevelopment />

        <ServerDeploy />
        {/* <section id="CustomBots" className="absolute left-0 w-full border-b-[1px] border-gray-300 p-4 dark:border-gray-400/50"></section> */}

        <CustomBots />
        {/* <section id="Equipment" className="absolute left-0 w-full border-b-[1px] border-gray-300 p-4 dark:border-gray-400/50"></section> */}

        <Equipment />
        {/* <section id="Community" className="absolute left-0 w-full border-b-[1px] border-gray-300 p-4 dark:border-gray-400/50"></section> */}

        <DiscordCommunity />
        {/* <section className="min-h-screen p-4">
  <GamingHardware />
</section> */}
        <FooterFb />
      </main>
    </>
  );
}
