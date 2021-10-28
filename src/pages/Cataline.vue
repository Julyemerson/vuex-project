<template>
  <div class="wrapper">
    <Header :categorieName="$categorieName.title" :icon="$categorieName.icon" />
    <main>
      <ul class="faq-categories">
        <li
          v-for="question in $catalineQuestions"
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
    $catalineQuestions() {
      return this.$store.getters.$catalineQuestions;
    },
    $categorieName() {
      const cataline = "Cataline";
      return returnCategorieByName(cataline);
    },
  },
  created() {
    this.$store.dispatch("fetchCatalineQuestion");
  },
};
</script>

<style scoped></style>
