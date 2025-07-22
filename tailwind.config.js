module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        green: "hsl(171, 66%, 44%)",
        blue: "hsl(233, 100%, 69%)",
        darkGray: "hsl(210, 10%, 33%)",
        gray: "hsl(201, 11%, 66%)",
        lightGray: "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        sans: ["Bai Jamjuree", "sans-serif"],
      },
    },
  },
  plugins: [],
};
