<template>
  <div class="wrapper">
    <Header :categorieName="$categorieName.title" :icon="$categorieName.icon" />
    <main>
      <ul class="faq-categories">
        <li
          v-for="question in $bootcampQuestions"
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
import { returnCategorieByName } from "../utils/utils";

export default {
  components: { Header },
  computed: {
    $bootcampQuestions() {
      return this.$store.getters.$bootcampQuestions;
    },

    $categorieName() {
      const bootcamp = "Bootcamp";
      return returnCategorieByName(bootcamp);
    },
  },
  created() {
    this.$store.dispatch("fetchBootcampQuestion");
  },
};
</script>

<style scoped></style>
