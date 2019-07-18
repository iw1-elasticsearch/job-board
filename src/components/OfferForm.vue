<template>
    <form @submit.prevent="submit">
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
        <div class="flex">
            <FormGroup :label-name="job_title.name" class="w-1/2">
                <Select :options="job_title.options" :name="job_title.name" :value.sync="job_title.value"/>
            </FormGroup>
            <FormGroup :label-name="start_date.name" class="w-1/2">
                <InputDate :value.sync="start_date.value"/>
            </FormGroup>
        </div>
        <FormGroup :label-name="skills.name" class="w-full">
            <InputText :placeholder="skills.placeholder" :value.sync="skills.value"/>
        </FormGroup>
        <FormGroup :label-name="description.name" class="w-full">
            <TextArea :placeholder="description.placeholder" :value.sync="description.value"/>
        </FormGroup>
        <div>
            <button type="submit" class="bg-green-200 text-green-900 font-bold p-2 mt-2 rounded mr-3">Envoyer</button>
            <button class="bg-gray-400 text-gray-900 font-bold p-2 mt-2 rounded" @click="closeModal">Retour</button>
        </div>
    </form>

</template>

<script>
  import FormGroup from './FormGroup'
  import InputText from './InputText'
  import InputNumber from './InputNumber'
  import Select from './Select'
  import TextArea from "./TextArea";
  import InputDate from "./InputDate";

  import { mapMutations, mapState } from "vuex";

  export default {
    name: "OfferForm",
    components: {
      TextArea,
      FormGroup,
      InputText,
      InputNumber,
      Select,
      InputDate
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
        },
        job_title: {
          name: 'Poste',
          options: ['Développeur Back', 'Développeur Front', 'Développeur FullStack'],
          value: ''
        },
        start_date: {
          name: 'Date de début',
          value: ''
        },
        skills: {
          name: 'Compétences',
          value: '',
          placeholder: 'PHP, JS, UX, UI'
        }
      }
    },
    computed: {
      ...mapState(['offers']),
    },
    methods: {
      ...mapMutations(['setOffers']),
      closeModal(){
        this.$emit('close');
      },
      submit(){
        const body = {
          title: this.title.value,
          contract: this.contract.value,
          company: this.company.value,
          nb_employees: this.nb_employees.value,
          city: this.city.value,
          salary: this.salary.value,
          job_title: this.job_title.value,
          skills: this.skills.value.split(',').map(skill => { skill.trim(); skill.toUpperCase(); return skill; })
        };
        fetch('http://localhost:9200/job_board/_doc', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        })
          .then(res => res.json())
          .then(data => {
            this.setOffers([...this.offers, body]);
            this.closeModal();
          })
      }
    }
  }
</script>

<style scoped>

</style>