<template>
    <div class="questions">
        <div class="heading">
            <div @click="goToFaq()" class="btn-arrow">
                <div class="arrow"></div>
            </div>
            <div class="heading-text">
                <h2>{{ $singleCategory.title }}</h2>
                <p>Selectiona uma Pergunta</p>
            </div>
            <img :src="getImage($singleCategory)" alt="" />
        </div>
        <ul class="question-list">
            <li
                @click="goToAnswer(question)"
                v-for="question in $singleCategory.questions"
                :key="question.id"
                class="question-item"
            >
                {{ question.title }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Questions",
    computed: {
        $singleCategory() {
            return this.$store.getters.$singleCategory;
        },
    },
    methods: {
        goToAnswer(question) {
            this.$store.dispatch("increaseTransitionDepth");
            this.$store.dispatch("getSingleQuestion", question);
            this.$store.dispatch("changeCurrentComponent", "Answer");
        },
        goToFaq() {
            this.$store.dispatch("decreaseTransitionDepth");
            this.$store.dispatch("changeCurrentComponent", "FaqCategories");
        },
        getImage(item) {
            return require(`../assets/icons/${item.icon}`);
        },
    },
};
</script>

<style lang="scss" scoped>
.heading {
    padding: 0 1.25rem 1.875rem 1.25rem;
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 1rem;
    align-items: center;
    border-bottom: 1px solid #404451;

    .heading-text h2,
    p {
        color: #f5f6f8;
    }
    .heading-text h2 {
        font-size: 1.25rem;
    }
    .heading-text p {
        font-size: 0.813rem;
        padding-top: 0.288rem;
    }
    img {
        width: 1.5rem;
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
            content: " ";
            content: " ";
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
.question-list {
    list-style: none;
    padding-top: 0.813rem;
    .question-item {
        padding: 1rem 1.25rem;
        color: #f5f6f8;
        font-size: 1rem;
        background-color: transparent;
        transition: background-color 200ms ease-in-out;
        &:hover {
            background-color: #3f4452;
            cursor: pointer;
        }
    }
}
</style>
