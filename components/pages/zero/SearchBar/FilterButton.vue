<template>
  <div class="relative transition-all duration-300 cursor-pointer">
    <img :src="background" :class="backgroundClass" alt="Filter button" />

    <div class="flex absolute inset-0 flex-col justify-center items-center">
      <div class="font-bold">{{ title }}</div>
      <svg
        class="block mt-3"
        width="35"
        height="35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="17.5"
          cy="17.5"
          r="16.5"
          stroke="#F04E2A"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.5 10v7.5m0 7.5v-7.5m0 0H10h15"
          stroke="#F04E2A"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true
    },
    background: {
      type: String,
      required: true
    },
    backgroundClass: {
      type: String,
      default: ''
    }
  }
})
</script>
