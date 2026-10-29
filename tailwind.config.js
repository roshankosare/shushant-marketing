/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Uplift Brand Color Theme (Matched to CorelDRAW Logo #009933, #007A29 & Black/Silver)
        brand: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#009933', // Exact Logo Green
          700: '#007A29', // Hover state
          800: '#005C1F',
          900: '#003813',
        },
        uplift: {
          green: "#009933",           // Primary Brand Green
          greenHover: "#007A29",      // Button Hover Green
          greenLight: "#F0FDF4",      // Soft Mint Tint
          greenSubtle: "#F7FDF9",     // Very light accent background
          greenBorder: "#DCFCE7",     // Subtle green border
          silver: "#9C9C9C",          // Logo Silver/Grey Accent
          dark: "#0F172A",            // Charcoal Headings
          body: "#475569",            // Body Text
          muted: "#64748B",           // Subtext / Captions
          bg: "#FFFFFF",              // Primary White Background
          bgAlt: "#F8FAFC",           // Light Grey Secondary Background
          border: "#E2E8F0",          // Card & Section Borders
          borderLight: "#F1F5F9",     // Sub-dividers
          // Legacy purple aliases remapped to Brand Green
          purple: "#009933",
          purpleHover: "#007A29",
          purpleLight: "#F0FDF4",
          purpleSubtle: "#F7FDF9",
          purpleBorder: "#DCFCE7",
        },
        // Agency aliases mapped to brand green
        agency: {
          bg: "#FFFFFF",
          card: "#FFFFFF",
          cardHover: "#F8FAFC",
          border: "#E2E8F0",
          borderLight: "#F1F5F9",
          gold: "#009933",
          goldHover: "#007A29",
          goldLight: "#F0FDF4",
          goldMuted: "rgba(0, 153, 51, 0.08)",
          text: "#0F172A",
          muted: "#475569",
          purple: "#009933",
          navy: "#0F172A",
        }
      },
      fontFamily: {
        space: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marqueeReverse 30s linear infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'float-slow': 'float 5s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      },
      boxShadow: {
        'sr-sm': '0 2px 8px rgba(0, 153, 51, 0.08)',
        'sr-md': '0 8px 24px rgba(0, 153, 51, 0.12)',
        'sr-lg': '0 16px 40px rgba(0, 153, 51, 0.18)',
        'card-subtle': '0 4px 20px -2px rgba(20, 20, 19, 0.05)',
        'card-hover': '0 12px 32px -4px rgba(0, 153, 51, 0.15)',
        'brand-glow': '0 10px 25px -3px rgba(0, 153, 51, 0.25)',
      }
    },
  },
  plugins: [],
}
