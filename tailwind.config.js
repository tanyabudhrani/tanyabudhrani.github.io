module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ensures Tailwind scans all files in the src folder with these extensions
    './public/index.html',        // You can add other folders or files as needed
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00040f',  // Dark color
        secondary: '#00040f', // Accent color
        dimWhite: '#00040f',  // Dim white for text
      },
      backgroundImage: {
        'gradient-to-b': 'linear-gradient(to bottom, #00040f, #00040f)',
        'text-gradient': 'linear-gradient(to right, #35d3e4, #4a80ec))',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
  variants: {
    extend: {
      // smooth scrolling
      scrollBehavior: ['motion-safe', 'motion-reduce'],
    },
  }
};

// module.exports = {
//   content: ["./index.html", "./src/**/*.{js,jsx}"],
//   mode: "jit",
//   theme: {
//     extend: {
//       colors: {
//         primary: "#00040f",
//         secondary: "#00f6ff",
//         dimWhite: "rgba(255, 255, 255, 0.7)",
//         dimBlue: "rgba(9, 151, 124, 0.1)",
//       },
//       fontFamily: {
//         poppins: ["Poppins", "sans-serif"],
//       },
//     },
//     screens: {
//       xs: "480px",
//       ss: "620px",
//       sm: "768px",
//       md: "1060px",
//       lg: "1200px",
//       xl: "1700px",
//     },
//   },
//   plugins: [],
//   variants: {
//     extend: {
//       // smooth scrolling
//       scrollBehavior: ['motion-safe', 'motion-reduce'],
//     },
//   }
// };