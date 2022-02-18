export default {
  GET_PROMOTIONS(state, payload) {
    state.allPromotions = payload;
  },
  GET_BLOGS(state, payload) {
    state.getBlogs = payload;
  },
};
