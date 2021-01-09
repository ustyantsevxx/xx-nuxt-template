<template>
  <div>
    <div @click="showNav">
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
    <nav
      class="absolute inset-0 transition-all duration-300 flex justify-center items-center"
      :class="{
        hidden: !navVisible,
        'z-30 block': navVisible,
        'bg-black bg-opacity-75 blurred': navVisible && navShown
      }"
      @click="hideNav"
    >
      <ul class="text-white text-2xl text-center">
        <li>Main</li>
        <li>Submain</li>
        <li>Fuck off</li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Vue from 'vue'
import { Component } from 'nuxt-property-decorator'

@Component
export default class BlurIndex extends Vue {
  navVisible = false
  navShown = false

  async showNav() {
    this.navVisible = true
    await new Promise(resolve => setTimeout(resolve))
    this.navShown = true
  }

  async hideNav() {
    this.navShown = false
    await new Promise(resolve => setTimeout(resolve, 300))
    this.navVisible = false
  }
}
</script>

<style>
.blurred {
  backdrop-filter: blur(8px);
}
</style>
