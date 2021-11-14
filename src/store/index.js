import { createStore } from "vuex";
import { faqCategories } from "@/utils/db.json";

export default createStore({
    state: {
        faqCategories: [],
        singleCategory: {},
        singleQuestion: {},
        currentComponent: "faqCategories",
        transtionDepth: 1,
    },
    mutations: {
        SET_FAQ_CATEGORIES(state, payload) {
            state.faqCategories = payload;
        },
        SET_CURRENT_COMPONENT(state, payload) {
            state.currentComponent = payload;
        },
        SET_SINGLE_CATEGORY(state, payload) {
            state.singleCategory = payload;
        },
        SET_SINGLE_QUESTION(state, payload) {
            state.singleQuestion = payload;
        },
        INCREASE_TRANSITION_DEPTH(state) {
            state.transitionDepth++;
        },
        DECREASE_TRANSITION_DEPTH(state) {
            state.transtionDepth--;
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
        getSingleCategory({ commit }, payload) {
            commit("SET_SINGLE_CATEGORY", payload);
        },
        getSingleQuestion({ commit }, payload) {
            commit("SET_SINGLE_QUESTION", payload);
        },
        increaseTransitionDepth({ commit }) {
            commit("INCREASE_TRANSITION_DEPTH");
        },
        decreaseTransitionDepth({ commit }) {
            commit("DECREASE_TRANSITION_DEPTH");
        },
    },
    getters: {
        $currentComponent(state) {
            return state.currentComponent;
        },
        $allCategories(state) {
            return state.faqCategories;
        },
        $singleCategory(state) {
            return state.singleCategory;
        },
        $transitionDepth(state) {
            return state.transitionDepth;
        },
        $singleQuestion(state) {
            return state.singleQuestion;
        },
    },
});

//Global state -> actions -> mutations -> change global state
//access by getters
//just mutations can change the global state. Thats a good pratice
