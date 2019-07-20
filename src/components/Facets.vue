<template>
    <div class="w-64">
        <div v-for="(properties, name) in facets" :key="name" class="mb-6">
            <p class="mb-2 uppercase text-gray-700 font-bold">{{ fieldsMap[name] }}</p>
            <FacetItem v-for="(property, index) in properties.buckets" :key="index" :property="property" :name="name" />
        </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import FacetItem from './FacetItem'
  export default {
    name: "Facets",
    components: {
      FacetItem
    },
    computed: {
      ...mapState(['facets'])
    },
    data(){
      return {
        fields: [],
        fieldsMap: {
          "salary": "salaire",
          "nb_employees": "Nombre d'employées",
          "job_title": "Poste",
          "contract": "Contrat",
          "city": "Ville"
        }
      }
    },
  }
</script>
