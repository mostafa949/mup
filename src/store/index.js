import Vue from "vue";
import Vuex from "vuex";
import General from "./modules/general";
import Home from "./modules/home"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    General,
    Home,
  },
});
