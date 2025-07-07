/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0D2A47', // Example dark blue background
        foreground: '#E0E0E0', // Example light gray text
        border: '#1A3B5A',     // Example border color
        primary: {
          DEFAULT: '#10B981', // Emerald-500
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#3B82F6', // Blue-500
          foreground: '#FFFFFF',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
