import { ADMIN_LOGIN, GET_CUSTOMERS, LOGOUT_ADMIN } from "@/utils/api/admin";
import cookies from "vue-cookies";
import axios from "@/plugins/axios";
import router from "@/router";

export default {
  adminLogin({ commit }, payload) {
    return new Promise((resolve, reject) => {
      ADMIN_LOGIN(payload)
        .then(({ data }) => {
          const token = data.data.token;
          cookies.set("token", token);
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          commit("SET_TOKEN", token);
          router.push("/customers");
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getCustomers({ commit }, payload) {
    return new Promise((resolve, reject) => {
      GET_CUSTOMERS(payload)
        .then(({ data }) => {
          commit("GET_CUSTOMERS", data);
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  logout() {
    return new Promnise((resolve, reject) => {
      LOGOUT_ADMIN()
        .then(({ data }) => {
          cookies.remove("token");
          delete axios.defaults.headers.common["Authorization"];
          router.push("/");
          resolce(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
