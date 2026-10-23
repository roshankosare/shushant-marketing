/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Uplift Marketing Agency Theme
        uplift: {
          purple: "#735AE5",          // Refined Brand Accent Purple
          purpleHover: "#5F45D1",     // Primary Button Hover
          purpleLight: "#F5F3FF",     // Soft Purple Tint
          purpleSubtle: "#FAF8FF",    // Very light accent background
          purpleBorder: "#E9E5FC",    // Subtle purple border
          dark: "#0F172A",            // Charcoal Headings
          body: "#475569",            // Body Text
          muted: "#64748B",           // Subtext / Captions
          bg: "#FFFFFF",              // Primary White Background
          bgAlt: "#F8FAFC",           // Light Grey Secondary Background
          border: "#E2E8F0",          // Card & Section Borders
          borderLight: "#F1F5F9",     // Sub-dividers
        },
        // Official Shiprocket Color Theme (Aliases)
        shiprocket: {
          purple: "#735AE5",          // Brand Primary Violet
          purpleHover: "#5F45D1",     // Primary Hover
          purpleLight: "#F5F3FF",     // Lavender Badge BG
          purpleSubtle: "#FAF8FF",    // Gradient Light
          purpleBorder: "#E2E8F0",    // Border
          navy: "#0F172A",            // Clean Slate Navy
          navyDark: "#0B0F19",        // Dark Footer Slate
          dark: "#0F172A",            // Primary Slate Dark Heading
          body: "#475569",            // Body Text Slate
          muted: "#64748B",           // Subtext / Placeholder
          bgLight: "#F8FAFC",         // Minimalist Subtle Background Tint
          bgAlt: "#F1F5F9",           // Section Alt Subtle Grey
          border: "#E2E8F0",          // Subtle Border Grey
          borderLight: "#F1F5F9",     // Card Divider
          green: "#00D084",           // Accent Green
          greenDark: "#067647",       // Verified Badge
          blue: "#0693E3",            // Accent Blue
        },
        // Fallback agency aliases mapped directly to Uplift tokens
        agency: {
          bg: "#FFFFFF",
          card: "#FFFFFF",
          cardHover: "#F8FAFC",
          border: "#E2E8F0",
          borderLight: "#F1F5F9",
          gold: "#735AE5",
          goldHover: "#5F45D1",
          goldLight: "#F5F3FF",
          goldMuted: "rgba(115, 90, 229, 0.08)",
          text: "#0F172A",
          muted: "#475569",
          purple: "#735AE5",
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
          '100%': { transform: 'translateX(0%)' },
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
        'sr-sm': '0 2px 8px rgba(115, 90, 229, 0.08)',
        'sr-md': '0 8px 24px rgba(115, 90, 229, 0.12)',
        'sr-lg': '0 16px 40px rgba(115, 90, 229, 0.18)',
        'card-subtle': '0 4px 20px -2px rgba(20, 20, 19, 0.05)',
        'card-hover': '0 12px 32px -4px rgba(115, 90, 229, 0.15)',
      }
    },
  },
  plugins: [],
}
