<template>
    <div class="main">
        <HeaderComponent class="header"/>
        <div class="buchen-container">
            <h1>Buchen</h1>
            <router-link to="/" class="btn"><font-awesome-icon icon="fa-solid fa-arrow-left" />Zurück!</router-link>
        </div>
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderTop.vue'
export default {
    name: "BuchenView",
    components: {
        HeaderComponent
    }

}
</script>

<style scoped>
.buchen-container {
    background: black;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    height: 100vh;
    align-content: center;
    align-items: center;
}
</style>