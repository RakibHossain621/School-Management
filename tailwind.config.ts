import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Primary:'#31D582',
        scondaryColor:'#000000',
        TextColor: '#121927',
        textColor1: '#101928',
        textColor2:  '#373737'
      },
      screens:{
        'mdd':'820px',
       },
      fontSize:{
        xs:'12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '28px',
        '4xl': '32px',
        '5xl': '40px',
        '6xl': '48px'
      }
    },
  },
  plugins: [],
};
export default config;
