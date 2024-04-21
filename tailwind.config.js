module.exports = {
  content: ['./src/*.html'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Playfair Display', 'serif']
    },
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#f4a117',
          '50': '#fffbeb',
          '100': '#fef3c7',
          '200': '#fce68b',
          '300': '#fbd14e',
          '400': '#fabd25',
          '500': '#f4a117',
          '600': '#d87607',
          '700': '#b3520a',
          '800': '#91400f',
          '900': '#773510',
          '950': '#451a03',
        }
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}