<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-container> Hello World </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import Navbar from "@/layouts/Navbar";
  export default {
    name: "App",
    components: {
      Navbar,
    },
    data: () => ({
      //
    }),
  };
</script>
<style scoped>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
</style>
