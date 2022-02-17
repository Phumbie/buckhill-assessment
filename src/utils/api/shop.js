import axios from "@/plugins/axios";

export const GET_PROMOTIONS = () => {
  return axios.get(`/main/promotions`);
};

export const GET_PRODUCTS = (params) => {
  return axios.get(`/products`, params);
};
export const GET_BLOGS = (params) => {
  return axios.get(`/main/blog`, params);
};
