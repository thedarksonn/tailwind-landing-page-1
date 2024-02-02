/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      colors: {
        // light mode colors
        lighttext: "#050315", //black
        lightbackground: "#fbfbfe", //light
        lightprimary: "#2f27ce", //blue
        lightsecondary: "#dedcff", //secondary
        lightaccent: "#433bff", //some light blue

        // dark mode colors
        darktext: "#eae9fc",
        darkbackground: "#010104",
        darkprimary: "#3a31d8",
        darksecondary: "#010024",
        darkaccent: "#0600c2",
      },
      keyframes: {
        move: {
          "50%": { transform: "translateY(-1rem)" },
        },
      },
      animation: {
        movingY: "move 2s linear infinite",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
        },
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        dmsans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
