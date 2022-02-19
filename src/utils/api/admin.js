import axios from "@/plugins/axios";

export const ADMIN_LOGIN = (data) => {
  return axios.post(`/admin/login`, data);
};
