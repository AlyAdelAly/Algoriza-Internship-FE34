<template>
  <footer v-if="showFooter" class="text-gray-900 mt-32">
    <div
      class="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10"
    >
      <section>
        <div class="flex text-lg font-bold">
          <img
            src="../assets/Icons/bxs-plane-alt 1.svg"
            alt="logo icon"
            class="pr-2"
          />
          My Dream Place
        </div>
        <p class="text-gray pl-8">Your next goto companion for travel</p>
      </section>

      <section>
        <div class="text-black text-lg font-bold mb-2">Company</div>
        <ul class="flex flex-col space-y-2 text-gray">
          <li class="pt-4">About</li>
          <li>Jobs</li>
          <li>Newsroom</li>
          <li>Advertising</li>
          <li>Contact Us</li>
        </ul>
      </section>

      <section>
        <div class="text-black text-lg font-bold mb-2">Explore</div>
        <ul class="flex flex-col space-y-2 text-gray">
          <li class="pt-4">Australia</li>
          <li>New Zealand</li>
          <li>United States America (USA)</li>
          <li>Greece</li>
          <li>Maldives</li>
          <li>Singapore</li>
          <li class="text-light-blue">See more</li>
        </ul>
      </section>

      <section>
        <div class="text-black text-lg font-bold mb-2">Terms and Policies</div>
        <ul class="flex flex-col space-y-2 text-gray">
          <li class="pt-4">Privacy Policy</li>
          <li>Terms of use</li>
          <li>Acessibility</li>
          <li>Reward system policy</li>
        </ul>
      </section>

      <section>
        <div class="text-black text-lg font-bold mb-2">Help</div>
        <ul class="flex flex-col space-y-2 text-gray">
          <li class="pt-4">Support</li>
          <li>Cancel Your bookings</li>
          <li>Use Coupons</li>
          <li>Refund Policies</li>
          <li>International Travel Documents</li>
        </ul>
      </section>
    </div>

    <div class="bg-light-gray h-10 mt-20 p-1">
      <div class="pr-56 flex justify-end items-center">
        <img
          src="../assets/Icons/copyright 1.svg"
          alt="copyright icon"
          class="pr-2 w-8 h-8"
        />
        <p class="text-gray">My Dream Place 2022</p>
      </div>
    </div>
  </footer>
</template> 

<script setup>
import { computed } from "vue"
import { useRoute } from 'vue-router'

const currentRoute = useRoute()

const showFooter = computed(() => {
  return currentRoute.name !== "Login"
})
</script>