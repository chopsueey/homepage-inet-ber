import CustomBots from "./components/Home/CustomBots";
import DiscordCommunity from "./components/Home/DiscordCommunity";
import GamingHardware from "./components/Home/GamingHardware";
import ServerDeploy from "./components/Home/ServerDeploy";
import StreamingEquipment from "./components/Home/StreamingEquipment";
import Webdevelopment from "./components/Home/Webdevelopment";

export default function Home() {
  return (
    <main className="container mx-auto max-w-screen-xl">
      <section className="flex h-screen flex-col items-center border-b-2 p-4 pt-24 text-center">
        <p className="p-10">Webentwicklung. Gameserver. Custom&nbsp;Bots.</p>
        <h1 className="text-5xl lg:text-6xl">Wir machen es.</h1>
        <p className="text-gray-500 pt-4 max-w-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          adipisci molestias, aut est voluptas voluptates? Maiores enim iusto
          numquam aliquam!
        </p>
      </section>
      <section className="h-screen border-b-2 p-4">
        <Webdevelopment />
      </section>
      <section className="h-screen border-b-2 p-4">
        <ServerDeploy />
      </section>
      <section className="h-screen border-b-2 p-4">
        <DiscordCommunity />
      </section>
      <section className="h-screen border-b-2 p-4">
        <CustomBots />
      </section>
      <section className="h-screen border-b-2 p-4">
        <StreamingEquipment />
      </section>
      <section className="h-screen p-4">
        <GamingHardware />
      </section>
    </main>
  );
}
