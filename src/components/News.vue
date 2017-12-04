<template>
<div class="carousel-holder">
  <v-carousel id="carousel" hide-controls interval="10000">
    <v-carousel-item v-for="(item,i) in items"
     v-bind:src="item.src"
      :key="i">
      </v-carousel-item>
  </v-carousel>
 </div>
</template>

<script>
export default {
  name: 'news',
  data () {
    return {
     items: [
          {
            src: '/static/images/hunger.png'
          },
          {
            src: '/static/images/warlock.png'
          },
          {
            src: '/static/images/titan.png'
          },
          {
            src: '/static/images/traveler.jpg'
          },
          {
            src: '/static/images/destinyBG.jpg'
          }
        ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.carousel-holder {
	display: flex;
	justify-content: center;
}
#carousel {
	width: 70%;
}
</style>
