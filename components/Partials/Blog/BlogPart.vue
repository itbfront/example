<template>
  <section class="blog-part" :class="isWhite(data.isWhite)">
    <div class="container-local">
      <div class="wrapper">
        <div class="left">
          <h3>{{data.title || dynamicData.title}}</h3>
          <span v-if="data.writtenBy">Written by<span>{{data.writtenBy}}</span></span>
          <client-only v-if="data.haveThumbnail">
            <PartialsSpinner v-if="loading"/>
            <lingallery :addons="{enableLargeView: true}"
                        :width="640"
                        :responsive="true"
                        accentColor="#2A8740"
                        class="blog-part-gallery"
                        :squareModeDektop="true"
                        :items="data.thumbs"/>
          </client-only>
          <img :src="dynamicData.image" :alt="dynamicData.title" v-else>
        </div>
        <div class="right">
          <h3>{{data.title || dynamicData.title}}</h3>
          <span v-if="data.writtenBy">Written by<span>{{data.writtenBy}}</span></span>
          <p>{{dynamicData.description ? dynamicData.description : ''}}</p>
          <nuxt-link class="btn"
                     exact
                     :to="{name: 'blog'}"
                     v-if="data.writtenBy"
          >
            Read more</nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BlogPart",
  props: ['data', 'dynamicData'],
  data: () => {
    return {
      loading: true,
    }
  },
  created() {
    this.loading = false
  },
  methods:{
      isWhite(val){
        if(val == 'white') return 'white'
        if(val == 'grey') return 'grey'
      }
  },
}
</script>

<style scoped lang="scss">

</style>
