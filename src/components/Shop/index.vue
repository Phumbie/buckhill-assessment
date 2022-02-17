<template>
  <v-container>
    <Header />
    <ProductContainer class="mt-13" />
    <Blogs class="mt-13" />
    <ProductContainer class="mt-13" />
    <Blogs class="mt-13" direction="reverse" />
  </v-container>
</template>
<script>
  import Header from "./Header/Header";
  import ProductContainer from "./Products/ProductContainer.vue";
  import Blogs from "./Blogs/Blogs.vue";
  export default {
    components: {
      Header,
      ProductContainer,
      Blogs,
    },
  };
</script>
