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
export default {
  components: { Header },
  computed: {
    $catalineQuestions() {
      return this.$store.getters.$catalineQuestions;
    },
    $categorieName() {
      const { title, icon } = this.$store.getters.$allQuestions.find(
        (cat) => cat.title === "Cataline"
      );
      return { title, icon };
    },
  },
  created() {
    this.$store.dispatch("fetchCatalineQuestion");
  },
};
</script>

<style scoped></style>
