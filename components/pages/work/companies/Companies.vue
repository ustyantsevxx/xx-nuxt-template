<template>
  <div class="mx-auto md:max-w-6xl px-3 sm:px-0">
    <h1 class="my-5 text-3xl font-bold">
      <span>Найдено компаний:</span>
      <span>{{ companies.length }}</span>
    </h1>

    <div
      class="grid grid-cols-1 gap-8 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <div
        v-for="company in companies"
        :key="company.id"
        class="p-5 rounded-lg border"
      >
        <div class="flex justify-between items-center">
          <div class="text-gray-500">{{ company.industry.name }}</div>
          <div>
            <img
              class="w-12"
              :src="company.company_logo.files.url"
              :alt="company.company_logo.filename"
            />
          </div>
        </div>

        <a href="#" class="block mt-5 text-xl font-bold text-primary">
          {{ company.name }}
        </a>

        <div class="mt-2">Основана в {{ company.foundation_year }}</div>
        <div>Более {{ company.quantity_employees }} сотрудников</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    companies() {
      return this.$accessor.companies.companies
    }
  }
})
</script>
