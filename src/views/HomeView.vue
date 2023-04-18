<template>
    <div class="home-container">

        <NavBar @id="scrollToElement" />

        <section id="home" ref="home">
            <div class="header-view-center-image">
                <div class="header-view-center-container">
                <h1>Wo die Kreativität zu Hause ist</h1>
                <!-- <img src="./assets/title.gif" alt="Wo die Kreativität zu Hause ist"> -->
                <span>Point Design, Grafiksedign, Gutes Design</span>
                <button class="btn">Mehr lesen <font-awesome-icon icon="fa-solid fa-arrow-right" /></button>
                </div>
            </div>
            </section>

            <section id="motivation" ref="motivation">
            <div class="motivation-frame">
                <div class="motivation-frame-inner">
                <h4>Meine Motivation</h4>
                <span>Meine Arbeit ist meine Leidenschaft und ein positiver Antrieb für jeden Tag fpr Sie mich dazu an jeder neuen Herausforderung zu wachsen und so neue Ziele zu erreichen.</span>
                <button class="btn">Mehr lesen <font-awesome-icon icon="fa-solid fa-arrow-right" /></button>
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
                <button class="btn"><font-awesome-icon icon="fa-solid fa-calendar" /> Alle Termine</button>
                </div>
            </div>
            </section>

            <section id="kontakt" ref="kontakt">
            <div class="kontakt-frame">
                <div class="kontakt-frame-inner">
                <h4>Kontakt</h4>
                <span>Erreiche mich schnell und unkompliziert.</span>
                <form action="default.prevent">
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
                <span><b>Hier stehen dann die Leistungen mit einer Preisliste:</b></span>
                <br>
                <table>
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
                </table>
                </div>
            </div>
            </section>
        </div>
</template>

<script>
import NavBar from '@/components/NavBarTop.vue'
export default {
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

</style>