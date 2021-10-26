<template>
    <img :src="require(`@/assets/icons/${logoName}`)" :alt="logoName" />
</template>

<script>
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
