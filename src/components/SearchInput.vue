<template>
    <input type="text" placeholder="Rechercher un job !"
           class="w-full bg-gray-200 rounded p-4" v-model="value" @change.prevent="setQuery(value)">
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    name: "SearchInput",
    data() {
      return {
        value: "",
      }
    },
    methods: {
      ...mapActions(['setQuery'])
    }
  }
</script>