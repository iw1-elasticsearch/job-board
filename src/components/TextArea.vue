<template>
    <textarea name="" id="" cols="30" rows="6" class="bg-gray-200 p-3" :placeholder="placeholder"
              v-model="localValue" @change="onChange">

    </textarea>
</template>

<script>
  export default {
    name: "TextArea",
    props: {
      placeholder: String,
      value: String,
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