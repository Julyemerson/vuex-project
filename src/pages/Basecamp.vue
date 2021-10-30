<template>
  <div class="wrapper">
    <Header :categorieName="$categorieName.title" :icon="$categorieName.icon" />
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
    :categorieName="answers.title"
    :content="answers.content"
    v-for="answers in $basecampQuestions"
    :key="answers.id"
  />
</template>

<script>
import basecampIcon from "@/assets/icons/rocket.svg";
import backArrow from "@/assets/icons/backArrow.svg";
import Header from "@/components/Header.vue";
import Answers from "@/pages/Answers.vue";
import { answerByName, categorieByName } from "../utils/utils";

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
    $answerByName(title) {
      answerByName(title);
    },
  },
  created() {
    this.$store.dispatch("fetchBasecampQuestion");
    console.log(this.$basecampQuestions);
  },
};
</script>

<style scoped></style>
