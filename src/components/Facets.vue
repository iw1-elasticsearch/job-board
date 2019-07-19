<template>
    <div>
        <div v-for="(properties, name) in fields" :key="name">
            <p>{{ name }}</p>
            <p v-for="property in properties.buckets">
                {{ property.key }}, <strong>{{ property.doc_count }}</strong>
            </p>

        </div>
        <button @click.prevent="getAggregations">CLICK</button>
    </div>
</template>

<script>
  import {fetchGet} from '../helpers/fetchHelper'
  export default {
    name: "Facets",
    data(){
      return {
        fields: []
      }
    },
    methods: {
      getAggregations() {
        fetchGet({
          "aggs": {
            "price_ranges": {
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
