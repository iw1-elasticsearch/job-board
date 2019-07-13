<template>
  <div>
    <Header></Header>
    <div class="w-128 mx-auto py-4">
      <SearchInput/>
      <Filters/>
      <Results :offers="offers"/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import SearchInput from './components/SearchInput'
import Filters from './components/Filters'
import Results from './components/Results'

export default {
  name: 'app',
  components: {
    Header,
    SearchInput,
    Filters,
    Results
  },
  data(){
    return {
      offers: []
    }
  },
  mounted() {
    this.fetchOffers();
  },
  methods: {
    fetchOffers() {
      fetch('http://localhost:9200/job_board/_search', {
        method: 'POST',
        body: JSON.stringify(
          {
            "query": {
              "multi_match": {
                "query": "développeur",
                "fields": ["title", "description"]
              }
            }
        }),
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(res => res.json())
      .then(data => {
        this.offers = data.hits.hits.map(offer => offer._source);
      })
      .catch(error => error)
    }
  }
}
</script>

<style>
  @import 'output.css';
  * {
    font-family: 'Nunito Sans', sans-serif;
  }
</style>
