import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Garante que o Tailwind olhe para a pasta app
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Aqui conectamos a variável CSS criada no layout ao Tailwind
        impact: ["var(--font-impact)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;