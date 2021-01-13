<template>
  <div>
    <navbar />
    <companies />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'
import Navbar from '~/components/pages/work/Navbar.vue'
import Companies from '~/components/pages/work/companies/Companies.vue'

export default Vue.extend({
  components: { Navbar, Companies },

  async asyncData(ctx: Context) {
    await ctx.$accessor.companies.fetchAll()
  }
})
</script>
