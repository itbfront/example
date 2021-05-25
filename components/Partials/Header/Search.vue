<template>
  <form @submit.prevent="onSubmit" class="search-form navbar-src">
    <input type="text" v-model="search" placeholder="Find your tea">
    <button type="submit" class="btn btn-inline" :disabled="!search">
      <img src="~/assets/images/icons/search.svg" alt="">
    </button>
  </form>
</template>

<script>
  export default {
    name: "Search",

    data() {
      return {
        search: null,
        loading: false
      };
    },

    mounted() {
      const {name} = this.$route.query;

      if (name) {
        this.search = name;
      }
    },
    methods: {
      async onSubmit() {
        this.loading = true;
        this.$emit('submit', this.loading);
        let promise = new Promise((resolve, reject) => {
          setTimeout(() => resolve( this.loading = false), 1000);
        });
        await this.$router.push({
          name: 'search',
          query: {
            'filter[name]': this.search
          }
        })
        let result = await promise;
        this.$emit('submit', result);
      },
    },
  }
</script>

<style scoped>

</style>
