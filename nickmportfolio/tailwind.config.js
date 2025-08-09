
export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#041E31",
        dark: "#091116",
        light: "#033C68",
        medium: "#043051",
        "second-dark": "#0C1C29",
      },
      animation: {
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
      },
      keyframes: {
        orbit: {
          "0%": {
            transform:
              "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          "100%": {
            transform:
              "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
