import type { Config } from 'tailwindcss';

const { nextui } = require('@nextui-org/react');

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'gray-700': '#374151',
        'gray-2': '#8F8FA3',
        title: 'var(--title)',
        subtitle: 'var(--subtitle)',
        card: 'var(--card)',
        'card-dark': '#0c0c17',
        base: '#000000',
        white: '#ffffff',
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        rose: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
          950: '#4c0519',
        },
        primary: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#0F11A3',
          800: '#9f1239',
          900: '#070746',
          950: '#4c0519',
        },
      },
      fontFamily: {
        lora: ['Lora', 'serif'],
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: '#020212',
            foreground: 'white',
            title: '#ffffff',
            subtitle: '#ffffff',
            card: '#0c0c17',
          },
        },
        light: {
          colors: {
            background: '#f6f6fe',
            foreground: '#000000',
            title: '#080b5e',
            subtitle: '#070746',
            card: 'white',
          },
        },
      },
    }),
  ],
  darkMode: 'class',
};
export default config;
