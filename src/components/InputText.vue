<template>
        <input type="text" class="bg-gray-300 p-2 rounded" :placeholder="placeholder">
</template>

<script>
  export default {
    name: "Input",
    props: {
      placeholder: String
    }
  }
</script>

<style scoped>

</style>