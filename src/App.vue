<template>
  <div class="app">
    
    

    <router-view></router-view>

    <footer>
      <router-link to="/impressum">Impressum</router-link>
      <router-link to="/impressum">Datenschutz</router-link>
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

footer {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  padding: 3rem;
  background: var(--primary-color);
}

footer a {
  color: white;
  text-decoration: none;
}


@media only screen and (max-width: 600px) {
  .btn {
    font-size: 16px;
  }
}

</style>
