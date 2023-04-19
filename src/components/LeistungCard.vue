<template>
  <div class="leistung-card-container">
    <div class="price">
        <div class="price-tag">
            <b>{{ price }} €</b>
            <s v-if="oldPrice != 0">{{ oldPrice }} €</s>
        </div>
        
    </div>
    <div class="leistung-title">
        <b>{{title}}</b>
    </div>
    <div class="leistung-body">
        <i>{{body}}</i>
    </div>
    <br>
    <u><router-link class="no-text-deco white" to="/404">Mehr ></router-link></u>
  </div>
</template>

<script>
export default {
    name: "LeistungCard",
    props: {
        title: String,
        body: String,
        price: Number,
        oldPrice: Number
    }
}
</script>

<style scoped>
.leistung-card-container {
    background-color: var(--primary-color);
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    border-radius: 8px;
    max-width: 230px;
    min-height: 180px;
    justify-content: space-between;

    transition: 0.2s ease-in-out;
}

.leistung-card-container:hover {
    transform: scale(1.03);
}

.leistung-title {
    color: black
}

.price {
    position: absolute;
}

.price-tag {
    position: relative;
    top: -40px;
    right: -150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    color: var(--primary-color);
    font-size: 18px;
    border-radius: 12px;
    text-align: center;
    padding: .3rem;
    min-width: 110px;
}

@media only screen and (max-width: 600px) {
    .leistung-card-container {
        max-width: 200px;
    }

    .price-tag {
        top: -60px;
        right: -150px;
    }
}


</style>