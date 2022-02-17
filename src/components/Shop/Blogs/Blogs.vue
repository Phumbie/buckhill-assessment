<template>
  <div class="blog-container" :class="{ reverse: direction === 'reverse' }">
    <!-- <v-row no-gutters>
      <v-col cols="12" sm="6" md="6">
        <v-img
          lazy-src="@/assets/images/blog.png"
          src="@/assets/images/blog.png"
        ></v-img>
      </v-col>
      <v-col cols="6" md="6" class="d-flex align-center pl-6">
        <div>
          <p class="product-heading primary--text">Treat your pup</p>
          <p></p>
          <div class="button primary pa-2">
            <p class="underline white--text ma-0">
              Discover our dog treat selection
            </p>
          </div>
        </div>
      </v-col>
    </v-row> -->
    <div class="image-container">
      <v-img
        lazy-src="@/assets/images/blog.png"
        src="@/assets/images/blog.png"
      ></v-img>
    </div>

    <div
      class="content-container"
      :class="{ reverse: direction === 'reverse' }"
    >
      <p class="product-heading primary--text">Treat your pup</p>
      <p></p>
      <div class="button primary pa-2">
        <p class="underline white--text ma-0">
          Discover our dog treat selection
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      direction: {
        type: String,
        default: "normal",
        required: false,
      },
    },
  };
</script>
<style lang="scss" scoped>
  .blog-container {
    display: flex;
    align-items: center;

    &.reverse {
      flex-direction: row-reverse;
    }

    .image-container {
      width: 50%;
    }
    .content-container {
      padding: 1rem;
      width: 100%;
      &.reverse {
        justify-content: flex-end;
      }
    }
    .product-heading {
      font-size: 60px;
    }
    .button {
      display: inline-block;
      .underline {
        text-decoration: underline;
      }
    }
  }
</style>
<style>
  .v-image {
    height: 100% !important;
  }
</style>
