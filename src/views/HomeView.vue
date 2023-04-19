<template>
    <div class="home-container">

        <NavBar @id="scrollToElement" />

        <section id="home" ref="home">
            <div class="header-view-center-image">
                <div class="header-view-center-container">
                <h1>Wo die Kreativität zu Hause ist</h1>
                <!-- <img src="./assets/title.gif" alt="Wo die Kreativität zu Hause ist"> -->
                <span>Point Design, Grafiksedign, Gutes Design</span>
                <router-link to="/404" class="btn">Mehr lesen <font-awesome-icon icon="fa-solid fa-arrow-right" /></router-link>
                </div>
            </div>
            </section>

            <section id="motivation" ref="motivation">
            <div class="motivation-frame">
                <div class="motivation-frame-inner">
                <h4>Meine Motivation</h4>
                <span>Meine Arbeit ist meine Leidenschaft und ein positiver Antrieb für jeden Tag fpr Sie mich dazu an jeder neuen Herausforderung zu wachsen und so neue Ziele zu erreichen.</span>
                <router-link to="/404" class="btn">Mehr lesen <font-awesome-icon icon="fa-solid fa-arrow-right" /></router-link>
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
                <router-link to="/termine" class="btn"><font-awesome-icon icon="fa-solid fa-calendar" /> Alle Termine</router-link>
                </div>
            </div>
            </section>

            <section id="kontakt" ref="kontakt">
            <div class="kontakt-frame">
                <div class="kontakt-frame-inner">
                <h4>Kontakt</h4>
                <span>Erreiche mich schnell und unkompliziert.</span>
                <form action="/buchung" id="buchung-form">
                    <label for="vname">Vorname:</label>
                    <input type="text" id="vname" name="vname" required>
                    <label for="nname">Nachname:</label>
                    <input type="text" id="nname" name="nname" required>
                    <label for="email">E-Mail:</label>
                    <input type="email" id="email" name="email" required><br>
                    <label for="anliegen">Ihr Anliegen:</label>
                    <textarea id="anliegen" name="anliegen" rows="6" required></textarea><br>
                    <input type="submit" value="Senden" class="btn">
                </form>
                </div>
            </div>
            </section>

            <section id="leistungen" ref="leistungen">
            <div class="leistungen-frame">
                <div class="leistungen-frame-inner">
                  <h4>Meine Leistungen</h4>
                  <br>
                  <div class="leistung-card-frame">
                    <LeistungCard title="Leistungstitel 1" body="Dieser Titel beinhaltet weitere Lesitungen, die gebucht werden können" price=9,99 oldPrice="23,98" />
                    <LeistungCard title="Leistungstitel 2" body="Leistungsbeschreibung beschreibt die Leistung genauer" price=22,00 oldPrice="100,00" />
                    <LeistungCard title="Leistungstitel 3" body="Weitere Leistung beinhaltet noch intensivere Sessions" price=100,99 oldPrice="0" />
                  </div>
                  <div class="leistung-table">
                    <div class="leistung">
                      <span>Leistungstitel 1</span>
                      <span>Leistungsbeschreibung beschreibt die Leistung genauer</span>
                      <span><b>9,99 €</b> <s>12,99 €</s></span>
                    </div>
                    <div class="leistung">
                      <span>Leistungstitel 2</span>
                      <span>Dieser Titel beinhaltet weitere Lesitungen, die gebucht werden können</span>
                      <span><b>22,00 €</b> <s>100,00 €</s></span>
                    </div>
                  </div>
                <!-- <table>
                    <thead>
                    <th>Leistung</th>
                    <th>Beschreibung</th>
                    <th>Preis</th>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Leistungstitel</td>
                        <td>Beschreibung der Leistung</td>
                        <td>9,99 €</td>
                    </tr>
                    </tbody>
                </table> -->
                </div>
              </div>
            </section>
        </div>
</template>

<script>
import NavBar from '@/components/NavBarTop.vue'
import LeistungCard from '@/components/LeistungCard.vue'
export default {
    components: {
        NavBar,
        LeistungCard
    },
    methods: {
        scrollToElement(id) {
        console.log(id)
        const el = this.$refs[id];

        if (el) {
            el.scrollIntoView({top: '-100px', behavior: 'smooth'});
        }
    }
  }
}
</script>

<style scoped>
.home-container{
  z-index: 1;
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
  width: 100%
}

#buchung-form {
  display: flex;
  flex-direction: column;
  min-width: 80%;
  gap: .5rem;
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
  gap: 1rem;
}

.leistung-card-frame {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;
  flex-wrap: wrap;
}

.leistung {
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items: center;
  justify-content: space-between;
  gap:2rem;
}
.leistung span {
  text-align: left;
}

.leistung span b{
      background-color: var(--primary-color);
      padding: .5rem;
      border-radius: 50%;
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

    #buchung-form {
      width: 100%
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

    .leistung {
      display: flex;
      flex-direction: column;
      align-items: center;
      align-content: center;
      max-width: 90%;
      margin-bottom: 1rem;
      gap: 1rem;
    }

    .leistung span {
      text-align: center;
    }

    .leistung-card-frame {
      display: flex;
      flex-direction: column;
      justify-items: center;
      align-items: center;
    }

}

</style>