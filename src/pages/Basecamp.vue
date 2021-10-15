<template>
  <div class="wrapper">
    <header>
      <img :src="backArrow" alt="Seta Voltar" />
      <div>
        <h2 class="title">Basecamp</h2>
        <h3 class="subtitle">Selecione uma pergunta</h3>
      </div>
      <img :src="basecampIcon" alt="Basecamp" />
    </header>
    <main>
      <ul class="faq-categories">
        <li
          v-for="question in $basecampQuestions"
          :key="question.id"
          class="list_items"
        >
          {{ question.questions.title }}
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import basecampIcon from "@/assets/icons/basecamp-1.svg";
import backArrow from "@/assets/icons/backArrow.svg";

export default {
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
  },
  created() {
    console.log(this.$basecampQuestions);
  },
};
</script>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 1rem;
}
</style>
