<template>
    <div class="flex flex-col">
        <input class="py-1" type="range" :min="min" :max="max" :step="step" v-model="from" @change="onChange">
        <input class="py-1" type="range" :min="min" :max="max" :step="step" v-model="to" @change="onChange">
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
      name: String
    },
    data() {
      return {
        from: this.min,
        to: this.max
      }
    },
    methods: {
      onChange(){
        this.$emit('filter', {name: this.name, from: this.from, to: this.to})
      }
    }
  }
</script>

<style scoped>

</style>