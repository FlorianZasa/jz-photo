<template>
    <div class="main">
        <HeaderComponent class="header"/>
        <div class="termine-container">
            <h1>Termine</h1>
            <router-link to="/" class="btn"><font-awesome-icon icon="fa-solid fa-arrow-left" /> Zurück!</router-link>
        </div>
    </div>
  
</template>

<script>
import HeaderComponent from '@/components/HeaderTop.vue'
export default {
    name: "TerminView",
    components: {
        HeaderComponent
    }
}
</script>

<style scoped>
.termine-container {
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