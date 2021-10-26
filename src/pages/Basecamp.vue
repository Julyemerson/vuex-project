<template>
  <div class="wrapper">
    <Header :categorieName="$categorieName.title" :icon="$categorieName.icon" />
    <main>
      <ul class="faq-categories">
        <li
          class="list_items"
          v-for="categorie in $basecampQuestions"
          :key="categorie.id"
        >
          {{ categorie.title }}
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import basecampIcon from "@/assets/icons/rocket.svg";
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
    $categorieName() {
      const { title, icon } = this.$store.getters.$allQuestions.find(
        (cat) => cat.title === "Basecamp"
      );
      return { title, icon };
    },
  },
  created() {
    this.$store.dispatch("fetchBasecampQuestion");
  },
};
</script>

<style scoped></style>
