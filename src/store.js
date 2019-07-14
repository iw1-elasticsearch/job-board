import Vue from 'vue'
import Vuex from 'vuex';
import { fetchGet } from "./helpers/fetchHelper";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    offers: [],
    query: '',
    filterTerms: []
  },
  getters: {
    offers: state => state.offers,
    query: state => state.query,
    filterTerms: state => state.filterTerms,
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
            }
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
        body.query.bool.filter = [state.filterTerms];
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
    
    
    //
    // fetchOffersByQuery({dispatch, commit}, query){
    //   if(query === ""){
    //     dispatch('fetchOffers');
    //     return
    //   }
    //   let body = {
    //     "query": {
    //       "bool": {
    //         "must": {
    //           "multi_match": {
    //             "query": query,
    //             "fields": ["title", "description", "company", "job_title", "skills", "contract"]
    //           }
    //         }
    //       }
    //     }
    //   };
    //   fetchGet(body)
    //   .then(data => {
    //     const offers = data.hits.hits.map(offer => offer._source);
    //     commit('setOffers', offers);
    //   })
    //   .catch(error => error)
    // },
    // fetchOffersByFilter({ commit }, [term, value]) {
    //   console.log(JSON.stringify({
    //     "query": {
    //       "bool": {
    //         "filter": {
    //           "term": {
    //             [`${term}.keyword`]: value,
    //           }
    //         }
    //       }
    //     }
    //   }));
    //   fetchGet({
    //     "query": {
    //       "bool": {
    //         "filter": {
    //           "term": {
    //             [`${term}.keyword`]: value,
    //           }
    //         }
    //       }
    //     }
    //   })
    //   .then(data => {
    //     const offers = data.hits.hits.map(offer => offer._source);
    //     commit('setOffers', offers);
    //   })
    //   .catch(error => error)
    // }
  }
});

