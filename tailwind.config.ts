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
