import axios from "axios";
import store from "@/store";

const axiosInstance = axios.create({
  baseURL: "https://pet-shop.buckhill.com.hr/api/v1",
});

axiosInstance.interceptors.response.use(
  function (response) {
    // console.log(response);
    return response;
  },
  function (error) {
    console.log(error);
    if (error.response.status === 401) {
      store.dispatch("admin/logout");
    }
    // }
    return Promise.reject(error);
  }
);

export default axiosInstance;
