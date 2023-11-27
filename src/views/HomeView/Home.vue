<template>
  <main class="container mx-auto">
    <HeroLanding />

    <section class="relative -top-8">
        <Search />
    </section>

    <AlertMessage class="mt-10" />

    <HomeCards
      :heading="'Enjoy your dream vacation'"
      :description="`Plan and book our perfect trip with expert advice, travel tips, destination information and inspiration from us`"
      :cards="CountriesData"
    />

    <HomeTrips :trips="TripsData" />

    <HomeCards :heading="'Popular hotels'" :cards="HotelsData" />

    <HomeFinalBackgroundImage />

    <section class="mt-14">
      <div class="flex flex-col justify-center text-center">
        <h2 class="text-3xl font-bold">
          Explore the world with My Dream place
        </h2>
        <p class="text-sm pt-6 font-normal text-light-blue">
          Discover new places and experiences
        </p>
      </div>
    </section>
  </main>
</template>

<script setup>
import HeroLanding from "./HeroLanding.vue";
import Search from "../../components/Search/Search.vue";
import AlertMessage from "../../UI/AlertMessage.vue";
import HomeCards from "./HomeCards.vue";
import HomeTrips from "./HomeTrips.vue";
import HomeFinalBackgroundImage from "./HomeFinalBackgroundImage.vue";

import { ref } from "vue";

const CountriesData = ref([
  { name: "Australia", description: "2246 properties", img: "australia.png" },
  { name: "Japan", description: "1278 properties", img: "japan.png" },
  {
    name: "New Zeeland",
    description: "480 properties",
    img: "new zealand.png",
  },
  { name: "Greece", description: "320 properties", img: "greece.png" },
]);

const TripsData = ref([
  {
    title: "Sydeny’s 10 most fashionable 5 star hotels",
    description:
      "Browse the fastest growing tourism sector in the heart of Australia tourism capital ....",
    img: "trip1.png",
    alt: "Article 1",
  },
  {
    title: "Top cities for Vegan Travellers",
    description:
      "Top sites where you do not have to worry about being a vegan. Our tourist guide is here...",
    img: "trip2.png",
    alt: "Article 2",
  },
  {
    title: "New World’s top destinations during and post covid timeline",
    description:
      "Pandemic is still intact and will be here for a longer time. Here’s where your next destination...",
    img: "trip3.png",
    alt: "Article 3",
  },
]);

const HotelsData = ref([
  {
    name: "Lakeside Motel Warefront",
    description: "Lakeside Motel Warefront",
    img: "hotel1.png",
  },
  {
    name: "Recce Graham resort",
    description: "1278 properties",
    img: "hotel2.png",
  },
  {
    name: "Fireside Dinners",
    description: "480 properties",
    img: "hotel3.png",
  },
  {
    name: "Oculous Inn Stay",
    description: "320 properties",
    img: "hotel4.png",
  },
]);
</script>
