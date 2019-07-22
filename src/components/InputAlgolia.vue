<template>
    <input id="address-input" class="bg-gray-300 p-2 rounded" type="text" :placeholder="placeholder" @change="log">
</template>

<script>
  import places from 'places.js';
  import {apiKey, appId} from "../algolia_api_keys"
  
  export default {
    name: "InputAlgolia",
    props: {
      placeholder: String,
      value: String,
      geo: Object
    },
    data() {
      return {
        localValue: '',
      }
    },
    mounted() {
      const fixedOptions = {
        appId,
        apiKey,
        container: document.querySelector('#address-input'),
      };
      const reconfigurableOptions = {
        language: 'fr',
        countries: 'fr',
        aroundLatLngViaIP: true
      };
      places(fixedOptions).configure(reconfigurableOptions);
    },
    methods: {
      log(e) {
        const url = new URL('https://places-dsn.algolia.net/1/places/query');
        const params = {query: e.target.value};
        url.search = new URLSearchParams(params);
        fetch(url, {
          method: 'GET',
          headers: {
            'X-Algolia-Application-Id': appId,
            'X-Algolia-API-Key': apiKey
          }
        })
        .then(res => res.json())
        .then(data => {
          const { lat, lng } = data.hits[0]._geoloc;
          this.$emit('update:geo', {lat: lat, lon: lng} );
          this.$emit('update:value', e.target.value)
        });
      }
    }
  }
</script>