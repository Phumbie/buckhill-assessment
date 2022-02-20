export default {
  GET_CUSTOMERS(state, payload) {
    state.allCustomers = payload;
  },
  SET_TOKEN(state, payload) {
    state.token = payload;
  },
  LOGOUT(state) {
    state.token = null;
  },
};
