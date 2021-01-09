import { Auth } from '@nuxtjs/auth-next'
import { accessorType } from '~/store'
import { User } from '~/types/User'

declare module 'vue/types/vue' {
  interface Vue {
    $accessor: typeof accessorType
    $mq: string
    // @ts-ignore
    $auth: Omit<Auth, 'user'> & { user: User }
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $accessor: typeof accessorType
  }
}
