<template>
  <div>
    <Header></Header>
    <div class="w-128 mx-auto py-4">
      <SearchInput/>
      <Filters/>
      <Facets/>
      <Results :offers="offers"/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import SearchInput from './components/SearchInput'
import Filters from './components/Filters'
import Results from './components/Results'
import Facets from './components/Facets'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
    Header,
    SearchInput,
    Filters,
    Results,
    Facets
  },
  computed: {
    ...mapState([
      'offers'
    ])
  },
  mounted() {
    this.fetchOffers();
  },
  methods: {
    ...mapActions([
      'fetchOffers'
    ])
  }
}
</script>

<style>
  @import 'output.css';
  * {
    font-family: 'Nunito Sans', sans-serif;
  }
</style>
