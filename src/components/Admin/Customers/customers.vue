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
  export default {
    data: () => ({
      headers: [
        {
          text: "Email",
          align: "start",
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
  }
</style>
