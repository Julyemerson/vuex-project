import { createStore } from "vuex";
import { faqCategories } from "@/utils/db.json";

export default createStore({
  state: {
    faqQuestions: [],
  },
  mutations: {
    SET_QUESTIONS(state, questions) {
      state.faqQuestions = questions;
    },
  },
  actions: {
    fetchQuestions(context) {
      const questions = faqCategories;

      context.commit("SET_QUESTIONS", questions);
    },
  },
  getters: {
    $allQuestions(state) {
      return state.faqQuestions;
    },
    $basecampQuestions(state) {
      return state.faqQuestions.filter(
        (question) => question.title === "Basecamp"
      );
    },
  },
});
