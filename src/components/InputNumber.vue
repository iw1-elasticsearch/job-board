<template>
    <input type="number" class="bg-gray-300 p-2 rounded" :min="min" :max="max" v-model="value">
</template>

<script>
  export default {
    name: "InputNumber",
    props: {
      min: Number,
      max: Number
    },
    data(){
      return {
        value: this.min
      }
    }
  }
</script>