<template>
  <img :src="getLogoByCategorie(logoName)" :alt="logoName" />
</template>

<script>
import basecampIcon from "@/assets/icons/basecamp-1.svg";
import bootcampIcon from "@/assets/icons/bootcamp-2.svg";
import catalineIcon from "@/assets/icons/cataline-3.svg";
import partneshipIcon from "@/assets/icons/parceria-4.svg";
export default {
  props: {
    logoName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    getLogoByCategorie(categorie) {
      const icons = {
        basecamp: basecampIcon,
        bootcamp: bootcampIcon,
        cataline: catalineIcon,
        parcerias: partneshipIcon,
      }[categorie];
      return icons;
    },
  },
};
</script>

<style lang="scss" scoped></style>
