<template>
    <div class="answer">
        <div class="heading">
            <div @click="goToQuestion()" class="btn-arrow">
                <div class="arrow"></div>
            </div>
            <div class="heading-text">
                <p>{{ $singleQuestion.title }}</p>
            </div>
        </div>
        <p v-html="$singleQuestion.content" class="content"></p>
    </div>
</template>

<script>
export default {
    name: "Answer",
    computed: {
        $singleQuestion() {
            return this.$store.getters.$singleQuestion;
        },
    },
    methods: {
        goToQuestion() {
            this.$store.dispatch("decreaseTransitionDepth");
            this.$store.dispatch("changeCurrentComponent", "Questions");
        },
    },
};
</script>

<style lang="scss" scoped>
.heading {
    padding: 0 1.25rem 1.875rem 1.25rem;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
    align-items: center;

    .heading-text p {
        color: #f5f6f8;
        font-size: 1rem;
    }

    .btn-arrow {
        padding: 0.875rem 0.75rem;
        cursor: pointer;
        background-color: transparent;
        border-radius: 8px;
        transition: background-color 200ms ease-in-out;
        &:hover {
            background: #26282c;
            border-radius: 8px;
        }
    }
    .arrow {
        width: 22px;
        height: 3px;
        background: #f5f6f8;
        border-radius: 1.25rem;
        position: relative;
        &:before,
        &:after {
            content: "";
            content: "";
            background: #f5f6f8;
            position: absolute;
            width: 13px;
            height: 3px;
        }
        &:before {
            top: -4px;
            left: -3px;
            border-radius: 20px;
            transform: rotate(-51deg);
        }
        &:after {
            transform: rotate(51deg);
            bottom: -4px;
            left: -3px;
            border-radius: 20px;
        }
    }
}
.content {
    font-size: 0.813rem;
    color: #f5f6f8;
    padding: 0 1.25rem 1.875rem 1.25rem;
    line-height: 1.25rem;
}
</style>
