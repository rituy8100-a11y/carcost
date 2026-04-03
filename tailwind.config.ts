import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#EF4444',
          orange: '#F97316',
          dark: '#0A0A0B',
          card: '#1A1A1D',
          border: 'rgba(255, 255, 255, 0.06)',
        },
      },
      animation: {
        'drive-in': 'drive-in 0.8s ease-out',
        'fade-up': 'fade-up 0.6s ease-out',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
