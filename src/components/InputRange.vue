<template>
    <div class="flex flex-col">
        <input type="range" :min="min" :max="max" :step="step" v-model="from">
        <input type="range" :min="min" :max="max" :step="step" v-model="to">
        <span>De {{ from }} à {{ to }}</span>
    </div>
</template>

<script>
  export default {
    name: "InputRange",
    props: {
      min: Number,
      max: Number,
      step: Number,
    },
    data() {
      return {
        from: this.max/2,
        to: this.max/2
      }
    }
  }
</script>

<style scoped>

</style>