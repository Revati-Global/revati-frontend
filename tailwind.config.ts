import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        rg: {
          violet: '#645394',
          'violet-dark': '#524378',
          charcoal: '#35313B',
          white: '#FFFFFF',
          lavender: '#F2F1F5',
          grey: '#D9DDE3',
        },
      },
      fontFamily: {
        heading: ['var(--font-manrope)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        tech: ['var(--font-space-grotesk)', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
