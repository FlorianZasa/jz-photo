<template>
  <div class="app">
    <NavBar @id="scrollToElement" />
    
    <section id="header" ref="header">
      <div class="header-view-center-image">
        <div class="header-view-center-container">
          <h1>Wo die Kreativität zu Hause ist</h1>
          <!-- <img src="./assets/title.gif" alt="Wo die Kreativität zu Hause ist"> -->
          <span>Point Design, Grafiksedign, Gutes Design</span>
          <button class="btn">Mehr lesen</button>
        </div>
      </div>
    </section>

    <section id="motivation" ref="motivation">
      <div class="motivation-frame">
        <div class="motivation-frame-inner">
          <h4>Meine Motivation</h4>
          <span>Meine Arbeit ist meine Leidenschaft und ein positiver Antrieb für jeden Tag fpr Sie mich dazu an jeder neuen Herausforderung zu wachsen und so neue Ziele zu erreichen.</span>
          <button class="btn">Mehr lesen</button>
        </div>
      </div>
    </section>

    <section id="termine" ref="termine">
      <div class="termine-frame">
        <div class="termine-frame-inner">
          <h4>Termine</h4>
          <span>Schneller, stressiger Alltag! Es ist erstaunlich, wie gerade die kleinen Dinge manchmal besonders viel Zeit
            in Anspruch nehmen. Was nicht zu ....
          </span>
          <button class="btn">Alle Termine</button>
        </div>
      </div>
    </section>

    <footer>
      <a href="#impressum">Impressum</a>
      <a href="#impressum">Datenschutz</a>
    </footer>


  </div>
</template>

<script>
import NavBar from '@/components/NavBarTop.vue'
export default {
  name: "App",
  components: {
    NavBar
  },
  methods: {
    scrollToElement(id) {
      console.log(id)
      const el = this.$refs[id];

      if (el) {
        el.scrollIntoView({behavior: 'smooth'});
      }
      }
  }
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
      padding: 2rem;
    }

    .termine-frame-inner{
      max-width: 100%;
    }
}

</style>
