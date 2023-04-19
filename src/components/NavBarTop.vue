<template>
    <div class="nav-bar-container">
        <div class="nav-toggle">
            <div class="right">
                <a href="/">Julia Zasada Fotografie & Design</a>
            </div>
            <div class="left">
                <button @click="expandMenu()" id="nav-toggle-btn"><font-awesome-icon icon="fa-solid fa-bars" /></button>
            </div>
        </div>
        <div v-if="expandedMenu" id="menu-expand">
            <button class="nav-item" @click="scrollToElement($event)" :class="setElementActive('home')" id="home">Home</button>
            <button class="nav-item" @click="scrollToElement($event)" :class="setElementActive('termine')" id="termine">Termine</button>
            <button class="nav-item" @click="scrollToElement($event)" :class="setElementActive('kontakt')" id="kontakt">Kontakt</button>
            <button class="nav-item" @click="scrollToElement($event)" :class="setElementActive('leistungen')" id="leistungen">Meine Leistungen</button>
            <router-link to="/buchen" class="btn"><font-awesome-icon icon="fa-solid fa-calendar-check" /> Jetzt Buchen</router-link>
        </div>

        <nav class="nav-bar">
            <div class="left">
                <a href="#">Julia Zasada Fotografie & Design</a>
            </div>
            <div class="right">
                <button class="nav-item" @click="scrollToElement($event)" :class="setElementActive('home')" id="home">Home</button>
                <button class="nav-item" @click="scrollToElement($event)" :class="setElementActive('termine')" id="termine">Termine</button>
                <button class="nav-item" @click="scrollToElement($event)" :class="setElementActive('kontakt')" id="kontakt">Kontakt</button>
                <button class="nav-item" @click="scrollToElement($event)" :class="setElementActive('leistungen')" id="leistungen">Meine Leistungen</button>
                <router-link to="/buchen" class="btn"><font-awesome-icon icon="fa-solid fa-calendar-check" /> Jetzt Buchen</router-link>
            </div>
        </nav>
    </div> 
</template>

<script>
export default {
    data() {
        return {
            active: "home",
            expandedMenu: false
        }
    },
    methods: {
        setElementActive(id) {
            console.log(this.active, id)
            if(id == this.active) {
                return "active"
            } else {

                return "inactive"
            }
        },
        scrollToElement(event) {
            // Hide Toggled Menu
            this.expandedMenu = false
            var id = event["target"].id
            this.active = id

            this.$emit('id', id);
        },
        expandMenu() {
            this.expandedMenu = !this.expandedMenu
        }
    }
}
</script>

<style scoped>
@import '../assets/styles.css';

.nav-bar-container {
    z-index: 999999999;
}

a {
    text-decoration: none;
    color: white;
}

.active {
    border-bottom: 3px solid white !important;
}

.nav-toggle {
  color: white;
  background: linear-gradient(180deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%);
  padding: 1rem;
  display: none;
}

#menu-expand {
    display: flex;
    z-index: 999999;
    border-radius: 12px;
    flex-direction: column;
    justify-items: flex-end;
    gap: 3rem;
    align-items: center;
    background: rgba(22, 22, 22, 0.95);
    padding: 1rem;
}

#nav-toggle-btn {
    padding: .5rem;
    font-size: 24px;
    color: white;
    border: none;
    background: transparent;
    
}

@media only screen and (max-width: 700px) {
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