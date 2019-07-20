<template>
    <div class="bg-gray-300 mb-2 p-2 rounded-lg text-gray-700 cursor-pointer flex items-center justify-between" @click.prevent="check">
        <div>
            <span class="font-semibold mr-2">{{ property.key }}</span>
            <strong class=" mr-2 bg-green-200 text-green-900 px-3 py-1 rounded">{{ property.doc_count }}</strong>
        </div>
        <div v-if="checked">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="checkmark"><rect width="24" height="24" opacity="0"/><path d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z"/></g></g></svg>
        </div>
    </div>
</template>

<script>
  export default {
    name: "FacetItem",
    data(){
      return {
        checked: false
      }
    },
    props: {
      property: Object,
      name: String
    },
    methods: {
      check: function() {
        let { from, to, key } = this.property;
        this.checked = !this.checked;
        if(from && to){
            this.$store.dispatch('setFilterRanges', {
              name: this.name,
              from: from,
              to: to,
            });
            return;
        }
        this.$store.dispatch('setFilterTerms', {
          term: this.name,
          value: key
        })
      }
    }
  }
</script>