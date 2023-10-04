import CustomBots from "./components/Home/CustomBots";
import DiscordCommunity from "./components/Home/DiscordCommunity";
import GamingHardware from "./components/Home/GamingHardware";
import ServerDeploy from "./components/Home/ServerDeploy";
import Service from "./components/Home/Service";
import Webdevelopment from "./components/Home/Webdevelopment";
import Equipment from "./components/Home/Equipment";

export default function Home() {
  return (
    <main className="container mx-auto max-w-screen-xl">
      <section className="border-b-[1px] border-gray-300 flex flex-col items-center p-4 py-20 text-center dark:border-gray-400/50 lg:py-44">
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
      </section>
      <section className="border-b-[1px] border-gray-300 p-4 dark:border-gray-400/50">
        <Service />
      </section>
      <section className="border-b-[1px] border-gray-300 min-h-screen p-4 dark:border-gray-400/50">
        <Webdevelopment />
      </section>
      <section className="border-b-[1px] border-gray-300 min-h-screen p-4 dark:border-gray-400/50">
        <ServerDeploy />
      </section>
      <section className="border-b-[1px] border-gray-300 min-h-screen p-4 dark:border-gray-400/50">
        <DiscordCommunity />
      </section>
      <section className="border-b-[1px] border-gray-300 min-h-screen p-4 dark:border-gray-400/50">
        <CustomBots />
      </section>
      <section className="min-h-screen p-4">
        <Equipment />
      </section>
      {/* <section className="min-h-screen p-4">
        <GamingHardware />
      </section> */}
    </main>
  );
}
