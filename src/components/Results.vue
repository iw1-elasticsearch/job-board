<template>
    <div>
        <h1 class="text-green-500 font-bold text-2xl my-6">{{countOffers}} {{result}}</h1>
        <Card v-for="(offer, index) in offers" :key="index" :offer="offer"></Card>
    </div>
</template>

<script>
  import {mapGetters} from "vuex";

  import Card from './Card'
  export default {
    components: {
      Card
    },
    name: "Results",
    props: {
      offers: Array
    },
    computed: {
      ...mapGetters(['countOffers']),
      result(){
        return this.countOffers > 1 ? 'Résultats' : 'Résultat'
      }
    }
  }
</script>