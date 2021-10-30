<template>
    <div class="wrapper">
        <Header
            :categorieName="$categorieName.title"
            :icon="$categorieName.icon"
        />
        <main>
            <ul class="faq-categories">
                <li
                    v-for="question in $partnershipQuestions"
                    :key="question.id"
                    class="list_items"
                >
                    {{ question.title }}
                </li>
            </ul>
        </main>
    </div>
</template>

<script>
import Header from "../components/Header.vue";
import { categorieByName } from "../utils/utils";

export default {
    components: { Header },
    computed: {
        $partnershipQuestions() {
            return this.$store.getters.$partnershipQuestions;
        },
        $categorieName() {
            const partnership = "Parcerias";
            return categorieByName(partnership);
        },
    },
    created() {
        this.$store.dispatch("fetchPartnershipQuestion");
    },
};
</script>

<style scoped></style>
