<template>
    <select name="" id="" class="bg-gray-300 p-2 rounded" v-model="value" @change.prevent="fetchOffersByFilter([name, value])">
        <option :value="option" :key="index" v-for="(option, index) in options">{{ option }}</option>
    </select>
</template>

<script>
  import {mapActions} from "vuex";

  export default {
    name: "Select",
    props: {
      options: Array,
      name: String,
    },
    data() {
      return {
        value: ''
      }
    },
    methods: {
      ...mapActions(['fetchOffersByFilter'])
    }
  }
</script>

<style scoped>

</style>