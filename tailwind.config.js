module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: [],

  theme: {
    extend: {
      colors: {
        primary: '#48d1ea'
      },
      maxWidth: {
        '8xl': '1248px'
      },
      height: {
        28: '7rem'
      },
      backgroundImage: _theme => ({
        hero: "url('~assets/shridhar-gupta-d-zx-qn-4-v-ev-2-m-unsplash@2x.png')"
      })
    },
    fontFamily: {
      sans: ['sans-serif'],
      zero: ['Montserrat', 'sans-serif']
    }
  },
  variants: {},
  plugins: []
}
