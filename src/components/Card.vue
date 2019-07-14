<template>
    <div class="my-6">
        <div class="w-full rounded shadow-lg">
            <div class="flex items-center justify-center flex-col p-3 bg-green-300 rounded-t">
                <p class="text-green-900 font-bold text-2xl">{{ offer.company }}</p>
                <p class="text-green-800 font-semibold text-lg">{{ offer.title }}</p>
                <p class="text-green-700 font-semibold">{{ offer.salary }} €</p>
            </div>
            <div class="p-4 w-4/5 mx-auto text-gray-600">
                <p class="font-semibold text-lg text-center mb-4 text-gray-800">{{ offer.contract }} • {{ offer.job_title }} • {{ offer.city }}</p>
                <div class="flex items-center justify-center mb-4">
                    <Tag v-for="(skill, index) in offer.skills" :key="index" :name="skill"/>
                </div>
                <div class="flex justify-center">
                    <button class="text-green-900 text-sm" @click.prevent="showInfos = !showInfos">
                        Plus d'informations
                    </button>
                </div>
                <div v-if="showInfos" class="mt-4">
                    <div class="flex flex-col justify-center items-center mb-3">
                        <p class="mr-2"> <span class="font-bold">{{ offer.nb_employees }}</span> employés</p>
                        <p>Débute le {{ offer.start_date }}</p>
                    </div>
                    <p class="text-center">{{ offer.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import Tag from './Tag'
  export default {
    components: {
      Tag
    },
    name: "Card",
    props: {
        offer: Object
    },
    data() {
      return {
        skills: [],
        showInfos: false
      }
    }
  }
</script>

<style scoped>

</style>