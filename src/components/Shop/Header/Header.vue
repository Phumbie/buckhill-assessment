<template>
  <div class="mt-4">
    <v-row class="" justify="center">
      <v-col cols="6">
        <v-text-field
          outlined
          label="Search products"
          prepend-inner-icon="mdi-magnify"
          solo
        ></v-text-field>
      </v-col>
    </v-row>
    <v-carousel
      v-model="model"
      :show-arrows="false"
      :continuous="true"
      hide-delimiter-background
      cycle
      hide-delimiters
    >
      <v-carousel-item v-for="promotion in promotions" :key="promotion.id">
        <!-- <v-sheet height="100%" tile> -->
          <!-- <v-row class="fill-height" align="center" justify="center">
            div.
          </v-row> -->
          <!-- <div>hello</div> -->
          <SinglePromotion :promotionData="promotion" />
        <!-- </v-sheet> -->
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
  import SinglePromotion from "./SinglePromotion.vue";
  export default {
    components: {
      SinglePromotion,
    },
    props: {
      promotions: {
        type: Array,
        default: () => [],
        required: true,
      },
      loading: {
        type: Boolean,
        default: false,
      },
    },
    watch: {
      loading(value) {
        console.log(value);
      },
    },
    data: () => ({
      model: 0,
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
    }),
    mounted() {
      console.log(this.promotions, "promotions");
    },
  };
</script>
<style>
  .v-input__control > .v-input__slot {
    box-shadow: none !important;
    border: 1px solid #4ec690;
    color: #4ec690;
  }
  .v-label {
    color: #4ec690 !important;
  }
</style>
