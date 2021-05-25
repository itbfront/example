<template>
  <section class="featured featured-product">
    <div class="container-local">
      <h2>{{localData.title}}</h2>
      <div  class="wrapper wrapper-slider">
          <VueSlickCarousel
            v-bind="slickOptions"
          >
            <div v-for="product in data" :key="product.id">
              <ProductsProductItem :product="product" :categories="categories" :withWidgets="true"/>
            </div>
          </VueSlickCarousel>
      </div>
    </div>
  </section>
</template>

<script>
import {mapGetters} from "vuex";
import slick_options_featured from "@/mixins/slick_options_featured";

export default {
  name: "FeaturedProduct",
  props: ['data', 'localData', 'categories'],
  mixins: [slick_options_featured],
  data() {
    return {
      slickOptions: {
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
        ],

      },
    }
  },
}
</script>

<style scoped>

</style>
