<template>
    <div class="bg-gray-100 border-green-500 border-t-4 mt-4 p-4 rounded-b shadow">
        <h1 class="text-green-500 font-bold text-xl mb-4">Filtres</h1>
        <div class="flex flex-wrap justify-between">
            <div class="w-1/2">
                <FormGroup :label-name="contract.label">
                    <Select :options="contract.options" :name="contract.name" @filter="setFilterTerms"/>
                </FormGroup>
            </div>
            <div class="w-1/2">
                <FormGroup :label-name="job_title.label">
                    <Select :options="job_title.options" :name="job_title.name" @filter="setFilterTerms"/>
                </FormGroup>
            </div>
            <div class="w-1/2">
                <FormGroup :label-name="city.label">
                    <Select :options="city.options" :name="city.name" @filter="setFilterTerms"/>
                </FormGroup>
            </div>
            <div class="w-1/2">
                <FormGroup label-name="Date de début">
                    <InputDate/>
                </FormGroup>
            </div>
            <div class="w-1/2">
                <FormGroup :label-name="nb_employees.label">
                    <InputRange :min="nb_employees.min" :max="nb_employees.max" :name="nb_employees.name" @filter="setFilterRanges"/>
                </FormGroup>
            </div>
            <div class="w-1/2">
                <FormGroup :label-name="salary.label">
                    <InputRange :min="salary.min" :max="salary.max" :step="salary.step" :name="salary.name" @filter="setFilterRanges"/>
                </FormGroup>
            </div>
        </div>
    </div>
</template>

<script>
  import FormGroup from './FormGroup'
  import Select from './Select'
  import InputDate from './InputDate'
  import InputRange from './InputRange'
  import {mapActions} from "vuex";

  export default {
    components: {
      FormGroup,
      Select,
      InputDate,
      InputRange
    },
    name: "Filters",
    data() {
      return {
        contract: {
          name: 'contract',
          label: "Type de contrat",
          options: ["CDI", "CDD", "Alternance"]
        },
        job_title: {
          name: 'job_title',
          label: "Poste",
          options: ["Développeur Back", "Développeur Front", "Développeur FullStack"]
        },
        city: {
          name: 'city',
          label: "Ville",
          options: ["Paris", "Marseille"]
        },
        nb_employees: {
          name: 'nb_employees',
          label: "Nombre d'employées",
          min: 10,
          max: 500,
          step: 50,
        },
        salary: {
          name: 'salary',
          label: "Salaire",
          min: 30000,
          max: 60000,
          step: 5000
        }
      }
    },
    methods: {
      ...mapActions(['setFilterTerms', 'setFilterRanges'])
    }
  }
</script>

<style scoped>

</style>