<template>
  <img :src="require(`@/assets/icons/${logoName}`)" :alt="logoName" />
</template>

<script>
// import basecampIcon from "@/assets/icons/rocket.svg";
// import bootcampIcon from "@/assets/icons/astronaut-helmet.svg";
// import catalineIcon from "@/assets/icons/student-hat.svg";
// import partneshipIcon from "@/assets/icons/partnership.svg";
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
  computed: {},
};
</script>

<style lang="scss" scoped></style>
