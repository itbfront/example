<template>
  <section class="featured">
    <div class="container-local">
        <h2>{{localData.title}}</h2>
        <div  class="wrapper wrapper-slider">
            <VueSlickCarousel
              ref="slick"
              v-bind="slickOptions">
              <div class="cart-block" v-for="(cart, i) in data" :key="`cart.title-${i}`" >
                  <span class="sticker">
                    {{cart.type}}
                </span>
                <div v-lazyload>
                  <img :class="{'with-bth': localData.haveButton}"  :data-src="cart.avatar" :alt="cart.name" :src="require('~/assets/images/placeholder-300x202.jpg')">
                </div>
                <div class="p-10">
                  <h4>{{cart.name}}</h4>
                  <p>Buy from
                    <span v-if="localData.haveButton">
                      <img :src="pathToFiles(cart.country.flag)"
                           :alt="cart.country.name"
                           v-if="cart.country.flag"
                           class="flag"/>
                    </span>
                    {{cart.country.name}}
                  </p>
                  <nuxt-link v-if="localData.haveButton" class="btn" exact :to="{name: 'shops-shop', params: {shop: cart.slug}}">visit shop</nuxt-link>
                </div>
              </div>
            </VueSlickCarousel>
        </div>
    </div>
  </section>
</template>

<script>
 import slickOptions from "@/mixins/slick_options_featured";
export default {
  name: "Featured",
  props: ['data', 'localData'],
  mixins: [slickOptions],

  methods: {
    pathToFiles(flag){
      return `${process.env.API_URL}/flags/${flag}`
    },
  }

}
</script>

<style scoped>

</style>
