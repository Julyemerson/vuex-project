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
            class="bootcamp__items"
            v-for="categorie in faqCategories"
            :key="categorie.name"
            @click="currentView = categorie.name"
          >
            <img :src="categorie.image" :alt="categorie.name" />
            {{ categorie.name }}
          </li>
        </ul>
      </main>
    </div>
  </div>

  <component :is="currentView" />
</template>

<script>
import astronaut from "@/assets/images/astronaut.svg";
import basecampIcon from "@/assets/icons/basecamp-1.svg";
import bootcampIcon from "@/assets/icons/bootcamp-2.svg";
import catalineIcon from "@/assets/icons/cataline-3.svg";
import partneshipIcon from "@/assets/icons/parceria-4.svg";

import Basecamp from "@/pages/Basecamp.vue";
import Bootcamp from "@/pages/Bootcamp.vue";
import Cataline from "@/pages/Cataline.vue";
import Partnership from "@/pages/Partnership.vue";

export default {
  components: { Basecamp, Bootcamp, Cataline, Partnership },

  setup() {
    return {
      astronaut,
      basecampIcon,
      bootcampIcon,
      catalineIcon,
      partneshipIcon,
    };
  },
  data() {
    return {
      faqCategories: [
        { name: "Basecamp", image: basecampIcon },
        { name: "Bootcamp", image: bootcampIcon },
        { name: "Cataline", image: catalineIcon },
        { name: "Partnership", image: partneshipIcon },
      ],
      currentView: "Home",
    };
  },
  computed: {
    $allQuestions() {
      return this.$store.getters.$allQuestions;
    },
  },
  created() {
    this.$store.dispatch("fetchQuestions");
    console.log(this.$allQuestions);
  },
};
</script>

<style>
.faq-categories {
  list-style: none;
}

.bootcamp__items {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 2rem;
  align-items: center;
  padding: 1rem 2rem;
  transition: 0.5s;
  cursor: pointer;
}

.bootcamp__items:hover {
  background: #3f4452;
  border-radius: 5px;
}

header {
  padding: 1rem;
}
</style>
