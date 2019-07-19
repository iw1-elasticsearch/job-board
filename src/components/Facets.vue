<template>
    <div class="w-64">
        <div v-for="(properties, name) in fields" :key="name" class="mb-4">
            <p class="mb-2 uppercase text-gray-700 font-bold">{{ fieldsMap[name] }}</p>
            <p v-for="(property, index) in properties.buckets" :key="index"
               class="bg-gray-300 mb-2 p-2 rounded-lg text-gray-700"
            >
                <span class="font-semibold mr-2">{{ property.key }}</span> <strong class="bg-green-200 text-green-900 px-3 py-1 rounded">{{ property.doc_count }}</strong>
            </p>
        </div>
    </div>
</template>

<script>
  import {fetchGet} from '../helpers/fetchHelper'
  export default {
    name: "Facets",
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
    mounted(){
      this.getAggregations();
    },
    methods: {
      getAggregations() {
        fetchGet({
          "aggs": {
            "salary": {
              "range": {
                "field": "salary",
                "ranges": [
                  {
                    "from": 30000,
                    "to": 45000
                  },
                  {
                    "from": 45000,
                    "to": 60000
                  },
                  {
                    "from": 60000
                  }
                ]
              }
            },
            "nb_employees": {
              "range": {
                "field": "nb_employees",
                "ranges": [
                  {
                    "from": 10,
                    "to": 50
                  },
                  {
                    "from": 50,
                    "to": 200
                  },
                  {
                    "from": 200,
                    "to": 500
                  },
                  {
                    "from": 500
                  }
                ]
              }
            },
            "job_title": {
              "terms": {
                "field": "job_title.keyword"
              }
            },
            "contract": {
              "terms": {
                "field": "contract.keyword"
              }
            },
            "city": {
              "terms": {
                "field": "city.keyword"
              }
            }
          }
        }).then(data => {
          this.fields = data.aggregations;
        })
      }
    }
  }
</script>
