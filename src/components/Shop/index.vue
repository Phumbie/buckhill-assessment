<template>
  <v-container class="mb-12">
    <Header :promotions="allPromotions" :loading="headerLoading" />
    <ProductContainer class="mt-13" :products="randomProducts" />
    <Blogs class="mt-13" />
    <ProductContainer class="mt-13" :products="randomProducts" />
    <Blogs class="mt-13" direction="reverse" />
  </v-container>
</template>
<script>
  import { mapActions, mapState } from "vuex";
  import { GET_PRODUCTS } from "@/utils/api/shop.js";
  import Header from "./Header/Header";
  import ProductContainer from "./Products/ProductContainer.vue";
  import Blogs from "./Blogs/Blogs.vue";

  export default {
    components: {
      Header,
      ProductContainer,
      Blogs,
    },
    data: () => ({
      randomProducts: [],
      headerLoading: false,
    }),
    computed: {
      ...mapState({
        allPromotions: (state) => state.shop.allPromotions,
      }),
    },
    mounted() {
      this.getAllpromotions();
      this.getBlogs();
      // this is the onlt categoory id this is working
      this.getRandomProducts({
        params: { category: "21d5d1c3-f867-31e8-8e98-3a4820089037" },
      });
      // this.getRandomProducts({
      //   params: { category: "67160ca3-f18c-3d9c-a063-3055891509c6" },
      // });
    },
    methods: {
      ...mapActions("shop", ["getPromotions", "getBlogs"]),
      getRandomProducts(params) {
        GET_PRODUCTS(params).then(({ data }) => {
          this.randomProducts = data.data;
          console.log(ths);
        });
      },
      getAllpromotions() {
        this.headerLoading = true;
        // console.log(this.headerLoading);

        this.getPromotions()
          .then(() => {
            this.headerLoading = false;
            // console.log(this.headerLoading);
          })
          .catch(() => {
            this.headerLoading = false;
          });
      },
    },
  };
</script>
