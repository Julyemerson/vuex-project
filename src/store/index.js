import { createStore } from "vuex";
import { faqCategories } from "@/utils/db.json";

export default createStore({
    state: {
        faqQuestions: [],
        basecampQuestion: [],
    },
    mutations: {
        SET_QUESTIONS(state, questions) {
            state.faqQuestions = questions;
        },

        SET_BASECAMP_QUESTIONS(state, basecampQuestions) {
            state.basecampQuestion = basecampQuestions;
        },
    },
    actions: {
        fetchAllQuestions(context) {
            const questions = faqCategories;

            context.commit("SET_QUESTIONS", questions);
        },

        fetchBasecampQuestion(context) {
            const basecampQuestions = faqCategories[0].questions;

            context.commit("SET_BASECAMP_QUESTIONS", basecampQuestions);
        },
    },
    getters: {
        $allQuestions(state) {
            return state.faqQuestions;
        },
        $basecampQuestions(state) {
            return state.basecampQuestion;
        },
    },
});

//Global state -> actions -> mutations -> change global state
//access by getters
//just mutations can change the global state. Thats a good pratice
