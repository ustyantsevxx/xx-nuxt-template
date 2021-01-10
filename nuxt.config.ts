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

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    'nuxt-typed-vuex'
  ],

  head: {
    title: 'archie-nuxt-ts-tailwind',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  modules: ['@nuxtjs/axios', '@nuxtjs/auth-next'],

  server: {
    host: '0.0.0.0'
  },

  plugins: ['~/plugins/vue-mq'],

  vue: {
    // @ts-ignore
    config: {
      productionTip: false
    }
  }
}

export default config
