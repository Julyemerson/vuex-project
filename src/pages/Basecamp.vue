<template>
    <div class="wrapper">
        <Header
            :categorieName="$categorieName.title"
            :icon="$categorieName.icon"
        />
        <main>
            <ul class="faq-categories">
                <li
                    class="list_items"
                    v-for="categorie in $basecampQuestions"
                    :key="categorie.id"
                    @click="
                        getAnswerContent(categorie.id),
                            (currentView = 'Answers')
                    "
                >
                    {{ categorie.title }}
                </li>
            </ul>
        </main>
    </div>
    <component :is="currentView" />
</template>

<script>
import basecampIcon from "@/assets/icons/rocket.svg";
import backArrow from "@/assets/icons/backArrow.svg";
import Header from "../components/Header.vue";
import Answers from "./Answers.vue";
import { categorieByName } from "../utils/utils";

export default {
    components: { Header, Answers },
    data() {
        return {
            basecampIcon,
            backArrow,
            currentView: "Home",
            basecamp: "Basecamp",
        };
    },
    computed: {
        $basecampQuestions() {
            return this.$store.getters.$basecampQuestions;
        },
        $categorieName() {
            const basecamp = "Basecamp";
            return categorieByName(basecamp);
        },
    },
    methods: {
        getAnswerContent(id) {
            const { content } = this.$store.getters.$basecampQuestions.find(
                (ans) => ans.id === id
            );
            console.log(content);
            return content;
        },
    },
    created() {
        this.$store.dispatch("fetchBasecampQuestion");
        console.log(this.$basecampQuestions);
    },
};
</script>

<style scoped></style>
