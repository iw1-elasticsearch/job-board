<template>
    <select name="" id="" class="bg-gray-300 p-2 rounded" v-model="localValue"
            @change.prevent="onChange"
    >
        <option value=""></option>
        <option :value="option" :key="index" v-for="(option, index) in options">{{ option }}</option>
    </select>
</template>

<script>
  export default {
    name: "Select",
    props: {
      options: Array,
      name: String,
      value: String
    },
    data() {
      return {
        localValue: ''
      }
    },
    methods: {
      onChange(e){
        this.$emit('update:value', e.target.value);
        this.$emit('filter', {term: this.name, value: this.localValue})
      }
    }
  }
</script>