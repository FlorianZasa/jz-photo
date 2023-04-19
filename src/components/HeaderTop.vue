<template>
  <div class="header">
    <div class="right">
        <router-link to="/" class="icon">Julia Zasada Fotografie & Design</router-link>
    </div>
    <div class="left">
        
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
    padding: 1rem;
    background-color: var(--primary-color);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.icon {
    text-decoration: none !important;
    color: white;
}
</style>