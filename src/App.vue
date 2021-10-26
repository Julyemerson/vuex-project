<template>
    <div class="container">
        <div class="wrapper">
            <header>
                <img :src="astronaut" class="header-astro" alt="Astronauta" />
                <h2 class="title">Perguntas frequentes</h2>
                <h3 class="subtitle">Escolha a categoria desejada</h3>
            </header>
            <main>
                <ul class="faq-categories">
                    <li
                        class="list_items"
                        v-for="categorie in faqCategories"
                        :key="categorie.name"
                        @click="currentView = categorie.name"
                    >
                        <img :src="categorie.image" :alt="categorie.name" />
                        {{ categorie.name }}
                    </li>
                </ul>
            </main>
        </div>
    </div>

    <component :is="currentView" />
</template>

<script>
import astronaut from "@/assets/images/astronaut.svg";
import basecampIcon from "@/assets/icons/rocket.svg";
import bootcampIcon from "@/assets/icons/astronaut-helmet.svg";
import catalineIcon from "@/assets/icons/student-hat.svg";
import partneshipIcon from "@/assets/icons/partnership.svg";

import Basecamp from "@/pages/Basecamp.vue";
import Bootcamp from "@/pages/Bootcamp.vue";
import Cataline from "@/pages/Cataline.vue";
import Parcerias from "@/pages/Partnership.vue";

export default {
    components: { Basecamp, Bootcamp, Cataline, Parcerias },

    setup() {
        return {
            astronaut,
            basecampIcon,
            bootcampIcon,
            catalineIcon,
            partneshipIcon,
        };
    },
    data() {
        return {
            faqCategories: [
                { name: "Basecamp", image: basecampIcon },
                { name: "Bootcamp", image: bootcampIcon },
                { name: "Cataline", image: catalineIcon },
                { name: "Parcerias", image: partneshipIcon },
            ],
            currentView: "Home",
        };
    },
    computed: {
        $allQuestions() {
            return this.$store.getters.$allQuestions;
        },
    },
    created() {
        this.$store.dispatch("fetchAllQuestions");
    },
};
</script>

<style>
header {
    padding: 1rem;
}
</style>
