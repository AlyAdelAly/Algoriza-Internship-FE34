<template>
  <nav class="text-gray-900 p-4">
    <div class="container mx-auto flex items-center justify-between">
      <router-link to="/" class="flex">
        <img
          src="../assets/Icons/bxs-plane-alt 1.svg"
          alt="logo icon"
          class="pr-2"
        />
        <h2 class="text-lg font-medium" :class="{'text-white': $route.name === 'Hotel Results'}">
          My Dream Place
        </h2>
      </router-link>

      <div v-if="showNav">
        <ul class="flex-grow text-center">
          <li
            class="inline-block mx-4 hover:text-light-blue p-2 cursor-pointer"
            :class="{'text-white': $route.name === 'Hotel Results'}"
            v-for="link in links" :key="link"
          >
            {{ link }}
          </li>
        </ul>
      </div>

      <router-link :to="{name: 'Login'}">
        <button v-if="showLoginButton && !showUserAvatar" class="text-white bg-light-blue px-4 py-2 rounded-md">
          Login
        </button>
      </router-link>

      <div v-if="showLoginButton && showUserAvatar" class="flex items-center">
          <img src="../assets//Icons/notification 1.svg" alt="Notification" class="px-4"/>
          <img src="../assets//Icons/Ellipse 3.svg" alt="Ellipse" />
      </div>
    </div>
  </nav>
</template>
  
<script setup>
import { computed } from "vue"
import { useRoute } from 'vue-router'

const currentRoute = useRoute()
const links = ['Home', 'Discover', 'Activities', 'About', 'Contact']

const showNav = computed(() => {
  return currentRoute.name !== "Login"
})

const showLoginButton = computed(() => {
  return currentRoute.name !== "Login"
})

const showUserAvatar = computed(() => {
  return currentRoute.name === "Hotel Results"
})
</script>
  