/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        colorBg: '#040C18',
        colorFooter: '#031B34',
        colorBlog: '#042c54',
        colorText: '#81AFDD',
        colorSubtext: ' #FF8A71',
      },
    },
  },
  plugins: [],
};
