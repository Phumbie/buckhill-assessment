import axios from "axios";
import cooie from "vue-cookies";

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
});

export default axiosInstance;
