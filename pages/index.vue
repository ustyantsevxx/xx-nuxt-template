<template>
  <div class="text-3xl" @click="logout">{{ $auth.user.first_name }}</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'nuxt-property-decorator'

@Component({
  middleware: 'auth'
})
export default class extends Vue {
  title = 'nuxt-ts'

  async logout() {
    await this.$auth.logout()
  }
}
</script>
