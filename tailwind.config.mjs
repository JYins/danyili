/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFB17A',
          light: '#FFD4B3',
          dark: '#FF9142',
        },
        secondary: {
          DEFAULT: '#91B4ED',
          light: '#E6F0FF',
          dark: '#6B96E1',
        },
        text: {
          primary: '#2C3E50',
          secondary: '#666666',
        }
      },
      fontFamily: {
        sans: ['"Noto Sans SC"', 'system-ui', 'sans-serif'],
        serif: ['"Noto Serif SC"', 'Georgia', 'serif'],
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'hover': '0 10px 20px -5px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};