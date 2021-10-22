<template>
  <div class="wrapper">
    <Header :name="$partnershipQuestions.title" />
    <main>
      <ul class="faq-categories">
        <li
          v-for="question in $partnershipQuestions"
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
    $partnershipQuestions() {
      return this.$store.getters.$partnershipQuestions;
    },
  },
  created() {
    this.$store.dispatch("fetchPartnershipQuestion");
  },
};
</script>

<style scoped></style>
