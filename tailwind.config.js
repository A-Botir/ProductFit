/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          md: "2rem",
          lg: "3rem",
          xl: "6rem",
        },
        center: true,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        custom: "0px 5px 10px 0px #1E959B80",
        btn: "0px 5px 10px 0px #1E959B80",
        card: "0px 15px 15px 0px #1E959B80",
      },
      screens: {
        sm: { min: "398px", max: "767px" },

        md: { min: "768px", max: "1024px" },

        lg: { min: "1280px", max: "1535px" },

        xl: { min: "1912px" },
      },
    },
  },
  plugins: [],
};
