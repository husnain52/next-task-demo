const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins, sans-serif", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".clip-right-tilt": {
          clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0 100%)",
        },
      });
    }),
  ],
};
