<template>
    <div>
        <h1 class="text-green-500 font-bold text-2xl my-6" v-if="offers.length > 0">Résultats</h1>
        <Card v-for="(offer, index) in offers" :key="index" :offer="offer"></Card>
    </div>
</template>

<script>
  import Card from './Card'
  export default {
    components: {
      Card
    },
    name: "Results",
    props: {
      offers: Array
    }
  }
</script>