<template>
  <div
    class="promotion-container pa-5"
    :style="{ 'background-image': backgroundImage }"
  >
    <div class="title" v-if="promotionData">
      <p class="heading">{{ promotionData.title }}</p>
    </div>
    <div class="mt-2 title">
      <p class="description">{{ promotionData.content }}}</p>
    </div>
  </div>
</template>
<script>
  export default {
    props: ["promotionData"],
    data: () => ({}),
    computed: {
      backgroundImage() {
        return `url(${process.env.VUE_APP_BASE_URL}/file/${this.promotionData?.metadata?.image})`;
      },
    },
  };
</script>
<style lang="scss" scoped>
  .promotion-container {
    background-color: #f4f5f4;
    background-size: cover;
    height: 100%;
    position: relative;
    .title {
      display: inline-block;
      background: rgba(0, 0, 0, 0.26);
      padding: 1rem;

      .heading {
        color: white;
        font-size: 60px;
      }
      .description {
        color: white;
      }
    }
  }
</style>
<style lang="scss">
  .banner {
    position: absolute;
    top: 0;
  }
</style>
