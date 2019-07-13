<template>
    <input type="text" placeholder="Rechercher un job !"
           class="w-full bg-gray-200 rounded p-4" v-model="text">
</template>

<script>
  export default {
    name: "SearchInput",
    data() {
      return {
        text: ""
      }
    }
  }

</script>

<style scoped>

</style>