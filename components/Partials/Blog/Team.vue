<template>
  <section class="blog-part" :class="bgColor">
    <div class="container-local">
      <slot name="title"></slot>
      <div class="wrapper" :class="`wrapper-slide-${slickSlide}`">
          <VueSlickCarousel
            ref="slick"
            v-bind="slickOptions">
            <div class="item" v-for="item in data" :key="item.slug">
              <div v-lazyload>
                <img :data-src="item.image" :alt="item.name" :src="require('~/assets/images/placeholder-300x202.jpg')">
              </div>
              <h5 v-if="item.title">{{item.title}}</h5>
              <p v-if="item.description">{{item.description}}</p>
            </div>
          </VueSlickCarousel>
      </div>
    </div>
  </section>
</template>

<script>
import slickOptions from "@/mixins/slick_options_featured";

export default {
  name: "Team",
  mixins: [slickOptions],
  props: ['data', 'slickSlide', 'bgColor'],
  data: () => {
    return {
      slickOptions: {
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
        ],
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }
  },
  mounted(){
    this.slickOptions.slidesToShow = this.slickSlide
    this.slickOptions.slidesToScroll = this.slickSlide
  }
}
</script>
