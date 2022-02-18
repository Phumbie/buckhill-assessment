<template>
  <div>
    <h2 class="product-heading primary--text">Dry dog Food</h2>
    <Flickity ref="flickity" :options="flickityOptions" v-if="!loading">
      <SingleProduct
        :product="product"
        v-for="product in products"
        :key="product.id"
      />
    </Flickity>
  </div>
</template>
<script>
  import Flickity from "vue-flickity";
  import SingleProduct from "./SingleProduct.vue";
  export default {
    components: {
      Flickity,
      SingleProduct,
    },
    props: {
      products: {
        type: Array,
        default: () => [],
        required: true,
      },
      loading: {
        type: Boolean,
        default: false,
      },
    },
    data: () => ({
      flickityOptions: {
        initialIndex: 1,
        prevNextButtons: false,
        pageDots: false,
        cellAlign: "left",
      },
    }),
    watch: {
      loading(value) {
        console.log(value);
      },
    },
    mounted() {
      console.log(this.products, "single product");
    },
  };
</script>
<style>
  .flickity-viewport {
    height: 450px !important;
  }
</style>
