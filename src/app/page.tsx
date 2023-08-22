import CustomBots from "./components/Home/CustomBots";
import DiscordCommunity from "./components/Home/DiscordCommunity";
import GamingHardware from "./components/Home/GamingHardware";
import ServerDeploy from "./components/Home/ServerDeploy";
import StreamingEquipment from "./components/Home/StreamingEquipment";
import Webdevelopment from "./components/Home/Webdevelopment";

export default function Home() {
  return (
    <main className="container mx-auto max-w-screen-xl text-white">
      <section className="h-screen flex justify-center items-center bg-[rgb(22,26,44)] border-b-2">
        <Webdevelopment />
      </section>
      <section className="h-screen flex justify-center items-center bg-[rgb(22,26,44)] border-b-2">
        <ServerDeploy />
      </section>
      <section className="h-screen flex justify-center items-center bg-[rgb(22,26,44)] border-b-2">
        <DiscordCommunity />
      </section>
      <section className="h-screen flex justify-center items-center bg-[rgb(22,26,44)] border-b-2">
        <CustomBots />
      </section>
      <section className="h-screen flex justify-center items-center bg-[rgb(22,26,44)] border-b-2">
        <StreamingEquipment />
      </section>
      <section className="h-screen flex justify-center items-center bg-[rgb(22,26,44)]">
        <GamingHardware />
      </section>
    </main>
  );
}
