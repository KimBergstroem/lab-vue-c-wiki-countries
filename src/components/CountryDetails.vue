<template>
  <div v-if="country" class="col-7">
    <img
      :src="`https://flagpedia.net/data/flags/icon/72x54/${country.cca2.toLowerCase()}.png`"
      alt="country flag"
      style="width: 300px" />
    <h1>{{ country.name.common }}</h1>
    <table class="table">
      <tbody>
        <tr>
          <td style="width: 30%">Capital</td>
          <td>{{ country.capital[0] }}</td>
        </tr>
        <tr>
          <td>Area</td>
          <td>{{ country.area }} km<sup>2</sup></td>
        </tr>
        <tr>
          <td>Borders</td>
          <td>
            <ul>
              <li v-for="border in country.borders" :key="border">
                <RouterLink :to="`/country/${border}`">{{ border }}</RouterLink>
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useCountriesStore } from "../store/countries";

const countriesStore = useCountriesStore();
const route = useRoute();
const country = ref(null);

// Watch the route parameter directly and update the country data
watch(
  () => route.params.alpha3Code,
  (newAlpha3Code) => {
    countriesStore.fetchCountry(newAlpha3Code);
  }
);

// Watch for changes in the country data from the store
watch(
  () => countriesStore.country,
  (newCountry) => {
    country.value = newCountry;
  }
);

// Fetch initial country data on component mount
onMounted(() => {
  countriesStore.fetchCountry(route.params.alpha3Code);
});
</script>

<style scoped></style>
