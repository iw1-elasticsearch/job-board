<template>
    <input type="date" class="bg-gray-300 p-2" v-model="localValue" @change="onChange">
</template>

<script>
  export default {
    name: "InputDate",
    props: {
      value: String
    },
    data() {
      return {
        localValue: this.value
      }
    },
    methods: {
      onChange(e){
        this.$emit('update:value', e.target.value)
      }
    }
  }
</script>

<style scoped>

</style>