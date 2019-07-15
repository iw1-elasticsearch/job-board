<template>
    <div>
        <div class="flex">
            <FormGroup :label-name="title.name" class="w-1/2">
                <InputText :placeholder="title.placeholder"/>
            </FormGroup>
            <FormGroup :label-name="contract.name" class="w-1/2">
                <Select :options="contract.options" :name="contract.name"/>
            </FormGroup>
        </div>
        <div class="flex">
            <FormGroup :label-name="salary.name" class="w-1/2">
                <InputNumber :min="salary.min" :max="salary.max"/>
            </FormGroup>
            <FormGroup :label-name="city.name" class="w-1/2">
                <InputText :placeholder="city.placeholder"/>
            </FormGroup>
        </div>
        <div class="flex">
            <FormGroup :label-name="company.name" class="w-1/2">
                <InputText :placeholder="company.placeholder"/>
            </FormGroup>
            <FormGroup :label-name="nb_employees.name" class="w-1/2">
                <InputNumber :min="nb_employees.min" :max="nb_employees.max"/>
            </FormGroup>
        </div>
        <FormGroup :label-name="description.name" class="w-full">
            <TextArea :placeholder="description.placeholder"/>
        </FormGroup>
    </div>

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
          placeholder: 'Développeur Web Paris CDI 35K'
        },
        contract: {
          name: 'Contrat',
          options: ['CDI', 'CDD', 'Alternance']
        },
        salary: {
          name: 'Salaire',
          min: 30000,
          max: 60000
        },
        nb_employees: {
          name: "Nombre d'employées",
          min: 10,
          max: 500
        },
        company: {
          name: 'Entreprise',
          placeholder: 'EDF'
        },
        city: {
          name: 'Ville',
          placeholder: 'Paris'
        },
        description: {
          name: 'Description',
          placeholder: 'Votre description'
        }
      }
    }
  }
</script>

<style scoped>

</style>