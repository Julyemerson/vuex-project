<template>
  <div class="wrapper">
    <h3 class="title">{{ categorieName }}</h3>
    <p class="content">{{ content }}</p>
  </div>
</template>

<script>
export default {
  props: {
    categorieName: {
      type: String,
      default: "Nome",
    },
    content: {
      type: String,
      default: "conteúdo",
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
