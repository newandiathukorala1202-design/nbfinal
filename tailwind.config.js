/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkOrange: {
          900: '#7c2d12',
          800: '#9a3412',
          700: '#c2410c',
          600: '#ea580c',
          500: '#f97316',
          400: '#fb923c',
        },
        slateGrey: {
          950: '#0b0f19',
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
          600: '#475569',
          500: '#64748b',
          400: '#94a3b8',
          300: '#cbd5e1',
          200: '#e2e8f0',
          100: '#f8fafc',
        },
        navyBlue: {
          950: '#060d1f',
          900: '#0a1738',
          800: '#0f2456',
          700: '#153478',
          600: '#1d4ed8',
          500: '#2563eb',
          400: '#3b82f6',
        },
        businessRed: {
          950: '#2c080e',
          900: '#450a12',
          800: '#6b121c',
          700: '#881337',
          600: '#9f1239',
          500: '#be123c',
          400: '#e11d48',
        }
      },
      fontFamily: {
        sans: ['Inter', 'PT Sans', 'sans-serif'],
      },
      backgroundImage: {
        'site-gradient': 'radial-gradient(ellipse at top, rgba(30, 58, 138, 0.25), rgba(15, 23, 42, 0.95), #060d1f)',
        'business-gradient': 'radial-gradient(ellipse at top, rgba(136, 19, 55, 0.4), rgba(10, 23, 56, 0.95), #060d1f)',
      }
    },
  },
  plugins: [],
}
