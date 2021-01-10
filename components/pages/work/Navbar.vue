<template>
  <nav class="py-3 px-3 border-b">
    <div class="mx-auto w-full lg:max-w-6xl">
      <div class="flex items-center">
        <div>
          <nuxt-link to="/work">
            <img class="w-48" src="~/assets/russia-work.png" alt="logo" />
          </nuxt-link>
        </div>

        <div class="hidden md:flex">
          <div class="ml-16 lg:ml-32">
            <nuxt-link to="/zero">Вакансии</nuxt-link>
          </div>

          <div class="ml-8">
            <nuxt-link to="/work/companies">Компании</nuxt-link>
          </div>
        </div>
        <div class="ml-auto flex items-center">
          <div class="hidden lg:flex">
            <div class="">Помощь</div>
            <div class="ml-8">Р</div>
            <div class="ml-8">РУС</div>
            <div class="ml-8">Войти</div>
          </div>
          <div class="py-2 px-6 ml-8 text-white rounded-3xl bg-primary">
            Регистрация
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
