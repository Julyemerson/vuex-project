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

<style lang="scss">
.app {
    display: grid;
    grid-template-columns: 305px;
    grid-template-rows: 29.389rem;
    justify-content: center;
    align-content: center;
    height: 100vh;
    background: #26282c;
    .container {
        padding: 2rem 0.375rem;
        padding-bottom: 0.875rem;
        background-image: linear-gradient(to bottom, #3f4452, #26282c);
        border-radius: 15px;
        -webkit-box-shadow: 0px 8px 21px 3px rgba(0, 0, 0, 0.19);
        -moz-box-shadow: 0px 8px 21px 3px rgba(0, 0, 0, 0.19);
        box-shadow: 0px 8px 21px 3px rgba(0, 0, 0, 0.19);
        overflow: hidden;
        position: relative;
    }
}
</style>
