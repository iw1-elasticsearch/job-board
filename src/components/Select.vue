<template>
    <select name="" id="" class="bg-gray-300 p-2 rounded" v-model="value">
        <option :value="option" :key="index" v-for="(option, index) in options">{{ option }}</option>
    </select>
</template>

<script>
  export default {
    name: "Select",
    props: {
      options: Array
    },
    data() {
      return {
        value: ''
      }
    }
  }
</script>

<style scoped>

</style>