<template>
  <div>
    <Header></Header>
    <div class="flex py-10 justify-center">
      <div class="w-1/3">
        <div class="flex justify-end mr-8">
          <Facets/>
        </div>
      </div>
      <div class="w-3/5">
        <div class="w-128">
          <SearchInput/>
<!--          <Filters/>-->
          <Results :offers="offers"/>
        </div>
      </div>
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
