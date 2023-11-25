<template>
    <section class="mt-10">
      <div>
        <h2 class="text-black text-3xl font-semibold">
          Get inspiration for your next trip
        </h2>
      </div>
      <div
        class="mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8"
      >
      <div v-for="trip in props.trips" :key="`${trip.title}`">
            <HomeTripItem :trip="trip" />
        </div>
      </div>
    </section>
</template>

<script setup>
import HomeTripItem from './HomeTripItem.vue';

const props = defineProps({
    trips: Array,
})
</script>