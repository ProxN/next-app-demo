const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-family)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        white: '#ffffff',
        black: '#000000',
        'neutral-base': 'var(--color-gray-1)',
        'neutral-bg-subtle': 'var(--color-gray-2)',
        'neutral-bg-1': 'var(--color-gray-3)',
        'neutral-bg-2': 'var(--color-gray-4)',
        'neutral-bg-3': 'var(--color-gray-5)',
        'neutral-line': 'var(--color-gray-6)',
        'neutral-border': 'var(--color-gray-7)',
        'neutral-border-hover': 'var(--color-gray-8)',
        'neutral-solid': 'var(--color-gray-9)',
        'neutral-solid-hover': 'var(--color-gray-10)',
        'neutral-text': 'var(--color-gray-11)',
        'neutral-text-contrast': 'var(--color-gray-12)',

        'brand-base': 'var(--color-brand-1)',
        'brand-bg-subtle': 'var(--color-brand-2)',
        'brand-bg-1': 'var(--color-brand-3)',
        'brand-bg-2': 'var(--color-brand-4)',
        'brand-bg-3': 'var(--color-brand-5)',
        'brand-line': 'var(--color-brand-6)',
        'brand-border': 'var(--color-brand-7)',
        'brand-border-hover': 'var(--color-brand-8)',
        'brand-solid': 'var(--color-brand-9)',
        'brand-solid-hover': 'var(--color-brand-10)',
        'brand-text': 'var(--color-brand-11)',
        'brand-text-contrast': 'var(--color-brand-12)',

        'secondary-base': 'var(--color-secondary-1)',
        'secondary-bg-subtle': 'var(--color-secondary-2)',
        'secondary-bg-1': 'var(--color-secondary-3)',
        'secondary-bg-2': 'var(--color-secondary-4)',
        'secondary-bg-3': 'var(--color-secondary-5)',
        'secondary-line': 'var(--color-secondary-6)',
        'secondary-border': 'var(--color-secondary-7)',
        'secondary-border-hover': 'var(--color-secondary-8)',
        'secondary-solid': 'var(--color-secondary-9)',
        'secondary-solid-hover': 'var(--color-secondary-10)',
        'secondary-text': 'var(--color-secondary-11)',
        'secondary-text-contrast': 'var(--color-secondary-12)',

        'danger-base': 'var(--color-red-1)',
        'danger-bg-subtle': 'var(--color-red-2)',
        'danger-bg-1': 'var(--color-red-3)',
        'danger-bg-2': 'var(--color-red-4)',
        'danger-bg-3': 'var(--color-red-5)',
        'danger-line': 'var(--color-red-6)',
        'danger-border': 'var(--color-red-7)',
        'danger-border-hover': 'var(--color-red-8)',
        'danger-solid': 'var(--color-red-9)',
        'danger-solid-hover': 'var(--color-red-10)',
        'danger-text': 'var(--color-red-11)',
        'danger-text-contrast': 'var(--color-red-12)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
