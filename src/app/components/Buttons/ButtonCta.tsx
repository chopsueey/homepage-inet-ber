import Link from "next/link";
import "./style.css";
import { motion } from "framer-motion";

const ButtonCta = () => {
  // const handleClick = () => {
  //   const serviceSection = document.getElementById("Service");
  //   if (serviceSection) {
  //     serviceSection.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        bounce: 0.6,
        type: "spring",
      }}
      className="absolute bottom-[10%] flex h-fit w-full justify-center bg-transparent"
    >
      <Link
      href={"#Service"}
        // onClick={handleClick}
        className="btn relative flex items-center justify-center rounded-full bg-transparent p-4 px-6 duration-200 after:bg-white after:text-black hover:scale-110 hover:before:opacity-0 dark:after:bg-black dark:after:text-white shadow-lg"
      >
        <span className="z-50 text-black dark:text-white text-lg">
          Dienstleistungen
        </span>
      </Link>
    </motion.div>
  );
};

export default ButtonCta;
