import { faqCategories } from "@/utils/db.json";
import createStore from "../store/index.js";

export const fetchCategorieQuestion = (context, categorie) => {
  const blockQuestion = faqCategories.find((cat) => cat.title === categorie);
  const questionsForMutation = blockQuestion.questions.map(
    (questionTitle) => questionTitle
  );
  if (categorie === "Parcerias") categorie = "partnership";
  context.commit(
    `SET_${categorie.toUpperCase()}_QUESTIONS`,
    questionsForMutation
  );
};

export const returnCategorieByName = (categorie) => {
  const { title, icon } = createStore.getters.$allQuestions.find(
    (cat) => cat.title === categorie
  );
  return { title, icon };
};
