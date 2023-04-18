<template>
  <div class="impressum">
    <b>Hier steht das Impressum:</b>
    <p>
      Anbieter: <br>
      Max Mustermann<br>
      Musterstraße 1<br>
      80999 München<br>
      <br>
      Kontakt:<br>
      Telefon: 089/1234567-8<br>
      Telefax: 089/1234567-9<br>
      E-Mail: mail@mustermann.de<br>
      Website: www.mustermann.de<br>
      <br>
      <br>
      <br>
      Bei redaktionellen Inhalten:<br>
      <br>
      Verantwortlich nach § 55 Abs.2 RStV<br>
      Moritz Schreiberling<br>
      Musterstraße 2<br>
      80999 München<br>
    </p>
    <br>
    <hr>
    <router-link to="/" class="btn"><font-awesome-icon icon="fa-solid fa-arrow-left" /> Bring mich zurück</router-link>
    <br>
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