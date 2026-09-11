/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#08090c",
          900: "#0d0f14",
          850: "#12151b",
          800: "#181c24",
        },
        paper: {
          50: "#f1f2ee",
          100: "#e8e9e3",
          200: "#dee0d7",
        },
        amber: {
          DEFAULT: "#f2a63d",
          soft: "#ffc670",
          deep: "#96570d",
        },
        ok: "#35c47a",
        danger: "#ef5b5b",
      },
      fontFamily: {
        display: ["Satoshi", "system-ui", "sans-serif"],
        body: ["Satoshi", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      maxWidth: {
        "5xl": "64rem",
      },
    },
  },
  plugins: [],
};
