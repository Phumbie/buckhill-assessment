<template>
  <div>
    <div class="admin-container">
      <Sidebar />
      <div class="body">
        <v-container>
          <slot />
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
  import Sidebar from "./Sidebar.vue";
  export default {
    components: {
      Sidebar,
    },
  };
</script>

<style lang="scss" scoped>
  .admin-container {
    display: grid;
    grid-template-columns: 260px 1fr;
    min-height: calc(100vh - 64px);
    -webkit-box-shadow: 6px 2px 21px -5px rgba(232, 232, 232, 1);
    -moz-box-shadow: 6px 2px 21px -5px rgba(232, 232, 232, 1);
    box-shadow: 6px 2px 21px -5px rgba(232, 232, 232, 1);
    .body {
      background-color: #fafafa;
      overflow: auto;
    }
  }
</style>
