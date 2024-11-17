/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../**/*.{html,js}"],



 

  theme: {
    extend: {
      screens: {
        '2xl': '1536px', // Default 2xl breakpoint from Tailwind
        'ultra': '2560px', // Custom breakpoint for 2560px resolution
        'laptop':'1440px',
        'slaptop':'1024px'
      },
    },
  },
  plugins: [],
}


