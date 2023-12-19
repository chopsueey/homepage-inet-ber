import { DesktopNav } from "./DesktopNav";

const HeroSection = () => {
  return (
    // shadow-md backdrop-blur-sm dark:shadow-gray-400/50
    // <motion.div
    // animate={{
    //   translateX: "-70%",
    //   transition: {
    //     duration: 0.7,
    //     ease: 'easeInOut',
    //     type: "spring"
    //   },
    // }}>
    <header
      className="lg:max-w-screen-2x z-10 lg:flex w-full lg:justify-end lg:container lg:mx-auto lg:h-screen lg:items-center"
    >
      <DesktopNav />
    </header>
  );
};

export default HeroSection;
