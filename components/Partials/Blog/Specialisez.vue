<template>
  <section class="blog-part grey">
    <div class="container-local">
      <h3>Achievements</h3>
      <div class="wrapper wrapper-speciality">
            <div class="item" v-for="item in data" :key="item.slug">
              <img :src="item.image" :alt="item.title">
              <h5>{{item.title}}</h5>
              <p>{{item.description}}</p>
            </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
name: "Specialisez",
  props: ['data'],
}
</script>

<style scoped>

</style>
