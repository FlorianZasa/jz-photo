<template>
  <div class="error-container">
    <h1>HTTP ERROR 404</h1>
    <h2>Diese Seite scheint (noch) nicht zu existieren.</h2>
    <div>Schaue eventuell später nochmal vorbei!</div>
    <router-link to="/" class="btn"><font-awesome-icon icon="fa-solid fa-arrow-left" /> Zurück!</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.error-container {
    background: black;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-content: center;
    align-items: center;
    padding: 2rem;
    height: 100vh;
    color: white
}
</style>