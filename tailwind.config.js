/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#170d0a",
          900: "#211310",
          850: "#2c1a16",
          800: "#3b2520",
        },
        cream: {
          50: "#fdf8f5",
          100: "#f9eee9",
          200: "#f2dcd4",
          300: "#e8c3b8",
        },
        brand: {
          DEFAULT: "#d4291d",
          soft: "#f4b4a9",
          tint: "#fbe3dd",
          deep: "#a8160f",
          darker: "#7e0f0b",
        },
        ok: "#23935a",
        danger: "#d4291d",
      },
      fontFamily: {
        display: ["Satoshi", "system-ui", "sans-serif"],
        body: ["Satoshi", "system-ui", "sans-serif"],
        serif: ["Fraunces", "Georgia", "serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      maxWidth: {
        "5xl": "64rem",
      },
      boxShadow: {
        offset: "8px 8px 0 #f4b4a9",
        "offset-lg": "12px 12px 0 #f4b4a9",
        "offset-sm": "5px 5px 0 #f4b4a9",
      },
    },
  },
  plugins: [],
};
