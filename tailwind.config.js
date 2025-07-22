module.exports = {
  darkMode: "class",
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
        dark: {
          bg: "#121212",
          surface: "#1E1E1E",
          text: "#FFFFFF",
          secondary: "#B3B3B3",
          accent: {
            green: "hsl(171, 66%, 50%)", // Brighter green for dark mode
            blue: "hsl(233, 100%, 75%)", // Brighter blue for dark mode
          },
          footer: "#1A1A1A",
        },
      },
      fontFamily: {
        sans: ["Bai Jamjuree", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in",
        "slide-in": "slideIn 0.5s ease-out",
        "bounce-slow": "bounce 3s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
