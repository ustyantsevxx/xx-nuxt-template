<template>
  <div>
    <div
      class="transition-transform duration-300"
      :class="{ 'transform scale-95': navVisible }"
      @click="showNav"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
      consequuntur nisi totam veniam vitae? Atque cupiditate, distinctio eveniet
      facere natus nemo sit! Ducimus eius illum quam. Consequuntur facilis,
      incidunt laudantium minima modi quo reiciendis veniam veritatis?
      Architecto consequatur cumque eum labore officia officiis quam unde!
      Beatae cum explicabo iure minima nisi rem. Accusamus amet aperiam
      assumenda aut autem consequuntur cum delectus, deserunt dignissimos dolor
      dolorem dolorum esse eveniet excepturi facere facilis fuga id in incidunt
      maiores minus modi molestiae nemo, nesciunt non numquam obcaecati
      perspiciatis praesentium quia quo recusandae reiciendis repellendus sint
      suscipit tempora vitae voluptate. Corporis, cumque debitis delectus ea
      fuga libero magnam maiores modi numquam officiis optio praesentium quas
      quia temporibus tenetur velit veniam voluptas! Aperiam cumque esse
      expedita, fuga modi saepe sunt. Expedita iusto neque nisi obcaecati? Alias
      animi, blanditiis corporis culpa dicta dolore, ea excepturi fugiat in
      maxime modi nemo provident quae quasi rem repudiandae sit sunt suscipit
      tenetur voluptatum! Asperiores assumenda consequatur dolor dolores ducimus
      eum hic iste mollitia nisi quaerat quam quisquam, recusandae sequi. Minima
      non praesentium quas recusandae vitae. Distinctio inventore itaque
      laudantium molestias natus, neque nulla ratione. Accusamus accusantium,
      beatae blanditiis commodi dignissimos doloremque ex, fuga itaque nemo nisi
      possimus recusandae voluptate voluptatibus? Aliquid aut autem beatae
      deserunt dicta ducimus eaque est, et illo minima nobis nostrum omnis
      provident quae quasi quo quod recusandae sit soluta tempora totam unde
      voluptates voluptatum? Consequatur dolore dolorum enim magni mollitia
      necessitatibus non optio quidem, rem temporibus. A commodi est in nesciunt
      quasi reiciendis suscipit. Accusamus asperiores corporis distinctio
      dolores ea eaque eum harum illum, ipsam itaque iusto minima necessitatibus
      perferendis praesentium quas quos vitae? Accusamus aliquam animi
      assumenda, consectetur culpa esse eveniet inventore iusto molestiae nisi
      nostrum numquam quaerat quo rerum ullam veniam voluptates? Alias
      cupiditate dolorem dolorum est magni maxime numquam perspiciatis ratione
      velit?
    </div>
    <transition
      name="blurred"
      enter-to-class="nav-shown"
      @after-enter="navShown = true"
      @after-leave="navShown = false"
    >
      <nav
        v-if="navVisible"
        class="absolute inset-0 flex justify-center items-center"
        :class="{ 'bg-black bg-opacity-75 blur nav-shown': navShown }"
        @click="hideNav"
      >
        <ul class="text-white text-2xl text-center">
          <li>Main</li>
          <li>Profile</li>
          <li>Settings</li>
        </ul>
      </nav>
    </transition>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      navVisible: false,
      navShown: false
    }
  },

  methods: {
    async showNav() {
      await this.$accessor.SET_EMAIL()
      this.navVisible = true
    },

    hideNav() {
      this.navVisible = false
    }
  }
})
</script>

<style>
.blur {
  backdrop-filter: blur(5px);
}

.blurred-leave-active,
.blurred-enter-active {
  @apply transition-all duration-300;
}

.blurred-leave-to {
  @apply bg-opacity-0 opacity-0;
}

.nav-shown {
  @apply bg-black bg-opacity-75 blur;
}
</style>
