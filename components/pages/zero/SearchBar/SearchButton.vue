<template>
  <div class="relative">
    <img
      src="~/assets/backgrounds/search.svg"
      :class="backgroundClass"
      alt="Search button"
    />

    <div class="flex absolute inset-0 flex-col justify-center items-center">
      <div class="font-bold">Найти</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    backgroundClass: {
      type: String,
      default: ''
    }
  }
})
</script>
