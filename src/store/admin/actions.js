import { ADMIN_LOGIN } from "@/utils/api/admin";
import cookies from "vue-cookies";
import axios from "@/plugins/axios";
import router from "@/router";

export default {
  adminLogin({}, payload) {
    return new Promise((resolve, reject) => {
      ADMIN_LOGIN(payload)
        .then(({ data }) => {
          const token = data.data.token;
          cookies.set("token", token, "2h");
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

          router.push("/customers");
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
