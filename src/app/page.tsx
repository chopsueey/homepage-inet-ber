import CustomBots from "./components/Home/CustomBots";
import DiscordCommunity from "./components/Home/DiscordCommunity";
import ServerDeploy from "./components/Home/ServerDeploy";
import Service from "./components/Home/Service";
import Webdevelopment from "./components/Home/Webdevelopment";
import Equipment from "./components/Home/Equipment";
import HeroSection from "./components/Navbar/HeroSection";
import FooterFbWidescreen from "./components/flowbite-react/FooterFbWidescreen";
import MobileMenu from "./components/Navbar/MobileMenu";

export default function Home() {
  return (
    <main className="lg:container lg:relative lg:mx-auto lg:min-h-screen lg:max-w-screen-xl">
      <HeroSection />
      <MobileMenu />
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
      <FooterFbWidescreen />
    </main>
  );
}
