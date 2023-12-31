import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#5041BC',
        secondary: '#3a3086',
        primaryLight: '#ECEAFF',
        primaryDark: '#4F40BA',
        background: `#F9FAFE`,
        filterField: '#EDEDED',
      },
    },
  },
  plugins: [],
};
export default config;
