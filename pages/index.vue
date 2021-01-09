<template>
  <div class="text-3xl">{{ title }}</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  title = 'nuxt-ts'
}
</script>
