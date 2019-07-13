<template>
    <label for="" class="text-gray-900 font-semibold text-lg mb-2">{{ name }}</label>
</template>

<script>
  export default {
    name: "Label",
    props: {
      name: String
    }
  }
</script>