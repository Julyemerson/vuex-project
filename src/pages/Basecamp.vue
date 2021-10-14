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
    $allQUestions() {
      const data = this.$store.getters.$allQuestions;
      return data;
    },
  },
  created() {
    console.log(this.$allQUestions);
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
