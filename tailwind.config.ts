import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      backgroundImage: {
        "gradient-blue": "linear-gradient(rgb(255, 255, 255) 0%, rgb(28, 100, 242, 0.4) 100%)",
        "gradient-blue-dark": "linear-gradient(rgb(0, 0, 0) 0%, rgba(28, 100, 242, 0.4) 100%)",
        // Add more custom background gradients as needed
      },
      colors: {
        peachYellow: "#F7DBA7",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("flowbite/plugin")],
  darkMode: "class",
};
export default config;
