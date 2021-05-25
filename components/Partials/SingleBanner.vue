<template>
  <section class="single-banner"
           :class="{
           'video' : banner && banner.view_youtube && banner.you_tube && checkForMainPage}"
  >
    <div class="hide-line" v-if="checkForMainPage">
      <PartialsSpinner v-if="loading"/>
      <client-only v-else-if="banner.you_tube && banner.view_youtube">
        <youtube
          :video-id="getVideo"
          :mute="true"
          :player-vars="playerVars"
          ref="player"
          class="single-banner--video"
        />
      </client-only>
      <div class="inner-wrapper" v-else>
        <video v-if="!imgUrl(getBanner)" :src="getBanner" autoplay loop muted preload="metadata" :poster="getBanner"></video>
        <img v-else :src="getBanner"  :alt="banner ? banner.title : '' ">
      </div>

    </div>
    <div class="hide-line" v-else>
      <h1>{{name}}</h1>
      <img src="~/assets/images/banner-about.png" :alt="name" :class="{'fit' : !checkForMainPage, 'shop': $route.name == 'shops-shop'}">
      <div class="container-local" v-if="$route.name == 'shops-shop'">
        <nav class="nav">
          <ul class="navbar-list desktop">
            <li class="navbar-item">
              <nuxt-link class="navbar-link" :to="{name: 'shops-shop-about', params: {shop: slug}}">
                About
              </nuxt-link>
            </li>
            <li class="navbar-item">
              <nuxt-link class="navbar-link" :to="{name: 'index'}">
                Blog
              </nuxt-link>
            </li>
            <li class="navbar-item">
              <nuxt-link class="navbar-link" :to="{name: 'index'}">
                Promotions
              </nuxt-link>
            </li>
            <li class="navbar-item">
              <nuxt-link class="navbar-link" :to="{name: 'index'}">
                Shipping & Sales Conditions
              </nuxt-link>
            </li>
            <li class="navbar-item">
              <nuxt-link class="navbar-link" :to="{name: 'index'}">
                Feedback
              </nuxt-link>
            </li>
          </ul>
          <ul class="navbar-list mobile">
            <li class="navbar-item">
              <nuxt-link class="navbar-link" :to="{name: 'index'}">
                About
              </nuxt-link>
            </li>
            <li class="navbar-item">
              <nuxt-link class="navbar-link" :to="{name: 'index'}">
                Blog
              </nuxt-link>
            </li>
            <li class="navbar-item">
              <nuxt-link class="navbar-link" :to="{name: 'index'}">
                Promo
              </nuxt-link>
            </li>
            <li class="navbar-item">
              <nuxt-link class="navbar-link" :to="{name: 'index'}">
                Shipping
              </nuxt-link>
            </li>
            <li class="navbar-item">
              <nuxt-link class="navbar-link" :to="{name: 'index'}">
                Feedback
              </nuxt-link>
            </li>
          </ul>
        </nav>
        <form class="search-form">
          <input type="text" placeholder="Search item in this shop">
          <button type="submit" class="btn" disabled>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.8177 14.9381L11.913 11.0334C12.8835 9.86621 13.4683 8.36744 13.4683 6.73438C13.4683 3.02103 10.4474 0 6.73419 0C3.02093 0 0 3.02103 0 6.73438C0 10.4475 3.02093 13.4683 6.73419 13.4683C8.36716 13.4683 9.86602 12.8836 11.0332 11.913L14.938 15.8178C15.0595 15.9393 15.2187 16 15.3779 16C15.537 16 15.6963 15.9393 15.8178 15.8178C16.0607 15.5748 16.0607 15.181 15.8177 14.9381ZM1.24414 6.73438C1.24414 3.70705 3.70695 1.24414 6.73419 1.24414C9.76134 1.24414 12.2241 3.70705 12.2241 6.73438C12.2241 9.76146 9.76134 12.2241 6.73419 12.2241C3.70695 12.2241 1.24414 9.76146 1.24414 6.73438Z" fill="#2A8740"/>
            </svg>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import {getIdFromUrl } from 'vue-youtube'
export default {
  name: "SingleBanner",
  data(){
    return {
      shopPage: true,
      banner: null,
      loading: true,
      playerVars: {
        autoplay: 1,
        autohide: 1,
        disablekb: 1,
        controls: 0,
        showinfo: 0,
        modestbranding: 1,
        loop: 1,
        fs: 0,
        rel: 0,
        enablejsapi: 1,
        iv_load_policy: 3,
        cc_load_policy: 1,
        origin: process.env.CLIENT_API,
      }
    }
  },
  props: {
    title: {
      type: String,
      default: 'Title',
    },
    name: {
      type: String,
      default: '',
    },
    src: {
      type: String,
      default: 'image',
    },
    slug: {
      type: String,
      default: 'slug'
    }
  },

  methods: {
    imgUrl(url) {
      if (url) {
        const regex = /(http(s?):)*\.(?:jpg|jpeg|gif|png)/
        return regex.test(url)
      }
    },
  },
  computed: {
    getBanner(){
      return this.banner ? this.banner && this.banner.banner : ''
    },
    getVideo(){
      return this.banner ? getIdFromUrl(this.banner.you_tube ) : null
    },
    checkForMainPage(){
      if (this.$route.name != 'index'){
        this.shopPage = false
      }
      return this.shopPage
    }
  },
  async fetch(){
    await this.$axios.$get('api/banner').then(res => {
      if(res){
        this.banner = res.data[0]
        this.loading = false
      }
    })

  },
}
</script>

<style scoped>

</style>

