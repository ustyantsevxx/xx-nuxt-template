<template>
  <main class="container px-0 max-w-screen-xl subpixel-antialiased bg-white">
    <div class="row">
      <div class="col">
        <header class="flex justify-between items-center py-6 px-9 bg-gray-800">
          <figure class="block mr-9">
            <img
              src="https://d2t8nixuow17vt.cloudfront.net/web/svg/theme-dark/logo.svg"
              alt="Logo"
            />
          </figure>

          <nav class="flex flex-1 text-sm">
            <ul class="flex space-x-5">
              <li>
                <a href="#" class="text-gray-300 hover:text-red-500">
                  Премьеры
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-300 hover:text-red-500">
                  Все фильмы
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-300 hover:text-red-500">Сериалы</a>
              </li>
            </ul>
            <figure class="pt-px mx-5 text-xl leading-5 text-gray-600">
              •
            </figure>
            <ul class="flex space-x-5">
              <li>
                <a href="#" class="text-gray-300 hover:text-red-500">Лента</a>
              </li>
              <li>
                <a href="#" class="text-gray-300 hover:text-red-500">Видео</a>
              </li>
              <li>
                <a href="#" class="text-gray-300 hover:text-red-500">Новости</a>
              </li>
            </ul>
          </nav>

          <div class="flex items-center space-x-3">
            <div class="flex items-center w-72 text-sm bg-gray-600 rounded-sm">
              <img
                class="w-8 h-8"
                src="https://d2t8nixuow17vt.cloudfront.net/web/svg/icon_32_search_top.svg"
                alt="search-magnifier"
              />
              <label for="header-search">
                <input
                  id="header-search"
                  type="text"
                  class="bg-gray-600"
                  placeholder="Быстрый поиск"
                />
              </label>
            </div>

            <figure
              class="rounded-full border border-gray-500 transition-colors duration-100 hover:border-gray-200"
            >
              <svg
                class="w-8 h-8 text-gray-500 transition-colors duration-100 cursor-pointer hover:text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </figure>

            <div>
              <button
                class="py-2 px-4 text-sm text-white bg-gradient-to-r from-green-400 to-indigo-400 rounded-3xl"
              >
                Войти
              </button>
            </div>
          </div>
        </header>
      </div>
    </div>

    <div class="p-9 row">
      <div class="col md:col-3">
        <figure>
          <img
            src="https://d2lhpxxb8i4w72.cloudfront.net/movie/300/119492.jpg?1517240626"
            alt="Fight Club"
          />
        </figure>
      </div>

      <div class="col md:col-9">
        <div>
          <ul class="flex space-x-1 text-sm border-b">
            <li class="py-1 px-2 rounded-t border border-b-0">Фильм</li>
            <li
              class="py-1 px-2 bg-gray-100 bg-opacity-50 rounded-t border border-b-0"
            >
              Актёры
            </li>
            <li
              class="py-1 px-2 bg-gray-100 bg-opacity-50 rounded-t border border-b-0"
            >
              Видео
            </li>
            <li
              class="py-1 px-2 bg-gray-100 bg-opacity-50 rounded-t border border-b-0"
            >
              Кадры
            </li>
            <li
              class="py-1 px-2 bg-gray-100 bg-opacity-50 rounded-t border border-b-0"
            >
              Факты
            </li>
            <li
              class="py-1 px-2 bg-gray-100 bg-opacity-50 rounded-t border border-b-0"
            >
              Награды
            </li>
            <li
              class="py-1 px-2 bg-gray-100 bg-opacity-50 rounded-t border border-b-0"
            >
              Премьеры
            </li>
            <li
              class="py-1 px-2 bg-gray-100 bg-opacity-50 rounded-t border border-b-0"
            >
              Связи
            </li>
            <li
              class="py-1 px-2 bg-gray-100 bg-opacity-50 rounded-t border border-b-0"
            >
              Сайты
            </li>
          </ul>
        </div>

        <div class="my-7">
          <div class="flex justify-between items-center">
            <h1 class="text-3xl">
              <span>Бойцовский клуб</span>
              <span class="text-gray-400">(1999)</span>
            </h1>
            <figure>
              <svg
                class="w-8 h-8 text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
            </figure>
          </div>
          <h2 class="text-sm text-gray-400">Fight Club</h2>
        </div>

        <div class="text-lg italic text-gray-400">«Интриги. Хаос. Мыло.»</div>

        <div class="grid grid-cols-4 p-5 mt-7 text-sm bg-gray-100 rounded-sm">
          <div class="space-y-2 text-gray-500">
            <div>страна</div>
            <div>длительность</div>
            <div>бюджет</div>
            <div>премьера: Мир</div>
            <div>премьера: США</div>
            <div>премьера: РФ</div>
            <div>прокатчик</div>
            <div>ре-релиз: РФ</div>
            <div>прокатчик</div>
            <div>студии производства</div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
body {
  @apply bg-gray-100;
}
</style>
