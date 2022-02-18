<template>
  <div class="carousel-cell">
    <div class="image">
      <v-img :src="productImage"></v-img>
    </div>
    <p class="title">{{ product.brand.title }}</p>
    <p class="description">{{ product.title }}</p>
    <p class="title">{{ product.price }} kn</p>
  </div>
</template>
<script>
  export default {
    props: {
      product: {
        type: Object,
        default: () => {},
      },
    },
    computed: {
      productImage() {
        return `${process.env.VUE_APP_BASE_URL}/file/${this.product?.metadata?.image}`;
      },
    },
  };
</script>
<style lang="scss">
  .carousel-cell:hover {
    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),
      0 1px 5px 0 rgb(0 0 0 / 12%);
  }
  .carousel-cell {
    height: 25rem;
    border-radius: 10px;
    padding: 2rem 3rem;
    width: 20rem;

    margin-right: 10px;

    p {
      margin: 0;
    }
    .image {
      height: 16rem;
      text-align: center;
    }

    .title {
      text-decoration: underline;
      font-weight: semibold;
      font-size: 20px;
    }
    .description {
      color: rgba(0, 0, 0, 0.54);
    }
  }
</style>
