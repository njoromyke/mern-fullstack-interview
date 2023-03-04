/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },

    extend: {
      colors: {
        primary: "##C2185B",
        secondary: "#ffffff",
        "primary-light": "#FFCDD2",
        "primary-dark": "#880E4F",
        "secondary-light": "#ffffff",
        "secondary-dark": "#BDBDBD",
      },
    },
  },
  plugins: [],
  safelist: ["bg-primary", "bg-secondary"],
};
