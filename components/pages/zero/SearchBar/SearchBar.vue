<template>
  <div class="pt-24 mx-auto max-w-6xl md:pt-40">
    <h2 class="text-xl font-bold text-center lg:text-2xl lg:text-left">
      Поможем вам найти фильм
    </h2>
    <div
      class="grid gap-5 place-items-center mt-5 md:grid-rows-3 lg:gap-0 lg:grid-rows-1 lg:grid-flow-col"
    >
      <div
        v-for="(button, i) of buttons"
        :key="i"
        class="relative w-full lg:w-auto"
      >
        <filter-button
          background-class="px-3 w-full h-28 lg:w-auto lg:px-0 lg:h-auto"
          :class="{ 'lg:justify-self-start': i === 0 }"
          :title="button.title"
          :background="button.background"
          @click.native="show(i)"
        />
        <transition name="fade">
          <figure
            v-if="panelIndex === i"
            class="absolute flex justify-center w-full arrow flex flex-col items-center"
          ></figure>
        </transition>
      </div>
      <search-button
        class="w-full cursor-pointer lg:w-auto drop-shadow lg:justify-self-end"
        background-class="px-3 w-full h-32 lg:w-auto lg:px-0 lg:h-auto"
        @click="search"
      />
    </div>

    <transition name="fade">
      <div v-if="panelIndex !== -1" class="relative w-full mt-1">
        <img
          src="~/assets/backgrounds/panel.svg"
          alt="Panel"
          class="w-full h-64"
        />

        <div class="absolute inset-0 w-full p-8">
          <div class="flex gap-3 flex-wrap">
            <div
              v-for="(filter, j) of filters"
              :key="j"
              class="p-2 bg-gray-200 rounded-lg flex-1 text-center"
            >
              {{ filter }}
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FilterButton from '~/components/pages/zero/SearchBar/FilterButton.vue'
import SearchButton from '~/components/pages/zero/SearchBar/SearchButton.vue'

export default Vue.extend({
  components: { SearchButton, FilterButton },
  data() {
    return {
      panelIndex: -1,
      buttons: [
        {
          title: 'Что смотреть',
          background: require('~/assets/backgrounds/what-to-watch.svg')
        },
        {
          title: 'Продолжительность',
          background: require('~/assets/backgrounds/duration.svg')
        },
        {
          title: 'Жанр',
          background: require('~/assets/backgrounds/genre.svg')
        },
        {
          title: 'Возраст',
          background: require('~/assets/backgrounds/age.svg')
        }
      ],
      filters: [
        'Комедия',
        'Биография',
        'Детектив',
        'Мелодрама',
        'Исторический',
        'Приключения',
        'Драма',
        'Семейный',
        'Фантастика',
        'Притча',
        'Комедия',
        'Социальный',
        'Патриотический',
        'Мистика',
        'Познавательный',
        'Сказка',
        'Экологический',
        'Мотивационный',
        'Этнографический',
        'Экспериментальный',
        'Профориентационный',
        'Исследование',
        'Монолог',
        'Развивающий',
        'Фэнтези',
        'Музыкальный',
        'Романтика',
        'Спортивный',
        'Аниме'
      ]
    }
  },

  methods: {
    async show(newPanelIndex: number) {
      const i = this.panelIndex
      this.panelIndex = -1
      await new Promise(resolve => setTimeout(resolve, 150))
      this.panelIndex = newPanelIndex === i ? -1 : newPanelIndex
    },
    search() {
      console.log('search')
    }
  }
})
</script>

<style>
.arrow::before {
  content: ' ';
  width: 90px;
  height: 75px;
  background: white;
  margin-top: -55px;
  clip-path: polygon(
    0 100%,
    14% 94%,
    24% 89%,
    34% 83%,
    43% 80%,
    52% 79%,
    60% 80%,
    71% 84%,
    79% 89%,
    88% 94%,
    100% 100%
  );
}

.fade-leave-active,
.fade-enter-active {
  transition: all 150ms linear;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
