<template>
  <nav class="navbar-part" :class="{'active' : !toggledMenu}">
    <div class="container-local">
      <div class="navbar-element">
        <p>World Wide</p>
        <PartialsHeaderSearch @submit="loadingfromChild"/>
      </div>
      <div class="wrapper">
        <p>Location</p>
        <button class="scroll-left"
                ref="left-arrow"
                @click.prevent="scrollLeft"
        >
          <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.80505 1.2164L4.45546 4.7919C4.19418 5.06937 3.77215 5.06937 3.51087 4.7919L0.161275 1.2164C-0.0537584 0.948962 -0.0537584 0.553503 0.161275 0.286065C0.401782 -0.0135765 0.82516 -0.0485935 1.10587 0.208134L3.97982 3.27588L6.86046 0.208098C7.12174 -0.0693655 7.54377 -0.0693655 7.80505 0.208098C8.06498 0.487003 8.06498 0.93753 7.80505 1.2164Z" fill="black"/>
          </svg>
        </button>
        <div class="inner">
          <ul class="navbar-list">
            <li class="navbar-item">
              <nuxt-link class="navbar-link" exact :to="{name: 'search'}">Tea</nuxt-link>
            </li>
            <li class="navbar-item">
              <nuxt-link class="navbar-link" exact :to="{name: 'search'}">Teaware</nuxt-link>
            </li>
            <li class="navbar-item">
              <nuxt-link class="navbar-link" exact :to="{name: 'shops'}">Shops</nuxt-link>
            </li>
            <li class="navbar-item">
              <nuxt-link class="navbar-link" exact :to="{name: `shops`}">Potters</nuxt-link>
            </li>
            <li class="navbar-item">
              <nuxt-link class="navbar-link" exact :to="{name: 'shops'}">Books</nuxt-link>
            </li>
            <li class="navbar-item">
              <nuxt-link class="navbar-link" exact :to="{name: 'shops'}">Bloggers</nuxt-link>
            </li>
            <li class="navbar-item">
              <nuxt-link class="navbar-link" exact :to="{name: 'community'}">Magazines</nuxt-link>
            </li>
          </ul>
        </div>
        <button class="scroll-right"
                ref="right-arrow"
                @click.prevent="scrollRight"
        >
          <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.80505 1.2164L4.45546 4.7919C4.19418 5.06937 3.77215 5.06937 3.51087 4.7919L0.161275 1.2164C-0.0537584 0.948962 -0.0537584 0.553503 0.161275 0.286065C0.401782 -0.0135765 0.82516 -0.0485935 1.10587 0.208134L3.97982 3.27588L6.86046 0.208098C7.12174 -0.0693655 7.54377 -0.0693655 7.80505 0.208098C8.06498 0.487003 8.06498 0.93753 7.80505 1.2164Z" fill="black"/>
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "HeaderNavBar",
   props: ['toggledMenu'],
    methods: {
      loadingfromChild(data){
        this.$emit('loading', data);
      },
      closeMenu(){
        this.isActive = false;
      },
      scrollLeft() {
        let content = document.querySelector(".inner");
        content.scrollLeft -= 40;
      },
      scrollRight() {
        let content = document.querySelector(".inner");
        content.scrollLeft += 40;
      },
    }
  }
</script>

<style scoped>

</style>
