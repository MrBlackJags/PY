/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        serif: ["Cinzel", "Georgia", "serif"],
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        terra: {
          bg: "#0c0a09",
          card: "#1c1917",
          border: "#44403c",
          accent: "#f97316",
          glow: "#ea580c",
          light: "#fdba74",
        },
        abyss: {
          bg: "#030712",
          card: "#0f172a",
          border: "#1e293b",
          accent: "#06b6d4",
          glow: "#0891b2",
          light: "#67e8f9",
        },
        aether: {
          bg: "#09090b",
          card: "#18181b",
          border: "#27272a",
          accent: "#a855f7",
          glow: "#9333ea",
          light: "#d8b4fe",
        }
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
