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
                    @click="currentView = 'Answers'"
                >
                    {{ categorie.title }}
                </li>
            </ul>
        </main>
    </div>
    <component
        :is="currentView"
        :categorieName="$categorieName.title"
        :content="$categorieName.content"
    />
</template>

<script>
import basecampIcon from "@/assets/icons/rocket.svg";
import backArrow from "@/assets/icons/backArrow.svg";
import Header from "../components/Header.vue";
import Answers from "./Answers.vue";

export default {
    components: { Header, Answers },
    data() {
        return {
            basecampIcon,
            backArrow,
            currentView: "Home",
        };
    },
    computed: {
        $basecampQuestions() {
            return this.$store.getters.$basecampQuestions;
        },
        $categorieName() {
            const { title, icon } = this.$store.getters.$allQuestions.find(
                (cat) => cat.title === "Basecamp"
            );
            return { title, icon };
        },
    },
    created() {
        this.$store.dispatch("fetchBasecampQuestion");
        console.log(this.$basecampQuestions);
    },
};
</script>

<style scoped></style>
