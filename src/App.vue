<template>
  <v-app>
    <Navbar />
    <v-main>
      <component :is="layout">
        <router-view />
      </component>
    </v-main>
  </v-app>
</template>

<script>
  const default_layout = "default";
  import Navbar from "@/layouts/Navbar";
  export default {
    name: "App",
    components: {
      Navbar,
    },
    // data: () => ({
    //   //
    // }),
    computed: {
      layout() {
        return (this.$route.meta.layout || default_layout) + "-layout";
      },
    },
  };
</script>
<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: roboto !important;
  }
</style>
