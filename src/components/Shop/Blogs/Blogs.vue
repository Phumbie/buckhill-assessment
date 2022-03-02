<template>
  <div class="blog-container" :class="{ reverse: direction === 'reverse' }">
    <div class="image-container">
      <v-img
        :lazy-src="getImage(blog.metadata.image)"
        :src="getImage(blog.metadata.image)"
      ></v-img>
    </div>

    <div
      class="content-container"
      :class="{ reverse: direction === 'reverse' }"
    >
      <p class="product-heading primary--text">{{ blog.title }}</p>
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
  import getImage from "@/mixins/getImage";
  export default {
    mixins: [getImage],
    props: {
      direction: {
        type: String,
        default: "normal",
        required: false,
      },
      blog: {
        type: Object,
        default: () => {},
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
      height: 25rem;
      background-color: #f4f5f4;
    }
    .content-container {
      padding: 1rem;
      width: 50%;
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
