<template>
    <textarea name="" id="" cols="30" rows="6" class="bg-gray-200 p-3" :placeholder="placeholder" v-model="value">

    </textarea>
</template>

<script>
  export default {
    name: "TextArea",
    props: {
      placeholder: String
    },
    data(){
      return {
        value: ''
      }
    }
  }
</script>