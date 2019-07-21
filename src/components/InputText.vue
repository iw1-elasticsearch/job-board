<template>
    <input type="text" class="bg-gray-300 p-2 rounded" :placeholder="placeholder" @change="onChange" v-model="localValue">
</template>

<script>
  export default {
    name: "Input",
    props: {
      placeholder: String,
      value: String
    },
    data(){
      return {
        localValue: ''
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