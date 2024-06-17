import { defineStore } from "pinia";

export const useCountriesStore = defineStore({
  id: "countries",
  state: () => ({
    countries: [],
    error: null,
    country: null,
  }),
  actions: {
    // Fetching all Countries from the API to be displayed
    async fetchCountries() {
      try {
        const response = await fetch(
          "https://ih-countries-api.herokuapp.com/countries"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        this.countries = data;
      } catch (error) {
        this.error = error.message;
        console.error("Error fetching countries:", error);
      }
    },
    // Fetching a single Country from the API to be displayed with help from the aplpha3Code
    async fetchCountry(alpha3Code) {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/alpha/${alpha3Code}`
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        this.country = data[0]; // Data[0] contains the country details of each country
      } catch (error) {
        this.error = error.message;
        console.log(error);
      }
    },
  },
});
