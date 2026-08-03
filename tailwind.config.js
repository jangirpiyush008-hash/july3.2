/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        cream: '#f7f1e6',
        parchment: '#faf5eb',
        milk: '#fbf8f2',
        paper: '#ffffff',
        espresso: {
          950: '#1b0f08',
          900: '#2a1810',
          800: '#3a231a',
          700: '#4b2e21',
          600: '#5f3b2b'
        },
        ink: '#2a1810',
        muted: '#6b5b4a',
        copper: {
          500: '#b46a3f',
          600: '#9a5730',
          700: '#7b4526'
        },
        olive: {
          500: '#7a7a48',
          600: '#5f5f34'
        },
        border: '#e6dcc9'
      },
      boxShadow: {
        card: '0 12px 40px -20px rgba(42, 24, 16, 0.25)',
        soft: '0 4px 16px -6px rgba(42, 24, 16, 0.14)'
      },
      backgroundImage: {
        'warm-gradient': 'linear-gradient(140deg, #fbf8f2 0%, #f7f1e6 55%, #efe4cd 100%)'
      }
    }
  },
  plugins: []
}
