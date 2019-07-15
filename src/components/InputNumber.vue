<template>
    <input type="number" class="bg-gray-300 p-2 rounded" :min="min" :max="max" v-model="localValue" @change="onChange">
</template>

<script>
  export default {
    name: "InputNumber",
    props: {
      min: Number,
      max: Number,
      value: Number,
    },
    data(){
      return {
        localValue: this.min
      }
    },
    methods: {
      onChange(e){
        this.$emit('update:value', e.target.value)
      }
    }
  }
</script>