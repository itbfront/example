<template>
  <header class="header-part">
    <div class="container-local">
          <div class="wrapper">
            <button class="nav-btn" @click="showMenu">
              <img src="~/assets/images/navigation.png" alt="" aria-label="navigation">
            </button>
            <nuxt-link :to="{name: 'index'}" class="logo">Tea everywhere</nuxt-link>
            <div class="navbar-slide">
              <div class="navbar-content">
                <ul class="navbar-list">
                  <li>
                    <nuxt-link class="navbar-link" exact :to="{name: 'index'}">Tea Hunter</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link class="navbar-link" exact :to="{name: 'index'}">Community</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link class="navbar-link" exact :to="{name: 'index'}">Events & Courses</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link class="navbar-link" exact :to="{name: 'about'}">About</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
            <ul class="widgets">
              <li v-if="!$auth.loggedIn">
                <nuxt-link :to="{name: 'login-index'}">
                  <img src="~/assets/images/icons/user.svg" alt="">
                  <p> Sign In/Register</p>
                </nuxt-link>
              </li>
              <li v-else>
                <nuxt-link  v-if="$auth.user.type === 'shop'" class="icon icon-inline" :to="{name: 'dashboard-index-profile-index'}">
                  <img src="~/assets/images/icons/user.svg" alt="">
                  <span>{{$auth.user.name}}</span>
                </nuxt-link>
                <nuxt-link v-else class="icon icon-inline" :to="{name: 'account-index-profile-index'}">
                  <img src="~/assets/images/icons/user.svg" alt="">
                  <span>
                    {{$auth.user.nickname}}
                  </span>
                </nuxt-link>
              </li>
              <li>
                <a href="#">
                  <img src="~/assets/images/icons/wishlist.svg" alt="">
                  <sup>0</sup>
                </a>
              </li>
              <li>
                <nuxt-link :to="{name: 'cart'}">
                  <img src="~/assets/images/icons/cart.svg" alt="">
                  <sup>{{modelCart.items ? modelCart.items.length : 0}}</sup>
                </nuxt-link>
              </li>
            </ul>
            <client-only>
              <div class="header-option">
                <div class="header-curr">
                  <v-selectize
                    v-model="setCurrency"
                    :options="currencies.map(el => el.code)"
                    key-by="code"
                    label="code"
                    :disableSearch="true"
                  />
                </div>
                <!--              <div class="header-lang">-->
                <!--                <v-selectize-->
                <!--                  v-model="lang_selected"-->
                <!--                  :options="langs"-->
                <!--                  :disableSearch="true"-->
                <!--                />-->
                <!--              </div>-->
              </div>
            </client-only>
          </div>
    </div>
  </header>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';

  export default {
    name: "HeaderTopBar",
    props: {
      loading: Boolean
    },
    data: () => ({
      lang_selected: null,
      langs: ['English', 'Turkish', 'italian' ],
    }),
    methods: {
      ...mapActions('currencies', {
        setGlobalCurrency: 'setCurrency'
      }),
      showMenu(){
        this.$emit('menuToggle', this.isActive);
      },
    },
    computed: {
      ...mapGetters('currencies', {
        selectedGetter:'selected',
        currencies: 'currencies'
      }),
      ...mapGetters('cart', ['modelCart']),
      setCurrency: {
        get(){
          return this.selectedGetter
        },
        set(selectedGetter){
          this.setGlobalCurrency(selectedGetter);
          return selectedGetter
        }
      }
    },
    async fetch({store}){
      await store.dispatch('currencies/fetchAll')
    }
  }
</script>

<style scoped>

</style>
