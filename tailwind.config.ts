import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading1: ["var(--ChakraPetch-Bold)"],
        heading2: ["var(--ChakraPetch-SemiBold)"],
        heading3: ["var(--ChakraPetch-Medium)"],
        heading4: ["var(--ChakraPetch-Regular)"],
        heading5: ["var(--ChakraPetch-Light)"],
      },
      screens: {
        mobile_S: "320px",
        mobile_M: "375px",
        mobile_L: "425px",
        tablet: "758px",
        laptop: "1024px",
        laptop_L: "1440px",
      },
      colors: {
        mainGreen: "#00ff00",
        darkGreen: "#002706",
        greyMain: "#5a5a5a",
      },
    },
  },
  plugins: [],
};
export default config;
