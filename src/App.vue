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
          >
            <img :src="categorie.image" :alt="categorie.name" />
            {{ categorie.name }}
          </li>
        </ul>
      </main>
    </div>
  </div>
</template>

<script>
import astronaut from "@/assets/images/astronaut.svg";
import basecamp1 from "@/assets/icons/basecamp-1.svg";
import bootcamp2 from "@/assets/icons/bootcamp-2.svg";
import cataline from "@/assets/icons/cataline-3.svg";
import parceria from "@/assets/icons/parceria-4.svg";

export default {
  setup() {
    return {
      astronaut,
      basecamp1,
      bootcamp2,
      cataline,
      parceria,
    };
  },
  data() {
    return {
      faqCategories: [
        { name: "Basecamp", image: basecamp1 },
        { name: "Bootcamp", image: bootcamp2 },
        { name: "Cataline", image: cataline },
        { name: "Parceria", image: parceria },
      ],
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
.wrapper {
  display: grid;
  grid-template-columns: 305px;
  grid-template-rows: auto;
  justify-content: center;
  align-content: center;
  gap: 1rem;

  background: #26282c;
  color: #f5f6f8;

  max-width: 305px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

.title {
  margin-top: 0.5rem;
  font-size: 24px;
  font-weight: bold;
  padding: 0.3rem;
}

.subtitle {
  font-size: 16px;
  font-weight: 400;
  padding: 0.3rem;
}

.faq-categories {
  list-style: none;
}

.bootcamp__items {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 2rem;
  align-items: center;
}

ul li {
  padding: 1rem;
  transition: 0.3s;
  cursor: pointer;
}

ul li:hover {
  background: #3f4452;
  border-radius: 5px;
}

header {
  padding: 1rem;
}
</style>
