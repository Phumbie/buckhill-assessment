<template>
  <v-container class="mb-12">
    <Header :promotions="allPromotions" :loading="headerLoading" />
    <ProductContainer
      class="mt-13"
      :products="randomProducts"
      :loading="firstProductLoading"
    />
    <Blogs class="mt-13" :blog="allBlogs[0]" v-if="allBlogs.length > 0" />
    <ProductContainer
      class="mt-13"
      :products="randomProducts"
      :loading="firstProductLoading"
    />
    <Blogs
      class="mt-13"
      direction="reverse"
      :blog="allBlogs[1]"
      v-if="allBlogs.length > 0"
    />
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
      firstProductLoading: false,
    }),
    computed: {
      ...mapState({
        allPromotions: (state) => state.shop.allPromotions,
        allBlogs: (state) => state.shop.getBlogs,
      }),
    },
    beforeMount() {
      this.getAllpromotions();
      this.getBlogs();
      // this is the onlt categoory id this is working
      this.getRandomProducts({
        params: { category: "43f085a7-35c1-3dfc-b943-68ee0a243053" },
      });
      // this.getRandomProducts({
      //   params: { category: "67160ca3-f18c-3d9c-a063-3055891509c6" },
      // });
    },
    methods: {
      ...mapActions("shop", ["getPromotions", "getBlogs"]),
      getRandomProducts(params) {
        this.firstProductLoading = true;
        GET_PRODUCTS(params)
          .then(({ data }) => {
            this.randomProducts = data.data.slice(5);
            this.firstProductLoading = false;
          })
          .catch(() => {
            this.firstProductLoading = false;
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
