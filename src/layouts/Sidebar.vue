<template>
  <div class="sidebar-container">
    <v-list color="light-green" nav>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        active-class="active-nav"
        :to="item.path"
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        items: [
          { title: "Dashboard", icon: "mdi-tune", path: "/" },
          { title: "All Tickets", icon: "mdi-forum", path: "/" },
          { title: "Shipment Locator", icon: "mdi-map-marker", path: "/" },
          {
            title: "Customers",
            icon: "mdi-account-multiple",
            path: "/customers",
          },
          { title: "Products", icon: "mdi-folder-outline", path: "/" },
        ],
        links: ["Home", "Contacts", "Settings"],
        mini: true,
      };
    },
  };
</script>
<style lang="scss" scoped>
  .sidebar-container {
    background-color: #eef5f2;
    padding: 1rem;

    p {
      color: #69817b;
    }
  }

  .active-nav {
    background-color: #2db479;
    color: white;

    .v-list-item__title {
      color: white;
    }
  }
</style>
<style lang="scss">
  .active-nav {
    .v-list-item__title {
      color: white;
    }
    .v-icon {
      color: white !important;
      /* background-color:white */
    }
  }
</style>
