<template>
    <header>
        <img :src="backArrow" alt="Seta Voltar" />
        <div>
            <h2 class="title">{{ categorieName }}</h2>
            <h3 class="subtitle">Selecione uma pergunta</h3>
        </div>
        <Logo logoName="Basecamp" />
    </header>
</template>

<script>
import backArrow from "@/assets/icons/backArrow.svg";
import basecampIcon from "@/assets/icons/rocket.svg";
import Logo from "@/components/Logo";
export default {
    components: { Logo },
    data() {
        return {
            backArrow,
            basecampIcon,
        };
    },
};
</script>

<style scoped>
header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    gap: 1rem;
}
</style>
