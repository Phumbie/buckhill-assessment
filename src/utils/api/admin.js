import axios from "@/plugins/axios";

export const ADMIN_LOGIN = (data) => {
  return axios.post(`/admin/login`, data);
};

export const GET_CUSTOMERS = (params) => {
  return axios.get(`/admin/user-listing`, params);
};

export const LOGOUT_ADMIN = () => {
  return axios.get(`/admin/logout`);
};
