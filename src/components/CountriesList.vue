<template>
  <!-- Countries List -->
  <div class="col-5" style="max-height: 90vh; overflow: scroll">
    <div v-if="error" class="alert alert-danger">{{ error }}</div>
    <div class="list-group" v-else>
      <RouterLink
        v-for="country in countries"
        :key="country.alpha3Code"
        class="list-group-item list-group-item-action"
        :to="`/country/${country.alpha3Code}`">
        <img
          :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`" />
        <p>{{ country.name.common }}</p>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useCountriesStore } from "../store/countries";

const countriesStore = useCountriesStore();

const countries = ref(countriesStore.countries);
const error = ref(countriesStore.error);

onMounted(() => {
  countriesStore.fetchCountries();
});
</script>

<style scoped>
/* Scoped styles */
</style>
