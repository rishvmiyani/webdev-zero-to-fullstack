module.exports = {
  content: [
    "./07-tailwind-css/**/*.{html,js}",
    "./src/**/*.{html,js}",
    "./*.html"
  ],
  theme: {
    extend: {
      // Custom colors for your projects
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        secondary: {
          50: '#f0f9ff',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
        },
        // Glassmorphism backgrounds
        glass: {
          100: 'rgba(255, 255, 255, 0.1)',
          200: 'rgba(255, 255, 255, 0.2)',
          300: 'rgba(255, 255, 255, 0.05)',
        }
      },
      
      // Custom font families
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      
      // Custom spacing for dashboards
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '128': '32rem',
      },
      
      // Custom border radius for modern cards
      borderRadius: {
        'xl': '1.5rem',
        '2xl': '2rem',
        '3xl': '2.5rem',
      },
      
      // Custom backdrop blur values
      backdropBlur: {
        xs: '2px',
      },
      
      // Custom animations for your projects
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0, -10px, 0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(59, 130, 246, 0.8)' },
        },
      },
      
      // Custom shadows for glassmorphism
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glow': '0 0 20px rgba(59, 130, 246, 0.5)',
        'card': '0 20px 40px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [
    // Optional: Add Flowbite plugin for components (comment out if not needed)
    // require('flowbite/plugin')
  ],
}
