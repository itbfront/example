<template>
  <div class="btmbar-part">
    <ul class="btmbar-widget">
      <li>
        <nuxt-link exact :to="{name: 'index'}">
          <i>
            <font-awesome-icon :icon="['fas', 'home']"/>
          </i>
          <span>Home</span>
        </nuxt-link>
      </li>
      <li>
        <a href="singles/wishlist.html" class="wish-icon">
          <i>
            <font-awesome-icon :icon="['fas', 'heart']"/>
          </i>
          <span>Wishlist</span>
          <sup>0</sup>
        </a>
      </li>
      <li>
        <a href="singles/cartlist.html" class="cart-icon">
          <i>
            <font-awesome-icon :icon="['fas', 'shopping-basket']"/>
          </i>
          <span>Cart</span>
          <sup>0</sup>
        </a>
      </li>
      <client-only>
        <li v-if="$auth.loggedIn">
          <nuxt-link v-if="$auth.user.type === 'user'" :to="{name: 'account-index'}">
            <i>
              <font-awesome-icon :icon="['fas', 'cog']"/>
            </i>
            <span>Settings</span>
          </nuxt-link>
          <nuxt-link v-else :to="{name: 'dashboard-index'}">
            <i>
              <font-awesome-icon :icon="['fas', 'cog']"/>
            </i>
            <span>Dashboard</span>
          </nuxt-link>
        </li>
      </client-only>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "MobileBar",
  }
</script>

<style scoped>

</style>
