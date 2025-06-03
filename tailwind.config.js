/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f1ff',
          100: '#cce3ff',
          200: '#99c7ff',
          300: '#66aaff',
          400: '#338eff',
          500: '#0072ff',
          600: '#005bcc',
          700: '#004599',
          800: '#002e66',
          900: '#001733',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
  safelist: [
    'text-blue-500',
    'text-purple-500',
    'text-yellow-500', 
    'text-teal-500',
    'text-green-500',
    'text-red-500',
    'bg-blue-900/30',
    'bg-purple-900/30',
    'bg-yellow-900/30',
    'bg-teal-900/30',
    'bg-green-900/30',
    'border-blue-600',
    'border-purple-600',
    'border-teal-600',
    'border-yellow-600'
  ]
};