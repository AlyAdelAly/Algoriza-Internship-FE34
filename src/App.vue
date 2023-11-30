<template>
  <div>
    <Navbar />

    <router-view />

    <Footer />
  </div>
</template>

<script setup>
import Navbar from "./components/Layout/Navbar.vue"
import Footer from "./components/Layout/Footer.vue"

</script>

