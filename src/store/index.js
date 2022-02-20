import Vue from "vue";
import Vuex from "vuex";
import shop from "./shop";
import admin from "./admin";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    shop,
    admin,
  },
});
