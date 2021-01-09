import { NuxtConfig } from '@nuxt/types'

const inProduction = process.env.NODE_ENV === 'production'

const config: NuxtConfig = {
  auth: {
    redirect: {
      login: '/zero'
    },
    vuex: { namespace: 'nuxt-auth' },
    strategies: {
      local: {
        token: {
          property: 'data.token_data.access_token'
        },
        user: {
          property: 'data'
        },
        endpoints: {
          login: {
            url: 'https://api.russia-work.com/api/v1/sign-in/email',
            method: 'post'
          },
          user: {
            url: 'https://api.russia-work.com/api/v1/account/me',
            method: 'get'
          },
          logout: {
            url: '/',
            method: 'get'
          }
        }
      }
    }
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

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    'nuxt-typed-vuex'
  ],

  css: [],

  head: {
    title: 'archie-nuxt-ts-tailwind',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  modules: ['@nuxtjs/axios', 'portal-vue/nuxt', '@nuxtjs/auth-next'],

  plugins: ['~/plugins/vue-mq.js'],

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
