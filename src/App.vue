<template>
  <div class="app">
    <div class="container">
      <transition class="slider" :name="transitionType" mode="out-in">
        <component :is="$currentComponent" />
      </transition>
    </div>
  </div>
</template>

<script>
import FaqCategories from "@/components/FaqCategories";
import Questions from "@/components/Questions";
import Answer from "@/components/Answer";

export default {
  name: "App",
  components: { FaqCategories, Questions, Answer },

  data() {
    return {
      transitionType: "slide-left",
    };
  },

  computed: {
    $currentComponent() {
      return this.$store.getters.$currentComponent;
    },
    $transitionDepth() {
      return this.$store.getters.$transitionDepth;
    },
  },
  watch: {
    $transitionDepth(newValue, oldValue) {
      if (newValue > oldValue) {
        this.transitionType = "slide-left";
      } else {
        this.transitionType = "slide-right";
      }
    },
  },
};
</script>

<style>
header {
  padding: 1rem;
}
</style>
