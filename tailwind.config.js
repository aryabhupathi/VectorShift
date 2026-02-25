// const config = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: { extend: {} },
//   plugins: [],
// };

// export default config;


/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F8FAFC",
        card: "#FFFFFF",
        border: "#E2E8F0",
        accent: "#6366F1",
        accentSoft: "#EEF2FF",
      },
      borderRadius: {
        "2xl": "18px",
      },
      // boxShadow: {
      //   node: "0 8px 24px rgba(0,0,0,0.06)",
      //   nodeHover: "0 12px 30px rgba(0,0,0,0.12)",
      // },
      boxShadow: {
        node: "0 10px 30px rgba(15, 23, 42, 0.06)",
        nodeHover: "0 18px 45px rgba(15, 23, 42, 0.12)",
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
