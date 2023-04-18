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

.header-view-center-image {
  color: white;
  background-image: url("https://cdn.pixabay.com/photo/2014/09/07/22/17/forest-438432_1280.jpg");
  /* width: 100%; */
  height: 100vh;
  object-fit: fill;
  padding: .5rem;

  display: flex;

}

.header-view-center-container {
  width: 60%;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 1rem;
  border-radius: 8px;
  align-items:center;
  justify-content:center;
  gap: 1rem;
  background: rgba(0, 0, 0, 0.313);
}

.header-view-center-container h1{
  color: rgb(241, 228, 183);
  padding: 2rem;
  text-align: center;
}

span {
  font-size: medium;
  color: white;
}

.motivation-frame {
  display: flex;
  background-color: black;
  padding: 3rem;
  justify-content: center;
}

.motivation-frame-inner {
  margin: 3rem;
  padding: 3rem;
  border: 3px solid white;
  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
}

.termine-frame {
  display: flex;
  background-image: url("https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg");
  padding: 3rem;
  justify-content: center;
}

.termine-frame-inner {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  max-width: 60%;
}

footer {
  padding: 2rem;
  background-color: var(--primary-color);
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
}

.kontakt-frame {
  display: flex;
  padding: 3rem;
  justify-content: center;
}

.kontakt-frame-inner {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}

.leistungen-frame {
  background-color: black;
  display: flex;
  padding: 3rem;
  justify-content: center;
}

.leistungen-frame-inner {
  color: white;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}

table th, table td{
  padding: .8rem;
}


@media only screen and (max-width: 600px) {
  /* .header-view-center-image {

  } */

    .header-view-center-container{
      width: 100%
    }

    .motivation-frame {
      padding: 1rem;
    }
    .motivation-frame-inner {
      margin: 0;
      padding: 1rem;
      border: 1px solid white;

    }
    .termine-frame {
      padding: 1rem;
    }

    .termine-frame-inner{
      max-width: 100%;
      padding: 1rem;
    }
    
    .kontakt-frame-inner{
      padding: 1rem;
    }

    .kontakt-frame{
      padding: 1rem;
    }

    .leistungen-frame{
      padding: 1rem;
    }

    .leistungen-frame-inner{
      padding: 1rem;
    }

    table th, table td {
      padding: .3rem;
    }
}

</style>
