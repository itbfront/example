<template>
  <div>
      <PartialsSingleBanner title="Main" name="Main"/>
      <PartialsFeatured
        v-if="GetFeatured.shop.length != 0"
        :data='GetFeatured && GetFeatured.shop'
        :localData="featuredData"
      />
      <PartialsFeatured
        v-if="GetFeatured.shop.length != 0"
        :data='GetFeatured && GetFeatured.shop'
        :localData="teaData"
      />
<!--      <PartialsFeaturedProduct-->
<!--        v-if="GetFeatured.product.length != 0"-->
<!--        :data="GetFeatured && GetFeatured.product"-->
<!--        :localData="featuredProduct"-->
<!--        :categories="categories"-->
<!--      />-->
      <PartialsBlogPart :data="blogData" :dynamicData="about[0]"/>
      <PartialsCategories :data="categoriesFiltered" v-if="GetFeatured.categories.length != 0"/>
      <section class="info">
        <div class="container-local">
          <div class="wrapper">
            <div class="item">
              <img src="~/assets/images/info1.png" alt="">
              <h5>Buy your favourite teas and teaware</h5>
              <p>form vendors all over the world</p>
            </div>
            <div class="item">
              <img src="~/assets/images/info2.png" alt="">
              <h5>Join the community!</h5>
              <p>Read comment or share your posts by creating a blog</p>
            </div>
            <div class="item">
              <img src="~/assets/images/info3.png" alt="">
              <h5>Find online courses!</h5>
              <p>Discover upcoming events near you. Tea Everywhere aims to spread the tea culture worldwide</p>
            </div>
          </div>
        </div>
      </section>

  </div>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: 'index',
    data: () => {
      return {
        featuredData: {
          title: 'Featured Sections',
          haveButton: true,
        },
        teaData: {
          title: 'Tea Culture',
          haveButton: false,
        },
        blogData: {
          isWhite: 'grey',
          haveThumbnail: true,
          title: 'A Floral Maofeng',
          writtenBy: 'Luca (Tea everywhere team)',
          thumbs: [
            {
              largeViewSrc: require('~/assets/images/blog/blog1.png'),
              src: require('~/assets/images/blog/blog1.png'),
              thumbnail: require('~/assets/images/blog/blog1.png')
            },
            {
              largeViewSrc: require('~/assets/images/blog/blog2.png'),
              src: require('~/assets/images/blog/blog2.png'),
              thumbnail: require('~/assets/images/blog/blog2.png')
            },
            {
              largeViewSrc: require('~/assets/images/blog/blog3.png'),
              src: require('~/assets/images/blog/blog3.png'),
              thumbnail: require('~/assets/images/blog/blog3.png')
            },
            {
              largeViewSrc: require('~/assets/images/blog/blog4.png'),
              src: require('~/assets/images/blog/blog4.png'),
              thumbnail: require('~/assets/images/blog/blog4.png')
            },
          ]
        },
        featuredProduct: {
          title: 'Featured Products'
        },
        featured: null,
      };
    },
    computed:{
      ...mapGetters('products', ['products', 'meta', 'loading']),
      ...mapGetters('categories', ['categories']),
      ...mapGetters('categories', ['categoriesList']),  //2nd level of all categories
      ...mapGetters('currencies', ['selected']),
      ...mapGetters('settings', {GetFeatured:'GET_FEATURED'}),
      ...mapGetters('settings', { about: 'GET_ABOUT'}),
      ...mapGetters('settings', { categoriesFiltered: 'GET_HOME_CATEGORIES'})
    },
    async fetch({store, $axios}) {
      await store.dispatch('settings/fetchAbout');
      await store.dispatch('settings/fetchFeatured');
      await store.dispatch('categories/fetchAll');
      await store.dispatch('categories/fetchList');
      await store.dispatch('areas/fetchAllAreas');
    },
  }
</script>

<style scoped>

</style>
