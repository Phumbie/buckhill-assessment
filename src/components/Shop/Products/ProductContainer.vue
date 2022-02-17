<template>
  <div>
    <h2 class="product-heading primary--text">Dry dog Food</h2>
    <Flickity ref="flickity" :options="flickityOptions">
      <div class="carousel-cell" v-for="i in 5" :key="i">
        <p>hello</p>
      </div>
    </Flickity>
  </div>
</template>
<script>
  import Flickity from "vue-flickity";
  export default {
    components: {
      Flickity,
    },
    data: () => ({
      flickityOptions: {
        initialIndex: 1,
        prevNextButtons: false,
        pageDots: false,
        cellAlign: "left",
      },
    }),
  };
</script>
<style scoped>
  .carousel-cell {
    height: 25rem;
    border-radius: 16px;
    padding: 1rem;
    width: 20rem;
    border: 1px solid black;
    /* background-color: red; */
    margin-right: 10px;
  }
</style>
