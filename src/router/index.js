// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import CountriesList from "../components/CountriesList.vue";
import CountryDetails from "../components/CountryDetails.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: CountriesList,
  },
  {
    path: "/country/:alpha3Code",
    name: "country-details",
    component: CountryDetails,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

export default router;
