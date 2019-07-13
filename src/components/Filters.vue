<template>
    <div class="bg-gray-100 border-green-500 border-t-4 mt-4 p-4 rounded-b shadow">
        <h1 class="text-green-500 font-bold text-xl mb-4">Filtres</h1>
        <div class="flex flex-wrap justify-between">
            <div class="w-1/2">
                <FormGroup :label-name="contracts.label">
                    <Select :options="contracts.options"/>
                </FormGroup>
            </div>
            <div class="w-1/2">
                <FormGroup :label-name="job.label">
                    <Select :options="job.options"/>
                </FormGroup>
            </div>
            <div class="w-1/2">
                <FormGroup :label-name="city.label">
                    <Select :options="city.options"/>
                </FormGroup>
            </div>
            <div class="w-1/2">
                <FormGroup :label-name="'Date de début'">
                    <InputDate/>
                </FormGroup>
            </div>
            <div class="w-1/2">
                <FormGroup :label-name="employees.label">
                    <InputRange :min="employees.min" :max="employees.max"/>
                </FormGroup>
            </div>
            <div class="w-1/2">
                <FormGroup :label-name="salaries.label">
                    <InputRange :min="salaries.min" :max="salaries.max" :step="salaries.step"/>
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
        contracts: {
          label: "Type de contrat",
          options: ["CDI", "CDD", "Alternance"]
        },
        job: {
          label: "Profession",
          options: ["Developpeur Back", "Développeur Front", "Développeur FullStack"]
        },
        city: {
          label: "Ville",
          options: ["Paris", "Marseille"]
        },
        employees: {
          label: "Nombre d'employées",
          min: 50,
          max: 250,
          step: 50,
        },
        salaries: {
          label: "Salaire",
          min: 30000,
          max: 60000,
          step: 5000
        }
      }
    }
  }
</script>

<style scoped>

</style>