<template>
  <div class="app">
    
    <router-view></router-view>

    <footer>
      <a href="#impressum">Impressum</a>
      <a href="#impressum">Datenschutz</a>
    </footer>


  </div>
</template>

<script>
export default {
  name: "App",
}
</script>

<style>
@import './assets/styles.css';

html, body {
  padding: 0 !important;
  margin: 0 !important;
}

#app {
  width: 100%;
  
  font-family: 'Playfair Display', serif;
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

@media only screen and (max-width: 600px) {
  .btn {
    font-size: large;
  }
}

</style>
