<template>
    <div class="bg-green-200 text-green-900 rounded-lg px-6 mx-2 py-2 text-sm">{{ name }}</div>
</template>

<script>
  export default {
    name: "Tag",
    props: {
      name: String
    }
  }
</script>