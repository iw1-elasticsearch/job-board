<template>
    <form @submit="submit">
        <div class="flex">
            <FormGroup :label-name="title.name" class="w-1/2">
                <InputText :placeholder="title.placeholder" :value.sync="title.value"/>
            </FormGroup>
            <FormGroup :label-name="contract.name" class="w-1/2">
                <Select :options="contract.options" :name="contract.name" :value.sync="contract.value"/>
            </FormGroup>
        </div>
        <div class="flex">
            <FormGroup :label-name="salary.name" class="w-1/2">
                <InputNumber :min="salary.min" :max="salary.max" :value.sync="salary.value"/>
            </FormGroup>
            <FormGroup :label-name="city.name" class="w-1/2" >
                <InputText :placeholder="city.placeholder" :value.sync="city.value"/>
            </FormGroup>
        </div>
        <div class="flex">
            <FormGroup :label-name="company.name" class="w-1/2">
                <InputText :placeholder="company.placeholder" :value.sync="company.value"/>
            </FormGroup>
            <FormGroup :label-name="nb_employees.name" class="w-1/2">
                <InputNumber :min="nb_employees.min" :max="nb_employees.max" :value.sync="nb_employees.value"/>
            </FormGroup>
        </div>
        <FormGroup :label-name="description.name" class="w-full">
            <TextArea :placeholder="description.placeholder" :value.sync="description.value"/>
        </FormGroup>
    </form>

</template>

<script>
  import FormGroup from './FormGroup'
  import InputText from './InputText'
  import InputNumber from './InputNumber'
  import Select from './Select'
  import TextArea from "./TextArea";

  export default {
    name: "OfferForm",
    components: {
      TextArea,
      FormGroup,
      InputText,
      InputNumber,
      Select,
    },
    data(){
      return {
        title: {
          name: 'Titre',
          placeholder: 'Développeur Web Paris CDI 35K',
          value: ''
        },
        contract: {
          name: 'Contrat',
          options: ['CDI', 'CDD', 'Alternance'],
          value: ''
        },
        salary: {
          name: 'Salaire',
          min: 30000,
          max: 60000,
          value: ''
        },
        nb_employees: {
          name: "Nombre d'employées",
          min: 10,
          max: 500,
          value: ''
        },
        company: {
          name: 'Entreprise',
          placeholder: 'EDF',
          value: ''
        },
        city: {
          name: 'Ville',
          placeholder: 'Paris',
          value: ''
        },
        description: {
          name: 'Description',
          placeholder: 'Votre description',
          value: ''
        }
      }
    },
    methods: {
      submit(){

      }
    }
  }
</script>

<style scoped>

</style>