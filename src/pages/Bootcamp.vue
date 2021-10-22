<template>
  <div class="wrapper">
    <Header :categorieName="$categorieName" />
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

    $categorieName() {
      const { title } = this.$store.getters.$allQuestions.find(
        (cat) => cat.title === "Bootcamp"
      );
      return title;
    },
  },
  created() {
    this.$store.dispatch("fetchBootcampQuestion");
  },
};
</script>

<style scoped></style>
