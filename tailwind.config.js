/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkgrey: "#292929",
        aboutme: "#FF9A9A",
        projects: "#D59EFF",
        spotify: "#D3FFC4",
        designs: "#A7F4FF",
        twotruthsonelie: "#FFEECC",
        hobbies: "#FFC793",
        blog: "#FFB6F3",
        github: "#D3FFE5",
        contactform: "#E6E6E6",
        pinktext: "#FEBDFF",
        brightpinktext: "#FF8BE5",
        midgrey: "#CCCCCC",
        lightgrey: "#DEDEDE",
        "aboutme-text": "#FFF1F1",
      },
      backgroundImage: {
        "gradient-dark":
          "linear-gradient(180deg, rgba(67,53,85,1) 0%, rgba(49,45,54,1) 20%, rgba(41,41,41,1) 100%)",
        "gradient-light":
          "linear-gradient(180deg, rgba(237,223,255,1) 0%, rgba(250,246,255,1) 20%, rgba(255,255,255,1) 100%);",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
