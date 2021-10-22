<template>
  <div class="wrapper">
    <Header :name="$catalineQuestions.title" />
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
  },
  created() {
    this.$store.dispatch("fetchCatalineQuestion");
  },
};
</script>

<style scoped></style>
