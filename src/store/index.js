import { createStore } from "vuex";
import { faqCategories } from "@/utils/db.json";

export default createStore({
  state: {
    currentComponent: "faqCategories",
  },
  mutations: {
    SET_CURRENT_COMPONENT(state, payload) {
      state.currentComponent = payload;
    },
  },
  actions: {
    changeCurrentComponent({ commit }, payload) {
      commit("SET_CURRENT_COMPONENT", payload);
    },
  },
  getters: {
    $currentComponent(state) {
      return state.currentComponent;
    },
  },
});

//Global state -> actions -> mutations -> change global state
//access by getters
//just mutations can change the global state. Thats a good pratice
