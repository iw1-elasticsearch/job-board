<template>
    <div class="flex flex-col">
        <input class="py-1" type="range" :min="min" :max="max" :step="step" v-model="from">
        <input class="py-1" type="range" :min="min" :max="max" :step="step" v-model="to">
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
        from: this.min,
        to: this.max
      }
    }
  }
</script>

<style scoped>

</style>