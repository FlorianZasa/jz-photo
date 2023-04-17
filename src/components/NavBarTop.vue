<template>
    <div class="nav-bar-container">

        <div class="nav-toggle">
            <div class="right">
                <a href="#">Julia Zasada Fotografie & Design</a>
            </div>
            <div class="left">
                <font-awesome-icon icon="fa-solid fa-bars" />
            </div>
        </div>

        <nav class="nav-bar">
            <div class="left">
                <a href="#">Julia Zasada Fotografie & Design</a>
            </div>
            <div class="right">
                <button class="nav-item active">Home</button>
                <button class="nav-item" @click="scrollToElement($event)" id="termine">Termine</button>
                <button class="nav-item" @click="scrollToElement($event)" id="kontakte">Kontakt</button>
                <button class="nav-item" @click="scrollToElement($event)" id="leistungen">Meine Leistungen</button>
                <button class="btn">Jetzt Buchen</button>
            </div>
        </nav>
    </div> 
</template>

<script>
export default {
    methods: {
        scrollToElement(event) {
            var id = event["target"].id
            this.$emit('id', id);
        }
    }
}
</script>

<style scoped>
@import '../assets/styles.css';

a {
    text-decoration: none;
    color: white;
}

.active {
    border-bottom: 2px solid white !important;
}

.nav-bar-container {
    width: 100%;
    /* position: absolute; */
    position: fixed;
    /* background: rgba(0, 0, 0, 0.513); */
    background: linear-gradient(180deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%);
}
.nav-bar {
    position: relative;

    padding: 1.5rem;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.left {
    display: flex;
    flex-direction: row;
    align-items: center;

}

.right {
    position: relative;
    display: flex;
    flex-direction: row;
    gap: 2rem;
    align-items: center;
}

button{
    background-color: var(--primary-color);
}

.nav-toggle {
  color: white;
  background: linear-gradient(180deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%);
  padding: 1rem;
  display: none;
}

@media only screen and (max-width: 600px) {
    .nav-toggle {
      display: flex;
      flex-direction: row;
      overflow: hidden;
      justify-content: space-between;

    }
    .nav-bar {
        display: none;
    }
}
</style>