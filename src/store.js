import Vue from 'vue'
import Vuex from 'vuex';
import { fetchGet } from "./helpers/fetchHelper";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    offers: [],
    query: '',
    facets: [],
    filterTerms: [],
    filterRanges: [
      // { "range": { "salary": { "gte": 30000, "lte": 60000 } } },
      // { "range": { "nb_employees": { "gte": 10, "lte": 500 } } },
    ],
    aggs: {
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
            "field": "job_title.keyword",
            "min_doc_count": 0,
            "order": { "_key": "asc" }
          }
        },
        "contract": {
          "terms": {
            "field": "contract.keyword",
            "min_doc_count": 0,
            "order": { "_key": "asc" }
          }
        },
        "city": {
          "terms": {
            "field": "city.keyword",
            "min_doc_count": 0,
            "order": { "_key": "asc" }
          }
        }
      }
    },
  },
  getters: {
    countOffers: state => state.offers.length
  },
  mutations: {
    setOffers(state, offers) {
      state.offers = offers
    },
    setQuery(state, query) {
      state.query = query;
    },
    setFacets(state, facets) {
      state.facets = facets;
    },
    setFilterTerms(state, {term, value}){
      let isNew = true;
      let deletedIndex = null;
      state.filterTerms = state.filterTerms.map((filter, index) => {
        if(`${term}.keyword` in filter.terms ) {
          isNew = false;
          if(!filter.terms[`${term}.keyword`].includes(value)){
            filter.terms[`${term}.keyword`].push(value);
          } else {
            filter.terms[`${term}.keyword`] = filter.terms[`${term}.keyword`].filter(word => {
              return word !== value
            });
            if(filter.terms[`${term}.keyword`].length === 0){
              deletedIndex = index;
            }
          }
        }
        return filter;
      })
      .filter((filter, index) => index !== deletedIndex);
      if(true === isNew){
        const newTerm = {terms : { [`${term}.keyword`]: [value] } };
        state.filterTerms = [ ...state.filterTerms, newTerm ];
      }
    },
    setFilterRanges(state, {name, from, to}){
      // state.filterRanges.forEach(filter => {
      //   if(name in filter.range){
      //     filter.range[name]['gte'] = from;
      //     filter.range[name]['lte'] = to;
      //   }
      // });
      state.filterRanges.push({
        range: {
          [name]: {
            gte: from,
            lte: to
          }
        }
      })
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
              ...state.filterRanges,
              ...state.filterTerms,
            ]
          }
        },
        ...state.aggs
      };
      if(state.query !== ""){
        delete body.query.bool.must.match_all;
        body.query.bool.must.multi_match = {
          "query": state.query,
          "fields": ["title", "description", "company", "job_title", "skills", "contract"]
        }
      }
      console.log(JSON.stringify(body, null, 2));
      fetchGet(body)
      .then(data => {
        const offers = data.hits.hits.map(offer => offer._source);
        const facets = data.aggregations;
        commit('setOffers', offers);
        commit('setFacets', facets);
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

