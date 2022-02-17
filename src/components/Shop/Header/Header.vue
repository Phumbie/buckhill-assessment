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
      <v-carousel-item v-for="(color, i) in colors" :key="color">
        <v-sheet :color="color" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="text-h2">Slide {{ i + 1 }}</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
  export default {
    data: () => ({
      model: 0,
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
    }),
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
