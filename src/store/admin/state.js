import cookies from "vue-cookies";
export default {
  allCustomers: {},
  token: cookies.get("token"),
};
