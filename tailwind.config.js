/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf8f5',
          100: '#f5f1ea',
          200: '#e8dfd0',
          300: '#d4c5a8',
          400: '#b8a279',
          500: '#a08555',
          600: '#8b6f42',
          700: '#735a36',
          800: '#5f4b2f',
          900: '#4f3f28',
        },
        accent: {
          50: '#fef9f3',
          100: '#fdf1e4',
          200: '#fae0c3',
          300: '#f7ca97',
          400: '#f2aa5f',
          500: '#ee8e35',
          600: '#df742a',
          700: '#b95a23',
          800: '#934825',
          900: '#773c21',
        },
        terminal: {
          black: '#0a0a0a',
          darker: '#121212',
          dark: '#1a1a1a',
          gray: '#2a2a2a',
          border: '#333333',
          muted: '#666666',
        },
        copper: {
          light: '#d4a574',
          DEFAULT: '#b8860b',
          dark: '#8b6914',
        },
        gold: {
          light: '#ffd700',
          DEFAULT: '#d4af37',
          dark: '#b8960f',
        }
      },
      fontFamily: {
        mono: ['IBM Plex Mono', 'Courier New', 'monospace'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-left': 'slideLeft 1s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-right': 'slideRight 1s cubic-bezier(0.16, 1, 0.3, 1)',
        'glow': 'glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'terminal-blink': 'terminalBlink 1s step-end infinite',
        'data-flow': 'dataFlow 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(40px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-40px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 165, 116, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 165, 116, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        terminalBlink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        dataFlow: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-terminal': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
        'grid-pattern': 'linear-gradient(to right, #333333 1px, transparent 1px), linear-gradient(to bottom, #333333 1px, transparent 1px)',
      },
      boxShadow: {
        'terminal': '0 4px 20px rgba(0, 0, 0, 0.5)',
        'copper': '0 4px 20px rgba(212, 165, 116, 0.2)',
        'gold': '0 4px 20px rgba(212, 175, 55, 0.3)',
        'inner-terminal': 'inset 0 2px 10px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}