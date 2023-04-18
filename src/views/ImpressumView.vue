<template>
  <div class="impressum">
    <h1>Impressum</h1>

<h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
<p>Florian Zasada<br />
Musterstra&szlig;e 111<br />
Geb&auml;ude 44<br />
90210 Musterstadt</p>

<h2>Kontakt</h2>
<p>Telefon: +49 (0) 123 44 55 66<br />
Telefax: +49 (0) 123 44 55 99<br />
E-Mail: mustermann@musterfirma.de</p>

<p>Quelle: <a href="https://www.e-recht24.de">https://www.e-recht24.de</a></p>
<router-link to="/" class="btn"><font-awesome-icon icon="fa-solid fa-arrow-left" /> Bring mich zurück!</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.impressum {
  display: flex;
  flex-direction: column;
  padding: 2rem;
}
</style>