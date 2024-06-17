<script setup>
import Navbar from "./components/Navbar.vue";
import CountriesList from "./components/CountriesList.vue";
</script>

<template>
  <header>
    <Navbar />
  </header>

  <main>
    <div class="container">
      <div class="row">
        <CountriesList />
        <router-view />
      </div>
    </div>
  </main>
</template>

<style scoped></style>
