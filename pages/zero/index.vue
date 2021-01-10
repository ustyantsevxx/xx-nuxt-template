<template>
  <main class="h-screen bg-gray-200">
    <navbar />
    <div class="h-screen bg-gray-200"></div>
    <div class="h-screen bg-gray-200"></div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '~/components/pages/zero/Navbar.vue'

export default Vue.extend({
  components: { Navbar }
})
</script>
