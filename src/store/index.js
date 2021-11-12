import { createStore } from "vuex";
import { faqCategories } from "@/utils/db.json";

export default createStore({
    state: {
        faqCategories: [],
        currentComponent: "faqCategories",
    },
    mutations: {
        SET_FAQ_CATEGORIES(state, payload) {
            state.faqCategories = payload;
        },
        SET_CURRENT_COMPONENT(state, payload) {
            state.currentComponent = payload;
        },
    },
    actions: {
        fetchFaqCategories({ commit }) {
            const data = faqCategories;
            commit("SET_FAQ_CATEGORIES", data);
        },
        changeCurrentComponent({ commit }, payload) {
            commit("SET_CURRENT_COMPONENT", payload);
        },
    },
    getters: {
        $currentComponent(state) {
            return state.currentComponent;
        },
        $allCategories(state) {
            return state.faqCategories;
        },
    },
});

//Global state -> actions -> mutations -> change global state
//access by getters
//just mutations can change the global state. Thats a good pratice
