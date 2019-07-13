import Vue from 'vue'
import Vuex from 'vuex';
import { fetchGet } from "./helpers/fetchHelper";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    offers: []
  },
  getters: {
    offers: state => state.offers
  },
  mutations: {
    setOffers(state, payload){
      state.offers = payload
    }
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
    }
  }
});

