/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        black: "#000000",
        purple: "#8b31ff",
        red: "#cf0000",
        green: "#00ac56",
        indigo: {
          light: "#2E073F",
          dark: "#001F3F",
          sunny: "#624E88",
          btn: "#640D5F",
        },
        gray: {
          light: {
            1: "#f0f0f0",
            2: "#dbdbdb",
            3: "#aaaaaa",
            4: "#8a8a8a",
          },
          dark: {
            1: "#323133",
            2: "#242225",
            3: "#1e1b20",
            4: "#1a171e",
            5: "#120e16",
          },
        },
        sun: {
          DEFAULT: '#8b31ff', // Purple 500
        },
        moon: {
          DEFAULT: '#00ffff', // Cyan
        }
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/galaxy_bg.jpg')",
      },
    },
  },
  plugins: [],
}
