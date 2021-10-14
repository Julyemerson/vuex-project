<template>
  <div class="wrapper">
    <header>
      <h2 class="title">Basecamp</h2>
      <h3 class="subtitle">Selecione uma pergunta</h3>
      <img :src="basecampIcon" alt="Basecamp" />
    </header>
  </div>
</template>

<script>
import basecampIcon from "@/assets/icons/basecamp-1.svg";

export default {
  data() {
    return {
      basecampIcon,
    };
  },
};
</script>

<style scoped></style>
