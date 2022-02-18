import { GET_PROMOTIONS, GET_BLOGS } from "@/utils/api/shop";

export default {
  getPromotions({ commit }) {
    return new Promise((resolve, reject) => {
      GET_PROMOTIONS()
        .then(({ data }) => {
          commit("GET_PROMOTIONS", data.data);
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getBlogs({ commit }) {
    return new Promise((resolve, reject) => {
      GET_BLOGS()
        .then(({ data }) => {
          commit("GET_BLOGS", data.data);
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
