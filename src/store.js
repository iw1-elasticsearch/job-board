import Vue from 'vue'
import Vuex from 'vuex';
import { fetchGet } from "./helpers/fetchHelper";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    offers: [],
    query: '',
    filterTerms: {}
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
  },
  actions: {
    fetchOffers({commit}) {
      fetchGet({
        "query": {
          "bool": {
            "must": {
              "match_all": {}
            }
          }
        }
      })
      .then(data => {
        const offers = data.hits.hits.map(offer => offer._source);
        commit('setOffers', offers);
      })
      .catch(error => error)
    },
    fetchOffersByQuery({dispatch, commit}, query){
      if(query === ""){
        dispatch('fetchOffers');
        return
      }
      fetchGet({
        "query": {
          "bool": {
            "must": {
              "multi_match": {
                "query": query,
                "fields": ["title", "description", "company", "job_title", "skills", "contract"]
              }
            }
          }
        }
      })
      .then(data => {
        const offers = data.hits.hits.map(offer => offer._source);
        commit('setOffers', offers);
      })
      .catch(error => error)
    },
    fetchOffersByFilter({ commit }, [term, value]) {
      console.log(JSON.stringify({
        "query": {
          "bool": {
            "filter": {
              "term": {
                [`${term}.keyword`]: value,
              }
            }
          }
        }
      }));
      fetchGet({
        "query": {
          "bool": {
            "filter": {
              "term": {
                [`${term}.keyword`]: value,
              }
            }
          }
        }
      })
      .then(data => {
        const offers = data.hits.hits.map(offer => offer._source);
        commit('setOffers', offers);
      })
      .catch(error => error)
    }
  }
});

