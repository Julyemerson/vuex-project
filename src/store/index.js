import { createStore } from "vuex";
import { fetchCategorieQuestion } from "../utils/utils";
import { faqCategories } from "@/utils/db.json";

const basecamp = "Basecamp";
const bootcamp = "Bootcamp";
const cataline = "Cataline";
const partnership = "Parcerias";

export default createStore({
  state: {
    globalStateFaqQuestions: [],
    globalStateBasecampQuestion: [],
    globalStateBootcampQuestion: [],
    globalStateCatalineQuestion: [],
    globalStatePartnershipQuestion: [],
  },
  mutations: {
    SET_QUESTIONS(state, questions) {
      state.globalStateFaqQuestions = questions;
    },
    SET_BASECAMP_QUESTIONS(state, basecampQuestions) {
      state.globalStateBasecampQuestion = basecampQuestions;
    },
    SET_BOOTCAMP_QUESTIONS(state, bootcampQuestion) {
      state.globalStateBootcampQuestion = bootcampQuestion;
    },
    SET_CATALINE_QUESTIONS(state, catalineQuestions) {
      state.globalStateCatalineQuestion = catalineQuestions;
    },
    SET_PARTNERSHIP_QUESTIONS(state, partnershipQuestion) {
      state.globalStatePartnershipQuestion = partnershipQuestion;
    },
  },
  actions: {
    fetchAllQuestions(context) {
      const questions = faqCategories;
      context.commit("SET_QUESTIONS", questions);
    },
    fetchBasecampQuestion(context) {
      fetchCategorieQuestion(context, basecamp);
    },
    fetchBootcampQuestion(context) {
      fetchCategorieQuestion(context, bootcamp);
    },
    fetchCatalineQuestion(context) {
      fetchCategorieQuestion(context, cataline);
    },
    fetchPartnershipQuestion(context) {
      fetchCategorieQuestion(context, partnership);
    },
  },
  getters: {
    $allQuestions(state) {
      return state.globalStateFaqQuestions;
    },
    $basecampQuestions(state) {
      return state.globalStateBasecampQuestion;
    },
    $bootcampQuestions(state) {
      return state.globalStateBootcampQuestion;
    },
    $catalineQuestions(state) {
      return state.globalStateCatalineQuestion;
    },
    $partnershipQuestions(state) {
      return state.globalStatePartnershipQuestion;
    },
  },
});

//Global state -> actions -> mutations -> change global state
//access by getters
//just mutations can change the global state. Thats a good pratice
