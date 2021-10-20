<template>
    <div class="wrapper">
        <Header />
        <main>
            <ul class="faq-categories">
                <li
                    class="list_items"
                    v-for="question in $basecampQuestions"
                    :key="question.id"
                >
                    {{ question.title }}
                </li>
            </ul>
        </main>
    </div>
</template>

<script>
import basecampIcon from "@/assets/icons/basecamp-1.svg";
import backArrow from "@/assets/icons/backArrow.svg";
import Header from "../components/Header.vue";

export default {
    components: { Header },
    data() {
        return {
            basecampIcon,
            backArrow,
        };
    },
    computed: {
        $basecampQuestions() {
            return this.$store.getters.$basecampQuestions;
        },
    },
    created() {
        this.$store.dispatch("fetchBasecampQuestion");
    },
};
</script>

<style scoped></style>
