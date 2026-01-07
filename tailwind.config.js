/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'text-syntax-keyword',
    'text-syntax-string',
    'text-syntax-boolean',
    'text-syntax-property',
    'text-syntax-special',
  ],
  theme: {
    extend: {
      colors: {
        'theme-bg': 'var(--background-color)',
        'theme-card': 'var(--card-background)',
        'theme-border': 'var(--border-color)',
        'theme-text': 'var(--text-primary)',
        'theme-text-secondary': 'var(--text-secondary)',
        'theme-text-accent': 'var(--text-accent)',
        'theme-text-muted': 'var(--text-muted)',
        'theme-text-icon': 'var(--text-icon)',
        'syntax-keyword': 'var(--syntax-keyword)',
        'syntax-string': 'var(--syntax-string)',
        'syntax-boolean': 'var(--syntax-boolean)',
        'syntax-property': 'var(--syntax-property)',
        'syntax-special': 'var(--syntax-special)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
          "2xl": "4rem",
          "3xl": "5rem",
        },
      },
      screens: {
        "4k": "1980px",
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        'gradient-xy': 'gradient-xy 3s ease infinite',
      },
    },
  },
  plugins: [],
}
