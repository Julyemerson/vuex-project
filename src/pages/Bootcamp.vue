<template>
  <div class="wrapper">
    <Header :name="$bootcampQuestions.title" />
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
export default {
  components: { Header },
  computed: {
    $bootcampQuestions() {
      return this.$store.getters.$bootcampQuestions;
    },
  },
  created() {
    this.$store.dispatch("fetchBootcampQuestion");
  },
};
</script>

<style scoped></style>
