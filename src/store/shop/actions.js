import { GET_PROMOTIONS, GET_BLOGS } from "@/utils/api/shop";

export default {
  getPromotions({ commit }) {
    return new Promise((resolve, reject) => {
      GET_PROMOTIONS()
        .then(({ data }) => {
          console.log(data.data);
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
          console.log(data);
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
