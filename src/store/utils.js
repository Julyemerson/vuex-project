import { faqCategories } from "@/utils/db.json";

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
