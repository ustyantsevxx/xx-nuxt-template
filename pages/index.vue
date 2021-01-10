<template>
  <div class="text-3xl" @click="logout">{{ $auth.user.first_name }}</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  middleware: 'auth',

  data() {
    return {
      title: 'nuxt-ts'
    }
  },

  methods: {
    async logout() {
      await this.$auth.logout()
    }
  }
})
</script>
