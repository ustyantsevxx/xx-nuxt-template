<template>
  <main class="container h-screen font-zeroplus">
    <navbar />
    <search-bar />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '~/components/pages/zero/Navbar.vue'
import SearchBar from '~/components/pages/zero/SearchBar/SearchBar.vue'

export default Vue.extend({
  components: { SearchBar, Navbar }
})
</script>

<style>
body {
  @apply bg-gray-200;
}
</style>
