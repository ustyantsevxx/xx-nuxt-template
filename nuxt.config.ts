import { NuxtConfig } from '@nuxt/types'

const inProduction = process.env.NODE_ENV === 'production'

const config: NuxtConfig = {
  head: {
    title: 'archie-nuxt-ts-tailwind',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  build: {
    ...(inProduction && {
      html: {
        minify: {
          collapseBooleanAttributes: true,
          decodeEntities: true,
          minifyCSS: true,
          minifyJS: true,
          processConditionalComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          trimCustomFragments: true,
          useShortDoctype: true
        }
      },
      modern: 'client'
    }),
    cssSourceMap: false,
    cache: inProduction
  },

  css: [],

  plugins: [],

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    'nuxt-typed-vuex'
  ],

  modules: ['@nuxtjs/axios'],

  splitChunks: {
    layouts: true,
    pages: true,
    commons: true
  },

  vue: {
    // @ts-ignore
    config: {
      productionTip: false
    }
  }
}

export default config
