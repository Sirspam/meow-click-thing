import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'night-rider': {
          '50': '#f8f4f4',
          '100': '#eee7e6',
          '200': '#dbcdcd',
          '300': '#c5acad',
          '400': '#ac8b8e',
          '500': '#9b7479',
          '600': '#8f676f',
          '700': '#775760',
          '800': '#624a51',
          '900': '#503e44',
          '950': '#241b1e',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
