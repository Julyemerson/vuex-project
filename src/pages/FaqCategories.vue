<template>
    <div class="faq-categories">
        <div class="heading">
            <div class="image-heading">
                <img src="@/assets/images/astrounaut.svg" alt="Astrounaut" />
            </div>
            <div class="heading-text">
                <h2>Perguntas frequentes</h2>
                <p>Escolha a categoria desejada</p>
            </div>
            <ul class="categories"></ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "faqCategories",
    created() {
        this.$store.dispatch("fetchFaqCategories");
    },
    computed: {
        $allCategories() {
            return this.$store.getters.$allCategories;
        },
    },
    methods: {
        goToQuestion(category) {
            this.$store.dispatch("increaseTransitionDepth");
            this.$store.dispatch("changeCurrentComponent", "Questions");
            this.$store.dispatch("getSingleCategory", category);
        },
        getImage(item) {
            return require(`@/assets/images/${item.icon}`);
        },
    },
};
</script>

<style lang="scss" scoped></style>
