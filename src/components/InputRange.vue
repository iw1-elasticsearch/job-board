<template>
    <div class="flex flex-col">
        <input class="py-1" type="range" :min="min" :max="max" :step="step" v-model="from" @change="setFilterRanges({name, from, to})">
        <input class="py-1" type="range" :min="min" :max="max" :step="step" v-model="to" @change="setFilterRanges({name, from, to})">
        <span>De {{ from }} à {{ to }}</span>
    </div>
</template>

<script>
  import {mapActions} from "vuex";

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
      ...mapActions(['setFilterRanges'])
    }
  }
</script>

<style scoped>

</style>