<template>
  <nav class="text-gray-900 p-4">
    <div class="container mx-auto flex items-center justify-between">
      <router-link to="/" class="flex">
        <img
          src="../assets/Icons/bxs-plane-alt 1.svg"
          alt="logo icon"
          class="pr-2"
        />
        <h2
          class="text-lg font-medium"
          :class="{ 'text-white': $route.name === 'Hotel Results' }"
        >
          My Dream Place
        </h2>
      </router-link>

      <div v-if="showNav">
        <ul class="flex-grow text-center">
          <li
            class="inline-block mx-4 p-2 cursor-pointer"
            :class="{ 'text-white': $route.name === 'Hotel Results' }"
            v-for="link in links"
            :key="link"
          >
            {{ link }}
          </li>
        </ul>
      </div>

      <div
        v-if="authStore.isAuthenticated && showAvatar"
        class="flex items-center"
      >
        <img
          src="../assets//Icons/notification 1.svg"
          alt="Notification"
          class="px-4"
        />
        <button @click="isLoggedOut">
          <img src="../assets//Icons/Ellipse 3.svg" alt="Ellipse" />
        </button>
      </div>

      <router-link
        :to="{ name: 'Login' }"
        v-else-if="!authStore.isAuthenticated && showLogin"
      >
        <DefaultButton :text="'Login'" class="px-4" />
      </router-link>
    </div>
  </nav>
</template>
  
<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "../stores/authStore";
import DefaultButton from "../UI/DefaultButton.vue";

const authStore = useAuthStore();
const route = useRoute();
const router = useRouter();
const links = ["Home", "Discover", "Activities", "About", "Contact"];

const showNav = computed(() => {
  return route.name !== "Login";
});

const showAvatar = computed(() => {
  return route.name !== "Login";
});

const showLogin = computed(() => {
  return route.name !== "Login";
});

const isLoggedOut = () => {
  authStore.signOut();
  router.push({ name: "Home" });
};
</script>
  