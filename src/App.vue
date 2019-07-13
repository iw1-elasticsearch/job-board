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
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
    Header,
    SearchInput,
    Filters,
    Results
  },
  computed: {
    ...mapGetters([
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
