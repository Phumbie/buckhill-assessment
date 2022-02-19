<template>
  <div class="customer-container">
    <h5 class="text-h5 heading">Customers</h5>
    <p class="route info--text">Dashboard/</p>
    <v-divider></v-divider>
    <v-data-table :headers="headers" :items="desserts" class="elevation-1 mt-5">
      <template v-slot:header.name="{ header }">
        {{ header.text.toUpperCase() }}
      </template>
    </v-data-table>
  </div>
</template>
<script>
  export default {
    data: () => ({
      headers: [
        {
          text: "Email",
          align: "start",
          value: "name",
        },
        { text: "Phone", value: "calories" },
        { text: "Address", value: "fat" },
        { text: "Date created", value: "carbs" },
        { text: "Marketing preferences", value: "protein" },
        { text: "", value: "iron" },
      ],
      desserts: [
        {
          name: "frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%",
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%",
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%",
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%",
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%",
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%",
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%",
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%",
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
      ],
    }),
  };
</script>
<style lang="scss" scoped>
  .customer-container {
    .heading {
      font-size: 24px;
    }
    .route {
      /* color:  */
    }
  }
</style>
