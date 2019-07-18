<template>
    <div>
        <h1 class="text-green-500 font-bold text-2xl my-6">{{countOffers}} {{result}}</h1>
        <button id="show-modal" class="bg-green-300 rounded text-green-900 p-2 font-semibold" @click="showModal = true">
            Ajouter une annonce
        </button>
        <modal v-if="showModal">
            <div slot="body">
                <OfferForm @close="showModal = false"/>
            </div>
            <p class="text-xl text-green-500 font-bold" slot="header">Ajouter une annonce</p>
        </modal>
        <Card v-for="(offer, index) in offers" :key="index" :offer="offer"></Card>
    </div>
</template>

<script>
  import {mapGetters} from "vuex";
  import Modal from './Modal'
  import OfferForm from './OfferForm'

  import Card from './Card'
  export default {
    components: {
      Card,
      Modal,
      OfferForm
    },
    name: "Results",
    data(){
      return {
        showModal: false
      }
    },
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