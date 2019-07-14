import Vue from 'vue'
import Vuex from 'vuex';
import { fetchGet } from "./helpers/fetchHelper";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    offers: [],
    query: '',
    filterTerms: [],
    filterRanges: [
      { "range": { "salary": { "gte": 30000, "lte": 60000 } } },
      { "range": { "nb_employees": { "gte": 10, "lte": 500 } } },
    ],
  },
  getters: {
    countOffers: state => state.offers.length,
    offers: state => state.offers,
    query: state => state.query,
    filterTerms: state => state.filterTerms,
    filterRanges: state => state.filterRanges
  },
  mutations: {
    setOffers(state, offers) {
      state.offers = offers
    },
    setQuery(state, query) {
      state.query = query;
    },
    setFilterTerms(state, {term, value}){
      state.filterTerms = state.filterTerms.filter((filter) => {
        return !(`${term}.keyword` in filter.term);
      });
      if(value === ""){
        return;
      }
      const newTerm = {term : { [`${term}.keyword`]: value } };
      state.filterTerms = [ ...state.filterTerms, newTerm ]
    },
    setFilterRanges(state, {name, from, to}){
      state.filterRanges.forEach(filter => {
        if(name in filter.range){
          filter.range[name]['gte'] = from;
          filter.range[name]['lte'] = to;
        }
      });
    }
  },
  actions: {
    fetchOffers({commit, state}) {
      let body =
      {
        "query": {
          "bool": {
            "must": {
              "match_all": {}
            },
            "filter": [
              ...state.filterRanges
            ]
          }
        }
      };
      if(state.query !== ""){
        delete body.query.bool.must.match_all;
        body.query.bool.must.multi_match = {
          "query": state.query,
          "fields": ["title", "description", "company", "job_title", "skills", "contract"]
        }
      }
      if(Object.entries(state.filterTerms).length > 0){
        body.query.bool.filter = [...body.query.bool.filter, state.filterTerms];
      }
      console.log(JSON.stringify(body, null, 2));
      fetchGet(body)
      .then(data => {
        const offers = data.hits.hits.map(offer => offer._source);
        commit('setOffers', offers);
      })
      .catch(error => error)
    },
    setQuery({commit, dispatch}, query){
      commit('setQuery', query);
      dispatch('fetchOffers');
    },
    setFilterTerms({commit, dispatch}, payload){
      commit('setFilterTerms', payload);
      dispatch('fetchOffers');
    },
    setFilterRanges({commit, dispatch}, payload){
      commit('setFilterRanges', payload);
      dispatch('fetchOffers')
    }
  }
});

