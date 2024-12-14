/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef7ff',
          100: '#d8edff',
          200: '#b8e0ff',
          300: '#85ccff',
          400: '#49b0ff',
          500: '#1a91ff',
          600: '#0073ff',
          700: '#0059df',
          800: '#0049b5',
          900: '#004290',
        },
        secondary: {
          50: '#f2f0ff',
          100: '#eeebff',
          200: '#d9d4ff',
          300: '#b9afff',
          400: '#9582ff',
          500: '#764dff',
          600: '#6931ff',
          700: '#5b20eb',
          800: '#4c1bc4',
          900: '#3f199f',
        },
        accent: {
          50: '#fff1f3',
          100: '#ffe3e8',
          200: '#ffcbd7',
          300: '#ffa3b7',
          400: '#ff6d8f',
          500: '#ff3d6b',
          600: '#ff1953',
          700: '#ea0c43',
          800: '#c20c3a',
          900: '#a00f35',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'mesh-pattern': 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20z\' fill=\'%23ffffff\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        'neon': '0 0 5px theme(colors.primary.400), 0 0 20px theme(colors.primary.500/50)',
        'neon-strong': '0 0 5px theme(colors.primary.400), 0 0 20px theme(colors.primary.500/50), 0 0 40px theme(colors.primary.600/30)',
      },
    },
  },
  plugins: [],
};