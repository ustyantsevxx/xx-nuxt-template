<template>
  <nav
    class="flex fixed inset-x-0 h-full flex-col transition-all duration-300 md:max-w-6xl md:mx-auto"
    :class="{ 'm-3': !expanded }"
  >
    <div
      class="grid z-50 grid-cols-3 items-center py-4 px-8 bg-white shadow-lg transition-all duration-300 ease-in-out box-border"
      :class="{
        'rounded-lg': !expanded,
        'md:shadow-none md:rounded-b-none md:border-b': !horizontalMenuVisible
      }"
    >
      <div class="flex items-center">
        <div
          class="cursor-pointer transition-all duration-300 overflow-hidden"
          :class="{
            'w-0': !['xs', 'sm'].includes($mq) && !horizontalMenuVisible,
            'w-12': ['xs', 'sm'].includes($mq) || horizontalMenuVisible
          }"
          @click="handleMenuButtonClick"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="w-6 h-6"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div id="search-bar-md-portal" />
      </div>

      <div class="justify-self-center -my-4">
        <img src="~/assets/logo-mobile.png" alt="Logo" class="h-12 md:hidden" />
        <img src="~/assets/logo.png" alt="Logo" class="h-12 hidden md:block" />
      </div>
      <div class="justify-self-end">
        <button
          v-if="!$auth.loggedIn"
          class="py-1 px-4 font-medium bg-yellow-500 rounded-lg"
          @click="login"
        >
          Вход
        </button>
        <div v-else>{{ $auth.user.first_name }}</div>
      </div>
    </div>

    <div
      class="overflow-hidden h-0 bg-gray-200 shadow-lg transition-all duration-300 transform md:bg-white md:h-auto md:rounded-b-lg"
      :class="{
        'flex-1 rounded-none h-full': expanded,
        'shadow-none -translate-y-full opacity-0':
          !expanded && horizontalMenuVisible
      }"
    >
      <div
        class="flex flex-col items-center py-5 px-8 space-y-3 text-gray-800 transition-all duration-300 ease-in-out md:flex-row md:space-y-0 md:justify-between"
      >
        <div class="w-full md:hidden">
          <portal
            selector="#search-bar-md-portal"
            :disabled="['xs', 'sm'].includes($mq)"
          >
            <label>
              <input
                type="text"
                placeholder="Поиск..."
                class="py-1 px-3 w-full text-sm font-medium text-gray-800 bg-white rounded-lg outline-none md:border-2 box-border"
              />
            </label>
          </portal>
        </div>
        <div class="text-sm font-bold">Главная</div>
        <div class="text-sm font-bold">Подборки</div>
        <div class="text-sm font-bold">Фильмы</div>
        <div class="text-sm font-bold">Мультфильмы</div>
        <div class="text-sm font-bold">Сериалы</div>
        <div class="text-sm font-bold">Новости</div>
        <div class="text-sm font-bold">Киноклубы</div>
        <div class="text-sm font-bold">Смотрим вместе</div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import { Portal } from '@linusborg/vue-simple-portal'

export default Vue.extend({
  components: { Portal },

  data() {
    return {
      expanded: false,
      horizontalMenuVisible: false
    }
  },

  watch: {
    $mq(value: string) {
      if (['md', 'lg', 'xl'].includes(value)) this.expanded = false
    }
  },

  mounted() {
    if (document) {
      document.addEventListener('scroll', () => {
        const offsetY = window.pageYOffset || document.documentElement.scrollTop
        this.horizontalMenuVisible = !(offsetY <= 25)
      })
    }
  },

  methods: {
    async login() {
      await this.$auth.loginWith('local', {
        email: '',
        password: ''
      })
    },

    handleMenuButtonClick() {
      if (['xs', 'sm'].includes(this.$mq)) this.expanded = !this.expanded
      else this.horizontalMenuVisible = !this.horizontalMenuVisible
    }
  }
})
</script>
