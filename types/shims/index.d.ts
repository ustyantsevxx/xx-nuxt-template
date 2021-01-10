import { Auth } from '@nuxtjs/auth-next'
import { accessorType } from '~/store'
import { User } from '~/types/User'

type AuthWithUser = Omit<Auth, 'user'> & { user: User }

declare module 'vue/types/vue' {
  interface Vue {
    $accessor: typeof accessorType
    $mq: string
    // @ts-ignore
    $auth: AuthWithUser
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $mq: string
    $accessor: typeof accessorType
    // @ts-ignore
    $auth: AuthWithUser
  }

  interface Context {
    $mq: string
    $accessor: typeof accessorType
    // @ts-ignore
    $auth: AuthWithUser
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $mq: string
    $accessor: typeof accessorType
    // @ts-ignore
    $auth: AuthWithUser
  }
}
