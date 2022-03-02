<template>
  <div class="customer-container">
    <h5 class="text-h5 heading">Customers</h5>
    <p class="route info--text">Dashboard/</p>
    <v-divider></v-divider>
    <v-data-table
      :headers="headers"
      :items="allCustomers"
      class="elevation-1 mt-5"
      :loading="loading"
    >
      <template v-slot:top>
        <v-toolbar flat width="100%">
          <v-toolbar-title>All Cutomers</v-toolbar-title>
          <!-- <v-btn color="primary" depressed>ADD NEW CUSTOMER</v-btn> -->
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
        </v-toolbar>
      </template>
      <template v-slot:item.name="{ item }">
        <tr>
          <td class="d-block d-sm-table-cell" style="width: 300px">
            <div class="d-flex align-center">
              <img
                v-if="item.avatar"
                :src="getImage(item.avatar)"
                class="mr-2 rounded-circle"
                contain
                height="44"
                width="44"
              />
              <img
                v-else
                :src="require('@/assets/images/avatar.svg')"
                class="mr-2 rounded-circle"
                contain
                height="44"
              />
              {{ item.first_name | capitalize }}
              {{ item.last_name | capitalize }}
            </div>
          </td>
        </tr>
      </template>
      <template v-slot:item.is_marketing="{ item }">
        <v-chip dark :color="getColor(item.is_marketing)">
          {{ item.is_marketing === 0 ? "NO" : "YES" }}
        </v-chip>
      </template>
      <template v-slot:item.created_at="{ item }">
        {{ formatDate(item.created_at) }}
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon>mdi-dots-vertical</v-icon>
      </template>
    </v-data-table>
  </div>
</template>
<script>
  import { mapActions, mapState } from "vuex";
  import dayjs from "dayjs";
  import getImage from "@/mixins/getImage";
  export default {
    mixins: [getImage],
    data: () => ({
      headers: [
        {
          text: "Name",
          value: "name",
          align: "start",
        },
        {
          text: "Email",
          value: "email",
        },
        { text: "Phone", value: "phone_number" },
        { text: "Address", value: "address" },
        { text: "Date created", value: "created_at" },
        { text: "Marketing preferences", value: "is_marketing" },
        { text: "", value: "actions" },
      ],
      loading: false,
    }),
    computed: {
      ...mapState({
        allCustomers: (state) => state?.admin?.allCustomers?.data,
      }),
    },
    mounted() {
      this.getAllCustomers();
    },
    methods: {
      ...mapActions("admin", ["getCustomers"]),
      getAllCustomers() {
        this.loading = true;
        this.getCustomers()
          .then(() => {
            this.loading = false;
          })
          .catch(() => {
            this.loading = false;
          });
      },
      getColor(item) {
        return item === 0 ? "orange" : "green";
      },
      formatDate(date) {
        return dayjs(date).format("MMMM DD, YYYY");
      },
    },
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

    .image {
      height: 2rem;
      width: 2rem;
      border-radius: 50%;
      background-color: black;
    }
  }
</style>
