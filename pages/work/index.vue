<template>
  <div>
    <navbar />
    <hero />
    <companies />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '~/components/pages/work/Navbar.vue'
import Hero from '~/components/pages/work/Hero.vue'
import Companies from '~/components/pages/work/Companies.vue'

export default Vue.extend({
  components: { Companies, Hero, Navbar }
})
</script>
