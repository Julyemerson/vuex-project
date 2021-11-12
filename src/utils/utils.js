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

export const categorieByName = (categorie) => {
<<<<<<< HEAD
    const { title, icon } = createStore.getters.$allQuestions.find(
        (cat) => cat.title === categorie
    );
    return { title, icon };
=======
  const { title, icon } = createStore.getters.$allQuestions.find(
    (cat) => cat.title === categorie
  );
  return { title, icon };
>>>>>>> b93c53c10cf92167cd383716536c65750b6b6049
};
