<template>
  <div class="container">
    <div class="wrapper">
      <header>
        <img :src="astronaut" class="header-astro" alt="Astronauta" />
        <h2 class="title">Perguntas frequentes</h2>
        <h3 class="subtitle">Escolha a categoria desejada</h3>
      </header>
      <main>
        <ul class="faq-categories">
          <li
            class="list_items"
            v-for="categorie in $allQuestions"
            :key="categorie.id"
            @click="currentView = categorie.title"
          >
            <Logo :logoName="categorie.icon" />
            {{ categorie.title }}
          </li>
        </ul>
      </main>
    </div>
  </div>

  <component :is="currentView" />
</template>

<script>
import astronaut from "@/assets/images/astronaut.svg";

import Basecamp from "@/pages/Basecamp.vue";
import Bootcamp from "@/pages/Bootcamp.vue";
import Cataline from "@/pages/Cataline.vue";
import Parcerias from "@/pages/Partnership.vue";
import Logo from "./components/Logo.vue";

export default {
  components: { Basecamp, Bootcamp, Cataline, Parcerias, Logo },

  data() {
    return {
      currentView: "Home",
      astronaut,
    };
  },
  computed: {
    $allQuestions() {
      return this.$store.getters.$allQuestions;
    },
  },
  created() {
    this.$store.dispatch("fetchAllQuestions");
  },
};
</script>

<style>
header {
  padding: 1rem;
}
</style>
